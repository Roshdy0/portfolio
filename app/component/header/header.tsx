"use client";
import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";
import ThemeToggle from "./ThemeToggle";
import { Menu } from "lucide-react";
import MobileMenu from "./MobileMenu/MobileMenu";
import "./header.css";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const links = [
    {
      to: "home",
      link: "home",
    },
    {
      to: "skills",
      link: "skills",
    },
    {
      to: "about",
      link: "about",
    },
    {
      to: "projects",
      link: "projects",
    },
    {
      to: "contact",
      link: "contact",
    },
  ];

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`main-header pt-4 ${isScrolled ? "scrolled" : ""}`}>
      <nav className="nav-container mx-auto w-[90%] lg:w-[85%] max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <div className="logo">
          <span>ROSHDY.DEV</span>
        </div>

        {/* Links */}
        <ul className="nav-links hidden md:flex items-center gap-8">
          {links.map((link, index) => (
            <li key={index}>
              <Link to={link.to} className="nav-link" spy={true} smooth={true} duration={1000}>
                {link.link}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-actions flex items-center gap-6 md:gap-4">
          <ThemeToggle />

          <button className="cta-button hidden md:block">
            <a href="https://wa.me/+0201117651690">Let's Talk</a>
          </button>

          {/* Mobile Menu */}
          <button
            className="mobile-toggle md:hidden bg-transparent border-none text-[--text-main] cursor-pointer flex items-center justify-center p-2"
            onClick={() => setIsMobileMenuOpen(true)}
            style={{ color: "var(--text-main)" }}
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/*Mobile Menu*/}
      <MobileMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)} />
    </header>
  );
};

export default Header;
