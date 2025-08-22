import SocialLinks from "@/styles/Icons/SocialLinks";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  const currentYear = year.toString();
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center">
          <div className="text-3xl font-bold gradient-bg bg-clip-text text-transparent mb-4">
            QH
          </div>
          <p className="text-gray-400 mb-6">
            MERN Stack Developer passionate about creating amazing web
            experiences
          </p>
          <SocialLinks className="mb-8" />
          <div className="border-t border-gray-800 pt-8">
            <p className="text-gray-400">
              © {currentYear} Qaiser Habib. All rights reserved. Built with
              passion and modern web technologies.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
