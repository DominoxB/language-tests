<template>
  <button class="rounded-full bg-blue-500 w-10 h-10 flex justify-center items-center transition ease-in-out delay-150 hover:scale-110 hover:bg-blue-400 duration-300">
    <img src="@/icons/down-arrow.png" alt="arrow-down">
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: "ArrowDownBtn"
})
</script>
