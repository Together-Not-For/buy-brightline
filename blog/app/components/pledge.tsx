'use client';

import { useForm } from "@mantine/form";
import { useState } from "react";

// type of pledge attributes
interface FormValues {
  name: string;
  email: string;
  phone: string;
  zip: string;
  consent1: boolean;
  consent2: boolean;
  consent3: boolean;
  improvement: string;
}

export default function Pledge() {
  // set state of pledge form
  const [submitted, setSubmitted] = useState(false)
  // fix to stop multiple submissions
  const [loading, setLoading] = useState(false)
  
  // set initial values of the pledge attributes
  const submitForm = useForm<FormValues>({
    initialValues: {
      name: "",
      email: "",
      zip: "",
      phone: "",
      consent1: false,
      consent2: false,
      consent3: false,
      improvement: ""
    },
  });

  const handleSubmit = async (values: FormValues): Promise<void> => {
    setLoading(true)
    try {
      const request = await fetch("/api/request_pledge_submit", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-Type": "application/json" },
      });

      const result = await request.json();

      if (result.data == "ok") {
        setSubmitted(true);
        submitForm.setValues({ name: "", email: "", zip: "", phone: "", consent1: false, consent2: false, consent3: false, improvement: "" });
      }

    } finally {
      setLoading(false)
    }
  };

  // if pledge successfully sent
  if (submitted) {
  return (
    <div className="text-deepnavy">
      <h2 className="text-xl font-bold mb-4">Thank you for signing!</h2>
      <p className="text-lg leading-relaxed">We'll keep you updated on the campaign to make Brightline public.</p>
    </div>
  )
}

  // otherwise
  return (
    <div className="text-deepnavy">
      <h2 className="text-xl font-bold mb-6 text-deepernavy">Brightline is going bankrupt. Let's buy it, and run it the right way. </h2>
      <h3 className="text-l font-bold mb-6 text-deepernavy">Sign the pledge to tell Governor DeSantis, Senate President Albritton, House President Perez, and other Florida leaders, and candidates, to make Brightline public.</h3>

      <form onSubmit={submitForm.onSubmit((values) => handleSubmit(values))}>

        {/* Name */}
        <div className="mb-6">
          <label className="block text-xs font-bold uppercase tracking-widest mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            required
            placeholder="e.g. Marcy Daniels"
            className="w-full border-2 border-deepnavy px-4 py-4 text-base placeholder-gray-400 focus:outline-none"
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
            className="w-full border-2 border-deepnavy px-4 py-4 text-base placeholder-gray-400 focus:outline-none"
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
            className="w-full border-2 border-deepnavy px-4 py-4 text-base placeholder-gray-400 focus:outline-none"
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
            className="w-full border-2 border-deepnavy px-4 py-4 text-base placeholder-gray-400 focus:outline-none"
            {...submitForm.getInputProps("zip")}
          />
        </div>

        {/* Improvement */}
        <div className="mb-8">
          <label className="block text-xs font-bold uppercase tracking-widest mb-2">
            Brightline would be better if: <span className="text-red-500">*</span>
          </label>
          {/* change to: If Brightline went bankrupt: */}
          <input
            placeholder="there was a section for kids to play"
            className="w-full border-2 border-deepnavy px-4 py-4 text-base placeholder-gray-400 focus:outline-none"
            {...submitForm.getInputProps("improvement")}
          />
        </div>

        {/* Consent 2 (FL resident or visitor) */}
        <div className="mb-2 flex items-start gap-3">
          <input
            type="checkbox"
            required
            className="border-2 border-black accent-brand"
            {...submitForm.getInputProps("consent2", { type: "checkbox" })}
          />
          <label className="text-sm font-bold leading-relaxed">
            I am a Florida resident or frequent visitor.
          </label>
        </div>

        {/* Consent 3 (Volunteer) */}
        <div className="mb-2 flex items-start gap-3">
          <input
            type="checkbox"
            required
            className="border-2 border-black accent-brand"
            {...submitForm.getInputProps("consent3", { type: "checkbox" })}
          />
          <label className="text-sm font-bold leading-relaxed">
            I want to volunteer!
          </label>
        </div>

        {/* Consent 1 (Messages) */}
        <div className="mb-8 flex items-start gap-3">
          <input
            type="checkbox"
            required
            className="border-2 border-black accent-brand"
            {...submitForm.getInputProps("consent1", { type: "checkbox" })}
          />
          <label className="text-sm font-bold leading-relaxed">
            I consent to receiving updates from the Buy Brightline campaign. Standard message and data rates may apply.
          </label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#0a2342] text-white text-sm font-bold uppercase tracking-widest py-4 hover:bg-gray-800 transition-colors mb-8 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Submitting..." : "Submit"}
        </button>
      </form>
    </div>
  );
}