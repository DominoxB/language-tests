<template>
  <div class="font-open px-96 py-4">
    <div class="text-2xl">
      {{ number }} {{ question }}
    </div>
    <div class="flex items-center justify-center space-x-16 text-lg border-2 border-blue-300 rounded-lg py-4 px-4 my-4">
      <input type="radio" :value="answerA" />
      {{ answerA }}
      <input type="radio" :value="answerB" />
      {{ answerB }}
      <input type="radio" :value="answerC" />
      {{ answerC }}
      <input type="radio" :value="answerD" />
      {{ answerD }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'QuestionAndAnswers',
  props: {
    number: {
      type: String,
      required: true
    },
    question: {
      type: String,
      required: true
    },
    answerA: {
      type: String,
      required: true
    },
    answerB: {
      type: String,
      required: true
    },
    answerC: {
      type: String,
      required: true
    },
    answerD: {
      type: String,
      required: true
    }


  }
})
</script>
