export function sanitizeInput(input: string): string {
  if (typeof input !== "string") return "";

  return input
    .trim()
    .slice(0, 500)
    .replace(/[<>]/g, "")
    .replace(/javascript:/gi, "")
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "");
}

export function validateEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

export function validatePhone(phone: string): boolean {
  const re = /^[\d\s\+\-\(\)]+$/;
  const cleaned = phone.replace(/\D/g, "");
  return cleaned.length >= 10 && re.test(phone);
}

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
}

export function validateContactForm(data: unknown): {
  valid: boolean;
  errors?: Record<string, string>;
  data?: ContactFormData;
} {
  if (!data || typeof data !== "object") {
    return { valid: false, errors: { general: "Неверный формат данных" } };
  }

  const { name, email, phone } = data as ContactFormData;
  const errors: Record<string, string> = {};

  if (!name || !name.trim()) {
    errors.name = "Имя обязательно";
  }

  if (!email || !email.trim()) {
    errors.email = "Email обязателен";
  } else if (!validateEmail(email)) {
    errors.email = "Некорректный email";
  }

  if (!phone || !phone.trim()) {
    errors.phone = "Телефон обязателен";
  } else if (!validatePhone(phone)) {
    errors.phone = "Некорректный номер телефона";
  }

  if (Object.keys(errors).length > 0) {
    return { valid: false, errors };
  }

  return { valid: true, data: { name, email, phone } };
}
