"use client";
import React from "react";
import SectionHeader from "../_components/SectionHeader";
import { useForm, SubmitHandler } from "react-hook-form";

interface FormData {
  email: string;
  message: string;
}

const Contact = () => {
  const { register, handleSubmit } = useForm<FormData>();
  const submitHandler: SubmitHandler<FormData> = (data) => console.log(data);

  return (
    <section id="contact" className="scroll-m-20 mx-auto w-full sm:w-3/5">
      <SectionHeader>Contact Me</SectionHeader>
      <p className="text-2xl leading-loose mb-10">
        Please contact me directly at{" "}
        <a
          className="underline hover:text-brand-700"
          href="mailto:bk.wang1989@gmail.com"
        >
          bk.wang1989@gmail.com
        </a>{" "}
        or through this form.
      </p>
      <form
        onSubmit={handleSubmit(submitHandler)}
        autoComplete="off"
        className="flex flex-col gap-5 bg-brand-200 rounded-lg p-10 h-fit min-h-80"
      >
        <input
          {...register("email", { required: true })}
          placeholder="Your email..."
          className="bg-brand-300 rounded-lg text-lg px-2 py-1 placeholder:text-brand-900 placeholder:opacity-50 focus:outline-brand-500 focus:border-none autofill:bg-brand-300"
        />

        <textarea
          {...register("message", { required: true })}
          className="bg-brand-300 rounded-lg text-lg px-2 py-1 h-80 placeholder:text-brand-900 placeholder:opacity-50 focus:outline-brand-500"
          placeholder="Your message..."
        />
        <div className="flex gap-3">
          <button className="bg-brand-500 hover:bg-brand-600 px-4 rounded-full transition-colors text-lg ">
            Submit
          </button>
          <button className="bg-brand-100 px-4 rounded-full text-lg border border-brand-500">
            Clear
          </button>
        </div>
      </form>
    </section>
  );
};

export default Contact;
