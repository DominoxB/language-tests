<template>
  <div
    class="bg-white flex items-center justify-center text-center opacity-80 w-64 h-64 md:w-80 md:h-80 rounded-full font-open">
    <div>
      <span class="text-2xl md:text-3xl font-semibold text-slate-800">{{ title.toUpperCase() }}</span>
      <div class="h-px bg-black mt-2"></div>
      <div class="text-center mt-2 text-lg">{{ $t('check') }}</div>
      <img :src="icon" class="mx-auto h-12 w-12 md:h-20 md:w-20 mt-4" />
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
