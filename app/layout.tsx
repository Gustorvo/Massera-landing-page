import type React from "react"
import "@/app/globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

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
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-787YJJ5WC7"></script>
        <script dangerouslySetInnerHTML={{ __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-787YJJ5WC7');
        ` }} />
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
        <meta property="og:image" content="https://massera.app/og-image.png" />
        <meta property="og:site_name" content="Massera" />
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Massera – Learn Guided Home Massage on Meta Quest" />
        <meta name="twitter:description" content="Massera is a reimagined way to build massage skills and connection in Mixed Reality." />
        <meta name="twitter:image" content="https://massera.app/og-image.png" />
        <meta name="twitter:site" content="@masseraxr" />
        <meta name="twitter:creator" content="@masseraxr" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
