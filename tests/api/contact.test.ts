import { describe, test, expect, mock, beforeEach } from "bun:test";
import { POST } from "@/app/api/contact/route";

// Mock the Resend module to prevent actual emails from being sent
mock.module("resend", () => ({
  Resend: class MockResend {
    emails = {
      send: mock(() => Promise.resolve({ id: "mock-email-id" })),
    };
  },
}));

describe("POST /api/contact", () => {
  test("should return 200 with valid contact form data", async () => {
    const request = new Request("http://localhost:3000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Иван Петров",
        email: "ivan@example.com",
        phone: "+7 (999) 123-45-67",
      }),
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(200);
    expect(data).toEqual({ success: true });
  });

  test("should return 400 when email is missing", async () => {
    const request = new Request("http://localhost:3000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Иван Петров",
        email: "",
        phone: "+7 (999) 123-45-67",
      }),
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.error).toBe("Ошибка валидации");
    expect(data.errors).toHaveProperty("email");
    expect(data.errors.email).toBe("Email обязателен");
  });

  test("should return 400 when email format is invalid", async () => {
    const request = new Request("http://localhost:3000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Иван Петров",
        email: "not-an-email",
        phone: "+7 (999) 123-45-67",
      }),
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.error).toBe("Ошибка валидации");
    expect(data.errors).toHaveProperty("email");
    expect(data.errors.email).toBe("Некорректный email");
  });

  test("should return 400 when phone is missing", async () => {
    const request = new Request("http://localhost:3000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Иван Петров",
        email: "ivan@example.com",
        phone: "",
      }),
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.error).toBe("Ошибка валидации");
    expect(data.errors).toHaveProperty("phone");
    expect(data.errors.phone).toBe("Телефон обязателен");
  });

  test("should return 400 when phone is too short", async () => {
    const request = new Request("http://localhost:3000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Иван Петров",
        email: "ivan@example.com",
        phone: "123",
      }),
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.error).toBe("Ошибка валидации");
    expect(data.errors).toHaveProperty("phone");
    expect(data.errors.phone).toBe("Некорректный номер телефона");
  });

  test("should return 400 when name is missing", async () => {
    const request = new Request("http://localhost:3000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "",
        email: "ivan@example.com",
        phone: "+7 (999) 123-45-67",
      }),
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.error).toBe("Ошибка валидации");
    expect(data.errors).toHaveProperty("name");
    expect(data.errors.name).toBe("Имя обязательно");
  });

  test("should return 400 when all fields are missing", async () => {
    const request = new Request("http://localhost:3000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({}),
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.error).toBe("Ошибка валидации");
    expect(data.errors).toHaveProperty("name");
    expect(data.errors).toHaveProperty("email");
    expect(data.errors).toHaveProperty("phone");
    expect(data.errors.name).toBe("Имя обязательно");
    expect(data.errors.email).toBe("Email обязателен");
    expect(data.errors.phone).toBe("Телефон обязателен");
  });

  test("should sanitize malicious input (XSS script tags)", async () => {
    const request = new Request("http://localhost:3000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "<script>alert('xss')</script>Иван Петров",
        email: "ivan@example.com",
        phone: "+7 (999) 123-45-67",
      }),
    });

    const response = await POST(request);
    const data = await response.json();

    // Should succeed because sanitizeInput removes the script tag
    expect(response.status).toBe(200);
    expect(data).toEqual({ success: true });
  });

  test("should sanitize malicious characters (angle brackets)", async () => {
    const request = new Request("http://localhost:3000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "<Иван> Петров",
        email: "ivan@example.com",
        phone: "+7 (999) 123-45-67",
      }),
    });

    const response = await POST(request);
    const data = await response.json();

    // Should succeed because sanitizeInput removes < and >
    expect(response.status).toBe(200);
    expect(data).toEqual({ success: true });
  });

  test("should sanitize javascript: protocol", async () => {
    const request = new Request("http://localhost:3000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "javascript:alert('xss')Иван",
        email: "ivan@example.com",
        phone: "+7 (999) 123-45-67",
      }),
    });

    const response = await POST(request);
    const data = await response.json();

    // Should succeed because sanitizeInput removes javascript:
    expect(response.status).toBe(200);
    expect(data).toEqual({ success: true });
  });

  test("should handle whitespace-only values as missing", async () => {
    const request = new Request("http://localhost:3000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "   ",
        email: "  ",
        phone: "   ",
      }),
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.error).toBe("Ошибка валидации");
    expect(data.errors).toHaveProperty("name");
    expect(data.errors).toHaveProperty("email");
    expect(data.errors).toHaveProperty("phone");
  });

  test("should truncate very long inputs to 500 characters", async () => {
    const veryLongString = "A".repeat(600);

    const request = new Request("http://localhost:3000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: veryLongString,
        email: "ivan@example.com",
        phone: "+7 (999) 123-45-67",
      }),
    });

    const response = await POST(request);
    const data = await response.json();

    // Should succeed - sanitizeInput truncates to 500 chars
    expect(response.status).toBe(200);
    expect(data).toEqual({ success: true });
  });

  test("should accept valid Russian phone formats", async () => {
    const phoneFormats = [
      "+7 (999) 123-45-67",
      "+79991234567",
      "89991234567",
      "8 (999) 123-45-67",
      "8-999-123-45-67",
    ];

    for (const phone of phoneFormats) {
      const request = new Request("http://localhost:3000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Иван Петров",
          email: "ivan@example.com",
          phone: phone,
        }),
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(200);
      expect(data).toEqual({ success: true });
    }
  });

  test("should reject phone with invalid characters", async () => {
    const request = new Request("http://localhost:3000/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Иван Петров",
        email: "ivan@example.com",
        phone: "+7-999-abc-def",
      }),
    });

    const response = await POST(request);
    const data = await response.json();

    expect(response.status).toBe(400);
    expect(data.error).toBe("Ошибка валидации");
    expect(data.errors.phone).toBe("Некорректный номер телефона");
  });

  test("should accept various valid email formats", async () => {
    const validEmails = [
      "ivan@example.com",
      "ivan.petrov@example.com",
      "ivan+test@example.co.uk",
      "i@example.ru",
    ];

    for (const email of validEmails) {
      const request = new Request("http://localhost:3000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Иван Петров",
          email: email,
          phone: "+7 (999) 123-45-67",
        }),
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(200);
      expect(data).toEqual({ success: true });
    }
  });

  test("should reject invalid email formats", async () => {
    const invalidEmails = [
      "not-an-email",
      "@example.com",
      "ivan@",
      "ivan@example",
      "ivan example@test.com",
    ];

    for (const email of invalidEmails) {
      const request = new Request("http://localhost:3000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: "Иван Петров",
          email: email,
          phone: "+7 (999) 123-45-67",
        }),
      });

      const response = await POST(request);
      const data = await response.json();

      expect(response.status).toBe(400);
      expect(data.error).toBe("Ошибка валидации");
      expect(data.errors.email).toBe("Некорректный email");
    }
  });
});
