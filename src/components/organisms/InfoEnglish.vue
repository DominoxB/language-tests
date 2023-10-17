<template>
  <div class="font-open border-2 border-blue-200 p-10 my-20 mx-64">
    <h1 class="text-3xl">Chcesz sprawdzić poziom języka angielskiego?</h1>
    <p class="py-6">Przygotowaliśmy dla Ciebie test składający się 30 pytań. Zawierają one zagadnienia z poziomów od A1 do
      C1. Dzięki tak szerokiemu wachlarzowi pytań będziemy mogli ustalić, jak radzisz sobie z leksyką i gramatyką na
      różnych poziomach zaawansowania. Nie ma się czego bać :) - wykonanie testu to pierwszy krok w drodze do osiągnięcia
      celu, jakim jest znajomość języka obcego.</p>
    <p>Na rozwiązanie testu masz nieograniczoną ilość czasu, nie oznacza to jednak, że możesz korzystać z pomocy lub
      szukać informacji online. Test wykonujesz po to, aby poznać poziom języka obcego jaki reprezentujesz w danej chwili.
      Dzięki temu dowiesz się, jak powinna wyglądać Twoja ścieżka nauki.</p>
    <p>Pamiętaj, że tylko jedna odpowiedź jest poprawna, nie ma tu pytań wielokrotnego wyboru.</p>
    <div class="flex justify-end">
      <BtnStart class="mt-4" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BtnStart from '@/components/atoms/BtnStart.vue'

export default defineComponent({
  name: 'InfoEnglish',
  components: {
    BtnStart
  }
})
</script>
