"use client";
import React from "react";
import Image from "next/image";
import myImage from "../../../public/images/my-image.webp";
import "./hero.css";

const Hero = () => {
  return (
    <section id="home" className="hero-section flex min-h-screen items-center justify-center px-6 py-20">
      <div className="hero-container flex w-full max-w-7xl flex-col items-center justify-between gap-12 md:flex-row">
        <div className="hero-content flex-1 text-center md:text-left">
          <h2 className="hero-subtitle">Frontend Developer | Next.js & React.js</h2>
          <h1 className="hero-title">
            I'm <span className="gradient-text">Roshdy Mammdouh</span>
          </h1>
          <p className="hero-description mx-auto max-w-lg md:mx-0">
            Detail-oriented Frontend Developer equipped with Next.js and Tailwind CSS. Experienced in building
            responsive UI architectures, optimizing web performance (LCP, SEO), and delivering visually engaging digital
            experiences. I focus on writing clean, scalable code that bridges the gap between design and robust
            functionality.
          </p>

          <div className="hero-btns mt-10 flex flex-wrap justify-center gap-6 md:justify-start">
            <button className="btn-primary">
              <a href="https://drive.google.com/file/d/1gdRSGix65G7OQQ8cAsL_ygQqH_ueGr7o/view?usp=drive_link">
                Download CV
              </a>
            </button>
            <button className="btn-secondary">
              <a href="https://linktr.ee/Roshdy_Mammdouh">Contact Me</a>
            </button>
          </div>
        </div>

        <div className="hero-visual flex flex-1 items-center justify-end">
          <div className="visual-card">
            <div className="inner-glass">
              <Image src={myImage} alt="Roshdy_Mammdouh_Frontend_React_NextJS" placeholder="blur" priority={true} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
