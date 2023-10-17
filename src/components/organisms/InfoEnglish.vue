<template>
  <div class="font-open border-2 border-blue-200 p-10 my-20 mx-64">
    <h1 class="text-3xl">{{ $t('wantEnglish') }}</h1>
    <p class="py-6">{{ $t('info1') }}</p>
    <p>{{ $t('info2') }}</p>
    <p class="py-6">{{ $t('info3') }}</p>
    <div class="flex justify-end">
      <BtnStart class="mt-4" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BtnStart from '@/components/atoms/BtnStart.vue'

export default defineComponent({
  name: 'InfoEnglish',
  components: {
    BtnStart
  }
})
</script>
