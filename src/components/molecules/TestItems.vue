<template>
  <div class="mt-2 border absolute">
    <div class="p-2 w-32 flex items-center hover:bg-slate-600 text-white bg-slate-800 cursor-pointer"
      v-for="test in tests" :key="test.id">
      <img :src="test.icon" alt="flag" class="w-5 mr-2" />
      <span>{{ test.name }}</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import { useI18n } from 'vue-i18n'
export default defineComponent({
  name: "TestItems",
  setup() {
    const { t } = useI18n()
    const tests = [
      {
        id: 1,
        name: t('english'),
        icon: "https://img.icons8.com/offices/30/great-britain.png"
      },
      {
        id: 2,
        name: t('russian'),
        icon: 'https://img.icons8.com/offices/30/russian-federation.png'
      }
    ]
    return {
      tests
    }
  }
})
</script>
