import React from 'react';

export default function AppPrivacyPolicy() {
  return (
    <main className="max-w-3xl mx-auto px-4 py-12 text-gray-900">
      <h1 className="text-3xl font-bold mb-8">Massera Privacy Policy</h1>
      <p className="mb-6 text-sm text-muted-foreground">Last updated: 2025-05-19</p>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">1. About Us</h2>
        <p>Massera is developed and maintained by ArVo XR Labs AB, a company registered in Sweden (Organization Number: 16559527-0199). This Privacy Policy describes how we handle information collected during your use of the Massera app on Meta Quest devices.</p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">2. Information We Collect</h2>
        <p>The Massera app collects anonymous usage data and diagnostic logs to better understand app performance and user behavior. This may include:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Device type and operating system version</li>
          <li>App performance metrics</li>
          <li>Crashes and error reports</li>
          <li>Scene usage and time spent within the app</li>
        </ul>
        <p className="mt-2">This data is collected solely to improve the user experience and identify technical issues. It does not include personally identifiable information.</p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">3. Log Data</h2>
        <p>In the event of a crash or error, diagnostic data may be automatically collected through the app. This Log Data can include:</p>
        <ul className="list-disc list-inside ml-4">
          <li>Device name and OS version</li>
          <li>App settings and activity at the time of the issue</li>
          <li>Timestamps and error traces</li>
        </ul>
        <p className="mt-2">This information helps our developers identify and fix bugs.</p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">4. Data Security</h2>
        <p>We implement reasonable security measures to protect the anonymous data we collect. While we aim to ensure high standards of data protection, no digital system is completely secure. We cannot guarantee absolute security but take our responsibility seriously.</p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">5. Children's Privacy</h2>
        <p>The Massera app is not intended for children under 13 years of age. We do not knowingly collect data from users under this age. If we discover such data has been collected, we will delete it. Parents or guardians may contact <a href="mailto:info@arvoxrlabs.com" className="text-blue-600 underline">info@arvoxrlabs.com</a> to request removal.</p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">6. Changes to This Privacy Policy</h2>
        <p>We may update this policy as the app evolves. The "Last updated" date at the top reflects the most recent changes. Users are encouraged to review this policy periodically.</p>
      </section>
      <section className="mb-6">
        <h2 className="text-xl font-semibold mb-2">7. Contact Us</h2>
        <p>For privacy-related questions or concerns, contact:</p>
        <address className="not-italic mt-2">
          <div>ArVo XR Labs AB</div>
          <div>Email: <a href="mailto:info@arvoxrlabs.com" className="text-blue-600 underline">info@arvoxrlabs.com</a></div>
        </address>
      </section>
    </main>
  );
} 