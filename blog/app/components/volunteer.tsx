'use client';

import { useForm } from "@mantine/form";
import { useState } from "react";

// type of pledge attributes
interface FormValues {
  name: string;
  phone: string;
  consent: boolean;
}

export default function Volunteer() {
  // set state of pledge form
  const [submitted, setSubmitted] = useState(false)
  
  // set initial values of the pledge attributes
  const submitForm = useForm<FormValues>({
    initialValues: {
      name: "",
      phone: "",
      consent: false,
    },
  });

  const handleSubmit = async (values: FormValues): Promise<void> => {
    const request = await fetch("/api/request_volunteer_submit", {
      method: "POST",
      body: JSON.stringify(values),
      headers: { "Content-Type": "application/json" },
    });

    const result = await request.json();

    if (result.data == "ok") {
      setSubmitted(true);
      submitForm.setValues({ name: "", phone: "", consent: false });
    }
  };

  // if pledge successfully sent
  if (submitted) {
  return (
    <div className="text-deepnavy">
      <h2 className="text-xl font-bold mb-4">See you at the kick-off! 💛🚅 </h2>
    </div>
  )
}

  // otherwise
  return (
    <div className="text-deepnavy">
      <h2 className="text-xl font-bold mb-6 text-deepernavy">Join us!</h2>

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

        {/* Consent */}
        <div className="mb-8 flex items-start gap-3">
          <input
            type="checkbox"
            required
            className="mt-1 w-5 h-5 border-2 border-black accent-brand"
            {...submitForm.getInputProps("consent", { type: "checkbox" })}
          />
          <label className="text-xs font-bold leading-relaxed">
            By checking this box, you consent to receive updates from the Buy Brightline campaign. Standard message and data rates may apply.
          </label>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="w-full bg-[#0a2342] text-white text-sm font-bold uppercase tracking-widest py-4 hover:bg-gray-800 transition-colors mb-8"
        >
          Submit
        </button>
      </form>
    </div>
  );
}