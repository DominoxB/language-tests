<template>
  <div>
    <div class="flex items-center justify-center text-5xl p-4 border-2 border-blue-400 rounded-full w-40 h-40">
      <span class="font-slab text-blue-800">{{ text }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'LevelSign',
  props: {
    text: {
      type: String,
      required: true
    }
  }
})
</script>
