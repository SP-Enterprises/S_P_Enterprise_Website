"use client";

import React from "react";

const ReturnsPolicy = () => {
  return (
    <section className="container mx-auto px-5 md:px-16 py-10">
      <h2 className="text-3xl font-semibold text-center text-purple-600 mb-10">
        Returns Policy
      </h2>

      <div className="space-y-8 text-neutral-700">
        {/* Introduction */}
        <div>
          <h3 className="text-xl font-semibold text-purple-600 mb-2">
            Introduction
          </h3>
          <p>
            At S.P.Enterprise, we are committed to providing high-quality services and products. If you are not satisfied with your purchase, please review our Returns Policy below to understand our procedures and guidelines for returning products or requesting refunds.
          </p>
        </div>

        {/* Return Eligibility */}
        <div>
          <h3 className="text-xl font-semibold text-purple-600 mb-2">
            Return Eligibility
          </h3>
          <p>
            To be eligible for a return, your request must meet the following criteria:
            <ul className="list-disc list-inside ml-5">
              <li>The request must be made within 30 days of the purchase date.</li>
              <li>The product or service must be unused, in its original condition, and packaging if applicable.</li>
              <li>Proof of purchase must be provided.</li>
            </ul>
          </p>
        </div>

        {/* Non-Returnable Items */}
        <div>
          <h3 className="text-xl font-semibold text-purple-600 mb-2">
            Non-Returnable Items
          </h3>
          <p>
            The following items are non-returnable:
            <ul className="list-disc list-inside ml-5">
              <li>Customized or personalized products</li>
              <li>Digital products or services once the delivery has been completed</li>
              <li>Products or services that are not in their original condition or packaging</li>
            </ul>
          </p>
        </div>

        {/* Return Process */}
        <div>
          <h3 className="text-xl font-semibold text-purple-600 mb-2">
            Return Process
          </h3>
          <p>
            To initiate a return, please follow these steps:
            <ol className="list-decimal list-inside ml-5">
              <li>Contact our customer service team at <b><a href="mailto:connectspenterprise@gmail.com" className="text-purple-600 hover:underline">connectspenterprise@gmail.com</a></b> or call us at <b><a href="tel:+919265324576" className="text-purple-600 hover:underline">(+91) 926-532-4576</a></b> to request a return authorization.</li>
              <li>Provide your order number and reason for return.</li>
              <li>Upon receiving authorization, carefully package the product and include the proof of purchase.</li>
              <li>Ship the product to the address provided by our customer service team.</li>
              <li>Once we receive and inspect the returned item, we will process your refund or exchange as applicable.</li>
            </ol>
          </p>
        </div>

        {/* Refunds */}
        <div>
          <h3 className="text-xl font-semibold text-purple-600 mb-2">
            Refunds
          </h3>
          <p>
            Refunds will be processed to the original payment method used at the time of purchase. The processing time may vary depending on your bank or payment provider, but generally takes 5-7 business days. If you do not receive your refund within this period, please contact us for assistance.
          </p>
        </div>

        {/* Exchanges */}
        <div>
          <h3 className="text-xl font-semibold text-purple-600 mb-2">
            Exchanges
          </h3>
          <p>
            If you need to exchange a product for a different size or variant, please follow the same return process outlined above. Once we receive the returned item, we will process the exchange and send the replacement product. Shipping costs for exchanges will be covered by the customer unless the return is due to our error.
          </p>
        </div>

        {/* Contact Us */}
        <div>
          <h3 className="text-xl font-semibold text-purple-600 mb-2">
            Contact Us
          </h3>
          <p>
            For any questions or concerns regarding our Returns Policy, please contact us at:
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

export default ReturnsPolicy;
