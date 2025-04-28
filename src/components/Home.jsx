// File: Home.jsx
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import myPic from "/assets/myphoto.jpg"; // Replace with actual path
import resume from "/assets/Lavanya_resume_v5.pdf"; // Replace with actual path

const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col md:flex-row items-center justify-between px-8 md:px-[9%] py-16  font-['Bona_Nova_SC']"
    >
      {/* Left Content */}
      <div className="flex-1 z-10 text-center md:text-left">
        <h2 className="text-5xl md:text-[5rem] font-extrabold text-[#002057] mb-6 leading-tight">
          Hello there,<br /> I'm Lavanya
        </h2>

        {/* Social Icons */}
        <div className="mt-12 mb-6">
          <ul className="flex justify-center md:justify-start gap-4">
            <li>
              <a
                href="https://www.linkedin.com/in/lavanya-rao245"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00d9ff] bg-[#09011b] w-11 h-11 rounded-full flex items-center justify-center text-2xl hover:text-white hover:bg-[#0685da] transition-all"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Lavanya-rao05"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00d9ff] bg-[#09011b] w-11 h-11 rounded-full flex items-center justify-center text-2xl hover:text-white hover:bg-[#0685da] transition-all"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href="mailto:Lavanyarao0502@gmail.com"
                className="text-[#00d9ff] bg-[#09011b] w-11 h-11 rounded-full flex items-center justify-center text-2xl hover:text-white hover:bg-[#0685da] transition-all"
              >
                <FaEnvelope />
              </a>
            </li>
          </ul>
        </div>

        {/* Resume Button */}
        <a
          href={resume}
          download
          className="inline-block mt-6 px-8 py-4 rounded-full text-white bg-[#2506ad] font-bold text-lg shadow-lg hover:bg-[#1a047e] transition duration-300"
        >
          <span className="tracking-wide text-[1.7rem] font-bold">Resume</span>
        </a>
      </div>

      {/* Profile Image */}
      <div className="flex-1 flex justify-center md:justify-end mt-16 md:mt-0">
        <img
          src={myPic}
          alt="Lavanya"
          className="w-60 md:w-[70%] rounded-full shadow-md hover:shadow-[0_5px_15px_rgba(0,0,0,0.5)] cursor-pointer transition duration-300"
          draggable="false"
        />
      </div>
    </section>
  );
};

export default Home;
