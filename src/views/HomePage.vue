<template>
  <div>
    <TopNavbar />
    <IntroContent />
    <AboutUs />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IntroContent from '../components/organisms/IntroContent.vue'
import TopNavbar from '../components/organisms/TopNavbar.vue'
import AboutUs from '@/components/organisms/AboutUs.vue'
export default defineComponent ({
  name: 'HomePage',
  components: {
    IntroContent,
    TopNavbar,
    AboutUs
  }
})
</script>