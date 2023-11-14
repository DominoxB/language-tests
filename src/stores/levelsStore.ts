import { defineStore } from "pinia";

// API simulation (mocked data)
export const useLevelsStore = defineStore("LangLevels", {
  state: () => ({
      a1: {
        name: 'A1',
        title: 'A1 - poziom początkujący',
        description: 'Osoba posługująca się językiem na tym poziomie rozumie i potrafi stosować podstawowe zwroty potoczne i wyrażenia dotyczące życia codziennego. Potrafi przedstawiać siebie i innych oraz formułować pytania z zakresu życia prywatnego, dotyczące np. miejsca, w którym mieszka, ludzi, których zna i rzeczy, które posiada. Potrafi prowadzić prostą rozmowę, pod warunkiem, że rozmówca mówi wolno, zrozumiale i jest gotowy do pomocy.'
      },
      a2: {
        name: 'A2',
        title: 'A2 - poziom niższy średnio zaawansowany',
        description: 'Osoba posługująca się językiem na tym poziomie rozumie wypowiedzi i często używane wyrażenia związane z życiem codziennym (np. podstawowe informacje dotyczące osoby rozmówcy i jego rodziny, zakupów, otoczenia, pracy). Potrafi porozumiewać się w prostych, rutynowych sytuacjach komunikacyjnych, wymagających jedynie prostej, bezpośredniej wymiany informacji na tematy znane i typowe. Potrafi w prosty sposób opisywać swoje pochodzenie, otoczenie, a także poruszać sprawy związane z najważniejszymi potrzebami życia codziennego.'
      },
      b1: {
        name: 'B1',
        title: 'B1 - poziom średnio zaawansowany',
        description: 'Osoba posługująca się językiem na tym poziomie rozumie znaczenie głównych wątków przekazu zawartego w jasnych, standardowych wypowiedziach, które dotyczą znanych jej spraw i zdarzeń typowych dla pracy, szkoły, czasu wolnego itd. Potrafi radzić sobie z większością sytuacji komunikacyjnych, które mogą się zdarzyć podczas podróży w rejonie, gdzie mówi się danym językiem. Potrafi tworzyć proste, spójne wypowiedzi na tematy, które są jej znane lub które ją interesują. Potrafi opisywać doświadczenia, wydarzenia, marzenia, nadzieje i aspiracje, krótko uzasadniając bądź wyjaśniając swoje opinie i plany.'
      },
      b2: {
        name: 'B2',
        title: 'B2 - poziom wyższy średnio zaawansowany',
        description: 'Osoba posługująca się językiem na tym poziomie rozumie znaczenie głównych wątków przekazu zawartego w złożonych tekstach na tematy konkretne i abstrakcyjne, łącznie z rozumieniem dyskusji na tematy techniczne z zakresu jej specjalności. Potrafi porozumiewać się na tyle płynnie i spontanicznie, by prowadzić normalną rozmowę z rodzimym użytkownikiem danego języka, nie powodując przy tym napięcia u którejkolwiek ze stron. Potrafi formułować przejrzyste wypowiedzi ustne i pisemne w szerokim zakresie tematów, a także wyjaśniać swoje stanowisko w sprawach będących przedmiotem dyskusji, rozważając wady i zalety różnych rozwiązań.'
      },
      c1: {
        name: 'C1',
        title: 'C1 - poziom zaawansowany',
        description: 'Osoba posługująca się językiem na tym poziomie rozumie szeroki zakres trudnych, dłuższych tekstów, dostrzegając także znaczenia ukryte, wyrażone pośrednio. Potrafi wypowiadać się płynnie, spontanicznie, bez większego trudu odnajdując właściwe sformułowania. Skutecznie i swobodnie potrafi posługiwać się językiem w kontaktach towarzyskich i społecznych, edukacyjnych bądź zawodowych. Potrafi formułować jasne, dobrze zbudowane, szczegółowe wypowiedzi dotyczące złożonych problemów, sprawnie i właściwie posługując się regułami organizacji wypowiedzi, łącznikami i wskaźnikami zespolenia tekstu.'
      },
      c2: {
        name: 'C2',
        title: 'C2 - poziom profesjonalny/native',
        description: 'Osoba posługująca się językiem na tym poziomie może z łatwością zrozumieć praktycznie wszystko, co usłyszy lub przeczyta. Potrafi streszczać informacje z innych źródeł, pisanych lub mówionych w sposób spójny, odtwarzając zawarte w nich tezy i wyjaśnienia. Potrafi wyrażać swoje myśli bardzo płynnie, spontanicznie i precyzyjnie, subtelnie różnicując odcienie znaczeniowe nawet w bardziej złożonych wypowiedziach.'
      }   
  }),
})
