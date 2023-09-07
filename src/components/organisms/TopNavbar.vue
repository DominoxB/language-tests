<template>
  <div
    class="bg-blue-500 px-8 py-4 flex justify-between items-center text-white font-open text-lg top-0 sticky"
  >
    <NameAndLogo />
    <div class="flex space-x-10 mr-8">
      <TestSelectionNav />
      <span>{{ $t('aboutUs') }}</span>
      <div id="charger" class="text-white">
      <select v-model="$i18n.locale" class="cursor-pointer bg-blue-500">
        <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale" class="bg-blue-500 hover:bg-blue-400">
          {{ locale }}
        </option>
      </select>
    </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NameAndLogo from '../molecules/NameAndLogo.vue'
import TestSelectionNav from '../organisms/TestSelectionNav.vue'
export default defineComponent({
  name: 'TopNavbar',
  components: {
    NameAndLogo,
    TestSelectionNav,
  },
})
</script>
