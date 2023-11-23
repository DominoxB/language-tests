<template>
<div class="text-center bg-test bg-cover py-24  md:py-36 px-4 md:px-[120px] font-open text-white">
  <p class="text-2xl md:text-3xl font-bold mb-4">{{ $t('introResult') }}</p>
  <div class="space-y-1 text-lg">
    <p>{{ $t('introResult1') }}</p>
    <p>{{ $t('introResult2') }}</p>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'IntroResult',
})
</script>
