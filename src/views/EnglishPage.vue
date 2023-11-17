<template>
  <div class="bg-english h-[550px] w-full p-20">
    <div class="flex items-center justify-center">
      <LanguageTile :title="$t('englishTile')"
        icon="https://png.pngtree.com/png-vector/20211101/ourmid/pngtree-round-country-flag-united-kingdom-png-image_4019312.png" />
    </div>
    <BtnArrowDown class="mx-auto mt-8 animate-bounce" @scroll="scrollDown" v-if="!testStore.showAnswers" />
  </div>
  <InfoTest />
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { useTestsStore } from '@/stores/tests'
import LanguageTile from '@/components/atoms/LanguageTile.vue'
import InfoTest from '@/components/organisms/InfoTest.vue'
import BtnArrowDown from '@/components/atoms/BtnArrowDown.vue'

export default defineComponent({
  name: 'EnglishPage',
  components: {
    LanguageTile,
    InfoTest,
    BtnArrowDown
  },
  setup() {
    const testStore = useTestsStore()
    const scrollDown = () => {
      const myScroll = document.getElementById("myScroll")
      myScroll?.scrollIntoView({ behavior: "smooth", block: 'center' })
    }
    onMounted(() => {
      window.scrollTo(0, 0)
    })
    return {
      testStore,
      scrollDown
    }
  }
})
</script>
