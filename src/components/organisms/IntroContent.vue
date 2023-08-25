<template>
  <div
    class="w-full bg-test h-[550px] flex items-center justify-center font-open"
  >
    <div class="mx-[500px] text-center text-white">
      <p class="text-[45px] mb-4 font-semibold">
        Zastanawiasz się, jak sprawdzić swój poziom językowy?
      </p>
      <div class="bg-blue-500 w-64 h-1 mx-auto mb-8"></div>
      <p class="text-xl mb-8">
        Każdy z nas przynajmniej raz w życiu próbował uczyć się języka obcego.
        Aplikacja Lang4You pomoże Ci sprawdzić, jaki efekt przyniosły te próby.
        Dzięki specjalnie opracowanym testom, sprawdzisz swój poziom i dowiesz
        się jakie partie materiału są do powtórki, a w jakich jesteś naprawdę
        doskonały 👌. Po wykonaniu testu otrzymujesz jego wynik wraz z
        odpowiedziami i oznaczeniem, w którym miejscu popełniłeś błąd. To jak,
        startujemy?
      </p>
      <ArrowDownBtn class="mx-auto"/>
      <p class="opacity-30 text-right text-sm">Image by <a href="https://www.freepik.com/free-photo/public-examination-preparation-concept_25077294.htm#query=answer%20sheet&position=1&from_view=search&track=ais#position=1&query=answer%20sheet">Freepik</a></p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import ArrowDownBtn from '../atoms/ArrowDownBtn.vue'
export default defineComponent({
  name: "IntroContent",
  components: {
    ArrowDownBtn
  }
})
</script>
