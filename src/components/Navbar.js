"use client";

import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeRoundedIcon from "@mui/icons-material/LightModeRounded";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "next-themes";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [selectedItem, setSelectedItem] = useState("/");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const navbar = useRef();

  useEffect(() => {
    window.onscroll = () => {
      setMounted(true);
      if (window.pageYOffset >= 200) {
        navbar.current.classList.add("shadow");
      } else {
        navbar.current.classList.remove("shadow");
      }
    };

    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setSelectedItem(entry.target.id);
          }
        });
      },
      { threshold: 0.7 } // Adjust the threshold value to control when the section is considered "active"
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  return (
    <div
      ref={navbar}
      className={`${theme === "dark" ? "bg-[#121212]" : "bg-white text-black"
        } w-full z-50 fixed top-0 left-0 py-4 mb-10`}
    >
      <div className="container px-5 md:px-16 flex items-center justify-between mx-auto">
        <div className="flex items-center gap-2">
          <img
            src={"/logo.png"} // Replace with the path to your logo
            alt="S.P. Enterprise"
            className="w-12 h-auto border-2 border-purple-600 shadow-lg transition-all duration-300 hover:border-purple-800 hover:shadow-xl hover:scale-105 rounded-lg"
          />
          <h2 className="text-xl font-semibold transition-all duration-300 hover:text-purple-600">
            <span className="text-purple-600 transition-colors duration-300 hover:text-purple-600">
              S.P.
            </span>
            <span className="transition-colors duration-300 hover:text-purple-600">
              Enterprise.
            </span>
          </h2>
        </div>


        <div>
          <ul
            className={`${toggleMenu === true ? "left-0" : "-left-full"
              } ${theme === "dark"
                ? "bg-[#121212] text-white"
                : "bg-white text-black"
              } z-50 flex md:items-center gap-1 md:gap-5 lg:gap-10 md:relative absolute top-0 md:left-0 w-80 transition-all duration-500 h-screen md:w-auto md:h-auto flex-col md:flex-row shadow-2xl py-24 px-10 md:p-0 md:shadow-none`}
          >
            <button
              className={`${theme === "dark" ? "text-white" : "text-black"
                } md:hidden absolute top-6 right-5`}
              onClick={() => setToggleMenu(false)}
            >
              <CloseOutlinedIcon />
            </button>
            {["home", "services", "About Us", "Our Team", "Contact Us"].map(
              (link) => (
                <li
                  key={link}
                  className={`${selectedItem === link.toLowerCase()
                    ? "text-purple-600"
                    : ""
                    } capitalize border-b py-4 md:border-none md:py-0 hover:text-purple-600`}
                  onClick={() => setSelectedItem(link.toLowerCase())}
                >
                  <Link href={`#${link.toLowerCase()}`}>{link}</Link>
                </li>
              )
            )}
            <div className="md:hidden mx-auto absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-3">
              <Link target="_blank" href={"https://www.linkedin.com/in/samir-khan-b28363207/"}>
                <LinkedInIcon className="cursor-pointer hover:text-purple-600 text-xl" />
              </Link>
              <Link target="_blank" href={"https://github.com/SP-Enterprises"}>
                <GitHubIcon className="cursor-pointer hover:text-purple-600 text-xl" />
              </Link>
              <Link target="_blank" href={"https://www.instagram.com/sam.eer1910?igsh=emltdWc1MWU5cHdh&utm_source=qr"}>
                <InstagramIcon className="cursor-pointer hover:text-purple-600 text-xl" />
              </Link>
            </div>
          </ul>
        </div>

        <div className="flex items-center gap-1 sm:gap-2 md:gap-1 lg:gap-2">
  <button className="capitalize text-xs sm:text-sm border-2 font-semibold sm:py-2 py-1 px-2 sm:px-4 text-purple-600 border-purple-600 hover:border-purple-600 hover:bg-purple-600 hover:text-white rounded-full">
    <Link href={"#pricing"}>Get Started</Link>
  </button>
  <button>
    {theme === "dark" ? (
      <LightModeRoundedIcon
        onClick={() => setTheme("light")}
        className="text-white"
      />
    ) : (
      <DarkModeOutlinedIcon onClick={() => setTheme("dark")} />
    )}
  </button>
  <button
    aria-label="menu"
    className={`${theme === "dark" ? "text-white" : "text-black"} md:hidden`}
    onClick={() => setToggleMenu(true)}
  >
    <MenuIcon />
  </button>
</div>

      </div>
    </div>
  );
};

export default Navbar;
