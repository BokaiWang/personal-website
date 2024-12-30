"use client";
import React, { useEffect } from "react";
import SectionHeader from "../_components/SectionHeader";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { ContactFormSchema } from "../utilities/validationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendEmail } from "../utilities/formAction";

type FormData = z.infer<typeof ContactFormSchema>;

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = useForm<FormData>({
    resolver: zodResolver(ContactFormSchema),
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ email: "", message: "" });
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <section id="contact" className="scroll-m-20 mx-auto w-full sm:w-2/5">
      <SectionHeader>Contact Me</SectionHeader>
      <p className="text-2xl leading-loose mb-10">
        Feel free to contact me directly at{" "}
        <a
          className="underline hover:text-brand-700"
          href="mailto:bk.wang1989@gmail.com"
        >
          bk.wang1989@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form
        onSubmit={handleSubmit(sendEmail)}
        autoComplete="off"
        className="flex flex-col gap-5 rounded-lg p-10 h-fit min-h-80 items-stretch bg-brand-200 dark:bg-darkMode-600"
      >
        <div>
          <input
            {...register("email")}
            placeholder="Your email..."
            className="bg-brand-300 w-full rounded-lg text-lg px-2 py-1 placeholder:text-brand-900 placeholder:opacity-50 focus:outline-brand-500 focus:border-none autofill:bg-brand-300 dark:placeholder:text-snow-500 dark:bg-darkMode-700 dark:focus:outline-brand-700"
          />
          <p className="text-rose-600 text-sm mt-1 px-2">
            {errors.email?.message}
          </p>
        </div>
        <div>
          <textarea
            {...register("message")}
            className="bg-brand-300 w-full rounded-lg text-lg mb-0 px-2 py-1 h-80 placeholder:text-brand-900 placeholder:opacity-50 focus:outline-brand-500 dark:placeholder:text-snow-500 dark:bg-darkMode-700 dark:focus:outline-brand-700"
            placeholder="Your message..."
          />
          <p className="text-rose-600 text-sm -mt-1 px-2">
            {errors.message?.message}
          </p>
        </div>
        <div className="flex gap-3">
          <button
            type="submit"
            className="px-4 rounded-full transition-colors text-lg bg-brand-500 hover:bg-brand-600 dark:bg-brand-800 dark:hover:bg-brand-700"
          >
            Submit
          </button>
          <button
            type="button"
            className="px-4 rounded-full text-lg border-2 border-brand-500 bg-brand-100 dark:bg-darkMode-600 dark:border-brand-800 dark:hover:bg-darkMode-400"
            onClick={() => reset({ message: "" })}
          >
            Clear
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
