// components/footer.tsx — "We need you!" block from the palm card + legal footer

export function Footer() {
  return (
    <footer className="bg-deepnavy text-white">
      <div className="max-w-6xl mx-auto px-4 pt-24 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="font-script text-sun text-[clamp(60px,8vw,96px)] leading-none -rotate-3">We need you!</p>
            <p className="mt-4 font-extrabold text-[26px]">Sign the pledge and follow us on social!</p>
            <p className="mt-3 text-lg leading-relaxed text-white/85">
              We need to show Florida's leaders that riders are organized, paying attention, and ready to make a
              case for a brighter future!
            </p>
          </div>

          <div className="flex flex-col items-start gap-4">
            <a
              href="https://instagram.com/buybrightline"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 min-h-[44px] text-sun font-bold text-xl no-underline hover:underline"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
              </svg>
              @buybrightline
            </a>
            <a href="mailto:hello@buybrightline.com" className="inline-flex items-center min-h-[44px] text-lg text-white underline">
              hello@buybrightline.com
            </a>
          </div>
        </div>

        <div className="mt-20 pt-7 border-t border-white/25 flex flex-col gap-2.5">
          <p className="font-black uppercase text-xl">
            Buy <span className="italic">Brightline</span>
          </p>
          <p className="text-white/85">A grassroots campaign to buy Brightline and make it public.</p>
          <p className="mt-3 text-xs font-bold uppercase tracking-widest text-white/70">Legal Disclaimer</p>
          <p className="text-[13px] leading-relaxed text-white/70 max-w-4xl">
            This website and campaign are independent advocacy efforts and are not affiliated with, sponsored by, endorsed by, authorized by, or associated with Brightline Holdings LLC, Brightline Trains Florida LLC, or any Brightline affiliate. All references to Brightline are for identification and discussion purposes only. Contributions made through this website are not made to, received by, or used for the benefit of Brightline. Funds are received solely by the sponsoring organization for advocacy, educational, and political activities.
          </p>
        </div>
      </div>
    </footer>
  );
}
