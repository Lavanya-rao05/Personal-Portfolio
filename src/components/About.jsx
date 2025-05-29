// About.jsx
import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="py-20 px-6 sm:px-12 bg-[#f6f6f8] text-[#1a202c] font-['Bona_Nova_SC']"
    >
      {/* Section Heading */}
      <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-blue-700 mb-12 tracking-wide">
        About Me
      </h1>

      {/* Centered Content */}
      <div className="max-w-3xl mx-auto text-center animate-fadeInUp">
        <p className="text-lg sm:text-xl leading-relaxed text-[#4A5568] mb-6">
          I'm a <span className="font-semibold  text-blue-700">passionate developer</span> who loves bringing ideas to life
          through clean, creative code. Whether it's crafting intuitive UIs or
          building full-stack web applications, I thrive on turning complex
          problems into simple, elegant solutions.
        </p>
        <p className="text-lg sm:text-xl leading-relaxed text-[#4A5568]">
          Always curious and constantly learning, I enjoy diving into new
          technologies and blending tech with creativity whether through
          <span className="italic  text-blue-700"> code, design</span>, or hobbies like{" "}
          <span className="italic  text-blue-700">drawing and crocheting</span>.
        </p>
      </div>
    </section>
  );
};

export default About;
