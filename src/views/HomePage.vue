<template>
  <div>
    <IntroContent />
    <AboutUs />
    <TestSelectionDown />
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IntroContent from '../components/organisms/IntroContent.vue'
import AboutUs from '@/components/organisms/AboutUs.vue'
import TestSelectionDown from '@/components/organisms/TestSelectionDown.vue'
import Footer from '@/components/atoms/Footer.vue'

export default defineComponent ({
  name: 'HomePage',
  components: {
    IntroContent,
    AboutUs,
    TestSelectionDown,
    Footer
  }
})
</script>