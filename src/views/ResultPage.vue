<template>
  <IntroResult class="px-96" />
  <!-- draft -->
  <div class="font-open border-2 border-blue-400 py-10 my-20 mx-72 px-16">
    <div class="flex space-x-20 items-center">
      <div>
        <p class="text-2xl font-bold">{{ $t('resultTest') }} {{ counter }}</p>
        <p class="py-6 text-xl text-blue//-500 font-bold uppercase">poziom B2 - poziom wyższy średnio zaawansowany</p>
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
    <BtnAction class="mt-12" :name="$t('checkAnswers')" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { useUserAnswersStore } from '@/stores/userAnswers'
import { useLevelsStore } from '@/stores/levelsStore'
import LevelSign from '@/components/atoms/LevelSign.vue'
import BtnAction from '@/components/atoms/BtnAction.vue'
import IntroResult from '@/components/atoms/IntroResult.vue'

export default defineComponent({
  name: 'ResultPage',
  components: {
    LevelSign,
    BtnAction,
    IntroResult
  },
  setup() {
    const storeAnswers = useUserAnswersStore()
    const { counter } = storeAnswers

    const storeLevels = useLevelsStore()
    const { levels } = storeLevels

    const setLevel = () => {
      if(counter < 10) {
        console.log('A1')
      } else if (counter > 9 && counter < 15) {
        console.log('A2')
      } else if (counter > 14 && counter < 20) {
        console.log('B1')
      } else if (counter > 19 && counter < 26) {
        console.log('B2')
      } else if (counter > 25 && counter < 29) {
        console.log('C1')
      } else {
        console.log('C2')
      }
    }

    onMounted(() => {
      setLevel()
    })
    return {
      counter
    }
  }
})
</script>
