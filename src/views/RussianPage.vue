<template>
  <div class="bg-russian h-[550px] w-full flex items-center justify-center">
    <LanguageTile title="język rosyjski" icon="https://png.pngtree.com/png-clipart/20230916/original/pngtree-russian-flag-round-vector-png-image_12250405.png" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LanguageTile from '@/components/atoms/LanguageTile.vue';

export default defineComponent ({
  name: 'RussianPage',
  components: {
    LanguageTile
}
})

</script>