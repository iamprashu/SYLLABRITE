import { create } from "zustand";

const useTokenStore = create((set) => ({
  token: null,

  setToken: async (newToken) => set({ token: newToken }),

  clearToken: () => set({ token: null }),
}));

export default useTokenStore;
