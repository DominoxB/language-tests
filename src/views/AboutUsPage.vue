<template>
  <div class="bg-faces w-full md:h-screen p-12 md:p-32 font-open text-xl space-y-8 text-justify">
    <p class="text-4xl mb-16">{{ $t('us')}}</p>
    <p>{{ $t('tutors') }}</p>
    <p>{{ $t('ourTests') }}</p>
    <p class="text-4xl mb-16">{{ $t('findUs') }}</p>
    <p>{{ $t('available') }} 
      <a href="https://www.facebook.com/?locale=pl_PL" target="_blank" class="text-blue-800">{{ $t('fb')}}</a>, 
      <a href="https://www.instagram.com/" target="_blank" class="text-blue-800">{{ $t('insta') }}</a>, 
      <a href="https://www.tiktok.com/?is_copy_url=1&is_from_webapp=v1" target="_blank" class="text-blue-800">{{ $t('tik') }}</a>, {{ $t('and')}}
      <a href="https://twitter.com/?lang=pl" target="_blank" class="text-blue-800">{{ $t('twitter') }}</a>.
      {{ $t('write') }}
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'

export default defineComponent({
  name: 'EnglishPage',
  components: {
  },
  setup() {
    onMounted(() => {
      window.scrollTo(0, 0)
    })
    return {
    }
  }
})
</script>
