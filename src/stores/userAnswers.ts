import { defineStore } from "pinia";

// API simulation (mocked data)
export const useUserAnswersStore = defineStore("UserAnswers", {
  state: () => ({
    answers: {} as string,
    correctAnswers: {} as string,
    counter: 0
  }),
  actions: {
    addPoint() {
      this.counter++
      console.log(this.counter, 'counter')
    },
  }
})
