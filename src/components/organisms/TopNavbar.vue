<template>
  <div
    class="bg-blue-500 px-2 md:px-8 py-4 flex justify-between items-center text-white font-open md:text-lg top-0 sticky z-20">
    <NameAndLogo />
    <div class="hidden md:flex">
      <div class="flex space-x-1 md:space-x-10 md:mr-8">
        <TestSelectionNav />
        <router-link to="/AboutUsPage">{{ $t('aboutUs') }}</router-link>
        <div id="charger" class="text-white">
          <select v-model="$i18n.locale" class="cursor-pointer bg-blue-500">
            <option v-for="locale in $i18n.availableLocales" :key="`locale-${locale}`" :value="locale"
              class="bg-blue-500 hover:bg-blue-400">
              {{ locale }}
            </option>
          </select>
        </div>
      </div>
    </div>
    <NavbarHamburger class="flex md:hidden" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import NameAndLogo from '../molecules/NameAndLogo.vue'
import TestSelectionNav from '../organisms/TestSelectionNav.vue'
import NavbarHamburger from '../atoms/NavbarHamburger.vue'
export default defineComponent({
  name: 'TopNavbar',
  components: {
    NameAndLogo,
    TestSelectionNav,
    NavbarHamburger
  },
})
</script>
