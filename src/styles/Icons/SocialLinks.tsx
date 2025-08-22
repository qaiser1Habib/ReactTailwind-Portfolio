const SocialLinks = ({ className }: { className: string }) => {
  return (
    <div className={`flex justify-center space-x-6 ${className}`}>
      <a
        href="mailto:qaiserhabib6@gmail.com"
        className="text-2xl hover:text-blue-400 transition-colors"
      >
        <i className="fas fa-envelope" />
      </a>
      <a
        href="https://github.com/qaiser1Habib"
        target="_blank"
        rel="noopener noreferrer"
        className="text-2xl hover:scale-110 transition-transform"
      >
        <i className="fa-brands fa-github"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/qaisar-habib-827075203/"
        target="_blank"
        className="text-2xl hover:text-blue-400 transition-colors"
      >
        <i className="fab fa-linkedin" />
      </a>
      <a
        href="https://wa.me/923022630092"
        target="_blank"
        className="text-2xl hover:text-blue-400 transition-colors"
      >
        <i className="fa-brands fa-whatsapp" />
      </a>
      <a
        href="tel:03022630092"
        className="text-2xl hover:text-blue-400 transition-colors"
      >
        <i className="fas fa-phone" />
      </a>
    </div>
  );
};

export default SocialLinks;
