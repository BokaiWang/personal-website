import { z } from "zod";

export const ContactFormSchema = z.object({
  email: z.string().email().min(1, "Email is required"),
  message: z.string().min(1, "Message is required"),
});
