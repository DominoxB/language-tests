<template>
  <div>
    <QuestionAndAnswers 
      v-for="question in questions" 
      :key="question.n" 
      :number="question.n" 
      :question="question.q"
      :answerA="question.a" 
      :answerB="question.b" 
      :answerC="question.c" 
      :answerD="question.d" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import QuestionAndAnswers from '../atoms/QuestionAndAnswers.vue'

export default defineComponent({
  name: 'TestSheet',
  components: { QuestionAndAnswers },
  setup() {
    const questions = [
      {
        n: '1. ',
        q: 'Hello, how are you today?',
        a: 'Thank you Mark, I am fine!',
        b: 'No, I do not go there.',
        c: 'Thank you, that is all.',
        d: 'You are welcome.'
      },
      {
        n: '2. ',
        q: 'Hello, how are you today?',
        a: 'Thank you Mark, I am fine!',
        b: 'No, I do not go there.',
        c: 'Thank you, that is all.',
        d: 'You are welcome.'
      },
      {
        n: '3. ',
        q: 'Hello, how are you today?',
        a: 'Thank you Mark, I am fine!',
        b: 'No, I do not go there.',
        c: 'Thank you, that is all.',
        d: 'You are welcome.'
      },

    ]
    return { questions }
  }
})
</script>

