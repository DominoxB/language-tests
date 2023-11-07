<template>
  <div class="font-open px-96 py-4">
    <div class="text-2xl">
      {{ `${id + '. '} ` }} {{ question }}
    </div>
    <div class="flex items-center justify-center space-x-16 text-lg border-2 border-blue-300 rounded-2xl py-4 px-4 my-4">
      <div class="space-x-1">
        <input type="radio" value="a" :name="question" v-model="selected" @change="setValue" />
        <label for="answerA">{{ answerA }}</label>
      </div>
      <div class="space-x-1">
        <input type="radio" value="b" :name="question" v-model="selected" @change="setValue" />
        <label for="answerB">{{ answerB }}</label>
      </div>
      <div class="space-x-1">
        <input type="radio" value="c" :name="question" v-model="selected" @change="setValue" />
        <label for="answerC">{{ answerC }}</label>
      </div>
      <div class="space-x-1">
        <input type="radio" value="d" :name="question" v-model="selected" @change="setValue" />
        <label for="answerD">{{ answerD }}</label>
      </div>
    </div>
    <div class="bg-pink-400 h-10 w-full" v-if="correct === selected"></div>
    <button @click="compare" class="mr-8">wynik</button>
    <button @click="getAnswers">odpowiedzi</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useUserAnswersStore } from '@/stores/userAnswers'
export default defineComponent({
  name: 'QuestionAndAnswers',
  props: {
    id: {
      type: Number,
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
    },
    correct: {
      type: String
    }
  },
  setup(props) {
    const storeAnswers = useUserAnswersStore()
    const { answers, correctAnswers } = storeAnswers

    const obj = ref({} as string)
    const goodAnswers = ref({} as string)

    const selected = ref(answers[props.id])

    const setValue = (ev: Event) => {
      const userAnswer = ((ev.target as HTMLInputElement).value)
      obj.value = Object.assign(answers, { [props.id]: userAnswer })
    }

    goodAnswers.value = Object.assign(correctAnswers, { [props.id]: props.correct }) // wyswietlic obiekt ze wszystkimi poprawnymi odpowiedziami

    const getAnswers = () => {
      console.log('user answers: ', obj.value)
      console.log('correct answers: ', goodAnswers.value)
    }

    const compare = () => {
      let counter = 0
      for (let i = 1; i < 30; i++) { // wykonuje sie przy kazdym pytaniu
        if (obj.value[i] === goodAnswers.value[i]) { // jesli user answer i correct answer takie same - zwiekszamy counter o 1
          counter++
        }
      }
      console.log('wynik:', counter)
    }

    return {
      selected,
      setValue,
      getAnswers,
      compare,
    }

  }
})
</script>
