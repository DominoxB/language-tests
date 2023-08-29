<template>
  <div class="p-3 border w-32 flex items-center space-x-2 hover:bg-slate-500 text-white bg-black cursor-pointer"
    v-for="test in tests" :key="test.id">
    <img :src="test.icon" alt="flag" class="w-5 rounded-md" />
    <span>{{ test.name }}</span>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue"
export default defineComponent({
  name: "TestItems",
  setup() {
    const tests = [
      {
        id: 1,
        name: 'Angielski',
        icon: "https://img.icons8.com/offices/30/great-britain.png"
      },
      {
        id: 2,
        name: 'Rosyjski',
        icon: 'https://img.icons8.com/offices/30/russian-federation.png'
      }
    ]
    return {
      tests
    }
  }
})
</script>
