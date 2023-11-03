<template>
  <div class="bg-faces h-screen w-full p-32 font-open text-xl space-y-8 text-justify">
    <p class="text-4xl mb-16">O nas</p>
    <p>Jesteśmy grupą przyjaciół pasjonujących się nauką języka obcego. Każdy z nas ma wykształcenie pedagogiczne oraz
      filologiczne, dlatego możemy powiedzieć, że jesteśmy specjalistami w tym temacie :) W naszym gronie mamy absolwentów Oxfordu, a także wybitnych polskich uczelni, jak Uniwersytet Mikołaja Kopernika w Toruniu, Uniwersytet Gdański, Uniwersytet Jagielloński w Krakowie. Lata doświadczeń
      jako nauczyciele/korepetytorzy, dały nam mnóstwo inspiracji, pozwoliły zaobserwować, jakie problemy pojawiają się
      podczas nauki, ale przede wszystkim, jak sobie z nimi radzić. Dzięki temu nawet dla tych z Was, dla których nauka języka obcego zawsze była utrapieniem, znajdziemy jakieś rozwiązanie.</p>
    <p>Testy przez nas przygotowane są sprawdzianem podstawowych umiejętności ucznia. Szeroki przekrój tematyczny i
      gramatyczny daje nam doskonały obraz tego, w jakim kierunku powinna toczyć się dalsza nauka. Jeśli chcesz nawiązać
      współpracę lub sprawdzić, co mamy Ci do zaoferowania skontaktuj się z nami po wykonaniu testu. Będziemy mogli wspólnie przeanalizować Twoje odpowiedzi, sprawdzić, w jakich momentach potrzebujesz wsparcia. Pierwsze spotkanie wraz z omówieniem testu poziomującego jest darmowe :) . Z nami języki
      przestaną być obce!</p>
    <p class="text-4xl mb-16">Znajdź nas online</p>
    <p>Jesteśmy dla Was dostępni na 
      <a href="https://www.facebook.com/?locale=pl_PL" target="_blank" class="text-blue-800">Facebooku</a>, 
      <a href="https://www.instagram.com/" target="_blank" class="text-blue-800">Instagramie</a>, 
      <a href="https://www.tiktok.com/?is_copy_url=1&is_from_webapp=v1" target="_blank" class="text-blue-800">TikToku</a>, a także
      <a href="https://twitter.com/?lang=pl" target="_blank" class="text-blue-800">X</a>.
      Napisz wiadomość, a ktoś z naszej ekipy odezwie się do Ciebie w przeciągu 24 godzin. Będziemy mogli umówić się wtedy na spotkanie online, gdzie omówimy Twój test, opowiesz nam o swoich językowych potrzebach, a my przedstawimy Ci plan Twojej dalszej przygody z językiem obcym. Pamiętaj - pierwsze spotkanie jest darmowe. 
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'

export default defineComponent({
  name: 'EnglishPage',
  components: {
  },
  setup() {

    onMounted(() => {
      window.scrollTo(0, 0)
    })
    return {
    }
  }
})
</script>
