<template>
  <div class="font-open border-2 border-blue-400 py-10 my-20 mx-72 px-16">
    <div class="flex space-x-20 items-center">
      <div>
        <p class="text-2xl">Twój wynik:</p>
        <p class="py-6 text-xl text-blue-500 font-bold uppercase">poziom B2 - poziom wyższy średnio zaawansowany</p>
        <p>Osoba posługująca się językiem na tym poziomie rozumie znaczenie głównych wątków przekazu zawartego w złożonych
          tekstach na tematy konkretne i abstrakcyjne, łącznie z rozumieniem dyskusji na tematy techniczne z zakresu jej
          specjalności. Potrafi porozumiewać się na tyle płynnie i spontanicznie, by prowadzić normalną rozmowę z rodzimym
          użytkownikiem danego języka, nie powodując przy tym napięcia u którejkolwiek ze stron. Potrafi formułować
          przejrzyste wypowiedzi ustne i pisemne w szerokim zakresie tematów, a także wyjaśniać swoje stanowisko w
          sprawach
          będących przedmiotem dyskusji, rozważając wady i zalety różnych rozwiązań.</p>
      </div>
      <LevelSign text="B2" />
    </div>
    <BtnAction class="mt-12" name="Sprawdź odpowiedzi" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LevelSign from '@/components/atoms/LevelSign.vue'
import BtnAction from '@/components/atoms/BtnAction.vue'

export default defineComponent({
  name: 'ResultPage',
  components: {
    LevelSign,
    BtnAction
  },
  setup() {
    const levels = [
      {
        name: 'A1 - poziom początkujący',
        description: 'Osoba posługująca się językiem na tym poziomie rozumie i potrafi stosować podstawowe zwroty potoczne i wyrażenia dotyczące życia codziennego. Potrafi przedstawiać siebie i innych oraz formułować pytania z zakresu życia prywatnego, dotyczące np. miejsca, w którym mieszka, ludzi, których zna i rzeczy, które posiada. Potrafi prowadzić prostą rozmowę, pod warunkiem, że rozmówca mówi wolno, zrozumiale i jest gotowy do pomocy.'
      },
      {
        name: 'A2 - poziom niższy średnio zaawansowany',
        description: 'Osoba posługująca się językiem na tym poziomie rozumie wypowiedzi i często używane wyrażenia związane z życiem codziennym (np. podstawowe informacje dotyczące osoby rozmówcy i jego rodziny, zakupów, otoczenia, pracy). Potrafi porozumiewać się w prostych, rutynowych sytuacjach komunikacyjnych, wymagających jedynie prostej, bezpośredniej wymiany informacji na tematy znane i typowe. Potrafi w prosty sposób opisywać swoje pochodzenie, otoczenie, a także poruszać sprawy związane z najważniejszymi potrzebami życia codziennego.'
      },
      {
        name: 'B1 - poziom średnio zaawansowany',
        description: 'Osoba posługująca się językiem na tym poziomie rozumie znaczenie głównych wątków przekazu zawartego w jasnych, standardowych wypowiedziach, które dotyczą znanych jej spraw i zdarzeń typowych dla pracy, szkoły, czasu wolnego itd. Potrafi radzić sobie z większością sytuacji komunikacyjnych, które mogą się zdarzyć podczas podróży w rejonie, gdzie mówi się danym językiem. Potrafi tworzyć proste, spójne wypowiedzi na tematy, które są jej znane lub które ją interesują. Potrafi opisywać doświadczenia, wydarzenia, marzenia, nadzieje i aspiracje, krótko uzasadniając bądź wyjaśniając swoje opinie i plany.'
      },
      {
        name: 'B2 - poziom wyższy średnio zaawansowany',
        description: 'Osoba posługująca się językiem na tym poziomie rozumie znaczenie głównych wątków przekazu zawartego w złożonych tekstach na tematy konkretne i abstrakcyjne, łącznie z rozumieniem dyskusji na tematy techniczne z zakresu jej specjalności. Potrafi porozumiewać się na tyle płynnie i spontanicznie, by prowadzić normalną rozmowę z rodzimym użytkownikiem danego języka, nie powodując przy tym napięcia u którejkolwiek ze stron. Potrafi formułować przejrzyste wypowiedzi ustne i pisemne w szerokim zakresie tematów, a także wyjaśniać swoje stanowisko w sprawach będących przedmiotem dyskusji, rozważając wady i zalety różnych rozwiązań.'
      },
      {
        name: 'C1 - poziom zaawansowany',
        description: 'Osoba posługująca się językiem na tym poziomie rozumie szeroki zakres trudnych, dłuższych tekstów, dostrzegając także znaczenia ukryte, wyrażone pośrednio. Potrafi wypowiadać się płynnie, spontanicznie, bez większego trudu odnajdując właściwe sformułowania. Skutecznie i swobodnie potrafi posługiwać się językiem w kontaktach towarzyskich i społecznych, edukacyjnych bądź zawodowych. Potrafi formułować jasne, dobrze zbudowane, szczegółowe wypowiedzi dotyczące złożonych problemów, sprawnie i właściwie posługując się regułami organizacji wypowiedzi, łącznikami i wskaźnikami zespolenia tekstu.'
      },
      {
        name: 'C2 - poziom profesjonalny/native',
        description: 'Osoba posługująca się językiem na tym poziomie może z łatwością zrozumieć praktycznie wszystko, co usłyszy lub przeczyta. Potrafi streszczać informacje z innych źródeł, pisanych lub mówionych w sposób spójny, odtwarzając zawarte w nich tezy i wyjaśnienia. Potrafi wyrażać swoje myśli bardzo płynnie, spontanicznie i precyzyjnie, subtelnie różnicując odcienie znaczeniowe nawet w bardziej złożonych wypowiedziach.'
      }
    ]
    return {
      levels
    }
  }
})
</script>
