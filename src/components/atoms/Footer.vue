<template>
  <div class="bg-slate-800 text-white space-x-2 md:space-x-4 text-sm md:text-basic py-4 flex items-center justify-center w-full" id="secondScroll">
    <a href="https://pl-pl.facebook.com" target="_blank">
      <img src="@/icons/facebook.png" />
    </a>
    <a href="https://www.instagram.com" target="_blank">
      <img src="@/icons/instagram.png" />
    </a>
    <span>{{ $t('footer') }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'FooterSection',
})
</script>
