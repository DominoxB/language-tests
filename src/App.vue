<template>
  <TopNavbar />
  <router-view></router-view>
  <PageFooter />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TopNavbar from '@/components/organisms/TopNavbar.vue'
import PageFooter from '@/components/atoms/PageFooter.vue'
export default defineComponent({
  name: 'App',
  components: { TopNavbar, PageFooter }
})
</script>
