<template>
  <button class="bg-blue-200 py-2 px-6 rounded-md border border-blue-400 hover:bg-blue-300" @click="$emit('scroll', 'next')" >
    {{ name }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: "BtnArrowDown",
  props: {
    name: {
      type: String,
      required: true
    }
  },
  emits: ['scroll', 'next']
})
</script>
