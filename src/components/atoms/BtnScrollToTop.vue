<template>
  <button class="rounded-xl bg-slate-300 w-10 h-10 flex justify-center items-center hover:bg-slate-400 z-10" @click="$emit('scroll')" >
    <img src="@/icons/up-arrow.png" alt="arrow-up">
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: "BtnScrollToTop",
  emits: ['scroll']
})
</script>
