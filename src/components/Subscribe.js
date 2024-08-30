"use client";

import { useState } from "react";
import emailjs from "emailjs-com"; // Import EmailJS

const GetQuoteNow = () => {
  const [btnText, setBtnText] = useState("Get Quote Now / Submit");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState(""); // New state for mobile number
  const [service, setService] = useState("Web Design");
  const [plan, setPlan] = useState("Basic Web Design Package");

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    setBtnText("Submitting...");

    const templateParams = {
      name,
      email,
      mobile, // Include mobile number in template params
      service,
      plan: service === "Career with Us" ? "N/A" : plan, // Set plan to "N/A" if service is "Career with Us"
    };

    emailjs
      .send(
        "service_5z0xmwt", // Replace with your EmailJS Service ID
        "template_0e3ajfk", // Replace with your EmailJS Template ID
        templateParams,
        "CEkEt0eO5ZaejHFMS" // Replace with your EmailJS User ID
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setBtnText("Get Quote Now / Submit");
        },
        (err) => {
          console.error("FAILED...", err);
          setBtnText("Get Quote Now / Submit");
        }
      );
  };

  return (
    <section className="container mx-auto px-5 md:px-16" id="Subscribe">
      <div className="bg-purple-600 rounded-lg text-white py-16 sm:py-24">
        <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4 sm:gap-6 w-[90%] md:w-4/5 lg:w-1/2 text-center mx-auto">
          <h2 className="text-2xl sm:text-4xl font-semibold">Get a Quote Now!!!</h2>
          <p className="leading-loose font-[500]">Enter your details below and we will contact you ASAP!</p>

          <input
            required
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="rounded-full bg-white px-3 py-4 text-center sm:text-left sm:p-6 border-none outline-none w-full font-[500] text-black"
          />

          <input
            required
            type="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="rounded-full bg-white px-3 py-4 text-center sm:text-left sm:p-6 border-none outline-none w-full font-[500] text-black"
          />

          <input
            required
            type="tel"
            placeholder="Enter your mobile number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            className="rounded-full bg-white px-3 py-4 text-center sm:text-left sm:p-6 border-none outline-none w-full font-[500] text-black"
          />

          <select
            required
            value={service}
            onChange={(e) => setService(e.target.value)}
            className="rounded-full bg-white px-3 py-4 text-center sm:text-left sm:p-6 border-none outline-none w-full font-[500] text-black"
          >
            <option value="Web Design">Web Design</option>
            <option value="Graphic Design">Graphic Design</option>
            <option value="Career with Us">Career with Us</option>
          </select>

          {service !== "Career with Us" && (
            <select
              required
              value={plan}
              onChange={(e) => setPlan(e.target.value)}
              className="rounded-full bg-white px-3 py-4 text-center sm:text-left sm:p-6 border-none outline-none w-full font-[500] text-black"
            >
              <option value="Basic Web Design Package">Basic Web Design Package</option>
              <option value="Standard Web Design Package">Standard Web Design Package</option>
              <option value="Premium Web Design Package">Premium Web Design Package</option>
              <option value="Basic Design Package">Basic Design Package</option>
              <option value="Standard Design Package">Standard Design Package</option>
              <option value="Premium Design Package">Premium Design Package</option>
            </select>
          )}

          <button
            type="submit"
            className="w-full mt-5 capitalize md:text-base text-sm hover:border-2 border-2 border-transparent font-semibold py-4 px-7 text-white bg-purple-500 hover:border-purple-600 hover:bg-purple-700 hover:shadow-2xl hover:shadow-purple-600 rounded-full"
          >
            {btnText}
          </button>
        </form>
      </div>
    </section>
  );
};

export default GetQuoteNow;
