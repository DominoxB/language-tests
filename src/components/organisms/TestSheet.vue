<template>
  <div>
    <div id="myScroll" v-for="question in questions.slice(start, end)" :key="question.id">
      <QuestionAndAnswers :id="question.id" :question="question.q" :answerA="question.a" :answerB="question.b"
        :answerC="question.c" :answerD="question.d">
      </QuestionAndAnswers>
    </div>
    <div class="flex justify-center lg:mx-96 space-x-2 lg:space-x-24">
      <BtnAction :name="$t('previous')" class="flex mb-6" @action="showPreviousQ" v-if="store.currentPage > 1" />
      <BtnAction :name="$t('next')" class="flex mb-6" @action="showNextQ" v-if="store.currentPage < 3" />
      <BtnAction :name="$t('checkResult')" @action="compare" class="flex mb-6" v-if="store.currentPage === 3" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onUnmounted, ref } from 'vue'
import { useQuestionEnglishStore } from '@/stores/testEnglish'
import { useQuestionRussianStore } from '@/stores/testRussian'
import { useUserAnswersStore } from '@/stores/userAnswers'
import { useTestsStore } from '@/stores/tests'
import { useRoute, useRouter, onBeforeRouteLeave } from 'vue-router'
import QuestionAndAnswers from '../atoms/QuestionAndAnswers.vue'
import BtnAction from '../atoms/BtnAction.vue'

export default defineComponent({
  name: 'TestSheet',
  components: { QuestionAndAnswers, BtnAction },
  setup() {
    const router = useRouter()
    const route = useRoute()
    const path = route.path

    const storeEn = useQuestionEnglishStore()
    const { questionsEn } = storeEn

    const storeRu = useQuestionRussianStore()
    const { questionsRu } = storeRu

    const storeAnswers = useUserAnswersStore()
    const { correctAnswers, userAnswers } = storeAnswers

    const testStore = useTestsStore()

    const start = ref(0)
    const end = ref(10)

    const store = ref()
    const questions = ref()

    const setStore = () => {
      if (path === '/EnglishPage') {
        store.value = storeEn
        questions.value = questionsEn
        testStore.selectedTest = 'english'
      } else {
        store.value = storeRu
        questions.value = questionsRu
        testStore.selectedTest = 'russian'
      }
    }

    setStore()

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

    const compare = () => {
      if (!testStore.showAnswers) {
        for (let i = 1; i <= Object.keys(correctAnswers).length; i++) {
          if (userAnswers[i] === correctAnswers[i]) { // jesli user answer i correct answer takie same - zwiekszamy counter o 1
            storeAnswers.addPoint()
          }
        }
        router.push('/ResultPage')
      } else {
        router.push('/ResultPage')
      }
    }

    onBeforeRouteLeave(async (to, from) => {
      if (to.path === '/RussianPage' && from.path === '/EnglishPage' ||
        to.path === '/EnglishPage' && from.path === '/RussianPage' ||
        to.path === '/' && from.path === '/EnglishPage' ||
        to.path === '/' && from.path === '/RussianPage') {
        storeAnswers.$reset()
      }
    })

    onUnmounted(() => {
      testStore.showAnswers = false
      storeEn.currentPage = 1
      storeRu.currentPage = 1
    })

    return {
      store,
      questions,
      path,
      start,
      end,
      testStore,
      showNextQ,
      showPreviousQ,
      compare
    }
  }
})
</script>
