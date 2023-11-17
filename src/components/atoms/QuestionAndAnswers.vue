<template>
  <div class="font-open px-96 py-4">
    <div class="text-2xl">
      {{ `${id + '. '} ` }} {{ question }}
    </div>
    <div class="flex items-center justify-center space-x-16 text-lg border-2 border-blue-300 rounded-2xl py-4 px-4 my-4">
      <label class="space-x-1 cursor-pointer">
        <input type="radio" value="a" :name="question" v-model="selected" @change="setValue" :disabled="testStore.showAnswers"/>
        <span>{{ answerA }}</span>
      </label>
      <label class="space-x-1 cursor-pointer">
        <input type="radio" value="b" :name="question" v-model="selected" @change="setValue" :disabled="testStore.showAnswers"/>
        <span>{{ answerB }}</span>
      </label>
      <label class="space-x-1 cursor-pointer">
        <input type="radio" value="c" :name="question" v-model="selected" @change="setValue" :disabled="testStore.showAnswers"/>
        <span>{{ answerC }}</span>
      </label>
      <label class="space-x-1 cursor-pointer">
        <input type="radio" value="d" :name="question" v-model="selected" @change="setValue" :disabled="testStore.showAnswers"/>
        <span>{{ answerD }}</span>
      </label>
    </div>
    <div v-if="testStore.showAnswers" :class="correctAnswers[id] === userAnswers[id] ? 'text-green-600' : 'text-red-600'">
      <span>{{ $t('yourAnswer')}} {{ userAnswers[id] }}</span>
    </div>
    <div v-if="testStore.showAnswers" class="text-green-600">
      <span>{{$t('correctAnswer')}} {{ correctAnswers[id] }} </span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useUserAnswersStore } from '@/stores/userAnswers'
import { useTestsStore } from '@/stores/tests'

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
  },
  setup(props) {
    const storeAnswers = useUserAnswersStore()
    const { userAnswers, correctAnswers } = storeAnswers
    const testStore = useTestsStore()


    const chosenAnswers = ref({} as string)
    const userAnswer = ref()

    const selected = ref(userAnswers[props.id])

    const setValue = (ev: Event) => {
      userAnswer.value = ((ev.target as HTMLInputElement).value)
      chosenAnswers.value = Object.assign(userAnswers, { [props.id]: userAnswer })
    }

    return {
      selected,
      setValue,
      storeAnswers,
      testStore,
      userAnswers,
      correctAnswers
    }
  }
})
</script>
