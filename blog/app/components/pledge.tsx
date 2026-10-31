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

const inputClass =
  "w-full min-h-[52px] rounded-xl border-0 bg-white px-3.5 py-3 text-[17px] text-deepnavy placeholder-slate/60 resize-y focus:outline focus:outline-[3px] focus:outline-[#fa8238] focus:outline-offset-2";
const labelClass = "block text-[15px] font-bold mb-2";
const checkClass = "mt-px w-[22px] h-[22px] flex-none accent-flame";
const checkLabelClass = "flex items-start gap-2.5 text-base leading-snug cursor-pointer";

export default function Pledge({ count }: { count?: number }) {
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
      <div className="text-center py-6" role="status">
        <p className="font-script text-6xl leading-none text-sun">Thank you!</p>
        <h2 className="mt-4 font-display font-black text-4xl">You signed the pledge.</h2>
        <p className="mt-3 mx-auto max-w-lg text-lg leading-relaxed">
          Now help us show Florida's leaders that riders are organized: share the pledge and follow{" "}
          <a href="https://instagram.com/buybrightline" className="font-bold text-white">@buybrightline</a>.
        </p>
      </div>
    )
  }

  // otherwise: heading column on the left, fields on the right (stacks under 860px)
  return (
    <div className="grid grid-cols-1 min-[860px]:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] gap-x-16 gap-y-10 items-start">
      <div className="min-w-0">
        <h2 className="bb-h2 text-sun">Sign the pledge</h2>
        <p className="mt-6 text-[clamp(18px,1.6vw,21px)] leading-normal">
          Tell Florida's leaders to use our tax dollars to buy Brightline and make it public — and run it for
          the people, <span className="italic font-bold">not shareholders.</span>
        </p>
        {count != null && (
          <p className="mt-5 inline-block rounded-full bg-sun text-deepnavy px-4 py-2 text-[15px] font-bold">
            {count.toLocaleString('en-US')} pledges signed (and counting!)
          </p>
        )}
      </div>

      <form
        onSubmit={submitForm.onSubmit((values) => handleSubmit(values))}
        className="min-w-0 grid grid-cols-1 sm:grid-cols-2 gap-5"
      >
        <div>
          <label htmlFor="pledge-name" className={labelClass}>Name</label>
          <input id="pledge-name" required autoComplete="name" className={inputClass}
            {...submitForm.getInputProps("name")} />
        </div>
        <div>
          <label htmlFor="pledge-email" className={labelClass}>Email</label>
          <input id="pledge-email" required type="email" autoComplete="email" className={inputClass}
            {...submitForm.getInputProps("email")} />
        </div>
        <div>
          <label htmlFor="pledge-phone" className={labelClass}>Mobile number</label>
          <input id="pledge-phone" required type="tel" autoComplete="tel" className={inputClass}
            {...submitForm.getInputProps("phone")} />
        </div>
        <div>
          <label htmlFor="pledge-zip" className={labelClass}>Zip code</label>
          <input id="pledge-zip" required inputMode="numeric" autoComplete="postal-code" className={inputClass}
            {...submitForm.getInputProps("zip")} />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="pledge-why" className={labelClass}>The State of Florida should buy Brightline because:</label>
          <textarea
            id="pledge-why"
            required
            rows={2}
            placeholder="A public train, with cheaper rates, would make life better. I could see family more often, and skip wasting time and gas sitting in traffic"
            className={inputClass}
            {...submitForm.getInputProps("improvement")}
          />
        </div>

        <div className="sm:col-span-2 flex flex-wrap gap-x-7 gap-y-3">
          {/* Consent 2 (FL resident or visitor) */}
          <label className={checkLabelClass}>
            <input type="checkbox" required className={checkClass}
              {...submitForm.getInputProps("consent2", { type: "checkbox" })} />
            I'm a Florida resident or frequent visitor
          </label>
          {/* Consent 3 (Volunteer) */}
          <label className={checkLabelClass}>
            <input type="checkbox" required className={checkClass}
              {...submitForm.getInputProps("consent3", { type: "checkbox" })} />
            I want to volunteer
          </label>
          {/* Consent 1 (Messages) */}
          <label className={checkLabelClass}>
            <input type="checkbox" required className={checkClass}
              {...submitForm.getInputProps("consent1", { type: "checkbox" })} />
            I agree to opt-in to text messages from the Buy Brightline campaign
          </label>
        </div>

        {/* SMS disclaimer */}
        <p className="sm:col-span-2 text-[13px] leading-relaxed text-white/75">
          We won't spam. By providing your phone number and checking the box above, you consent to receive recurring SMS/MMS messages from the Buy Brightline campaign, including updates, alerts, and calls to action. Message and data rates may apply. Message frequency may vary. Text STOP to opt out at any time. Text HELP for help. Your information will not be rented, sold, or shared.{' '}
          <a href="/privacy-policy" className="underline text-white">Privacy Policy</a>. <a href="/sms-terms" className="underline text-white">Terms and conditions</a>.
        </p>

        <div className="sm:col-span-2">
          <button
            type="submit"
            disabled={loading}
            className="bb-pill"
          >
            {loading ? "Submitting..." : "Sign the pledge"}
          </button>
        </div>
      </form>
    </div>
  );
}
