import React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import AnalyticsScripts from "./analytics-scripts"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Massera – Learn Guided Home Massage on Meta Quest",
  description:
    "Massera is a reimagined way to build massage skills and connection in Mixed Reality. ",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Critical CSS for above-the-fold content */}
        <style>{`
          html, body {
            min-height: 100%;
            background: #fff;
            color: #222b36;
          }
          .min-h-screen { min-height: 100vh; }
          .flex { display: flex; }
          .flex-col { flex-direction: column; }
          .items-center { align-items: center; }
          .justify-between { justify-content: space-between; }
          .justify-center { justify-content: center; }
          .text-center { text-align: center; }
          .font-bold { font-weight: 700; }
          .font-medium { font-weight: 500; }
          .text-xl { font-size: 1.25rem; }
          .text-4xl { font-size: 2.25rem; line-height: 2.5rem; }
          .md\:text-6xl { font-size: 3.75rem; line-height: 1; }
          .tracking-tighter { letter-spacing: -0.05em; }
          .max-w-3xl { max-width: 48rem; }
          .max-w-4xl { max-width: 56rem; }
          .max-w-2xl { max-width: 42rem; }
          .max-w-\[64rem\] { max-width: 64rem; }
          .aspect-video { aspect-ratio: 16/9; }
          .rounded-xl { border-radius: 0.75rem; }
          .mb-6 { margin-bottom: 1.5rem; }
          .mx-auto { margin-left: auto; margin-right: auto; }
          .pt-8 { padding-top: 2rem; }
          .md\:pt-12 { padding-top: 3rem; }
          .pb-20 { padding-bottom: 5rem; }
          .md\:pb-32 { padding-bottom: 8rem; }
          .container { width: 100%; max-width: 1280px; margin-left: auto; margin-right: auto; }
          .px-4 { padding-left: 1rem; padding-right: 1rem; }
          .md\:px-6 { padding-left: 1.5rem; padding-right: 1.5rem; }
          .space-y-8 > :not([hidden]) ~ :not([hidden]) { margin-top: 2rem; }
          .relative { position: relative; }
          .w-full { width: 100%; }
          .h-8 { height: 2rem; }
          .h-12 { height: 3rem; }
          .h-16 { height: 4rem; }
          .h-6 { height: 1.5rem; }
          .w-6 { width: 1.5rem; }
          .w-auto { width: auto; }
          .gap-2 { gap: 0.5rem; }
          .gap-4 { gap: 1rem; }
          .gap-6 { gap: 1.5rem; }
          .gap-8 { gap: 2rem; }
          .bg-background { background: #fff; }
          .bg-card { background: #f7f7f7; }
          .bg-card\/95 { background: rgba(247,247,247,0.95); }
          .bg-card\/60 { background: rgba(247,247,247,0.6); }
          .bg-primary { background: #435A69; }
          .text-primary-foreground { color: #fff; }
          .text-muted-foreground { color: hsl(215, 16%, 27%); }
          .hover\:text-primary:hover { color: #435A69; }
          .transition-colors { transition: color 0.2s, background 0.2s; }
          .rounded-full { border-radius: 9999px; }
          .px-4 { padding-left: 1rem; padding-right: 1rem; }
          .px-8 { padding-left: 2rem; padding-right: 2rem; }
          .py-2 { padding-top: 0.5rem; padding-bottom: 0.5rem; }
          .py-3 { padding-top: 0.75rem; padding-bottom: 0.75rem; }
          .inline-flex { display: inline-flex; }
          .items-center { align-items: center; }
          .justify-center { justify-content: center; }
          .focus-visible\:outline-none:focus-visible { outline: none; }
          .focus-visible\:ring-2:focus-visible { box-shadow: 0 0 0 2px #435A69; }
          .focus-visible\:ring-ring:focus-visible { box-shadow: 0 0 0 2px #435A69; }
          .focus-visible\:ring-offset-2:focus-visible { box-shadow: 0 0 0 4px #fff, 0 0 0 6px #435A69; }
          .disabled\:pointer-events-none:disabled { pointer-events: none; }
          .disabled\:opacity-50:disabled { opacity: 0.5; }
          .sticky { position: sticky; }
          .top-0 { top: 0; }
          .z-50 { z-index: 50; }
          .border-b { border-bottom: 1px solid #e5e7eb; }
          .backdrop-blur { backdrop-filter: blur(8px); }
          .supports-\[backdrop-filter\]\:bg-card\/60 { background: rgba(247,247,247,0.6); }
        `}</style>
        {/* SEO Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://massera.app/" />
        {/* Open Graph Meta Tags */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Massera – Learn Guided Home Massage on Meta Quest" />
        <meta property="og:description" content="Massera is a reimagined way to build massage skills and connection in Mixed Reality." />
        <meta property="og:url" content="https://massera.app/" />
        <meta property="og:image" content="https://massera.app/og-image.jpg" />
        <meta property="og:site_name" content="Massera" />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Massera – Learn Guided Home Massage on Meta Quest" />
        <meta name="twitter:description" content="Massera is a reimagined way to build massage skills and connection in Mixed Reality." />
        <meta name="twitter:image" content="https://massera.app/og-image.jpg" />
        <meta name="twitter:site" content="@masseraxr" />
        <meta name="twitter:creator" content="@masseraxr" />
        <style>{`
          .hero-lcp {
            font-size: 1.125rem;
            line-height: 1.75rem;
            color: hsl(215, 16%, 27%);
            max-width: 42rem;
            margin-left: auto;
            margin-right: auto;
          }
          @media (min-width: 768px) {
            .hero-lcp {
              font-size: 1.25rem;
              line-height: 1.75rem;
            }
          }
        `}</style>
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          <AnalyticsScripts />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
