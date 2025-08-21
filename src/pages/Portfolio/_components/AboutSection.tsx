import type { Experience } from "@/types/Experience";

interface AboutSectionProps {
  totalExperience: Experience;
}

const AboutSection = ({ totalExperience }: AboutSectionProps) => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto"></div>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-800">
              MERN Stack Developer & Frontend Specialist
            </h3>
            <p className="text-gray-600 leading-relaxed">
              I'm a passionate Full Stack Developer with{" "}
              {`${totalExperience.years} years, ${totalExperience.months} months`}{" "}
              of hands-on experience in the MERN stack. My expertise lies in
              creating responsive, user friendly web applications with a strong
              focus on frontend development.
            </p>
            <p className="text-gray-600 leading-relaxed">
              I specialize in building robust Backend services and APIs while
              ensuring exceptional user experiences through modern frontend
              technologies. My goal is to write clean, efficient code that
              delivers both performance and scalability.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-blue-600">
                  {`${totalExperience.years}${
                    totalExperience.months > 0 ? "+" : ""
                  }`}
                </div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <div className="text-3xl font-bold text-purple-600">10+</div>
                <div className="text-gray-600">Projects Completed</div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-8 rounded-xl">
            <h4 className="text-xl font-semibold mb-6">Education</h4>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h5 className="font-semibold">
                  Bachelor of Software Engineering
                </h5>
                <p className="text-gray-600">Minhaj University Lahore</p>
                <p className="text-sm text-gray-500">2017 - 2021</p>
              </div>
              <div className="border-l-4 border-purple-500 pl-4">
                <h5 className="font-semibold">Intermediate</h5>
                <p className="text-gray-600">Islamia College Karachi</p>
                <p className="text-sm text-gray-500">2015 - 2017</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
