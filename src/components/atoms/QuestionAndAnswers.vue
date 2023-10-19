<template>
  <div class="font-open px-96 py-4">
    <div class="text-2xl">
      {{ number }} {{ question }}
    </div>
    <div class="flex items-center justify-center space-x-16 text-lg border-2 border-blue-300 rounded-lg py-4 px-4 my-4">
      <input type="radio" :value="answerA" name="answer" />
      {{ answerA }}
      <input type="radio" :value="answerB" name="answer" />
      {{ answerB }}
      <input type="radio" :value="answerC" name="answer" />
      {{ answerC }}
      <input type="radio" :value="answerD" name="answer" />
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
