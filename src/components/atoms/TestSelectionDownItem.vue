<template>
  <div
    class="border-blue-400 border-2 bg-white rounded-3xl py-6 md:py-12 px-8 md:px-16 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 hover:border-blue-500">
    <img :src="flag" alt="flag" class="mx-auto rounded-lg w-12 mb-4" />
    <div class="mb-2 uppercase font-semibold">{{ name }}</div>
    <span>{{ $t('solve') }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'TestSelectionDownItem',
  props: {
    name: {
      type: String,
      required: true
    },
    flag: {
      type: String,
      required: true
    }
  }
})
</script>
