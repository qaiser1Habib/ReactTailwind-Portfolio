const ProjectSection = () => {
  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto" />
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Project 1: Pic.Fan */}
          <div className="project-card relative bg-gray-100 rounded-xl overflow-hidden shadow-lg group cursor-pointer">
            <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
              <i className="fas fa-images text-white text-4xl" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">Pic.Fan</h3>
              <p className="text-gray-600 mb-4">
                Full-stack social platform with real-time messaging capabilities
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                  Node.js
                </span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                  React.js
                </span>
                <span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">
                  Socket.io
                </span>
                <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">
                  MongoDB
                </span>
              </div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Real-time messaging with Socket.io</li>
                <li>• Responsive UI with Bootstrap CSS</li>
                <li>• RESTful API with Express.js</li>
              </ul>
            </div>
            <div className="project-overlay absolute inset-0 flex items-center justify-center">
              <a
                href="https://pic.fan/"
                target="_blank"
                className="text-center text-white"
              >
                <i className="fas fa-external-link-alt text-3xl mb-4" />
                <p className="font-semibold">View Project Details</p>
              </a>
            </div>
          </div>
          {/* Project 2: UndrRight */}
          <div className="project-card relative bg-gray-100 rounded-xl overflow-hidden shadow-lg group cursor-pointer">
            <div className="h-48 bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
              <i className="fas fa-gavel text-white text-4xl" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">UndrRight</h3>
              <p className="text-gray-600 mb-4">
                AI-powered legal assistant web application for lawyers
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                  Node.js
                </span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                  React.js
                </span>
                <span className="bg-cyan-100 text-cyan-800 px-2 py-1 rounded text-sm">
                  Tailwind
                </span>
                <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">
                  MongoDB
                </span>
              </div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• AI-powered legal assistance</li>
                <li>• Modern UI with Tailwind CSS</li>
                <li>• Smooth animations with Framer Motion</li>
              </ul>
            </div>
            <div className="project-overlay absolute inset-0 flex items-center justify-center">
              <a
                href="https://www.undrright.com/"
                target="_blank"
                className="text-center text-white"
              >
                <i className="fas fa-external-link-alt text-3xl mb-4" />
                <p className="font-semibold">View Project Details</p>
              </a>
            </div>
          </div>
          {/* Project 3: En Route AI */}
          <div className="project-card relative bg-gray-100 rounded-xl overflow-hidden shadow-lg group cursor-pointer">
            <div className="h-48 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center">
              <i className="fas fa-plane text-white text-4xl" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2">
                En Route AI Travel Chatbot
              </h3>
              <p className="text-gray-600 mb-4">
                AI-powered travel planning chatbot with OpenAI integration
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">
                  Node.js
                </span>
                <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">
                  React.js
                </span>
                <span className="bg-cyan-100 text-cyan-800 px-2 py-1 rounded text-sm">
                  Tailwind
                </span>
                <span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm">
                  OpenAI
                </span>
              </div>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• OpenAI API integration</li>
                <li>• Conversational travel assistance</li>
                <li>• Modern responsive design</li>
              </ul>
            </div>
            <div className="project-overlay absolute inset-0 flex items-center justify-center">
              <a
                href="https://enroute2.com/"
                target="_blank"
                className="text-center text-white"
              >
                <i className="fas fa-external-link-alt text-3xl mb-4" />
                <p className="font-semibold">View Project Details</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
