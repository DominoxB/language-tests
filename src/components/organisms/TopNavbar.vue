<template>
  <div class="bg-blue-500 px-8 py-4">
    <NameAndLogo />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NameAndLogo from '../molecules/NameAndLogo.vue'
export default defineComponent ({
  name: 'TopNavbar',
  components: {
    NameAndLogo
  }
})
</script>