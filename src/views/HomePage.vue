<template>
  <div>
    <TopNavbar />
    <IntroContent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IntroContent from '../components/organisms/IntroContent.vue'
import TopNavbar from '../components/organisms/TopNavbar.vue'
export default defineComponent ({
  name: 'HomePage',
  components: {
    IntroContent,
    TopNavbar
  }
})
</script>