<template>
  <button class="bg-blue-200 py-2 px-6 rounded-md hover:bg-blue-300" @click="$emit('scroll')" >
    {{ $t('start') }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: "BtnArrowDown",
  emits: ['scroll']
})
</script>
