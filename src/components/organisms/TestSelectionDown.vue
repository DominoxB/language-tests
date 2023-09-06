<template>
  <div class="bg-slate-100 py-10 font-open text-center">
    <span class="text-2xl">{{ $t('testDown') }}</span>
    <div class="flex justify-center mt-12 space-x-16">
      <TestSelectionDownItem :name="$t('english')" flag="https://img.icons8.com/offices/30/great-britain.png" />
      <TestSelectionDownItem :name="$t('russian')" flag="https://img.icons8.com/offices/30/russian-federation.png" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TestSelectionDownItem from '../atoms/TestSelectionDownItem.vue'
export default defineComponent({
  name: 'TestSelectionDown',
  components: {
    TestSelectionDownItem
  }
})
</script>
