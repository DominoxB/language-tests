import { defineStore } from "pinia";

// API simulation (mocked data)
export const useUserAnswersStore = defineStore("UserAnswers", {
  state: () => ({
    answers: {} as string,
    correctAnswers: {} as string
  }),
})