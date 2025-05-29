// File: Home.jsx
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import myPic from "/assets/myphoto.jpg";
import resume from "/assets/Lavanya_resume_v5.pdf";

const Home = () => {
  return (
    <section
      id="home"
      className="flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-[10%] py-20 bg-[#f5f3ffz] font-['Bona_Nova_SC'] md:min-h-screen"
    >
      {/* Left Content */}
      <div className="flex-1 z-10 text-center md:text-left animate-fadeInUp">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#002057] mb-6 leading-tight">
          Hello there,
          <br /> &nbsp;&nbsp;&nbsp; I'm <span className=" text-blue-700">Lavanya</span>
        </h2>

        {/* Social Icons */}
        <div className="mt-8 mb-6">
          <ul className="flex justify-center md:justify-start gap-6 md:pl-6">
            <li>
              <a
                href="https://www.linkedin.com/in/lavanya-rao245"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00d9ff] bg-[#09011b] w-12 h-12 rounded-full flex items-center justify-center text-2xl hover:text-white hover:bg-[#0077b5] transition-all duration-300 shadow-md"
              >
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/Lavanya-rao05"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#00d9ff] bg-[#09011b] w-12 h-12 rounded-full flex items-center justify-center text-2xl hover:text-white hover:bg-[#333] transition-all duration-300 shadow-md"
              >
                <FaGithub />
              </a>
            </li>
            <li>
              <a
                href="mailto:Lavanyarao0502@gmail.com"
                className="text-[#00d9ff] bg-[#09011b] w-12 h-12 rounded-full flex items-center justify-center text-2xl hover:text-white hover:bg-[#ea4335] transition-all duration-300 shadow-md"
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
          className="inline-block mt-6 px-10 py-4 rounded-full text-white bg-[#2506ad] text-lg font-bold shadow-md hover:bg-[#1a047e] transition duration-300 tracking-wide"
        >
          Download Resume
        </a>
      </div>

      {/* Profile Image */}
      <div className="flex-1 flex justify-center md:justify-end animate-fadeIn hidden md:flex">
        <img
          src={myPic}
          alt="Lavanya"
          className="w-52 sm:w-64 md:w-[70%] max-w-[500px] rounded-full shadow-lg hover:shadow-xl transition-shadow duration-300 object-cover"
          draggable="false"
        />
      </div>
    </section>
  );
};

export default Home;
