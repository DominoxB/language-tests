<template>
  <div>
    <TopNavbar />
    <IntroContent />
    <AboutUs />
    <TestSelectionDown />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IntroContent from '../components/organisms/IntroContent.vue'
import TopNavbar from '../components/organisms/TopNavbar.vue'
import AboutUs from '@/components/organisms/AboutUs.vue'
import TestSelectionDown from '@/components/organisms/TestSelectionDown.vue'
export default defineComponent ({
  name: 'HomePage',
  components: {
    IntroContent,
    TopNavbar,
    AboutUs,
    TestSelectionDown
  }
})
</script>