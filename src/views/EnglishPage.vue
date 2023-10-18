<template>
  <div class="bg-english h-[550px] w-full flex items-center justify-center">
    <LanguageTile :title="$t('englishTile')"
      icon="https://png.pngtree.com/png-vector/20211101/ourmid/pngtree-round-country-flag-united-kingdom-png-image_4019312.png" />
  </div>
  <InfoTest />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LanguageTile from '@/components/atoms/LanguageTile.vue'
import InfoTest from '@/components/organisms/InfoTest.vue'

export default defineComponent({
  name: 'EnglishPage',
  components: {
    LanguageTile,
    InfoTest,
}
})
</script>
