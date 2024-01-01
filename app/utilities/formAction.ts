import axios from "axios";
import { SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { ContactFormSchema } from "./validationSchema";

type FormData = z.infer<typeof ContactFormSchema>;

export const sendEmail: SubmitHandler<FormData> = async (data) => {
  const response = await axios.post("/api/send", data);
  return;
};
