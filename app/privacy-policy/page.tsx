import React from 'react';

export default function PrivacyPolicy() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 text-gray-900">
      <h1 className="text-3xl font-bold mb-8">Privacy Policy</h1>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. Who We Are</h2>
        <p>This website is operated by ArVo XR Labs AB, a company registered in Sweden with organization number 16559527-0199. We are committed to protecting your privacy and handling your data transparently and securely.</p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Information We Collect</h2>
        <p>We only collect limited data through Google Analytics to understand how visitors interact with our site. This includes:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Browser type and version</li>
          <li>Operating system</li>
          <li>Referring URL</li>
          <li>Pages visited and time spent on each page</li>
          <li>IP address (anonymized, where required by law)</li>
        </ul>
        <p className="mt-2">We do not collect any personally identifiable information (PII) through the website itself unless you choose to contact us directly via email.</p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Use of Cookies</h2>
        <p>We use basic Google Analytics cookies to improve website performance and user experience. These cookies help us measure traffic and understand how visitors use the site.</p>
        <p className="mt-2">You can control or disable cookies through your browser settings. Please note that doing so may affect the functionality of some parts of the website.</p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Contact via Email</h2>
        <p>If you contact us using the email link provided on the website, any information you provide (such as your email address and message) will be used solely to respond to your inquiry. We do not share this information with third parties.</p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Legal Basis for Processing (GDPR)</h2>
        <p>Under the General Data Protection Regulation (GDPR), we rely on:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Legitimate interest for collecting analytics data, and</li>
          <li>Consent where applicable for cookies and user communications.</li>
        </ul>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Your Privacy Rights</h2>
        <p>Depending on your location, you may have rights under privacy laws such as the GDPR, CCPA, or CalOPPA, including:</p>
        <ul className="list-disc list-inside ml-4">
          <li>The right to access your personal data</li>
          <li>The right to request deletion or correction</li>
          <li>The right to object to certain data uses</li>
          <li>The right to withdraw consent (where applicable)</li>
        </ul>
        <p className="mt-2">To exercise your rights, contact us at <a href="mailto:info@arvoxrlabs.com" className="text-blue-600 underline">info@arvoxrlabs.com</a>.</p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. Third-Party Services</h2>
        <p>This website uses Google Analytics, a web analytics service provided by Google LLC. Google may process your data in the United States. For more information, see Google's Privacy Policy.</p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">8. Data Retention</h2>
        <p>We retain analytics data for as long as necessary to analyze and improve our website, in accordance with Google Analytics' standard retention settings.</p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">9. Changes to This Policy</h2>
        <p>We may update this Privacy Policy from time to time. The "Effective Date" at the top will indicate when it was last revised.</p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">10. Contact Us</h2>
        <p>For questions or concerns about this Privacy Policy or your data, please contact:</p>
        <address className="not-italic mt-2">
          <div>ArVo XR Labs AB</div>
          <div><a href="mailto:info@arvoxrlabs.com" className="text-blue-600 underline">info@arvoxrlabs.com</a></div>
        </address>
      </section>
    </main>
  );
} 