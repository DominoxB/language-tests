<template>
  <div>
    <IntroContent />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import IntroContent from '../organisms/IntroContent.vue'
export default defineComponent ({
  name: 'HomePage',
  components: {
    IntroContent
  }
})
</script>