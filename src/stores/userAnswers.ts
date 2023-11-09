import { defineStore } from "pinia";

// API simulation (mocked data)
export const useUserAnswersStore = defineStore("UserAnswers", {
  state: () => {
    return {
      answers: {} as string,
      correctAnswers: {} as string,
      counter: 0
    }
  },
  actions: {
    addPoint() {
      this.counter++
    },
  }
})
