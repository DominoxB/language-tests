<template>
  <div class="relative" ref="dropdown">
    <div class="flex items-center cursor-pointer" @click="isOpen = !isOpen">
      <span class="mr-1">{{ $t('test') }}</span>
      <img src="@/icons/single-down-arrow.png" alt="arrow" class="w-4 h-4 ml-1 mt-px" />
    </div>
    <div v-if="isOpen">
      <TestItems @click="isOpen = !isOpen" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import TestItems from '../molecules/TestItems.vue'
export default defineComponent({
  name: 'TestSelectionNav',
  components: {
    TestItems
  },
  setup() {
    const isOpen = ref(false)
    const dropdown = ref(null)
    onClickOutside(dropdown, () => {
      isOpen.value = false
    })
    return {
      isOpen,
      dropdown
    }
  }
})
</script>
