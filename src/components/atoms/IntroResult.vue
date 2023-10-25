<template>
<div class="text-center bg-test py-36 font-open text-white ">
  <p class="text-3xl font-bold mb-4">Sprawdź, jak Ci poszło!</p>
  <div class="space-y-1 text-lg">
    <p>Poniżej znajduje się Twój wynik: ilość punktów, wartość procentowa oraz przypisanie do poziomu wraz z jego
      opisem.</p>
    <p>Mamy nadzieję, że jesteś zadowolony :)</p>
    <p>Jeśli nie to pamiętaj, że człowiek uczy się całe życie i nigdy nie jest za późno na naukę języka. Jesteś w
      idealnym momencie, aby się tym zająć :)</p>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'IntroResult',
})
</script>