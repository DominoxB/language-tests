<template>
  <div class="bg-slate-100 font-open pb-16 text-center">
    <h3 class="text-lg md:text-[27px] pt-8">{{ $t('testDown') }}</h3>
    <div class="flex justify-center mt-12 space-x-4 md:space-x-16">
      <router-link to="/EnglishPage">
        <TestSelectionDownItem :name="$t('english')" flag="https://img.icons8.com/offices/30/great-britain.png" />
      </router-link>
      <router-link to="/RussianPage">
        <TestSelectionDownItem :name="$t('russian')" flag="https://img.icons8.com/offices/30/russian-federation.png" />
      </router-link>
    </div>
    <BtnScrollToTop class="absolute right-3 mt-1" @scroll="scrollToTop" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TestSelectionDownItem from '../atoms/TestSelectionDownItem.vue'
import BtnScrollToTop from '../atoms/BtnScrollToTop.vue';
export default defineComponent({
  name: 'TestSelectionDown',
  components: {
    TestSelectionDownItem,
    BtnScrollToTop
  },
  setup() {
    const scrollToTop = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    return {
      scrollToTop
    }
  }
})
</script>
