<template>
  <button class="rounded-full bg-blue-500 w-10 h-10 flex justify-center items-center transition hover:bg-blue-400" @click="$emit('scroll')" >
    <img src="@/icons/down-arrow.png" alt="arrow-down">
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: "ArrowDownBtn",
  emits: ['scroll']
})
</script>
