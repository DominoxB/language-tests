<template>
  <div class="mx-[600px] my-12 space-y-8 font-open">
    <h1 class="text-center text-3xl mb-12 font-semibold">{{ $t('why') }}</h1>
    <div v-for="reason in reasons" :key="reason.alt" class="flex items-center">
      <img :src="reason.image" :alt="reason.alt" class="mr-10 h-24" />
      <p>{{ reason.text }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

export default defineComponent({
  name: 'AboutUs',
  setup() {
    const { t } = useI18n()
    const reasons = [
      {
        image: 'https://cdn-icons-png.flaticon.com/128/1721/1721929.png',
        alt: 'list',
        text: t('experience')
      },
      {
        image: 'https://cdn-icons-png.flaticon.com/128/726/726456.png',
        alt: 'forfree',
        text: t('free')
      },
      {
        image: 'https://cdn-icons-png.flaticon.com/128/6571/6571437.png',
        alt: 'result',
        text: t('result')
      }
    ]
    return {
      reasons
    }
  }
})
</script>
