<template>
  <div
    class="hidden md:flex bg-blue-500 px-2 md:px-8 py-4 justify-between items-center text-white font-open md:text-lg top-0 sticky z-20">
    <NameAndLogo />
    <div class="flex">
      <div class="flex space-x-1 md:space-x-10 md:mr-8">
        <TestSelectionNav />
        <router-link to="/AboutUsPage">{{ $t('aboutUs') }}</router-link>
        <LanguageCharger />
      </div>
    </div>
  </div>
  <div class="flex md:hidden bg-blue-500 px-2 py-4 justify-between items-center text-white font-open top-0 sticky z-20">
    <NavbarHamburger />
    <NameAndLogo />
    <LanguageCharger />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NameAndLogo from '../molecules/NameAndLogo.vue'
import TestSelectionNav from '../organisms/TestSelectionNav.vue'
import NavbarHamburger from '../atoms/NavbarHamburger.vue'
import LanguageCharger from '../atoms/LanguageCharger.vue'
export default defineComponent({
  name: 'TopNavbar',
  components: {
    NameAndLogo,
    TestSelectionNav,
    NavbarHamburger,
    LanguageCharger
  },
})
</script>
