<template>
  <div class="font-open px-96 py-4">
    <div class="text-2xl">
      {{ number }} {{ question }}
    </div>
    <div class="flex items-center justify-center space-x-16 text-lg border-2 border-blue-300 rounded-lg py-4 px-4 my-4">
      <div>
        <input type="radio" 
          :id="answerA" 
          :value="answerA" 
          :name="question" 
          v-model="selected" />
        {{ answerA }}
        <label for="answerA" />
      </div>
      <div>
        <input type="radio" 
          :id="answerB" 
          :value="answerB" 
          :name="question" 
          v-model="selected" />
        {{ answerB }}
        <label for="answerB" />
      </div>
      <div>
        <input type="radio" 
          :id="answerC" 
          :value="answerC" 
          :name="question" 
          v-model="selected" />
        {{ answerC }}
        <label for="answerC" />
      </div>
      <div>
         <input type="radio" 
          :id="answerD" 
          :value="answerD" 
          :name="question" 
          v-model="selected" />
        {{ answerD }}
        <label for="answerD" />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
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
  },
  setup() {
    const selected = ref(null);
    return {
      selected
    }
  }
})
</script>
