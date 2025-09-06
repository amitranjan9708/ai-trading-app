import {create} from 'zustand';

interface StoreState {
    isPortfolioOpen: boolean;
    togglePortfolio: () => void;
    openPortfolio: () => void;
}

export const useStore = create<StoreState>((set) => ({
    isPortfolioOpen: false,
    togglePortfolio: () => set((state) => ({ isPortfolioOpen: !state.isPortfolioOpen })),
    openPortfolio: () => set({ isPortfolioOpen: true }),
}));