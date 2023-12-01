<template>
  <div>
    <IntroContent />
    <AboutUs />
    <TestSelectionDown />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import IntroContent from '../components/organisms/IntroContent.vue'
import AboutUs from '@/components/organisms/AboutUs.vue'
import TestSelectionDown from '@/components/organisms/TestSelectionDown.vue'
export default defineComponent({
  name: 'HomePage',
  components: {
    IntroContent,
    AboutUs,
    TestSelectionDown,
  },
  setup() {
    onMounted(() => {
      window.scrollTo(0, 0)
    })
  }
})
</script>
