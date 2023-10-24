import { defineStore } from "pinia";
export const useQuestionEnglishStore = defineStore("EnglishQuestions", {
  // API simulation (mocked data)
  state: () => ({
    currentPage: 1,
    questionsEn: [
      {
        id: 1,
        q: "Hello, how are you today?",
        a: "Thank you Mark, I am fine!",
        b: "No, I don't go there.",
        c: "Thank you, that is all.",
        d: "You are welcome.",
        correct: 'a'
      },
      {
        id: 2,
        q: "Richard has 1 cat ___.",
        a: "but 2 cats",
        b: "and 3 cats",
        c: "and 2 dogs",
        d: "or many cats.",
        correct: 'c'
      },
      {
        id: 3,
        q: "This apple tastes ___ the red one.",
        a: "more sweet",
        b: "more sweet than",
        c: "sweeter",
        d: "sweeter than",
        correct: 'd'
      },
      {
        id: 4,
        q: "I don’t have ___ brothers and sisters but I have ___ friends.",
        a: "no, some",
        b: "no, many",
        c: "any, a lot of",
        d: "the, much",
        correct: 'c'
      },
      {
        id: 5,
        q: "I don’t know ___ .",
        a: "he",
        b: "him",
        c: "his",
        d: "he's",
        correct: 'b'
      },
      {
        id: 6,
        q: "I ___ born in 1992.",
        a: "am",
        b: "was",
        c: "were",
        d: "did",
        correct: 'b'
      },
      {
        id: 7,
        q: "When I was a child, I ___ my holiday in the country.",
        a: "spend",
        b: "use to spend",
        c: "used to spend",
        d: "was used to spend",
        correct: 'c'
      },
      {
        id: 8,
        q: "She is ___ at maths, but ___ at English.",
        a: "gooder, bader",
        b: "better, worse",
        c: "the better, the worse",
        d: "bester, worser",
        correct: 'b'
      },
      {
        id: 9,
        q: "___ any film by Almodovar?",
        a: "Did you ever see",
        b: "Did you ever seen",
        c: "Have you ever seed",
        d: "Have you ever seen",
        correct: 'd'
      },
      {
        id: 10,
        q: "Where do you go ___ holiday – ___ the seaside or ___ the mountains?",
        a: "on, to, to",
        b: "on, in, in",
        c: "to, on, in",
        d: "at, to, in",
        correct: 'a'
      },
      {
        id: 11,
        q: "I don’t smoke. My wife ___ .",
        a: "too",
        b: "as well",
        c: "as me",
        d: "either",
        correct: 'd'
      },
      {
        id: 12,
        q: "There were two ___ , one ___ and four ___ in the room.",
        a: "womans, man, childs",
        b: "woman, men, children",
        c: "women, man, children",
        d: "women, men, children",
        correct: 'c'
      },
      {
        id: 13,
        q: "I ___ when the telephone rang.",
        a: "slept",
        b: "have been sleeping",
        c: "had slept",
        d: "was sleeping",
        correct: 'd'
      },
      {
        id: 14,
        q: "Which word does not belong with the others?",
        a: "a knife",
        b: "a thief",
        c: "a fork",
        d: "a spoon",
        correct: 'b'
      },
      {
        id: 15,
        q: "What is the opposite of ‘to wake up’?",
        a: "to get up",
        b: "to get dressed",
        c: "to fall asleep",
        d: "to fall down",
        correct: 'c'
      },
      {
        id: 16,
        q: "When I came to the party last night, Alice ___ .",
        a: "had just gone out",
        b: "had just been going out",
        c: "has just gone out",
        d: "was just gone out",
        correct: 'a'
      },
      {
        id: 17,
        q: "Jane and Tom _ 15.",
        a: "will",
        b: "are",
        c: "have",
        d: "is",
        correct: 'b'
      },
      {
        id: 18,
        q: "This time tomorrow I ___ on the beach.",
        a: "sit",
        b: "am sitting",
        c: "will be sitting",
        d: "will be sat",
        correct: 'c'
      },
      {
        id: 19,
        q: "___ your wallet, I’ll let you know.",
        a: "When I found",
        b: "When I’ll find",
        c: "If I find",
        d: "If I’ll find",
        correct: 'c'
      },
      {
        id: 20,
        q: "She _ do her homework.",
        a: "wasn't",
        b: "isn't",
        c: "didn't",
        d: "don't",
        correct: 'c'
      },
      {
        id: 21,
        q: "Sarah _ dinner tonight.",
        a: "will go cooking",
        b: "is going cooking",
        c: "goes to cook",
        d: "is going to cook",
        correct: 'd'
      },
      {
        id: 22,
        q: "If I ___ Jack that day, I ___ him.",
        a: "met, would warn",
        b: "had met, would have warned",
        c: "had met, had warned",
        d: "met, had warned",
        correct: 'b'
      },
      {
        id: 23,
        q: "He said he ___ an e-mail when he ___ more details.",
        a: "writes, knows",
        b: "will write, will know",
        c: "would write, knew",
        d: "would write, had known",
        correct: 'c'
      },
      {
        id: 24,
        q: "It’s a lovely day today, ___ ?",
        a: "is it",
        b: "isn't it",
        c: "does it",
        d: "doesn't it",
        correct: 'b'
      },
      {
        id: 25,
        q: "He ___ doesn’t believe he’ll manage it.",
        a: "lonely",
        b: "himself",
        c: "by himself",
        d: "on his own",
        correct: 'b'
      },
      {
        id: 26,
        q: "___ enjoy massive events.",
        a: "Them both",
        b: "Both them",
        c: "Both of them",
        d: "Both they",
        correct: 'c'
      },
      {
        id: 27,
        q: "This leaking pipe needs to be repaired. Call the ___, please.",
        a: "carpenter",
        b: "plumber",
        c: "roofer",
        d: "tailor",
        correct: 'b'
      },
      {
        id: 28,
        q: "I’m doing my exam today.",
        a: "Cross your fingers for me!",
        b: "Cross your thumbs for me!",
        c: "Keep your fingers crossed for me!",
        d: "Keep your thumbs crossed for me!",
        correct: 'c'
      },
      {
        id: 29,
        q: "What does the sentence ‘The exam was a piece of cake’ mean?",
        a: "The exam was very difficult.",
        b: "The exam was very stressful.",
        c: "The exam was very easy.",
        d: "The exam was about food.",
        correct: 'c'
      },
      {
        id: 30,
        q: "If you ___ my notes last year, you would have passed the exam.",
        a: "have borrowed",
        b: "had borrowed",
        c: "borrowed",
        d: "would borrow",
        correct: 'b'
      },

    ],
  }),
  actions: {
    increment() {
      this.currentPage++
    },
    decrement() {
      this.currentPage--
    }
  }
});
