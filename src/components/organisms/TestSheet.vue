<template>
  <div>
    <div id="myScroll" v-for="question in questions.slice(start, end)" :key="question.id">
      <QuestionAndAnswers :id="question.id" :question="question.q" :answerA="question.a" :answerB="question.b"
        :answerC="question.c" :answerD="question.d" :correct="question.correct">
      </QuestionAndAnswers>
    </div>
    <div class="flex justify-center mx-96 space-x-24">
      <BtnAction :name="$t('previous')" class="flex mb-6" @action="showPreviousQ" v-if="store.currentPage > 1" />
      <BtnAction :name="$t('next')" class="flex mb-6" @action="showNextQ" v-if="store.currentPage < 3" />
      <router-link to="/ResultPage">
        <BtnAction :name="$t('checkResult')" class="flex mb-6" v-if="store.currentPage === 3" />
      </router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onUnmounted, ref } from 'vue'
import { useQuestionEnglishStore } from '@/stores/testEnglish'
import { useQuestionRussianStore } from '@/stores/testRussian'
import { useUserAnswersStore } from '@/stores/userAnswers'
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
    
    const storeAnswers = useUserAnswersStore()

    const start = ref(0)
    const end = ref(10)

    const store = ref()
    const questions = ref()
    const currentPage = ref(1)

    const setStore = () => {
      if (path === '/EnglishPage') {
        store.value = storeEn
        questions.value = questionsEn
      } else {
        store.value = storeRu
        questions.value = questionsRu
      }
    }

    setStore()

    onUnmounted(() => {
      storeAnswers.$reset()
    })

    const scrollToBeginning = () => {
      const myScroll = document.getElementById("myScroll")
      myScroll?.scrollIntoView({ behavior: "smooth" })
    }

    const showNextQ = () => {
      store.value.increment()
      start.value += 10
      end.value += 10
      setTimeout(() => {
        scrollToBeginning()
      }, 100)
    }

    const showPreviousQ = () => {
      store.value.decrement()
      start.value -= 10
      end.value -= 10
      setTimeout(() => {
        scrollToBeginning()
      }, 100)
    }
    
    return {
      store,
      questions,
      currentPage,
      path,
      start,
      end,
      showNextQ,
      showPreviousQ,
    }
  }
})
</script>
