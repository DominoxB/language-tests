<template>
  <div class="flex justify-center items-center font-open">
  <button class="flex items-center bg-blue-200 rounded-md border border-blue-400 hover:bg-blue-300 px-4 py-2" @click="$emit('next')" >
    {{ name }}
    <img src="@/icons/arrow-right.png" alt="arrow" class="w-8 h-8 ml-2"/>
  </button>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: "BtnNext",
  props: {
    name: {
      type: String,
      required: true
    }
  },
  emits: ['next']
})
</script>
