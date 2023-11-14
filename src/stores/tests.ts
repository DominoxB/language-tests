import { defineStore } from "pinia";

// API simulation (mocked data)
export const useTestsStore = defineStore("Tests", {
  state: () => {
    return {
      test: false,
    }
  },
  actions: {
  }
})
