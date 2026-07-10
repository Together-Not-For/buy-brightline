// components/footer.tsx
'use client';

import { useState } from 'react';

export function Footer() {
  const [open, setOpen] = useState(true);

  return (
    <footer className="bg-deepnavy">

      {/* Main footer */}
      <div className="max-w-5xl mx-auto px-8 py-4 flex flex-col lg:flex-row items-center justify-between gap-8">

        {/* Left: branding */}
        <div>
          <p className="font-display text-2xl font-black uppercase text-coolyellow mb-1">
            Buy Brightline
          </p>
          <p className="text-sm text-white/60 mb-4">
            A grassroots campaign to buy Brightline and make it public.
          </p>
          {/* <p className="text-xs font-bold uppercase tracking-widest text-white/40">
            Paid for by Buy Brightline
          </p> */}
        </div>

        {/* Right: contact + socials */}
        <div className="text-sm text-white/70 flex flex-col gap-3 lg:items-end">
          
          <a href="mailto:hello@buybrightline.com"
            className="underline decoration-dotted hover:text-white transition-colors">
            hello@buybrightline.com
          </a>
          {/* <div className="flex gap-4 text-xs font-bold uppercase tracking-widest text-white/50">
            <a href="https://facebook.com/buybrightline" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Facebook</a>
            <a href="https://instagram.com/buybrightline" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
            <a href="https://twitter.com/buybrightline" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">X</a>
            <a href="https://tiktok.com/@buybrightline" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">TikTok</a>
          </div> */}
        </div>
      </div>

      {/* Disclaimer */}
      <div className="border-t border-white/10">
        <div className="max-w-5xl mx-auto px-8 py-6">

          <span className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/40 hover:text-white/60 transition-colors mb-3">Legal Disclaimer</span>
          <p className="text-xs text-white/40 leading-relaxed max-w-4xl">
              This website and campaign are independent advocacy efforts and are not affiliated with, sponsored by, endorsed by, authorized by, or associated with Brightline Holdings LLC, Brightline Trains Florida LLC, or any Brightline affiliate. All references to Brightline are for identification and discussion purposes only. Contributions made through this website are not made to, received by, or used for the benefit of Brightline. Funds are received solely by the sponsoring organization for advocacy, educational, and political activities.
          </p>

        </div>
      </div>

    </footer>
  );
}