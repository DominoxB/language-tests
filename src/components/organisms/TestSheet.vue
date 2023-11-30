<template>
  <div v-if="!testStore.showAnswers">
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
  <div v-else>
    <BtnAction v-if="testStore.showAnswers" class="xl:mt-12" name="Pobierz PDF" @click="createPdf" />
    <div id="myScroll" v-for="question in questions" :key="question.id">
      <QuestionAndAnswers :id="question.id" :question="question.q" :answerA="question.a" :answerB="question.b"
        :answerC="question.c" :answerD="question.d">
      </QuestionAndAnswers>
    </div>
    <BtnAction :name="$t('checkResult')" @action="compare" class="flex mb-6" />
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
import jspdf, { jsPDF } from 'jspdf'
import html2canvas from 'html2canvas'
import html2pdf from "html2pdf.js";

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

    const createPdf = () => {
      const makepdf = document.getElementById("myScroll") as HTMLElement
      const mywindow = window.open("", "PRINT", "height=600,width=600") as any
      mywindow.document.write(makepdf.innerHTML)
      mywindow.document.close()
      mywindow.focus()
      mywindow.print()
    }

    // const createPdf = () => {
    //   html2canvas(document.querySelector('#myScroll') as HTMLElement, {
    //     useCORS: true,
    //   }).then(canvas => {
    //     const img = canvas.toDataURL('image/png')
    //     const doc = new jspdf({
    //       unit: 'px',
    //       compress: true
    //     })
    //     doc.addImage(img, 'PNG', 0, 0, 405, 615)
    //     doc.save('my-test.pdf')
    //   })
    // }

    // const createPdf = () => {
    //   const content = html2pdf(document.getElementById("myScroll"))
    //   const opt = {
    //     margin: 1,
    //     filename: 'myfile.pdf',
    //     image: { type: 'jpeg', quality: 0.98 },
    //     html2canvas: { scale: 2 },
    //     jsPDF: { 
    //       orientation: 'landscape' }
    //   }
    //   html2pdf().set(opt).from(content).save();
    // }

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
      compare,
      createPdf
    }
  }
})
</script>
