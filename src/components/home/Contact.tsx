"use client";

import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import { ContactFormData } from "@/types";

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<ContactFormData>();

  const [error, setError] = useState("");

  const onSubmit = async (data: ContactFormData) => {
    setError("");

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          name: data.name,
          from_email: data.email,
          message: data.message,
          to_email: process.env.NEXT_PUBLIC_EMAILJS_TO_EMAIL!,
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      reset();
    } catch (err) {
      console.error("EmailJS Error:", err);
      setError("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="isolate px-6 py-24 sm:py-32 lg:px-8" id="contact">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          Contact
        </h2>
        <p className="mt-2 text-lg/8 text-gray-500">
          Aute magna irure deserunt veniam aliqua magna enim voluptate.
        </p>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto mt-12 max-w-xl"
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-6">
          <div className="sm:col-span-2">
            <label htmlFor="name" className="block text-sm/6 font-semibold">
              Name
            </label>
            <div className="mt-2.5">
              <input
                id="name"
                {...register("name", { required: "Name is required" })}
                className="block w-full dark:bg-gray-900 rounded-md px-3.5 py-2 text-base outline-1 outline-gray-300 dark:outline-gray-800 placeholder:text-gray-400 focus:outline-indigo-600"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.name.message as string}
                </p>
              )}
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm/6 font-semibold">
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                type="email"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /\S+@\S+\.\S+/,
                    message: "Email is invalid",
                  },
                })}
                className="block w-full dark:bg-gray-900 rounded-md px-3.5 py-2 text-base outline-1 outline-gray-300 dark:outline-gray-800 placeholder:text-gray-400 focus:outline-indigo-600"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.email.message as string}
                </p>
              )}
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm/6 font-semibold">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                rows={4}
                {...register("message", { required: "Message is required" })}
                className="block w-full dark:bg-gray-900 rounded-md px-3.5 py-2 text-base outline-1 outline-gray-300 dark:outline-gray-800 placeholder:text-gray-400 focus:outline-indigo-600"
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.message.message as string}
                </p>
              )}
            </div>
          </div>
        </div>

        <div className="mt-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white hover:bg-indigo-500 focus-visible:outline-indigo-600"
          >
            {isSubmitting ? "Sending..." : "Send"}
          </button>
        </div>

        {isSubmitSuccessful && !error && (
          <p className="mt-4 text-green-600 text-center">
            Message sent successfully!
          </p>
        )}
        {error && <p className="mt-4 text-red-600 text-center">{error}</p>}
      </form>
    </div>
  );
}
