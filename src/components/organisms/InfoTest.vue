<template>
  <div class="font-open border-2 border-blue-200 p-10 my-20 mx-64" id="myScroll" v-if="!storeTests.showAnswers">
    <div class="text-3xl" v-if="path === '/EnglishPage'">{{ $t('wantEnglish') }}</div>
    <div class="text-3xl" v-else>{{ $t('wantRussian') }}</div>
    <p class="py-6">{{ $t('info1') }}</p>
    <p>{{ $t('info2') }}</p>
    <p class="py-6">{{ $t('info3') }}</p>
    <p class="pb-6">{{ $t('info4') }}</p>
    <div class="flex justify-end">
      <BtnStart class="mt-4" @scroll="showTest" :name="$t('start')" :disabled="isBtnDisabled"/>
    </div>
  </div>
  <TestSheet id="myScroll" v-if="storeTests.test" class="scroll-mt-24" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
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
    const isBtnDisabled = ref(false)
    const storeTests = useTestsStore()

    const scrollToTest = () => {
      const myScroll = document.getElementById("myScroll")
      myScroll?.scrollIntoView({ behavior: "smooth" })
    }

    const showTest = () => {
      setTimeout(() => {
        scrollToTest()
      }, 100)
      isBtnDisabled.value = true
    }
    return {
      showTest,
      path,
      isBtnDisabled,
      storeTests
    }
  }
})
</script>
