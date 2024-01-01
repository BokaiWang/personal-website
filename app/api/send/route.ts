import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import { ContactFormSchema } from "@/app/utilities/validationSchema";

const resend = new Resend(process.env.RESEND_API_KEY);

export const POST = async (request: NextRequest) => {
  const body = await request.json();

  const validation = ContactFormSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.format(), { status: 400 });
  }
  try {
    // TODO: Change it after production
    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "bk.wang1989@gmail.com",
      subject: `Mail from ${body.email}`,
      html: `<p>${body.message}!</p>`,
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(error, { status: 400 });
  }
};
