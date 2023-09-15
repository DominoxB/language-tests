<template>
  <div class="bg-english h-[550px] w-full flex items-center justify-center">
    <EnglishTile />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import EnglishTile from '@/components/atoms/EnglishTile.vue'

export default defineComponent ({
  name: 'EnglishPage',
  components: {
    EnglishTile
  }
})

</script>