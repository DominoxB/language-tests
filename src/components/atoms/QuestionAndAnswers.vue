<template>
  <div class="font-open px-96 py-4">
    <div class="text-2xl">
      {{ `${id + '. '} ` }} {{ question }}
    </div>
    <div class="flex items-center justify-center space-x-16 text-lg border-2 border-blue-300 rounded-lg py-4 px-4 my-4">
      <div>
        <input type="radio" 
          :id="answerA" 
          value="a" 
          :name="question" 
          v-model="selected" />
        {{ answerA }}
        <label for="answerA" />
      </div>
      <div>
        <input type="radio" 
          :id="answerB" 
          value="b" 
          :name="question" 
          v-model="selected" />
        {{ answerB }}
        <label for="answerB" />
      </div>
      <div>
        <input type="radio" 
          :id="answerC" 
          value="c" 
          :name="question" 
          v-model="selected" />
        {{ answerC }}
        <label for="answerC" />
      </div>
      <div>
         <input type="radio" 
          :id="answerD" 
          value="d" 
          :name="question" 
          v-model="selected" />
        {{ answerD }}
        <label for="answerD" />
      </div>
    </div>
    <div class="bg-pink-400 h-10 w-full" v-if="correct === selected"></div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'QuestionAndAnswers',
  props: {
    id: {
      type: Number,
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
    },
    correct: {
      type: String
    }
  },
  setup() {
    const selected = ref('')
    return {
      selected
    }
  }
})
</script>
