import { Resend } from "resend";
import { AdminEmailTemplate } from "@/lib/email/templates";
import { sanitizeInput, validateContactForm } from "@/lib/email/validation";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const sanitized = {
      name: sanitizeInput(body.name),
      email: sanitizeInput(body.email),
      phone: sanitizeInput(body.phone),
    };

    const validation = validateContactForm(sanitized);
    if (!validation.valid) {
      return Response.json(
        { error: "Ошибка валидации", errors: validation.errors },
        { status: 400 },
      );
    }

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: process.env.ADMIN_EMAIL || "romanshtor@rambler.ru",
      subject: "Новая заявка с сайта",
      react: AdminEmailTemplate({
        name: validation.data!.name,
        email: validation.data!.email,
        phone: validation.data!.phone,
      }),
    });

    return Response.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json({ error: "Ошибка сервера" }, { status: 500 });
  }
}
