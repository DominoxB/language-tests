<template>
  <button class="rounded-full bg-blue-400 w-10 h-10 flex justify-center items-center hover:bg-blue-500 z-10"
    @click="$emit('scroll')">
    <img src="@/icons/down-arrow.png" alt="arrow-down">
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: "BtnArrowDown",
  emits: ['scroll']
})
</script>
