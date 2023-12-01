<template>
  <div class="flex items-center">
    <button @click="clickHamburger" class="relative group">
      <div class="flex flex-col justify-between w-[20px] h-[20px] transform transition-all origin-center overflow-hidden">
        <div :class="{ 'translate-x-10': show }" class="bg-white h-[2px] w-7"></div>
        <div :class="{ 'translate-x-10': show }" class="bg-white h-[2px] w-7"></div>
        <div :class="{ 'translate-x-10': show }" class="bg-white h-[2px] w-7"></div>
        <div class="absolute items-center justify-between transform transition-all top-2.5 flex">
          <div :class="{ 'rotate-45': show }"
            class="absolute bg-white h-[2px] w-5 transform transition-all duration-200 delay-100"></div>
          <div :class="{ '-rotate-45': show }"
            class="absolute bg-white h-[2px] w-5 transform transition-all duration-200 delay-100"></div>
        </div>
      </div>
    </button>
    <div :class="{ '-translate-x-full': !show }"
      class="fixed h-[148px] w-full block text-lg text-white text-center py-2 bg-blue-600 top-16 bottom-0 left-0 transition duration-300">
      <div class="py-2 flex items-center justify-center hover:bg-blue-500 cursor-pointer"
        @click="clickLink('/EnglishPage')">
        <img src="https://img.icons8.com/offices/30/great-britain.png" alt="flag" class="w-5 mr-2" />
        <span>{{ $t('english') }}</span>
      </div>
      <div class="py-2 flex items-center justify-center hover:bg-blue-500 cursor-pointer"
        @click="clickLink('/RussianPage')">
        <img src="https://img.icons8.com/offices/30/russian-federation.png" alt="flag" class="w-5 mr-2" />
        <span>{{ $t('russian') }}</span>
      </div>
      <p class="hover:bg-blue-500 py-2 cursor-pointer" @click="clickLink('/AboutUsPage')">
        {{ ('O nas') }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: "NavbarHamburger",
  setup(props, context) {
    const router = useRouter()
    const show = ref(false)

    const clickHamburger = () => {
      show.value = !show.value;
      context.emit("mobile-menu", show.value)
    }

    const clickLink = (url: string) => {
      show.value = false;
      router.push({ path: url })
    }

    return {
      clickHamburger,
      clickLink,
      show,
    }
  }
})
</script>
