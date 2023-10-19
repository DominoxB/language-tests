<template>
  <div class="bg-russian h-[550px] w-full flex items-center justify-center">
    <LanguageTile :title="$t('russianTile')"
      icon="https://png.pngtree.com/png-clipart/20230916/original/pngtree-russian-flag-round-vector-png-image_12250405.png" />
  </div>
  <InfoTest />
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import LanguageTile from '@/components/atoms/LanguageTile.vue'
import InfoTest from '@/components/organisms/InfoTest.vue'

export default defineComponent({
  name: 'RussianPage',
  components: {
    LanguageTile,
    InfoTest
  },
  setup() {
    onMounted(() => {
      window.scrollTo(0, 0)
    })
  }
})
</script>
