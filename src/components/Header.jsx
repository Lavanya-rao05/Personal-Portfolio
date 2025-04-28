import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [active, setActive] = useState("#home");

  const toggleMenu = () => setNavOpen(!navOpen);

  // Set active nav item on scroll or link click
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      const scrollPos = window.scrollY + 200;
      sections.forEach((section) => {
        if (
          scrollPos >= section.offsetTop &&
          scrollPos < section.offsetTop + section.offsetHeight
        ) {
          setActive(`#${section.id}`);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle navigation link click to prevent page reload and smooth scroll
  const handleLinkClick = (e, href) => {
    e.preventDefault(); // Prevent the default anchor link behavior
    const targetSection = document.querySelector(href);
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start", // Ensures the target section is aligned at the top
      });
    }
    setActive(href); // Update active state for highlighting
    setNavOpen(false); // Close the mobile menu if it's open
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white bg-opacity-80 shadow-md font-['Bona_Nova_SC']">
      <div className="flex items-center justify-center px-6 md:px-16 py-4">
        {/* Mobile menu icon */}
        <div
          className="absolute left-6 text-3xl text-[#18023f] md:hidden cursor-pointer"
          onClick={toggleMenu}
        >
          {navOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Nav Menu */}
        <nav
          className={`${
            navOpen ? "right-0" : "-right-full"
          } md:static md:flex md:items-center absolute top-20 md:top-0 bg-[#0e0f31] md:bg-transparent w-3/4 md:w-auto h-full md:h-auto flex flex-col md:flex-row gap-6 px-6 md:px-0 transition-all duration-300 ease-in-out`}
        >
          {[
            ["Home", "#home"],
            ["About", "#about"],
            ["Education", "#education"],
            ["Skills", "#skills"],
            ["Projects", "#projects"],
            ["Contact", "#contact"],
          ].map(([title, href], index) => (
            <a
              key={index}
              href={href}
              className={`text-xl md:text-2xl font-semibold w-full md:w-auto text-left md:text-center pb-1 md:pb-0 transition-all border-b-0 hover:border-b-2 ${
                active === href
                  ? "text-[#011aff] border-b-2 border-[#011aff]"
                  : "text-white md:text-[#0e2431] hover:text-[#011aff] hover:border-[#011aff]"
              }`}
              onClick={(e) => handleLinkClick(e, href)} // Use the custom scroll function
            >
              {title}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
