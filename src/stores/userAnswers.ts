import { defineStore } from "pinia";

// API simulation (mocked data)
export const useUserAnswersStore = defineStore("UserAnswers", {
  state: () => {
    return {
      answers: {} as string,
      correctAnswers: {
        1: 'a',
        2: 'c',
        3: 'd',
        4: 'c',
        5: 'b',
        6: 'b',
        7: 'c',
        8: 'b',
        9: 'd',
        10: 'a',
        11: 'd',
        12: 'c',
        13: 'd',
        14: 'b',
        15: 'c',
        16: 'a',
        17: 'b',
        18: 'c',
        19: 'c',
        20: 'c',
        21: 'd',
        22: 'b',
        23: 'c',
        24: 'b',
        25: 'b',
        26: 'c',
        27: 'b',
        28: 'c',
        29: 'c', 
        30: 'b'
      },
      counter: 0
    }
  },
  actions: {
    addPoint() {
      this.counter++
    },
  }
})
