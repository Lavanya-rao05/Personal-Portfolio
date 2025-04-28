// About.jsx
import React from "react";

const About = () => {
  return (
    <section id="about" className=" py-20 px-8 sm:px-12">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
        About Me
      </h1>
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-8 px-4">
        {/* Text Section */}
        <div className="text-center">
          <p className="text-lg leading-relaxed mb-6 text-[#4A5568]">
            I’m a passionate developer who loves bringing ideas to life through clean, creative code. 
            From designing intuitive user interfaces to building full-stack web apps, I enjoy every part 
            of the process. I’m always exploring new tools, improving my skills, and looking for ways to 
            blend tech with creativity—whether through code, design, or even my hobbies like drawing and crocheting.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
