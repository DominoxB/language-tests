<template>
  <div class="w-full bg-test md:py-20 flex items-center justify-center font-open">
    <transition name="text" appear enter-active-class="transition-all duration-1000 ease-in"
      enter-from-class="opacity-0 translate-x-[500px]">
      <div class="mx-20 md:mx-[500px] text-center text-white">
        <p class="text-xl md:text-[45px] my-4 leading-snug font-semibold">
          {{ $t('question') }}
        </p>
        <div class="bg-blue-500 w-64 h-1 mx-auto mb-8"></div>
        <p class="md:text-xl mb-8">
          {{ $t('intro') }}
        </p>
        <BtnArrowDown class="mx-auto animate-bounce" @scroll="scrollDown" />
        <p class="opacity-30 text-right text-xs md:text-sm">{{ $t('freepik1') }} <a
            href="https://www.freepik.com/free-photo/public-examination-preparation-concept_25077294.htm#query=answer%20sheet&position=1&from_view=search&track=ais#position=1&query=answer%20sheet">{{
              $t('freepik2') }}</a></p>
      </div>
    </transition>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BtnArrowDown from '../atoms/BtnArrowDown.vue'
export default defineComponent({
  name: 'IntroContent',
  components: {
    BtnArrowDown
  },
  setup() {
    const scrollDown = () => {
      const myScroll = document.getElementById("myScroll")
      myScroll?.scrollIntoView({ behavior: "smooth", block: 'center' })
    }
    return {
      scrollDown
    }
  }
})
</script>
