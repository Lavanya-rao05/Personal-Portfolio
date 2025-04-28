import React from "react";

const skills = [
  { name: "Python", level: 85 },
  { name: "Java", level: 65 },
  { name: "HTML & CSS", level: 90 },
  { name: "JavaScript", level: 80 },
  { name: "React.js", level: 85 },
  { name: "Tailwind CSS", level: 70 },
  { name: "Node.js", level: 70 },
  { name: "Express.js", level: 75 },
  { name: "MongoDB", level: 85 },
  { name: "MySQL", level: 80 },
];

const Skills = () => {
  return (
    <section id="skills" className=" text-gray-900 py-20 px-6">
      <h1 className="text-4xl font-bold text-center text-blue-700 mb-8">
        Professional Skills
      </h1>
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="flex items-center justify-between p-6 bg-white rounded-lg shadow-lg hover:bg-gray-50 transition-all duration-300 ease-in-out"
          >
            {/* Skill Name */}
            <h3 className="text-2xl font-semibold text-gray-700">{skill.name}</h3>

            {/* Progress Bar */}
            <div className="w-3/4 bg-gray-300 h-3 rounded-full overflow-hidden mx-4">
              <div
                className="h-full bg-blue-700 transition-all duration-500 ease-in-out"
                style={{ width: `${skill.level}%` }}
              ></div>
            </div>

            {/* Percentage */}
            <p className="text-xl text-gray-700">{skill.level}%</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
