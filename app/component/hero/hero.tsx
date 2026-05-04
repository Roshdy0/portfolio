"use client";
import React from "react";
import Image from "next/image";
import myImage from "../../../public/images/my-image.png";
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
            Frontend Developer equipped with an advanced tech stack (React.js, Next.js, Tailwind CSS) and a strong
            analytical mindset. Experienced in building responsive web applications, managing CMS platforms, and
            optimizing system performance. Focused on delivering secure, scalable, and visually engaging digital
            experiences.
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
              <Image src={myImage} alt="Roshdy_Mammdouh_Frontend_React_NextJS" priority />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
