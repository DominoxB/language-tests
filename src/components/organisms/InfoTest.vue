<template>
  <div class="font-open border-2 border-blue-200 text-justify p-4 lg:p-10 my-10 lg:my-20 mx-4 xl:mx-64" id="myScroll" v-if="!storeTests.showAnswers">
    <div class="text-2xl md:text-3xl text-center" v-if="path === '/EnglishPage'">{{ $t('wantEnglish') }}</div>
    <div class="text-3xl text-center" v-else>{{ $t('wantRussian') }}</div>
    <p class="py-6">{{ $t('info1') }}</p>
    <p>{{ $t('info2') }}</p>
    <p class="py-6">{{ $t('info3') }}</p>
    <p class="pb-6">{{ $t('info4') }}</p>
    <div class="flex justify-center">
      <BtnStart class="mt-4 hidden lg:flex" @scroll="showTest" :name="$t('start')" />
    </div>
  </div>
  <TestSheet id="myScroll" v-if="storeTests.test" class="scroll-mt-24" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useRoute } from 'vue-router'
import BtnStart from '@/components/atoms/BtnStart.vue'
import TestSheet from './TestSheet.vue'
import { useTestsStore } from '@/stores/tests'

export default defineComponent({
  name: 'InfoTest',
  components: {
    BtnStart,
    TestSheet
  },
  setup() {
    const route = useRoute()
    const path = route.path
    const storeTests = useTestsStore()

    const scrollToTest = () => {
      const myScroll = document.getElementById("myScroll")
      myScroll?.scrollIntoView({ behavior: "smooth" })
    }

    const showTest = () => {
      setTimeout(() => {
        scrollToTest()
      }, 100)
    }
    return {
      showTest,
      path,
      storeTests
    }
  }
})
</script>
