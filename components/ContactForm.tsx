"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState("");

  const validateEmail = (email: string): boolean => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validatePhone = (phone: string): boolean => {
    const re = /^[\d\s\+\-\(\)]+$/;
    return phone.length >= 10 && re.test(phone);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Client-side validation
    const newErrors = {
      name: "",
      email: "",
      phone: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = "Пожалуйста, введите ваше имя";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Пожалуйста, введите ваш email";
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Пожалуйста, введите корректный email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Пожалуйста, введите ваш телефон";
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = "Пожалуйста, введите корректный номер телефона";
    }

    setErrors(newErrors);

    // Only proceed if validation passes
    if (newErrors.name || newErrors.email || newErrors.phone) {
      return;
    }

    // Submit to API
    try {
      setLoading(true);
      setApiError("");

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Ошибка отправки");
      }

      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "" });
      setTimeout(() => {
        setSubmitted(false);
      }, 5000);
    } catch (error) {
      setApiError(
        error instanceof Error
          ? error.message
          : "Ошибка подключения. Проверьте интернет и попробуйте снова.",
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-foreground mb-2"
        >
          Имя
        </label>
        <input
          type="text"
          id="name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full h-12 px-4 border border-gray-300 rounded-md focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-colors"
          placeholder="Ваше имя"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-600">{errors.name}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-foreground mb-2"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="w-full h-12 px-4 border border-gray-300 rounded-md focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-colors"
          placeholder="your@email.com"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-foreground mb-2"
        >
          Телефон
        </label>
        <input
          type="tel"
          id="phone"
          value={formData.phone}
          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          className="w-full h-12 px-4 border border-gray-300 rounded-md focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-colors"
          placeholder="+7 (XXX) XXX-XX-XX"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full h-12 px-6 bg-primary text-white font-medium rounded-md hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? "Отправка..." : submitted ? "Отправлено!" : "Отправить"}
      </button>

      {apiError && (
        <p className="text-sm text-red-600 text-center">{apiError}</p>
      )}

      {submitted && (
        <p className="text-sm text-green-600 text-center">
          Спасибо! Ваше сообщение получено.
        </p>
      )}
    </form>
  );
}
