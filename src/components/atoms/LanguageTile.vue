<template>
  <div class="bg-white flex items-center justify-center opacity-70 w-80 h-80 rounded-full font-open">
    <div>
      <span class="mt-24 text-3xl font-semibold text-slate-800">{{ title }}</span>
      <div class="h-px bg-black mt-2"></div>
      <div class="text-center mt-2 text-lg">Sprawdź swój poziom!</div>
      <img :src="icon" class="mx-auto h-20 w-20 mt-4" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'LanguageTile',
  props: {
    title: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  }
})
</script>
