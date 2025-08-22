import { usePortfolioStore } from "@/store/portfolioStore";
import { scrollToSection } from "@/utils/utils";
import profile from "@/assets/images/profile.png";
import type { Experience } from "@/types/Experience";
import ImageLoader from "@/styles/loader/ImageLoader";
import SocialLinks from "@/styles/Icons/SocialLinks";

interface HeroSectionProps {
  totalExperience: Experience;
}

const HeroSection = ({ totalExperience }: HeroSectionProps) => {
  const { setMobileMenuOpen } = usePortfolioStore();
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center text-white mt-16 sm:mt-0"
    >
      <div className="text-center px-6 animate-fade-in">
        <div className="mb-6">
          <div className="size-32 mx-auto mb-6 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-4xl font-bold">
            <ImageLoader
              src={profile}
              className="size-30 object-cover rounded-full"
              alt="Qaiser Habib"
            />
          </div>
        </div>
        <h1 className="text-3xl sm:text-5xl lg:text-7xl font-bold mb-4">
          QAISER HABIB
        </h1>
        <div className="text-xl md:text-2xl mb-6">MERN Stack Developer</div>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
          MERN Stack Developer with{" "}
          {`${totalExperience.years}${totalExperience.months > 0 ? "+" : ""}`}{" "}
          years of experience. Turning illustration into working prototype using
          React.js Node.js
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection("projects", setMobileMenuOpen)}
            className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors cursor-pointer"
          >
            View My Work
          </button>
          <button
            onClick={() => scrollToSection("contact", setMobileMenuOpen)}
            className="border-2 border-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-colors cursor-pointer"
          >
            Get In Touch
          </button>
        </div>
        <SocialLinks className="mt-12" />
      </div>
    </section>
  );
};

export default HeroSection;
