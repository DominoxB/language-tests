<template>
  <top-navbar />
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TopNavbar from './components/organisms/TopNavbar.vue';
export default defineComponent({
  name: 'App',
  components: { TopNavbar }
})
</script>
