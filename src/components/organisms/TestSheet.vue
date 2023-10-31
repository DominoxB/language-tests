<template>
  <div v-if="path === '/EnglishPage'">
    <div id="myScroll" v-for="question in questionsEn.slice(start, end)" :key="question.id">
      <QuestionAndAnswers :id="question.id" :question="question.q" :answerA="question.a" :answerB="question.b"
        :answerC="question.c" :answerD="question.d" :correct="question.correct">
      </QuestionAndAnswers>
    </div>
    <div class="flex justify-center mx-96 space-x-24">
      <BtnAction :name="$t('previous')" class="flex mb-6" @action="showPreviousQ" v-if="storeEn.currentPage > 1" />
      <BtnAction :name="$t('next')" class="flex mb-6" @action="showNextQ" v-if="storeEn.currentPage < 3" />
      <BtnAction :name="$t('checkResult')" class="flex mb-6" @action="showNextQ" v-if="storeEn.currentPage === 3" />
    </div>
  </div>
  <div v-else>
    <div id="myScroll" v-for="question in questionsRu.slice(start, end)" :key="question.id">
      <QuestionAndAnswers :id="question.id" :question="question.q" :answerA="question.a" :answerB="question.b"
        :answerC="question.c" :answerD="question.d" :correct="question.correct" />
    </div>
    <div class="flex justify-center mx-96 space-x-24">
      <BtnAction :name="$t('previous')" class="flex mb-6" @action="showPreviousQ" v-if="storeRu.currentPage > 1" />
      <BtnAction :name="$t('next')" class="flex mb-6" @action="showNextQ" v-if="storeRu.currentPage < 3" />
      <router-link to="/ResultPage">
        <BtnAction :name="$t('checkResult')" class="flex mb-6" v-if="storeRu.currentPage === 3" />
      </router-link>
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
    const { questionsRu, currentPage } = storeRu

    const start = ref(0)
    const end = ref(10)

    const scrollToBeginning = () => {
      const myScroll = document.getElementById("myScroll")
      myScroll?.scrollIntoView({ behavior: "smooth" })
    }

    const showNextQ = () => {
      storeEn.increment()
      storeRu.increment()
      start.value += 10
      end.value += 10
      setTimeout(() => {
        scrollToBeginning()
      }, 100)
    }

    const showPreviousQ = () => {
      storeEn.decrement()
      storeRu.decrement()
      start.value -= 10
      end.value -= 10
      setTimeout(() => {
        scrollToBeginning()
      }, 100)
    }

    return {
      questionsEn,
      questionsRu,
      currentPage,
      path,
      start,
      end,
      showNextQ,
      showPreviousQ,
      storeRu,
      storeEn
    }
  }
})
</script>
