<template>
  <div v-if="path === '/EnglishPage'">
    <QuestionAndAnswers 
      v-for="question in questionsEn" 
      :key="question.id" 
      :id="question.id" 
      :question="question.q"
      :answerA="question.a" 
      :answerB="question.b" 
      :answerC="question.c" 
      :answerD="question.d" />
  </div>
  <div v-else>
    <QuestionAndAnswers 
      v-for="question in questionsRu" 
      :key="question.id" 
      :id="question.id" 
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
import { useQuestionRussianStore } from '@/stores/testRussian'
import { useRoute } from 'vue-router'
import QuestionAndAnswers from '../atoms/QuestionAndAnswers.vue'

export default defineComponent({
  name: 'TestSheet',
  components: { QuestionAndAnswers },
  setup() {
    const route = useRoute()
    const path = route.path

    const storeEn = useQuestionEnglishStore()
    const storeRu = useQuestionRussianStore()

    const { questionsEn } = storeEn
    const { questionsRu } = storeRu

    return { 
      questionsEn, 
      questionsRu, 
      path 
    }
  }
})
</script>

