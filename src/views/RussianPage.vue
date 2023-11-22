<template>
  <div class="bg-russian h-[550px] w-full p-20">
    <div class="flex items-center justify-center">
      <LanguageTile :title="$t('russianTile')"
        icon="https://cdn-icons-png.flaticon.com/128/4628/4628645.png?ga=GA1.1.1077292613.1698915214&semt=ais" />
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
  name: 'RussianPage',
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
