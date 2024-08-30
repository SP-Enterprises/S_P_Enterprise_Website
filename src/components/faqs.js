"use client";

import React from "react";



const FAQ = () => {
  return (
    <section className="container mx-auto px-5 md:px-16 py-10">
      <h2 className="text-3xl font-semibold text-center text-purple-600 mb-10">
        Frequently Asked Questions
      </h2>

      <div className="space-y-8">
        {/* Question 1 */}
        <div className="p-5 rounded-lg shadow-md border border-neutral-200">
          <h3 className="text-xl font-semibold text-purple-600 mb-2">
            What services does S.P.Enterprise offer?
          </h3>
          <p className="text-neutral-700">
            S.P.Enterprise specializes in web design, graphic design, logo design, UI/UX design, and IT consultancy services. We provide end-to-end solutions to help your business establish a strong online presence.
          </p>
        </div>

        {/* Question 2 */}
        <div className="p-5 rounded-lg shadow-md border border-neutral-200">
          <h3 className="text-xl font-semibold text-purple-600 mb-2">
            How does the design process work at S.P.Enterprise?
          </h3>
          <p className="text-neutral-700">
            Our design process begins with a consultation to understand your goals and preferences. We then create design concepts for review and feedback. After revisions, we finalize the design and deliver the project, ensuring it meets your expectations.
          </p>
        </div>

        {/* Question 3 */}
        <div className="p-5 rounded-lg shadow-md border border-neutral-200">
          <h3 className="text-xl font-semibold text-purple-600 mb-2">
            What is the typical timeline for a project?
          </h3>
          <p className="text-neutral-700">
            The timeline varies depending on the project's scope. Typically, a basic web design project takes 2-4 weeks, while more complex projects may take 6-8 weeks. We provide a detailed timeline during the initial consultation.
          </p>
        </div>

        {/* Question 4 */}
        <div className="p-5 rounded-lg shadow-md border border-neutral-200">
          <h3 className="text-xl font-semibold text-purple-600 mb-2">
            What are the payment terms for your services?
          </h3>
          <p className="text-neutral-700">
            We offer flexible payment terms based on the project size. Typically, we require a 50% deposit to start, with the remaining balance due upon project completion. We accept various payment methods, including bank transfers and online payments.
          </p>
        </div>

        {/* Question 5 */}
        <div className="p-5 rounded-lg shadow-md border border-neutral-200">
          <h3 className="text-xl font-semibold text-purple-600 mb-2">
            How can I get in touch with S.P.Enterprise for a consultation?
          </h3>
          <p className="text-neutral-700">
            You can contact us via email at <a href="mailto:connectspenterprise@gmail.com" className="text-purple-600 hover:underline">connectspenterprise@gmail.com</a> or call us at <a href="tel:+919265324576" className="text-purple-600 hover:underline">(+91) 926-532-4576</a> to schedule a consultation. You can also use the contact form on our website to reach out to us.
          </p>

        </div>
      </div>
    </section>
  );
};

export default FAQ;



