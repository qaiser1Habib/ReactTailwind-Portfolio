import { usePortfolioStore } from "@/store/portfolioStore";
import { scrollToSection } from "@/utils/utils";

const Header = () => {
  const { mobileMenuOpen, setMobileMenuOpen } = usePortfolioStore();
  return (
    <nav className="fixed top-0 w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            QH
          </div>
          <div className="hidden md:flex space-x-8">
            {[
              "Home",
              "About",
              "Experience",
              "Projects",
              "Skills",
              "Contact",
            ].map((item) => (
              <button
                key={item}
                onClick={() =>
                  scrollToSection(item.toLowerCase(), setMobileMenuOpen)
                }
                className="hover:text-blue-600 transition-colors cursor-pointer"
              >
                {item}
              </button>
            ))}
          </div>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
          >
            <i className="fas fa-bars text-xl"></i>
          </button>
        </div>
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            {[
              "Home",
              "About",
              "Experience",
              "Projects",
              "Skills",
              "Contact",
            ].map((item) => (
              <button
                key={item}
                onClick={() =>
                  scrollToSection(item.toLowerCase(), setMobileMenuOpen)
                }
                className="block w-full text-left py-2 hover:text-blue-600 transition-colors"
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Header;
