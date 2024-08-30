"use client";

import React from "react";

const Accessibility = () => {
  return (
    <section className="container mx-auto px-5 md:px-16 py-10" >
      <h2 className="text-3xl font-semibold text-center text-purple-600 mb-10">
        Accessibility Statement
      </h2>

      <div className="space-y-8 text-neutral-700">
        {/* Introduction */}
        <div>
          <h3 className="text-xl font-semibold text-purple-600 mb-2">
            Introduction
          </h3>
          <p>
            S.P.Enterprise is committed to ensuring digital accessibility for people with disabilities. We strive to make our website accessible to everyone, regardless of their abilities or disabilities. This Accessibility Statement outlines our ongoing efforts to improve accessibility and the measures we have put in place to enhance the user experience for all our visitors.
          </p>
        </div>

        {/* Accessibility Features */}
        <div>
          <h3 className="text-xl font-semibold text-purple-600 mb-2">
            Accessibility Features
          </h3>
          <p>
            We have implemented the following accessibility features on our website:
            <ul className="list-disc list-inside ml-5">
              <li>Text alternatives for non-text content (e.g., images, videos) to ensure screen readers can interpret the content.</li>
              <li>Keyboard navigation support to enable users to navigate the website without the need for a mouse.</li>
              <li>Accessible forms with clear labels and instructions to assist users in completing and submitting forms.</li>
              <li>Color contrast adjustments to ensure readability and visibility for users with visual impairments.</li>
              <li>Consistent and predictable navigation to enhance usability and accessibility.</li>
            </ul>
          </p>
        </div>

        {/* Ongoing Efforts */}
        <div>
          <h3 className="text-xl font-semibold text-purple-600 mb-2">
            Ongoing Efforts
          </h3>
          <p>
            We are continually working to improve the accessibility of our website and make it easier for all users to access and interact with our content. Our efforts include:
            <ul className="list-disc list-inside ml-5">
              <li>Regular audits and updates to ensure compliance with accessibility standards and guidelines.</li>
              <li>Implementing user feedback to address accessibility issues and enhance user experience.</li>
              <li>Training our team members on accessibility best practices and guidelines.</li>
              <li>Staying informed about the latest accessibility trends and technologies to keep our website up-to-date.</li>
            </ul>
          </p>
        </div>

        {/* Reporting Accessibility Issues */}
        <div>
          <h3 className="text-xl font-semibold text-purple-600 mb-2">
            Reporting Accessibility Issues
          </h3>
          <p>
            If you encounter any accessibility issues while using our website, please let us know so we can address them promptly. You can reach us at:
            <br />
            <b>Contact:</b> <a href="tel:+919265324576" className="text-purple-600 hover:underline">(+91) 926-532-4576</a><br />
            <b>Email:</b> <a href="mailto:connectspenterprise@gmail.com" className="text-purple-600 hover:underline">connectspenterprise@gmail.com</a><br />
            <b>Address 1:</b> SP House, Aadil Park, 33, nr. Darul Uloom Road, Momin Park, Tandalja, Vadodara, Gujarat 390012.<br />
            <b>Address 2:</b> Vancouver, BC V5M 4X5, Canada          </p>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-xl font-semibold text-purple-600 mb-2">
            Contact Information
          </h3>
          <p>
            For further information or if you have any questions about our accessibility efforts, please contact us at:
            <br />
            <b>Contact:</b> <a href="tel:+919265324576" className="text-purple-600 hover:underline">(+91) 926-532-4576</a><br />
            <b>Email:</b> <a href="mailto:connectspenterprise@gmail.com" className="text-purple-600 hover:underline">connectspenterprise@gmail.com</a><br />
            <b>Address 1:</b> SP House, Aadil Park, 33, nr. Darul Uloom Road, Momin Park, Tandalja, Vadodara, Gujarat 390012.<br />
            <b>Address 2:</b> Vancouver, BC V5M 4X5, Canada          </p>
        </div>
      </div>
    </section>
  );
};

export default Accessibility;
