<template>
  <div v-if="path === '/EnglishPage'">
    <QuestionAndAnswers 
      v-show="question.id <= 10"
      v-for="question in questionsEn" 
      :key="question.id" 
      :id="question.id" 
      :question="question.q"
      :answerA="question.a" 
      :answerB="question.b" 
      :answerC="question.c" 
      :answerD="question.d" 
      :correct="question.correct">
    </QuestionAndAnswers>
    <BtnStart :name="$t('next')"/>
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
      :answerD="question.d" 
      :correct="question.correct" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useQuestionEnglishStore } from '@/stores/testEnglish'
import { useQuestionRussianStore } from '@/stores/testRussian'
import { useRoute } from 'vue-router'
import QuestionAndAnswers from '../atoms/QuestionAndAnswers.vue'
import BtnStart from '../atoms/BtnStart.vue'

export default defineComponent({
  name: 'TestSheet',
  components: { QuestionAndAnswers, BtnStart },
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
      path,
    }
  }
})
</script>

