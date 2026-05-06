"use client";
import React, { useState, useEffect } from "react";
import { ArrowUp, MessageCircle } from "lucide-react"; // أيقونة الدردشة
import { animateScroll as scroll } from "react-scroll";
import "./FloatingButtons.css";

const FloatingButtons = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    scroll.scrollToTop({ duration: 800, smooth: "easeInOutQuart" });
  };

  return (
    <div className={`floating-container ${isVisible ? "visible" : ""}`}>
      <button onClick={scrollToTop} className="scroll-btn" title="Back to Top">
        <ArrowUp size={24} />
      </button>
    </div>
  );
};

export default FloatingButtons;
