import { useEffect, useState } from "react";
//import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close, githubic, linkedinic } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-gradient-to-b from-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <ScrollLink
          to="top"
          smooth={true}
          duration={500}
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-20 h-auto object-contain" />
        </ScrollLink>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          <li className="text-white hover:text-violet text-[18px] font-medium cursor-pointer flex gap-5 mt-0.5">
            <a href="https://github.com/chauhanarya007" target="_blank" rel="noreferrer">
              <img src={githubic} className="h-[1.5rem] w-[1.5rem]" alt="github" />
            </a>
            <a href="https://www.linkedin.com/in/arya-chauhan-1b6397209/" target="_blank" rel="noreferrer">
              <img src={linkedinic} className="h-[1.5rem] w-[1.5rem]" alt="linkedin" />
            </a>
          </li>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-stone-300"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              <ScrollLink to={nav.id} smooth={true} duration={500}>
                {nav.title}
              </ScrollLink>
            </li>
          ))}
        </ul>

        {/* For mobile layout */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer transition duration-350 ease-out hover:ease-in"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-gradient-to-r from-primary to-gray-500 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl transition duration-1550 fade-in`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4 transition duration-150 ease-out hover:ease-in">
              <li className="text-white font-poppins font-medium cursor-pointer text-[16px] flex gap-2">
                <a href="https://github.com/chauhanarya007">
                  <img src={githubic} className="h-[1.5rem] w-[1.5rem]" alt="github" />
                </a>
                <a href="https://www.linkedin.com/in/arya-chauhan-1b6397209/">
                  <img src={linkedinic} className="h-[1.5rem] w-[1.5rem]" alt="linkedin" />
                </a>
              </li>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <ScrollLink to={nav.id} smooth={true} duration={500}>
                    {nav.title}
                  </ScrollLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;