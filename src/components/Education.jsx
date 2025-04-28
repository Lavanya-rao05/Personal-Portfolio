import { useEffect, useRef } from "react";

const education = [
  {
    year: "2019",
    degree: "X - SSLC | 80.64%",
    place: "Shree Narayana Guru English Medium School, Katipalla, Kaikamba",
  },
  {
    year: "2019 - 2022",
    degree: "Diploma in Computer Science and Engineering | 81.7%",
    place: "Govt. Polytechnic for Women, Karnataka",
  },
  {
    year: "2023 - Present",
    degree: "B.E. in Computer Science and Engineering | 8.16 CGPA",
    place: "St Joseph Engineering College Mangaluru, Karnataka",
  },
];

// Experience (Internships)
const experience = [
  {
    year: "2023",
    role: "Web Development Intern",
    company: "Codelab Systems",
  },
  {
    year: "2024",
    role: "Salesforce Administrator Intern",
    company: "Smart Internz",
  },
  {
    year: "2025",
    role: "Frontend Developer - React Intern",
    company: "Incture Technologies",
  },
];

const Education = () => {
  // Refs to track timeline items for scroll animation
  const educationRef = useRef([]);
  const experienceRef = useRef([]);

  useEffect(() => {
    // IntersectionObserver to trigger animations when items enter the viewport
    const options = {
      root: null, // defaults to the viewport
      rootMargin: "0px",
      threshold: 0.1, // trigger when 10% of the item is in the viewport
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'transform-none');
          observer.unobserve(entry.target); // Stop observing once it enters the viewport
        }
      });
    }, options);

    // Observe all education and experience items
    educationRef.current.forEach((item) => observer.observe(item));
    experienceRef.current.forEach((item) => observer.observe(item));
  }, []);

  return (
    <section id="education" className="py-16">
      <div className="container mx-auto px-6">
        {/* Education Section */}
        <h2 className="text-4xl font-bold text-center text-blue-700">Education</h2>
        <div className="relative max-w-3xl mx-auto space-y-12">
          {education.map((item, index) => (
            <div
              key={index}
              ref={(el) => (educationRef.current[index] = el)}
              className={`timeline-item relative flex flex-col items-center justify-center bg-white shadow-2xl rounded-lg p-5 transition-opacity opacity-0 transform translate-y-12`}
            >
              <div className="text-center">
                <p className="text-blue-700 text-xl font-semibold">{item.year}</p>
                <h3 className="text-2xl font-semibold">{item.degree}</h3>
                <p className="text-gray-700 text-xl">{item.place}</p>
              </div>
              {index < education.length - 1 && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-gray-500"></div>
              )}
            </div>
          ))}
        </div>

        {/* Experience Section */}
        <h2 className="text-4xl font-bold text-center text-blue-700 mt-24">Experience</h2>
        <div className="relative max-w-3xl mx-auto space-y-12 mb-8">
          {experience.map((item, index) => (
            <div
              key={index}
              ref={(el) => (experienceRef.current[index] = el)}
              className={`timeline-item relative flex flex-col items-center justify-center bg-white shadow-2xl rounded-lg p-5 transition-opacity opacity-0 transform translate-y-12`}
            >
              <div className="text-center">
                <p className="text-blue-700 text-xl font-semibold">{item.year}</p>
                <h3 className="text-2xl font-semibold">{item.role}</h3>
                <p className="text-gray-700 text-xl">{item.company}</p>
              </div>
              {index < experience.length - 1 && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-6 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-gray-500"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
