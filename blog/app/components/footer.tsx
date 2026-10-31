// components/footer.tsx — slim footer: wordmark, socials, contact, legal
export function Footer() {
  return (
    <footer className="bg-deepnavy text-white bb-gutter pt-[clamp(56px,6vw,80px)] pb-10">
      <div className="bb-wrap">
        <div className="flex flex-wrap items-center justify-between gap-x-10 gap-y-5">
          <p className="font-display font-black uppercase text-[clamp(22px,2.4vw,30px)] leading-none">
            Buy <span className="italic">Brightline</span>
          </p>
          <div className="flex flex-wrap gap-x-7 gap-y-2">
            <a
              href="https://instagram.com/buybrightline"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 min-h-[44px] text-sun font-bold text-lg no-underline hover:underline"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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

        <div className="mt-10 pt-7 border-t border-white/25 flex flex-col gap-2.5">
          <p className="text-white/85">A grassroots campaign to buy Brightline and make it public.</p>
          <p className="mt-2 text-xs font-bold uppercase tracking-widest text-white/70">Legal Disclaimer</p>
          <p className="text-[13px] leading-relaxed text-white/70 max-w-4xl">
            This website and campaign are independent advocacy efforts and are not affiliated with, sponsored by, endorsed by, authorized by, or associated with Brightline Holdings LLC, Brightline Trains Florida LLC, or any Brightline affiliate. All references to Brightline are for identification and discussion purposes only. Contributions made through this website are not made to, received by, or used for the benefit of Brightline. Funds are received solely by the sponsoring organization for advocacy, educational, and political activities.
          </p>
        </div>
      </div>
    </footer>
  );
}
