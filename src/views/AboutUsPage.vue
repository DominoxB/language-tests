<template>
  <div class="bg-tutors w-full h-screen p-60 font-open text-2xl space-y-8 text-center">
    <p class="text-4xl mb-16">O nas</p>
    <p>Jesteśmy grupą przyjaciół pasjonujących się nauką języka obcego. Każdy z nas ma wykształcenie pedagogiczne oraz filologiczne, dlatego możemy powiedzieć, że jesteśmy secjalistami w tym temacie :) Oprócz tego lata doświadczeń jako nauczyciele/korepetytorzy dały nam mnóstwo inspiracji, pozowliły zaobserwować, jakie problemy pojawiają się podczas nauki, ale przede wszystkim, jak sobie z nimi radzić.</p>
    <p>Testy przez nas przygotowane są sprawdzianem podstawowych umiejętności ucznia. Szeroki przekrój tematyczny i gramatyczny daje nam doskonały obraz tego, w jakim kierunku powinna toczyć się dalsza nauka. Jeśli chcesz nawiązać współpracę lub sprawdzić, co mamy Ci do zaoferowania skontaktuj się z nami po wykonaniu testu. Z nami języki obce przestaną być obce!</p>
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
