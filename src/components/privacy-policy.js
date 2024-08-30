"use client";



const PrivacyPolicy = () => {
  return (
    <section className="container mx-auto px-5 md:px-16 py-10">
      <h2 className="text-3xl font-semibold text-center text-purple-600 mb-10">
        Privacy Policy
      </h2>

      <div className="space-y-8 text-neutral-700">
        {/* Introduction */}
        <div>
          <h3 className="text-xl font-semibold text-purple-600 mb-2">
            Introduction
          </h3>
          <p>
            At S.P.Enterprise, we are committed to protecting your privacy. This Privacy Policy outlines how we collect, use, and safeguard your information when you interact with our services.
          </p>
        </div>

        {/* Information We Collect */}
        <div>
          <h3 className="text-xl font-semibold text-purple-600 mb-2">
            Information We Collect
          </h3>
          <p>
            We may collect personal information, including your name, email address, phone number, and payment details when you engage our services. Additionally, we collect non-personal information such as browser type, IP address, and cookies to enhance your experience on our website.
          </p>
        </div>

        {/* How We Use Your Information */}
        <div>
          <h3 className="text-xl font-semibold text-purple-600 mb-2">
            How We Use Your Information
          </h3>
          <p>
            The information we collect is used to provide and improve our services, process transactions, communicate with you, and personalize your experience. We may also use your information for marketing purposes with your consent.
          </p>
        </div>

        {/* Sharing Your Information */}
        <div>
          <h3 className="text-xl font-semibold text-purple-600 mb-2">
            Sharing Your Information
          </h3>
          <p>
            We do not share your personal information with third parties except as necessary to provide our services, comply with the law, or protect our rights. We may share non-personal information with partners for analytics and advertising purposes.
          </p>
        </div>

        {/* Data Security */}
        <div>
          <h3 className="text-xl font-semibold text-purple-600 mb-2">
            Data Security
          </h3>
          <p>
            We take appropriate measures to protect your data from unauthorized access, alteration, disclosure, or destruction. Our security practices include encryption, firewalls, and secure server environments.
          </p>
        </div>

        {/* Your Rights */}
        <div>
          <h3 className="text-xl font-semibold text-purple-600 mb-2">
            Your Rights
          </h3>
          <p>
            You have the right to access, correct, or delete your personal information. You may also opt-out of receiving marketing communications from us. Please contact us to exercise these rights.
          </p>
        </div>

        {/* Changes to This Policy */}
        <div>
          <h3 className="text-xl font-semibold text-purple-600 mb-2">
            Changes to This Policy
          </h3>
          <p>
            We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. Your continued use of our services after changes have been made signifies your acceptance of the updated policy.
          </p>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-xl font-semibold text-purple-600 mb-2">
            Contact Us
          </h3>
          <p>
            If you have any questions or concerns about our Privacy Policy, please contact us at:
            <br />
            <b>Contact:</b> <a href="tel:+919265324576" className="text-purple-600 hover:underline">(+91) 926-532-4576</a><br />
            <b>Email:</b> <a href="mailto:connectspenterprise@gmail.com" className="text-purple-600 hover:underline">connectspenterprise@gmail.com</a><br />
            <b>Address 1:</b> SP House, Aadil Park, 33, nr. Darul Uloom Road, Momin Park, Tandalja, Vadodara, Gujarat 390012.<br />
            <b>Address 2:</b> Vancouver, BC V5M 4X5, Canada
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;
