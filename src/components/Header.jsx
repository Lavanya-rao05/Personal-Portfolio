import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [active, setActive] = useState("#home");

  const toggleMenu = () => setNavOpen(!navOpen);

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

  const handleLinkClick = (e, href) => {
    e.preventDefault();
    const targetSection = document.querySelector(href);
    if (targetSection) {
      targetSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    setActive(href);
    setNavOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#f6f6f8] bg-opacity-90 shadow-md font-['Bona_Nova_SC'] backdrop-blur-sm">
      <div className="relative flex items-center justify-center px-6 md:px-16 py-4">
        {/* Mobile menu icon */}
        <div
          className="absolute left-6 top-1/2 -translate-y-1/2 text-3xl text-[#18023f] md:hidden cursor-pointer"
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          role="button"
          tabIndex={0}
          onKeyDown={(e) => e.key === "Enter" && toggleMenu()}
        >
          {navOpen ? <FaTimes /> : <FaBars />}
        </div>

        {/* Nav Menu */}
        <nav
          className={`
            fixed top-16 left-0 h-[calc(100vh-4rem)] w-3/4 bg-[#0e0f31] md:static md:h-auto md:w-auto md:bg-transparent
            flex flex-col md:flex-row gap-6 px-6 md:px-0 py-8 md:py-0
            transition-transform duration-300 ease-in-out
            ${navOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0
          `}
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
              onClick={(e) => handleLinkClick(e, href)}
              className={`
                text-xl md:text-2xl font-semibold w-full md:w-auto text-left md:text-center
                pb-2 md:pb-0 border-b-2 md:border-b-0
                transition-colors duration-200 hover:border-b-2
                ${
                  active === href
                    ? "text-[#011aff] border-[#011aff]"
                    : "text-white md:text-[#0e2431] hover:text-[#011aff] hover:border-[#011aff]"
                }
              `}
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
