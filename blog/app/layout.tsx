import './global.css'
import Pledge from './components/pledge'
import type { Metadata } from 'next'
import { DM_Serif_Display, DM_Sans, Barlow_Condensed } from 'next/font/google'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
// import Footer from './components/footer'
import { baseUrl } from './sitemap'
import { Providers } from './components/providers'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "Let's Buy Brightline",
  description: "Brightline is going bankrupt. Let's buy it and run it the right way. Sign the pledge.",
  keywords: ["Brightline", "Florida", "public transit", "railroad", "pledge", "petition", "grassroots", "campaign"],
  
  openGraph: {
    title: "Let's Buy Brightline",
    description: 'Sign the pledge to make Brightline public',
    url: baseUrl,
    siteName: 'Buy Brightline',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: "https://buybrightline.com/og-image.jpg", // 1200x630px works best
        width: 1200,
        height: 630,
        alt: "Let's Buy Brightline",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

const dmSerif = DM_Serif_Display({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-serif',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
})

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  variable: '--font-display',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-deepernavy',
        GeistMono.variable,
        GeistSans.variable,
        barlowCondensed.variable
      )}
    >
      <body className="antialiased">
        <Providers>
          <main>
            {children}
            <Analytics />
            <SpeedInsights />
          </main>
        </Providers>
      </body>
    </html>
  )
}
