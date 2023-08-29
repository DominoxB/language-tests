<template>
  <div>
    <TopNavbar />
    <IntroContent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IntroContent from '../organisms/IntroContent.vue'
import TopNavbar from '../organisms/TopNavbar.vue'
export default defineComponent ({
  name: 'HomePage',
  components: {
    IntroContent,
    TopNavbar
  }
})
</script>