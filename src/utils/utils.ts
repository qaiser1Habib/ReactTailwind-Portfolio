


export const scrollToSection = (sectionId: string, setMobileMenuOpen: (val: boolean) => void) => {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        setMobileMenuOpen(false);
    }
};