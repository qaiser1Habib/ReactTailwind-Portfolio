import { useEffect, useState } from "react";

const SkillsSection = () => {
  const [skillsVisible, setSkillsVisible] = useState(false);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -100px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.target.id === "skills") {
          setSkillsVisible(true);
        }
      });
    }, observerOptions);

    const skillsSection = document.getElementById("skills");
    if (skillsSection) {
      observer.observe(skillsSection);
    }

    return () => {
      if (skillsSection) {
        observer.unobserve(skillsSection);
      }
    };
  }, []);

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Frontend Skills */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:transform hover:-translate-y-2 transition-all duration-300">
            <div className="text-center mb-6">
              <i className="fas fa-code text-4xl text-blue-500 mb-4"></i>
              <h3 className="text-xl font-semibold">Frontend</h3>
            </div>
            <div className="space-y-4">
              {[
                { name: "React.js", level: 95 },
                { name: "Next.js", level: 85 },
                { name: "React Native", level: 75 },
                { name: "TypeScript", level: 80 },
                { name: "Tailwind CSS", level: 90 },
              ].map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-sm text-gray-500">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 skill-bar-animate ${
                        skillsVisible ? "" : "w-0"
                      }`}
                      style={{
                        width: skillsVisible ? `${skill.level}%` : "0%",
                        transitionDelay: `${index * 200}ms`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend Skills */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:transform hover:-translate-y-2 transition-all duration-300">
            <div className="text-center mb-6">
              <i className="fas fa-server text-4xl text-green-500 mb-4"></i>
              <h3 className="text-xl font-semibold">Backend</h3>
            </div>
            <div className="space-y-4">
              {[
                { name: "Node.js", level: 90 },
                { name: "Express.js", level: 85 },
                { name: "Socket.io", level: 75 },
                { name: "REST APIs", level: 88 },
              ].map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-sm text-gray-500">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 skill-bar-animate ${
                        skillsVisible ? "" : "w-0"
                      }`}
                      style={{
                        width: skillsVisible ? `${skill.level}%` : "0%",
                        transitionDelay: `${index * 200}ms`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Database & DevOps */}
          <div className="bg-white p-8 rounded-xl shadow-lg hover:transform hover:-translate-y-2 transition-all duration-300">
            <div className="text-center mb-6">
              <i className="fas fa-database text-4xl text-purple-500 mb-4"></i>
              <h3 className="text-xl font-semibold">Database & DevOps</h3>
            </div>
            <div className="space-y-4">
              {[
                { name: "MongoDB", level: 85 },
                { name: "AWS", level: 70 },
                { name: "Git/GitHub", level: 85 },
                { name: "Docker", level: 60 },
              ].map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-sm text-gray-500">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 skill-bar-animate ${
                        skillsVisible ? "" : "w-0"
                      }`}
                      style={{
                        width: skillsVisible ? `${skill.level}%` : "0%",
                        transitionDelay: `${index * 200}ms`,
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
