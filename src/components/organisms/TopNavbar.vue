<template>
  <div
    class="bg-blue-500 px-8 py-4 flex justify-between items-center text-white font-open text-lg"
  >
    <NameAndLogo />
    <div class="flex space-x-4 mr-8">
      <TestSelection />
      <span>O nas</span>
      <span>Language</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import NameAndLogo from "../molecules/NameAndLogo.vue"
import TestSelection from "../molecules/TestSelection.vue"
export default defineComponent({
  name: "TopNavbar",
  components: {
    NameAndLogo,
    TestSelection,
  },
})
</script>
