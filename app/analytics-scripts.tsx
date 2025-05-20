"use client";
import React from "react";

export default function AnalyticsScripts() {
  React.useEffect(() => {
    if (typeof window !== 'undefined' && !("gtagScriptLoaded" in window)) {
      (window as any).gtagScriptLoaded = false;
    }
    const loadGA = () => {
      if ((window as any).gtagScriptLoaded) return;
      (window as any).gtagScriptLoaded = true;
      const script = document.createElement("script");
      script.src = "https://www.googletagmanager.com/gtag/js?id=G-787YJJ5WC7";
      script.async = true;
      document.head.appendChild(script);

      const inlineScript = document.createElement("script");
      inlineScript.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-787YJJ5WC7');
      `;
      document.head.appendChild(inlineScript);
    };

    const events = ["click", "scroll", "keydown"];
    events.forEach(event => window.addEventListener(event, loadGA, { once: true }));

    return () => {
      events.forEach(event => window.removeEventListener(event, loadGA));
    };
  }, []);
  return null;
} 