const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </div>
        <div className="space-y-8">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:transform hover:-translate-y-2 transition-all duration-300">
            <div className="flex flex-col md:flex-row justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">
                  Frontend Developer
                </h3>
                <p className="text-blue-600 font-medium">
                  Focus IT Services (Islamabad)
                </p>
              </div>
              <div className="text-gray-500 mt-2 md:mt-0">
                <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm mr-2">
                  Current
                </span>
                <div className="mt-1">March 2025 - Present</div>
              </div>
            </div>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-start">
                <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                Build responsive, user-friendly websites ensuring design
                accuracy and performance
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                Collaborate with cross-functional teams to deliver high-quality
                solutions
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-green-500 mr-3 mt-1"></i>
                Write clean, efficient, and maintainable code following best
                practices
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:transform hover:-translate-y-2 transition-all duration-300">
            <div className="flex flex-col md:flex-row justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">
                  MERN Stack Developer
                </h3>
                <p className="text-blue-600 font-medium">
                  Single Solution (LAHORE)
                </p>
              </div>
              <div className="text-gray-500 mt-2 md:mt-0">
                March 2023 - February 2025
              </div>
            </div>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-start">
                <i className="fas fa-check-circle text-blue-500 mr-3 mt-1"></i>
                Optimized codebase efficiency and scalability resulting in
                significant performance improvements
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-blue-500 mr-3 mt-1"></i>
                Enhanced application speed and stability through strategic code
                optimization
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-blue-500 mr-3 mt-1"></i>
                Played a pivotal role in full-stack development using MERN
                technologies
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg hover:transform hover:-translate-y-2 transition-all duration-300">
            <div className="flex flex-col md:flex-row justify-between items-start mb-4">
              <div>
                <h3 className="text-2xl font-semibold text-gray-800">
                  Frontend Developer Intern
                </h3>
                <p className="text-blue-600 font-medium">SoftRobo (LAHORE)</p>
              </div>
              <div className="text-gray-500 mt-2 md:mt-0">
                September 2022 - February 2023
              </div>
            </div>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-start">
                <i className="fas fa-check-circle text-purple-500 mr-3 mt-1"></i>
                Developed responsive and interactive web interfaces using HTML,
                CSS, and JavaScript
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-purple-500 mr-3 mt-1"></i>
                Enhanced user experience and accessibility across multiple
                projects
              </li>
              <li className="flex items-start">
                <i className="fas fa-check-circle text-purple-500 mr-3 mt-1"></i>
                Gained foundational experience in frontend development best
                practices
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
