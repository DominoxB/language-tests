<template>
  <div>
    <TopNavbar />
    <IntroContent />
    <TestItems />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IntroContent from '../components/organisms/IntroContent.vue'
import TopNavbar from '../components/organisms/TopNavbar.vue'
import TestItems from '../components/molecules/TestItems.vue'
export default defineComponent ({
  name: 'HomePage',
  components: {
    IntroContent,
    TopNavbar,
    TestItems
  }
})
</script>