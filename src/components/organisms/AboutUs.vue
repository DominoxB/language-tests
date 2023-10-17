<template>
  <div class="mx-[600px] my-12 space-y-8 font-open" id="myScroll">
    <h1 class="text-center text-3xl mb-12 font-semibold">{{ $t('why') }}</h1>
    <div class="flex items-center">
      <img src="https://cdn-icons-png.flaticon.com/128/1721/1721929.png" alt="experience" class="mr-10 h-24" />
      <p>{{ $t('experience') }}</p>
    </div>
    <div class="flex items-center">
      <img src="https://cdn-icons-png.flaticon.com/128/726/726456.png" alt="forfree" class="mr-10 h-24" />
      <p>{{ $t('free') }}</p>
    </div>
    <div class="flex items-center">
      <img src="https://cdn-icons-png.flaticon.com/128/6571/6571437.png" alt="result" class="mr-10 h-24" />
      <p>{{ $t('result') }}</p>
    </div>
    <ArrowDownBtn class="mx-auto animate-bounce" @scroll="scrollEnd"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ArrowDownBtn from '../atoms/ArrowDownBtn.vue'
export default defineComponent({
  name: 'AboutUs',
  components: {
    ArrowDownBtn
  },
  setup() {
    const scrollEnd = () => {
      const secondScroll = document.getElementById("secondScroll")
      secondScroll?.scrollIntoView({ behavior: "smooth" })
    }
    return {
      scrollEnd
    }
  }
})
</script>

