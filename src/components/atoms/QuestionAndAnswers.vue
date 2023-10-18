<template>
  <div class="font-open">
    <span class="text-2xl">{{ question }}</span>
    <div class="flex items-center space-x-6 text-lg border-2 border-blue-300 rounded-lg py-2 px-4 my-4">
      <input type="radio" :value="answer" class="mr-1" /> 
      {{ answer }}
    </div>

  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'QuestionAndAnswers',
  props: {
    question: {
      type: String,
      required: true
    },
    answer: {
      type: String,
      required: true
    }
  }
})
</script>
