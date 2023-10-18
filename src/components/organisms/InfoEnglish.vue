<template>
  <div class="font-open border-2 border-blue-200 p-10 my-20 mx-64">
    <h1 class="text-3xl">{{ $t('wantEnglish') }}</h1>
    <p class="py-6">{{ $t('info1') }}</p>
    <p>{{ $t('info2') }}</p>
    <p class="py-6">{{ $t('info3') }}</p>
    <div class="flex justify-end">
      <BtnStart class="mt-4" @scroll="showTest" />
    </div>
  </div>
  <IntroContent id="myScroll" v-if="test" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import BtnStart from '@/components/atoms/BtnStart.vue'
import IntroContent from '@/components/organisms/IntroContent.vue';

export default defineComponent({
  name: 'InfoEnglish',
  components: {
    BtnStart,
    IntroContent
  },
  setup() {
    const test = ref(false)
    const scrollToTest = () => {
      const myScroll = document.getElementById("myScroll")
      myScroll?.scrollIntoView({ behavior: "smooth", block: 'center' })
    }

    const showTest = () => {
      test.value = true
      setTimeout(() => {
        scrollToTest()
      }, 100);

    }
    return {
      test,
      showTest
    }
  }
})
</script>
