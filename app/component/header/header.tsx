"use client";
import React, { useState, useEffect } from "react";
import { Link } from 'react-scroll';
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import "./header.css";

const Header = () => {

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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`main-header pt-4 ${isScrolled ? "scrolled" : " "}`}>
      <nav className="nav-container mx-auto w-[90%] lg:w-[85%] max-w-7xl flex items-center justify-between">
        <div className="logo">
          <span>ROSHDY.DEV</span>
        </div>

        <ul className="nav-links hidden md:flex items-center gap-8">
          {links.map((link, index) => (
            <li key={index}>
              <Link to={link.to}
                className="nav-link"
                spy={true}
                smooth={true}
                duration={1000}
              >
                {link.link}
              </Link>
            </li>
          ))}
        </ul>

        <div className="nav-actions flex items-center gap-4">
          <ThemeToggle />

          <button className="mobile-toggle md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <button className="cta-button hidden md:block">
            <a href="https://wa.me/+0201117651690">
              Let's Talk
            </a>
          </button>
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="mobile-menu md:hidden animate-in fade-in zoom-in">
          <a href="#home" onClick={() => setIsMobileMenuOpen(false)}>
            Home
          </a>
          <a href="#projects" onClick={() => setIsMobileMenuOpen(false)}>
            Projects
          </a>
          <a href="#skills" onClick={() => setIsMobileMenuOpen(false)}>
            Skills
          </a>
          <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
            Contact
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
