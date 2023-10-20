import { defineStore } from "pinia";

export const useQuestionRussianStore = defineStore("RussianQuestions", {
  // API simulation (mocked data)
  state: () => ({
    questionsRu: [
      {
        id: 1,
        q: "Твой друг моложе _______ три года?",
        a: "от меня на",
        b: "мне на",
        c: "меня на",
        d: "меня",
      },
      {
        id: 2,
        q: "Как _______ зовут?",
        a: "Вам",
        b: "Вас",
        c: "Вами",
        d: "Bашу",
      },
      {
        id: 3,
        q: "Ваша соседка живёт в _______ доме?",
        a: "этом",
        b: "этим",
        c: "этот",
        d: "этомy",
      },
      {
        id: 4,
        q: "Сколько лет _______?",
        a: "вашу тётю",
        b: "вашей тёте",
        c: "вашей тётей",
        d: "вашу тёти",
      },
      {
        id: 5,
        q: "Ты _______ в большом городе.",
        a: "живёшь",
        b: "живём",
        c: "живёте",
        d: "живёт",
      },
      {
        id: 6,
        q: "Мы _______ испанский язык уже 6 лет.",
        a: "учимся",
        b: "учатся",
        c: "учим",
        d: "учат",
      },
      {
        id: 7,
        q: "Дома я говорю только _______.",
        a: "по-русский",
        b: "по русски",
        c: "по-русски",
        d: "русски",
      },
      {
        id: 8,
        q: "Сейчас мы вернулись _______ вокзала.",
        a: "от",
        b: "с",
        c: "из",
        d: "y",
      },
      {
        id: 9,
        q: "Вечером мама _______ свой любимый фильм.",
        a: "смотрела",
        b: "смотрила",
        c: "смотрил",
        d: "смотри",
      },
      {
        id: 10,
        q: "Давай встретимся в четыре _______ дня.",
        a: "часов",
        b: "часы",
        c: "час",
        d: "часа",
      },
      {
        id: 11,
        q: "Ольга прочитала книгу _______ два часа.",
        a: "за",
        b: "через",
        c: "в",
        d: "по",
      },
      {
        id: 12,
        q: "Мой отец работает _______.",
        a: "бухгалтерем",
        b: "бухгалтер",
        c: "бухгалтерим",
        d: "бухгалтером",
      },
      {
        id: 13,
        q: "Куда они _______ в этом году в отпуск?",
        a: "едет",
        b: "ехaли",
        c: "едят",
        d: "едут",
      },
      {
        id: 14,
        q: "_______ другу нравится рок-музыка.",
        a: "моей",
        b: "моему",
        c: "мои",
        d: "моим",
      },
      {
        id: 15,
        q: "Ты поедешь _______ на будущей неделе?",
        a: "туда",
        b: "там",
        c: "ту",
        d: "здесь",
      },
      {
        id: 16,
        q: "Аптека находится на _______ этаже.",       
        a: "третем",
        b: "третьим",
        c: "три",
        d: "третьем",
      },
      {
        id: 17,
        q: "В этой квартире _______ балкон?",       
        a: "большие",
        b: "больший",
        c: "больши",
        d: "большой",
      },
      {
        id: 18,
        q: "По вторникам у нас экзамены по _______.", 
        a: "историю",   
        b: "истори",
        c: "истории",
        d: "историе",
      },
      {
        id: 19,
        q: "Сегодня я одета в _______ юбку.",
        a: "синей",
        b: "синую",
        c: "сину",
        d: "синюю",
      },
      {
        id: 20,
        q: "Родители любят звонить _______.",       
        a: "своим детям",
        b: "пo своим детям",
        c: "до своих детей",
        d: "к своим детям",
      },
      {
        id: 21,
        q: "Благодаря _______ мы нашли новую работу.",
        a: "ей",
        b: "ней",
        c: "её",
        d: "eю",
      },
      {
        id: 22,
        q: "В этой стране необходимо _______ свой брак в ЗАГСе.", 
        a: "регистрировать",
        b: "зарегистрировать",
        c: "зарегистрироватecь",
        d: "зарегистрироваться",
      },
      {
        id: 23,
        q: "Что ты молчишь! Скажи _______.",       
        a: "что-либо",
        b: "что",
        c: "что-нибудь",
        d: "что-то",
      },
      {
        id: 24,
        q: "Сёстры похожи _______.",       
        a: " друг друга",
        b: "себя",
        c: "на себя",
        d: "друг на друга",
      },
      {
        id: 25,
        q: "Время от _______ я хожу в парикмахерскую, чтобы побриться.",
        a: "время",  
        b: "времени",
        c: "време",
        d: "времена",
      },
      {
        id: 26,
        q: "Мы считаем, что _______ слишком много платят.",
        a: "спортсменами",
        b: "спортсменом",
        c: "спортсменоми",
        d: "спортсменам",
      },
      {
        id: 27,
        q: "Что вы сделали с моим _______.",
        a: "радио",
        b: "радием",
        c: "радие",
        d: "радиом",
      },
      {
        id: 28,
        q: "Ведь знаю, что на границе проверяют _______.",
        a: "паспорти",
        b: "паспорты",
        c: "паспорт",
        d: "паспорта",
      },
      {
        id: 29,
        q: "Радуга всегда вызывает у меня _______.",
        a: "улыбкой",
        b: "улыбке",
        c: "улыбкo",
        d: "улыбку",
      },
      {
        id: 30,
        q: "Чаще всего масса вопросов _______ в начале бизнеса.",
        a: "возникает",
        b: "выходит",
        c: "cпpocит",
        d: "задаёт",
      }
    ]
  })
})
