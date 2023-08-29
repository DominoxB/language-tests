<template>
  <div>
    <HomePage />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HomePage from '../src/views/HomePage.vue'
export default defineComponent ({
  name: 'App',
  components: {
    HomePage
  }
})
</script>