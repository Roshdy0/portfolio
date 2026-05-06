"use client";
import React from "react";
import Image from "next/image";
import myImage from "../../../public/images/my-image.webp";
import "./about.css";

const About = () => {
  return (
    <section id="about" className="about-section py-20">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center">
          About <span className="gradient-text">Me</span>
        </h2>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="about-image-wrapper lg:w-1/3 flex justify-center">
            <div className="avatar-container">
              <Image
                src={myImage}
                alt="Roshdy_Mammdouh_Frontend_React_NextJS"
                placeholder="blur"
                blurDataURL="data:..."
                className="avatar-img"
                priority={false}
              />
              <div className="neon-circle"></div>
            </div>
          </div>
          <div className="about-content lg:w-2/3">
            <h3 className="text-3xl font-bold">
              Hello, I'm <span className="text-purple-400">Roshdy Mammdouh</span>
            </h3>
            <h4 className="text-xl text-gray-300 font-medium">Frontend Developer | Next.js & React.js</h4>

            <p className="bio-text">
              I am a passionate Frontend Developer with over 3 years of experience specializing in building
              high-performance, scalable web applications. My expertise lies in{" "}
              <strong className="text-purple-400">Next.js</strong> and <strong className="text-blue-400">React</strong>,
              where I transform complex problems into seamless, intuitive user experiences. I write clean, maintainable
              code and always stay updated with the latest UI/UX trends.
            </p>

            <div className="stats-grid grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="stat-card">
                <i className="fa-solid fa-code stat-icon"></i>
                <h4 className="stat-number">3+</h4>
                <p className="stat-label">Years of Exp.</p>
              </div>
              <div className="stat-card">
                <i className="fa-solid fa-layer-group stat-icon"></i>
                <h4 className="stat-number">25+</h4>
                <p className="stat-label">Projects Done</p>
              </div>
              <div className="stat-card">
                <i className="fa-solid fa-bolt stat-icon"></i>
                <h4 className="stat-number">100%</h4>
                <p className="stat-label">Clean Code</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
