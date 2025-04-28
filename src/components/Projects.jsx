import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const projects = [
  {
    title: "Object Detection App",
    tech: "HTML, CSS, Python (Flask), OpenCV, YOLO",
    link: "https://github.com/Lavanya-rao05/Object-Detection-App",
    image: "/assets/object.jpeg",
  },
  {
    title: "ZeroWasteX Smart Waste Disposal System",
    tech: "MERN Stack, OpenRouteService API",
    link: "https://github.com/Lavanya-rao05/ZeroWasteX-Smart-Waste-Disposal-System",
    image: "/assets/zero-waste.jpg",
  },
  {
    title: "PCB Defect Detection",
    tech: "Python, OpenCV, Flask, YOLOv5",
    link: "https://github.com/Lavanya-rao05/PCB-Defect-Detection",
    image: "/assets/PCB.jpg",
  },
  {
    title: "Amazon Clone",
    tech: "React, HTML, CSS, Bootstrap, JavaScript",
    link: "https://github.com/Lavanya-rao05/Amazon-Clone",
    image: "/assets/amazon.jpg",
  },
  {
    title: "AgroCulture",
    tech: "MySQL, HTML, CSS, XAMPP",
    link: "https://github.com/Lavanya-rao05/AgroCulture",
    image: "/assets/agroculture.jpg",
  },
  {
    title: "MovieVerse",
    tech: "React, Tailwind CSS, Flask, Python, API",
    link: "https://github.com/Lavanya-rao05/MovieVerse",
    image: "/assets/movieverse.jpg",
  },
  {
    title: "YouTube Video Summarizer",
    tech: "Python, NLP",
    link: "https://github.com/Lavanya-rao05/Youtube_video_summarizer",
    image: "/assets/youtube-summarizer.jpg",
  },
  {
    title: "Frozen-Frenzy",
    tech: "HTML, CSS, Javascript",
    link: "https://github.com/Lavanya-rao05/Frozen-Frenzy",
    image: "/assets/frozen-frenzy.jpg",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-16">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center text-blue-700 mb-12">Projects</h2>

        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {projects.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-lg overflow-hidden shadow-md transition-all duration-300">
                <div
                  className="h-48 bg-cover bg-center"
                  style={{ backgroundImage: `url(${project.image})` }}
                ></div>

                <div className="p-4 flex flex-col h-full">
                  <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                  <p className="text-gray-600 text-sm mb-5">{project.tech}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto block w-full text-center py-2 bg-blue-100 text-blue-700 rounded-md font-medium hover:bg-blue-200 transition"
                  >
                    Explore →
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;
