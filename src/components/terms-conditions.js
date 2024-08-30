"use client";

import React from "react";

const TermsAndConditions = () => {
  return (
    <section className="container mx-auto px-5 md:px-16 py-10">
      <h2 className="text-3xl font-semibold text-center text-purple-600 mb-10">
        Terms & Conditions
      </h2>

      <div className="space-y-8 text-neutral-700">
        {/* Introduction */}
        <div>
          <h3 className="text-xl font-semibold text-purple-600 mb-2">
            Introduction
          </h3>
          <p>
            Welcome to S.P.Enterprise. These Terms & Conditions govern your use of our website and services. By accessing or using our website, you agree to comply with and be bound by these terms. If you do not agree with any part of these terms, please do not use our website.
          </p>
        </div>

        {/* Use of Our Website */}
        <div>
          <h3 className="text-xl font-semibold text-purple-600 mb-2">
            Use of Our Website
          </h3>
          <p>
            You agree to use our website only for lawful purposes and in a manner that does not infringe upon the rights of others or restrict their use and enjoyment of the site. Unauthorized use of the website may result in legal action.
          </p>
        </div>

        {/* Intellectual Property */}
        <div>
          <h3 className="text-xl font-semibold text-purple-600 mb-2">
            Intellectual Property
          </h3>
          <p>
            All content on our website, including text, graphics, logos, and images, is the property of S.P.Enterprise or its content suppliers and is protected by copyright and intellectual property laws. You may not reproduce, distribute, or create derivative works from our content without our explicit consent.
          </p>
        </div>

        {/* Limitation of Liability */}
        <div>
          <h3 className="text-xl font-semibold text-purple-600 mb-2">
            Limitation of Liability
          </h3>
          <p>
            S.P.Enterprise shall not be liable for any indirect, incidental, or consequential damages arising from your use of our website or services. We make no warranties or representations regarding the accuracy or completeness of the content on our website.
          </p>
        </div>

        {/* User Content */}
        <div>
          <h3 className="text-xl font-semibold text-purple-600 mb-2">
            User Content
          </h3>
          <p>
            By submitting content to our website, you grant S.P.Enterprise a non-exclusive, royalty-free, perpetual, and worldwide license to use, reproduce, modify, and distribute such content. You are responsible for ensuring that your content does not violate any third-party rights or applicable laws.
          </p>
        </div>

        {/* Changes to Terms */}
        <div>
          <h3 className="text-xl font-semibold text-purple-600 mb-2">
            Changes to Terms
          </h3>
          <p>
            We reserve the right to update or modify these Terms & Conditions at any time. Any changes will be posted on this page with an updated revision date. Your continued use of our website after changes have been made signifies your acceptance of the updated terms.
          </p>
        </div>

        {/* Governing Law */}
        <div>
          <h3 className="text-xl font-semibold text-purple-600 mb-2">
            Governing Law
          </h3>
          <p>
            These Terms & Conditions are governed by and construed in accordance with the laws of the State of Gujarat, India. Any disputes arising under or in connection with these terms shall be subject to the exclusive jurisdiction of the courts of Vadodara, Gujarat.
          </p>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-xl font-semibold text-purple-600 mb-2">
            Contact Us
          </h3>
          <p>
            If you have any questions or concerns about these Terms & Conditions, please contact us at:
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

export default TermsAndConditions;
