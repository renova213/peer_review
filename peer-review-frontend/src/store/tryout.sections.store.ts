import { create } from "zustand";
import axios from "axios";
import type TryoutSectionStore from "../interfaces/stores/tryout.section.store.interface";
import dotenv from "dotenv";

dotenv.config();

const BASE_URL = process.env.VITE_BASE_URL ?? "localhost:3000/api";

export const useTryoutSectionsStore = create<TryoutSectionStore>((set) => ({
  tryoutSections: [],
  tryoutSectionloading: false,
  tryoutSectionError: null,
  fetchTryoutSections: async () => {
    set({ tryoutSectionloading: true, tryoutSectionError: null });
    try {
      const response = await axios.get(`${BASE_URL}/tryout-sections`);
      const coursesData = response.data.data ?? [];
      set({ tryoutSections: coursesData, tryoutSectionloading: false });
    } catch {
      set({
        tryoutSectionError: "Failed to fetch tryout sections",
        tryoutSectionloading: false,
        tryoutSections: [],
      });
    }
  },
}));
