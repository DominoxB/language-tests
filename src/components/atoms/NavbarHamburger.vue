<template>
  <div class="mr-6">
    <button @click="clickHamburger" class="relative group">
      <div class="flex overflow-hidden items-center justify-center z-60">
        <div
          class="flex flex-col justify-between w-[20px] h-[20px] transform transition-all origin-center overflow-hidden"
        >
          <div
            :class="{ 'translate-x-10': show }"
            class="bg-white h-[2px] w-7 origin-left"
          ></div>
          <div
            :class="{ 'translate-x-10': show }"
            class="bg-white h-[2px] w-7 origin-left"
          ></div>
          <div
            :class="{ 'translate-x-10': show }"
            class="bg-white h-[3px] w-7 origin-left"
          ></div>
          <div
            class="absolute items-center justify-between transform transition-all top-2.5 flex"
          >
            <div
              :class="{ 'rotate-45': show }"
              class="absolute bg-white h-[2px] w-5 transform transition-all duration-200 delay-100"
            ></div>
            <div
              :class="{ '-rotate-45': show }"
              class="absolute bg-white h-[2px] w-5 transform transition-all duration-200 delay-100"
            ></div>
          </div>
        </div>
      </div>
    </button>
    <div
      :class="{ '-translate-x-full': !show }"
      class="fixed h-[104px] w-full block text-lg text-white text-center py-2 bg-blue-600 top-16 bottom-0 left-0 transition duration-700"
    >
      <TestSelectionNav
        class="hover:bg-blue-500 py-2 cursor-pointer text-center"
      />
      <p
        @click="clickLink('/AboutUsPage')"
        class="hover:bg-blue-500 py-2 cursor-pointer"
      >
        {{ ('O nas') }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue"
import { useRouter } from "vue-router"
import TestSelectionNav from "../organisms/TestSelectionNav.vue"

export default defineComponent({
  name: "NavbarHamburger",
  components: { TestSelectionNav},
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
