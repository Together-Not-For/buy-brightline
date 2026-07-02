'use client';

import { useForm } from "@mantine/form";
import { useState } from "react";

// type of pledge attributes
interface FormValues {
  name: string;
  email: string;
  role: string;
  resume: File | null;
}

export default function Jobs() {
  // set state of pledge form
  const [submitted, setSubmitted] = useState(false)
  // fix to stop multiple submissions
  const [loading, setLoading] = useState(false)
  
  // set initial values of the pledge attributes
  const submitForm = useForm<FormValues>({
    initialValues: {
      name: '',
      email: '',
      role: '',
      resume: null,
    },
  });

  const handleSubmit = async (values: FormValues): Promise<void> => {
    setLoading(true)
    try {
      const request = await fetch("/api/request_jobs_submit", {
        method: "POST",
        body: JSON.stringify(values),
        headers: { "Content-Type": "application/json" },
      });

    const result = await request.json();

    if (result.data === "ok") {
      setSubmitted(true);
      submitForm.setValues({ name: "", email: "", role: "", resume: null});
    }

    } finally {
      setLoading(false)
    }
  };

  // if pledge successfully sent
  if (submitted) {
  return (
    <div className="text-deepnavy">
      <h2 className="text-xl font-bold mb-4">We'll be in touch! 💛🚅 </h2>
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

        {/* Email Address */}
        <div className="mb-6">
          <label className="block text-xs font-bold uppercase tracking-widest mb-2">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            required
            placeholder="marcy@aol.com"
            className="w-full border-2 border-deepnavy px-4 py-4 text-base placeholder-gray-400 focus:outline-none"
            {...submitForm.getInputProps("email")}
          />
        </div>

        {/* Phone */}
        {/* <div className="mb-6">
          <label className="block text-xs font-bold uppercase tracking-widest mb-2">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            required
            placeholder="850-488-7146"
            className="w-full border-2 border-deepnavy px-4 py-4 text-base placeholder-gray-400 focus:outline-none"
            {...submitForm.getInputProps("phone")}
          />
        </div> */}

        {/* Role */}
        <div className="mb-6">
          <label className="block text-xs font-bold uppercase tracking-widest mb-2">
            Role <span className="text-red-500">*</span>
          </label>
          <select
            required
            className="w-full border-2 border-deepnavy px-4 py-4 text-base focus:outline-none"
            {...submitForm.getInputProps("role")}
          >
            <option value="">Which role are you applying for?</option>
            <option value="Social Media Fellow">Social Media Fellow</option>
            <option value="Graphic Design & Video Editing Fellow">Graphic Design & Video Editing Fellow</option>
          </select>
        </div>

        {/* Resume or Portfolio */}
        <div className="mb-6">
        <label className="block text-xs font-bold uppercase tracking-widest mb-2">
          Resumé or Portfolio <span className="text-red-500">*</span>
        </label>
        <input
          required
          type="file"
          accept=".pdf,.doc,.docx"
          id="resume-upload"
          className="hidden"
          onChange={(e) => submitForm.setFieldValue("resume", e.target.files?.[0] ?? null)}
        />
        <label
          htmlFor="resume-upload"
          className="w-full border-2 border-deepnavy px-4 py-4 text-base cursor-pointer flex items-center justify-between"
          >
          <span className={submitForm.values.resume ? "text-deepnavy" : "text-gray-400"}>
            {submitForm.values.resume ? (submitForm.values.resume as File).name : "Upload your résumé or portfolio..."}
          </span>
          <span className="text-xs uppercase tracking-widest font-bold text-deepnavy">Browse</span>
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