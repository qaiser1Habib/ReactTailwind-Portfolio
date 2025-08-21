import { create } from 'zustand';

interface PortfolioState {
    mobileMenuOpen: boolean;
    setMobileMenuOpen: (val: boolean) => void;
}

export const usePortfolioStore = create<PortfolioState>((set) => ({
    mobileMenuOpen: false,
    setMobileMenuOpen: (val: boolean) => set({ mobileMenuOpen: val }),
}));
