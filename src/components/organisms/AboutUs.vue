<template>
  <div class="mx-[600px] my-20 space-y-8">
    <div v-for="reason in reasons" :key="reason.alt" class="flex items-center">
      <img :src="reason.image" :alt="reason.alt" class="mr-10 h-24" />
      <p>{{ reason.text }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "AboutUs",
  setup() {
    const reasons = [
      {
        image: 'https://cdn-icons-png.flaticon.com/128/1721/1721929.png',
        alt: 'list',
        text: 'Nam facilisis metus arcu, ac bibendum enim iaculis eu. Phasellus tempor congue nunc, at tempor lacus. Pellentesque dignissim id sem sed elementum. Ut mattis erat quis varius rhoncus. Cras pretium, nisi vel molestie hendrerit, mauris augue tristique metus, eu suscipit erat quam non purus.'
      },
      {
        image: 'https://cdn-icons-png.flaticon.com/128/726/726456.png',
        alt: 'list',
        text: 'Nam facilisis metus arcu, ac bibendum enim iaculis eu. Phasellus tempor congue nunc, at tempor lacus. Pellentesque dignissim id sem sed elementum. Ut mattis erat quis varius rhoncus. Cras pretium, nisi vel molestie hendrerit, mauris augue tristique metus, eu suscipit erat quam non purus.'
      },
      {
        image: 'https://cdn-icons-png.flaticon.com/128/6571/6571437.png',
        alt: 'list',
        text: 'Nam facilisis metus arcu, ac bibendum enim iaculis eu. Phasellus tempor congue nunc, at tempor lacus. Pellentesque dignissim id sem sed elementum. Ut mattis erat quis varius rhoncus. Cras pretium, nisi vel molestie hendrerit, mauris augue tristique metus, eu suscipit erat quam non purus.'
      },
    ]
    return {
      reasons
    }
  }
})
</script>
