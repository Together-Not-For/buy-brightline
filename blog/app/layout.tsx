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
  title: {
    default: "Florida: Let's Buy Brightline",
    template: '%s | Next.js Portfolio Starter',
  },
  description: 'Sign the pledge to tell Florida to buy Brightline',
  
  openGraph: {
    title: "Florida: Let's Buy Brightline",
    description: 'Sign the pledge to tell Florida to buy Brightline',
    url: baseUrl,
    siteName: 'Buy Brightline',
    locale: 'en_US',
    type: 'website',
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
