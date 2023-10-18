<template>
  <div class="font-open border-2 border-blue-200 p-10 my-20 mx-64">
    <div class="text-3xl" v-if="path === '/EnglishPage'">{{ $t('wantEnglish') }}</div>
    <div class="text-3xl" v-else>{{ $t('wantRussian') }}</div>
    <p class="py-6">{{ $t('info1') }}</p>
    <p>{{ $t('info2') }}</p>
    <p class="py-6">{{ $t('info3') }}</p>
    <div class="flex justify-end">
      <BtnStart class="mt-4" @scroll="showTest" />
    </div>
  </div>
  <div id="myScroll" v-if="test">testowy element</div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRoute } from 'vue-router'
import BtnStart from '@/components/atoms/BtnStart.vue'

export default defineComponent({
  name: 'InfoEnglish',
  components: {
    BtnStart,
  },
  setup() {
    const test = ref(false)
    const route = useRoute()
    const path = route.path
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
      showTest,
      path
    }
  }
})
</script>
