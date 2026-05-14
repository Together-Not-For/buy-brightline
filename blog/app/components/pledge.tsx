'use client';

import { useForm } from "@mantine/form";
import { useState } from "react";

// type of pledge attributes
interface FormValues {
  name: string;
  email: string;
  phone: string;
  zip: string;
  consent: boolean;
  improvement: string;
}

export default function Pledge() {
  // set state of pledge form
  const [submitted, setSubmitted] = useState(false)
  
  // set initial values of the pledge attributes
  const submitForm = useForm<FormValues>({
    initialValues: {
      name: "",
      email: "",
      zip: "",
      phone: "",
      consent: false,
      improvement: ""
    },
  });

  const handleSubmit = async (values: FormValues): Promise<void> => {
    const request = await fetch("/api/request_pledge_submit", {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-Type": "application/json" },
    });

    const result = await request.json();

    if (result.data == "ok") {
      setSubmitted(true);
      submitForm.setValues({ name: "", email: "", zip: "", phone: "", consent: false, improvement: "" });
    }
  };

  // if pledge successfully sent
  if (submitted) {
  return (
    <div className="text-black">
      <h2 className="text-xl font-bold mb-4">Thank you for signing!</h2>
      <p className="text-lg leading-relaxed">We'll keep you updated on the campaign to make Brightline public.</p>
    </div>
  )
}

  // otherwise
  return (
    <div className="text-black">
      <h2 className="text-xl font-bold mb-6">Sign the pledge to tell Governor DeSantis, Senate President Albritton, House President Perez, and other Florida leaders, and candidates, to make Brightline public.</h2>

      <form onSubmit={submitForm.onSubmit((values) => handleSubmit(values))}>

        {/* Name */}
        <div className="mb-6">
          <label className="block text-xs font-bold uppercase tracking-widest mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            required
            placeholder="e.g. Marcy Daniels"
            className="w-full border-2 border-black px-4 py-4 text-base placeholder-gray-400 focus:outline-none"
            {...submitForm.getInputProps("name")}
          />
        </div>

        {/* Email */}
        <div className="mb-6">
          <label className="block text-xs font-bold uppercase tracking-widest mb-2">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            required
            placeholder="you@example.com"
            className="w-full border-2 border-black px-4 py-4 text-base placeholder-gray-400 focus:outline-none"
            {...submitForm.getInputProps("email")}
          />
          <p className="text-xs text-gray-500 mt-2">
            We won't spam. This is just to keep you in the loop!
          </p>
        </div>

        {/* Phone */}
        <div className="mb-6">
          <label className="block text-xs font-bold uppercase tracking-widest mb-2">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            required
            placeholder="850-488-7146"
            className="w-full border-2 border-black px-4 py-4 text-base placeholder-gray-400 focus:outline-none"
            {...submitForm.getInputProps("phone")}
          />
          <p className="text-xs text-gray-500 mt-2">
            We won't spam. This is just to keep you in the loop!
          </p>
        </div>

        {/* Zip */}
        <div className="mb-8">
          <label className="block text-xs font-bold uppercase tracking-widest mb-2">
            Zip Code <span className="text-red-500">*</span>
          </label>
          <input
            required
            placeholder="e.g. 33101"
            className="w-full border-2 border-black px-4 py-4 text-base placeholder-gray-400 focus:outline-none"
            {...submitForm.getInputProps("zip")}
          />
        </div>

        {/* Improvement */}
        <div className="mb-8">
          <label className="block text-xs font-bold uppercase tracking-widest mb-2">
            Brightline would be better if: <span className="text-red-500">*</span>
          </label>
          <input
            required
            placeholder="there was a section for kids to play"
            className="w-full border-2 border-black px-4 py-4 text-base placeholder-gray-400 focus:outline-none"
            {...submitForm.getInputProps("improvement")}
          />
        </div>

        {/* Consent */}
        <div className="mb-8 flex items-start gap-3">
          <input
            type="checkbox"
            required
            className="mt-1 w-5 h-5 border-2 border-black accent-brand"
            {...submitForm.getInputProps("consent", { type: "checkbox" })}
          />
          <label className="text-xs font-bold text-brandtext leading-relaxed">
            By checking this box, you consent to receive email updates from the Buy Brightline campaign. Standard message and data rates may apply.
          </label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-black text-white text-sm font-bold uppercase tracking-widest py-4 hover:bg-gray-800 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
}