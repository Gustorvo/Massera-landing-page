"use client"

import { Download, Menu, ChevronDown, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useLogoPath } from "./theme-utils"
import React, { useState } from "react"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main>
        <HeroSection />
        <TrailerSection />
        <FaqSection />
        <MediaSection />
        <CreditsSection />
        <AwardsSection />
      </main>
      <Footer />
    </div>
  )
}

function Header() {
  const logoPath = useLogoPath()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="#top" className="flex items-center gap-2">
          <Image
            src={logoPath || "/placeholder.svg"}
            alt="Massera Logo"
            width={32}
            height={32}
            className="h-8 w-auto"
          />
          <span className="font-bold text-xl">Massera</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <a href="#trailer" className="text-sm font-medium hover:text-primary transition-colors">
            Trailer
          </a>
          <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors">
            FAQ
          </a>
          <a href="#media" className="text-sm font-medium hover:text-primary transition-colors">
            Media
          </a>
          <a
            href="https://www.meta.com/experiences/9851138398306895/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-10 items-center justify-center rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
          >
            Add to Wishlist
          </a>
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4 mt-8">
              <a
                href="#trailer"
                className="text-lg font-medium hover:text-primary transition-colors"
                onClick={(e) => {
                  document.querySelector(".sheet-overlay")?.dispatchEvent(new MouseEvent("click", { bubbles: true }))
                }}
              >
                Trailer
              </a>
              <a
                href="#faq"
                className="text-lg font-medium hover:text-primary transition-colors"
                onClick={(e) => {
                  document.querySelector(".sheet-overlay")?.dispatchEvent(new MouseEvent("click", { bubbles: true }))
                }}
              >
                FAQ
              </a>
              <a
                href="#media"
                className="text-lg font-medium hover:text-primary transition-colors"
                onClick={(e) => {
                  document.querySelector(".sheet-overlay")?.dispatchEvent(new MouseEvent("click", { bubbles: true }))
                }}
              >
                Media
              </a>
              <a
                href="https://www.meta.com/experiences/9851138398306895/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-10 items-center justify-center rounded-full w-full mt-4 bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
              >
                Add to Wishlist
              </a>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}

function HeroSection() {
  // const logoPath = useLogoPath() // No longer needed for hero image

  return (
    <section id="top" className="pt-8 md:pt-12 pb-20 md:pb-32 bg-background relative">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          <Image
            src="/hero_bg.png"
            alt="Massera Hero Background"
            width={1200}
            height={1200}
            className="w-[64rem] md:w-[80rem] h-auto mb-6"
            priority
          />
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter max-w-3xl">
            Coming soon on Meta Horizon Store!
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            Massera is a reimagined way to build massage skills and connection in Mixed Reality. With guided touch and
            interactive body mapping inspired by professionals, it turns gestures into moments of care and calm—making
            real connection effortless. No experience needed. Just follow the cues and grow together on Meta Quest 3 /
            3S
          </p>
          <a
            href="https://www.meta.com/experiences/9851138398306895/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center rounded-full bg-primary px-8 py-3 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 gap-2"
          >
            Add to Wishlist
            <ExternalLink className="h-4 w-4 ml-1" />
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="flex justify-center mt-16 md:mt-20">
        <a
          href="#trailer"
          className="flex flex-col items-center text-muted-foreground hover:text-foreground transition-colors group"
          aria-label="Scroll to trailer section"
        >
          <span className="text-sm mb-2 font-medium">Watch Trailer</span>
          <ChevronDown className="h-6 w-6 animate-bounce group-hover:animate-none" />
        </a>
      </div>
    </section>
  )
}

function TrailerSection() {
  return (
    <section id="trailer" className="py-20 bg-card text-card-foreground scroll-mt-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Watch the Trailer</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Massera: A Shared Home Massage Ritual in Mixed Reality
          </p>

          <div className="w-full max-w-4xl aspect-video rounded-xl overflow-hidden shadow-lg">
            <iframe
              src="https://player.mux.com/FZYIfZ00qT8ITic52Gnl02Hn14QckE4EdpFgxOdWgXhPw?metadata-video-title=Video&accent-color=%23455768"
              style={{ width: '100%', border: 'none', aspectRatio: '16/9' }}
              allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

function FaqSection() {
  return (
    <section id="faq" className="py-20 bg-muted scroll-mt-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Everything you need to know about Massera and how it works.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>What is Massera?</AccordionTrigger>
              <AccordionContent>
                Massera is a Mixed Reality app for Meta Quest 3 / 3S that teaches home massage through guided touch and
                spatial mapping, inspired by professional techniques.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Who is Massera designed for?</AccordionTrigger>
              <AccordionContent>
                Massera is designed for two people—whether partners, close friends, or curious learners—who want to
                build massage skills, reconnect through guided touch, and turn quality time into something meaningful
                and playful.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>What makes Massera unique?</AccordionTrigger>
              <AccordionContent>
                Massera is the first app to teach massage through interactive body mapping in Mixed Reality—combining
                guided touch, real-time feedback, and expert techniques for a natural, connected, and playful
                experience.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>How does Massera work?</AccordionTrigger>
              <AccordionContent>
                Massera uses hand tracking and an interactive body map to guide you step by step—showing exactly where
                and how to touch, based on professional massage techniques.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4a">
              <AccordionTrigger>Does the Massera require access to my camera or record my room?</AccordionTrigger>
              <AccordionContent>
                No, Massera does not require access to your camera or record your environment. Your privacy is fully respected. We use only hand tracking—no video, no room scanning, and no body visuals. For body mapping, you simply use your hands to define placement. It's as safe and private as any other Mixed Reality app available on the Meta Horizon Store.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger>Are there any specific space requirements to use Massera?</AccordionTrigger>
              <AccordionContent>
                No special setup needed. Massera fits right into your home—just grab your headset, find a cozy spot
                together, and begin.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger>What are the benefits of using Massera?</AccordionTrigger>
              <AccordionContent>
                Massera helps you relax, reconnect, and build meaningful massage skills in your everyday life. It makes
                touch easy, playful, and effective—without the awkwardness.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-7">
              <AccordionTrigger>Is Massera a substitute for professional massage therapy?</AccordionTrigger>
              <AccordionContent>
                No, Massera isn't a replacement for professional massage or medical care—but it adds real value at home
                by guiding you in skillful, caring touch.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-8">
              <AccordionTrigger>Are there any health considerations when using Massera?</AccordionTrigger>
              <AccordionContent>
                Yes—users should be in good health to receive massage. If you have any medical conditions, talk with
                your partner and consult a healthcare professional before using the app.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-9">
              <AccordionTrigger>What awards has Massera won?</AccordionTrigger>
              <AccordionContent>
                Massera won XRCC Hack 2024 in the Meta Hobbies & Skill Building nomination in Berlin, and was
                spotlighted at Meta's XR Hacks as a standout Mixed Reality experience for the home.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-10">
              <AccordionTrigger>Are there plans for updates or additional features?</AccordionTrigger>
              <AccordionContent>
                Yes—Massera is just in its early stage. We plan to expand with massage techniques from around the world,
                exploring different styles, cultures, body areas, skill levels, and goals like stress relief or
                progression. Upcoming features may include a body heat map, voice-guided sessions, customizable
                routines, themed experiences, and expert-led programs. Your feedback will help shape what's next.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  )
}

function MediaSection() {
  const [openImage, setOpenImage] = useState<string | null>(null);
  const images = [
    { src: "/screenshots/1.PNG", alt: "Screenshot 1" },
    { src: "/screenshots/2.PNG", alt: "Screenshot 2" },
    { src: "/screenshots/3.jpg", alt: "Screenshot 3" },
    { src: "/screenshots/7.PNG", alt: "Screenshot 4" },
  ];
  const logos = [
    { src: "/logo_black.png", alt: "Massera Logo Black", style: {} },
    { src: "/logo_white.png", alt: "Massera Logo White", style: { backgroundColor: '#222', borderRadius: '0.5rem', padding: '0.5rem' } },
  ];

  return (
    <section id="media" className="py-20 bg-background scroll-mt-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Media</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Explore screenshots from the Massera application.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 gap-6 w-full max-w-3xl mt-4">
            {images.map((img, idx) => (
              <button
                key={img.src}
                className="aspect-w-16 aspect-h-9 w-full rounded-xl overflow-hidden shadow-lg border focus:outline-none"
                onClick={() => setOpenImage(img.src)}
                aria-label={`Open ${img.alt}`}
                style={{ background: "none", padding: 0, border: "none", cursor: "pointer" }}
              >
                <Image src={img.src} alt={img.alt} width={800} height={450} className="object-cover w-full h-full transition-transform hover:scale-105" />
              </button>
            ))}
          </div>
          <div className="flex flex-col items-center mt-10 w-full">
            <h3 className="text-xl font-semibold mb-4">Official Logos</h3>
            <div className="flex flex-row gap-8 justify-center items-center">
              {logos.map((logo, idx) => (
                <button
                  key={logo.src}
                  onClick={() => setOpenImage(logo.src)}
                  aria-label={`Open ${logo.alt}`}
                  style={{ background: "none", padding: 0, border: "none", cursor: "pointer" }}
                  className="focus:outline-none"
                >
                  <img
                    src={logo.src}
                    alt={logo.alt}
                    className="h-40 w-auto bg-transparent transition-transform hover:scale-105"
                    style={logo.style}
                  />
                </button>
              ))}
            </div>
          </div>
          <a
            href="https://drive.google.com/uc?export=view&id=1ZCIQnsFMmbmWHIfF27Ke6aEUrM6boq0o"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium shadow hover:bg-primary/90 transition-colors"
          >
            <Download className="h-5 w-5" />
            Download media archive
          </a>
        </div>
      </div>
      {openImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm"
          onClick={() => setOpenImage(null)}
          style={{ cursor: "zoom-out" }}
        >
          <img
            src={openImage}
            alt="Full Screenshot or Logo"
            className="max-w-full max-h-full rounded-lg shadow-2xl border-4 border-white"
            onClick={e => e.stopPropagation()}
            style={{ cursor: "auto" }}
          />
        </div>
      )}
    </section>
  );
}

function CreditsSection() {
  return (
    <section id="credits" className="py-20 bg-muted scroll-mt-16">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Credits</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Massera is crafted by a visionary team devoted to redefining connection, touch, and learning through the power of Mixed Reality. Meet the minds behind the experience
          </p>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center mt-6">
            <div className="flex flex-col items-center">
              <a href="https://www.linkedin.com/in/volodymyr-tormoz/" target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-primary hover:underline">Volodymyr Tormoz</a>
              <span className="text-md text-muted-foreground mb-2">Lead Developer</span>
            </div>
            <div className="flex flex-col items-center">
              <a href="https://www.linkedin.com/in/artemkolomatskyi/" target="_blank" rel="noopener noreferrer" className="text-xl font-semibold text-primary hover:underline">Artem Kolomatskyi</a>
              <span className="text-md text-muted-foreground mb-2">XR Product Lead</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function AwardsSection() {
  return (
    <section id="awards" className="py-20 bg-background scroll-mt-16">
      <div className="container px-4 md:px-6 flex flex-col items-center text-center space-y-8">
        <div className="w-full max-w-md rounded-xl shadow-lg border bg-card py-8 px-4 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter mb-4">Awards</h2>
          <img
            src="/award_berlin.png"
            alt="XRCC Hack 2024 Meta Hobbies & Skill Building Winner Berlin"
            className="w-full rounded-xl"
          />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const logoPath = useLogoPath()

  return (
    <footer className="border-t py-8 md:py-12 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col items-center md:items-start gap-2">
            <a href="#top" className="flex items-center gap-2">
              <Image
                src={logoPath || "/placeholder.svg"}
                alt="Massera Logo"
                width={24}
                height={24}
                className="h-6 w-auto"
              />
              <span className="font-bold text-primary">Massera</span>
            </a>
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Massera. All rights reserved.</p>
          </div>

          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Website Privacy Policy
            </Link>
            <Link href="/app-privacy-policy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Massera Privacy Policy
            </Link>
            <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="https://x.com/masseraxr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="X (Twitter)"
            >
              {/* X logo */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z"
                  fill="currentColor"
                />
              </svg>
            </Link>
            <Link
              href="https://discord.gg/enZQmXMJ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Discord"
            >
              {/* Discord logo */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M20.317 4.492c-1.53-.69-3.17-1.2-4.885-1.49a.075.075 0 0 0-.079.036c-.21.39-.444.885-.608 1.283a18.566 18.566 0 0 0-5.487 0 12.36 12.36 0 0 0-.617-1.283.077.077 0 0 0-.079-.036c-1.714.29-3.354.8-4.885 1.491a.07.07 0 0 0-.032.027C.533 9.093-.32 13.555.099 17.961a.08.08 0 0 0 .031.055 20.03 20.03 0 0 0 5.993 2.98.078.078 0 0 0 .084-.026c.462-.62.874-1.275 1.226-1.963.021-.04.001-.088-.041-.104a13.201 13.201 0 0 1-1.872-.878.075.075 0 0 1-.008-.125c.126-.093.252-.19.372-.287a.075.075 0 0 1 .078-.01c3.927 1.764 8.18 1.764 12.061 0a.075.075 0 0 1 .079.009c.12.098.245.195.372.288a.075.075 0 0 1-.006.125c-.598.344-1.22.635-1.873.877a.075.075 0 0 0-.041.105c.36.687.772 1.341 1.225 1.962a.077.077 0 0 0 .084.028 19.963 19.963 0 0 0 6.002-2.981.076.076 0 0 0 .032-.054c.5-5.094-.838-9.52-3.549-13.442a.06.06 0 0 0-.031-.028zM8.02 15.278c-1.182 0-2.157-1.069-2.157-2.38 0-1.312.956-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.956 2.38-2.157 2.38zm7.975 0c-1.183 0-2.157-1.069-2.157-2.38 0-1.312.955-2.38 2.157-2.38 1.21 0 2.176 1.077 2.157 2.38 0 1.312-.946 2.38-2.157 2.38z"
                  fill="currentColor"
                />
              </svg>
            </Link>
            <Link
              href="https://www.instagram.com/masseraxr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-instagram"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
            </Link>
            <Link
              href="https://www.tiktok.com/@masseraxr?_t=ZN-8wJuyXMm6HW&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="TikTok"
            >
              {/* TikTok logo */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"
                  fill="currentColor"
                />
              </svg>
            </Link>
            <Link
              href="https://www.youtube.com/channel/UCxkdqtQEq944NP2KpIFNFhw"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="YouTube"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-youtube"
              >
                <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
                <path d="m10 15 5-3-5-3z" />
              </svg>
            </Link>
            <Link
              href="https://www.reddit.com/r/masseraxr/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors"
              aria-label="Reddit"
            >
              {/* Reddit logo */}
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M17.5 12c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5 1.5c0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5zM8 12c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5c0 .829-.672 1.5-1.5 1.5S8 12.829 8 12z"
                  fill="currentColor"
                />
                <path
                  d="M12 18c2.5 0 4.5-1.343 4.5-3h-9c0 1.657 2 3 4.5 3z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M18.5 8.5c0 .828-.672 1.5-1.5 1.5-.399 0-.76-.156-1.028-.409C14.934 8.705 13.531 8.2 12 8.2s-2.934.505-3.972 1.391c-.268.253-.629.409-1.028.409-.828 0-1.5-.672-1.5-1.5S5.672 7 6.5 7c.213 0 .416.045.6.125C8.194 6.4 10.019 6 12 6s3.806.4 4.9 1.125c.184-.08.387-.125.6-.125.828 0 1.5.672 1.5 1.5z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
