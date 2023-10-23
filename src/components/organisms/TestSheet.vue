<template>
  <div v-if="path === '/EnglishPage'">
    <div id="myScroll" v-for="question in questionsEn.slice(start, end)" :key="question.id">
      <QuestionAndAnswers :id="question.id" :question="question.q" :answerA="question.a" :answerB="question.b"
        :answerC="question.c" :answerD="question.d" :correct="question.correct">
      </QuestionAndAnswers>
    </div>
    <div class="flex justify-between mx-96">
      <BtnAction :name="$t('previous')" class="flex mb-6" @action="showPreviousQ"/>
      <BtnAction :name="$t('next')" class="flex mb-6" @action="showNextQ" />
    </div>
  </div>
  <div v-else>
    <div v-for="question in questionsRu" :key="question.id">
      <QuestionAndAnswers v-for="question in questionsRu" :key="question.id" :id="question.id" :question="question.q"
        :answerA="question.a" :answerB="question.b" :answerC="question.c" :answerD="question.d"
        :correct="question.correct" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useQuestionEnglishStore } from '@/stores/testEnglish'
import { useQuestionRussianStore } from '@/stores/testRussian'
import { useRoute } from 'vue-router'
import QuestionAndAnswers from '../atoms/QuestionAndAnswers.vue'
import BtnAction from '../atoms/BtnAction.vue'

export default defineComponent({
  name: 'TestSheet',
  components: { QuestionAndAnswers, BtnAction },
  setup() {
    const route = useRoute()
    const path = route.path

    const storeEn = useQuestionEnglishStore()
    const { questionsEn } = storeEn

    const storeRu = useQuestionRussianStore()
    const { questionsRu } = storeRu

    const start = ref(0)
    const end = ref(10)

    const scrollToBeggining = () => {
      const myScroll = document.getElementById("myScroll")
      myScroll?.scrollIntoView({ behavior: "smooth" })
    }

    const showNextQ = () => {
      start.value += 10
      end.value += 10
      setTimeout(() => {
        scrollToBeggining()
      }, 100)
    }

    const showPreviousQ = () => {
      start.value -= 10
      end.value -= 10
      setTimeout(() => {
        scrollToBeggining()
      }, 100)
    }

    return {
      questionsEn,
      questionsRu,
      path,
      start,
      end,
      showNextQ,
      showPreviousQ,
    }
  }
})
</script>

