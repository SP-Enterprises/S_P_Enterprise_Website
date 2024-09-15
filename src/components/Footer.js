"use client";
import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";

const Footer = ({ onLegalLinkClick }) => {
  return (
    <footer className="border-t border-neutral-200 mt-16 px-5 md:px-16 py-10 md:py-16" id="contact us">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <Link href={"/"} className="text-3xl">
              <b><span className="text-purple-600 aquire-bold" >S.P.</span><span className="aquire-bold">Enterprise.</span></b>
            </Link>
            <p className="max-w-xs mt-4 text-sm">
              End-to-End Excellence in Web and Graphic Design. Seamless Solutions from Concept to Completion.
            </p>
            <div className="flex mt-8 space-x-6">
              <Link href="https://www.instagram.com/s.p.enterprise__/" target="_blank" rel="noopener noreferrer">
                <InstagramIcon className="hover:text-purple-600 hover:-translate-y-1 transition-all" />
              </Link>
              <Link href="https://github.com/SP-Enterprises" target="_blank" rel="noopener noreferrer">
                <GitHubIcon className="hover:text-purple-600 hover:-translate-y-1 transition-all" />
              </Link>
              <Link href="https://www.linkedin.com/in/samir-khan-b28363207/" target="_blank" rel="noopener noreferrer">
                <LinkedInIcon className="hover:text-purple-600 hover:-translate-y-1 transition-all" />
              </Link>
              <Link href="https://x.com/Sam0192001" target="_blank" rel="noopener noreferrer">
                <TwitterIcon className="hover:text-purple-600 hover:-translate-y-1 transition-all" />
              </Link>
            </div>
          </div>

          <div className="grid gap-8 lg:col-span-2 grid-cols-2 md:grid-cols-4">
            <div>
              <p className="font-medium">Company</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm">
                <Link href="#about us" className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit">About</Link>
                <Link href="#our team" className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit">Our Team</Link>
                <Link href="#Subscribe" className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit">Careers</Link>
                <Link href="#contact us" className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit">Contact</Link>
                <button onClick={() => onLegalLinkClick("faqs")} className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit text-left">FAQs</button>
              </nav>
            </div>
            <div>
              <p className="font-medium">Services</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm ">
                <Link href="#services" className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit">Web Development</Link>
                <Link href="#services" className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit">Graphic Design</Link>
                <Link href="#services" className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit">Logo Design</Link>
                <Link href="#services" className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit">Monogram Design</Link>
                <Link href="#services" className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit">Digital Marketing</Link>
                <Link href="#services" className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit">UI / UX</Link>
              </nav>
            </div>
            <div>
              <p className="font-medium" id="legal-content">Legal</p>
              <nav className="flex flex-col mt-4 space-y-2 text-sm ">
                <button onClick={() => onLegalLinkClick("privacy-policy")} className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit text-left">Privacy Policy</button>
                <button onClick={() => onLegalLinkClick("terms-and-conditions")} className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit text-left">Terms &amp; Conditions</button>
                <button onClick={() => onLegalLinkClick("returns-policy")} className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit text-left">Returns Policy</button>
                <button onClick={() => onLegalLinkClick("accessibility")} className="hover:opacity-75 hover:border-b hover:border-neutral-400 w-fit text-left">Accessibility</button>
              </nav>
            </div>
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d118134.04926302312!2d73.06591557225627!3d22.289766204772473!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x395fc7b52c7fa039%3A0xc1a0439e6bdbc071!2sSP%20House%2C%20Aadil%20Park%2C%2033%2C%20nr.%20Darul%20Uloom%20Road%2C%20Momin%20Park%2C%20Tandalja%2C%20Vadodara%2C%20Gujarat%20390012!3m2!1d22.289787!2d73.1483172!5e0!3m2!1sen!2sin!4v1724661972308!5m2!1sen!2sin"
                width="130"
                height="130"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>
        </div>
        <p className="mt-8 text-xs">
          <b>Contact:</b> <a href="tel:+919265324576" className="text-purple-600 hover:underline">(+91) 926-532-4576</a><br />
          <b>Email:</b> <a href="mailto:connectspenterprise@gmail.com" className="text-purple-600 hover:underline">connectspenterprise@gmail.com</a><br />
          <b>Address 1:</b> SP House, Aadil Park, 33, nr. Darul Uloom Road, Momin Park,<br /> Tandalja, Vadodara, Gujarat 390012.<br />
          <b>Address 2:</b> Vancouver, BC V5M 4X5, Canada

          <br />
          © 2024 <span className="text-purple-600 aquire-bold" >S.P.</span><span className="aquire-bold">Enterprise.</span> - All rights reserved
        </p>

      </div>
    </footer>
  );
};

export default Footer;
