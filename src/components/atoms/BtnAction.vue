<template>
  <div class="flex justify-center items-center font-open">
  <button class="flex items-center bg-blue-200 rounded-2xl border border-blue-400 hover:bg-blue-300 px-2 py-2 lg:px-12 lg:py-3" @click="$emit('action')" >
    {{ name }}
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
  emits: ['action']
})
</script>
