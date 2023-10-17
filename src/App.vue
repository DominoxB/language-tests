<template>
  <top-navbar />
  <router-view></router-view>
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TopNavbar from './components/organisms/TopNavbar.vue'
import Footer from '@/components/atoms/Footer.vue'
export default defineComponent({
  name: 'App',
  components: { TopNavbar, Footer }
})
</script>
