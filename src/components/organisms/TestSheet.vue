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
import { useQuestionEnglishStore } from '@/stores/testEnglish'
import QuestionAndAnswers from '../atoms/QuestionAndAnswers.vue'

export default defineComponent({
  name: 'TestSheet',
  components: { QuestionAndAnswers },
  setup() {
    const store = useQuestionEnglishStore();
    const { questions } = store;

    return { questions }
  }
})
</script>

