<template>
  <router-link to="/">
    <div class="flex items-center">
      <img src="@/icons/logo.png" alt="logo" class="w-8 md:w-12 mr-2 md:mr-4" />
      <span class="font-courgette text-2xl text-white">Lang4You</span>
    </div>
  </router-link>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'NameAndLogo'
})
</script>
