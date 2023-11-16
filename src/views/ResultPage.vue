<template>
  <IntroResult class="px-96" />
  <div class="font-open border-2 border-blue-400 py-10 my-20 mx-72 px-16">
    <div class="flex space-x-20 items-center">
      <div>
        <p class="text-2xl font-bold">{{ $t('resultTest') }} {{ counter }}</p>
        <p class="py-6 text-xl text-blue//-500 font-bold uppercase">{{ level.title }}</p>
        <p>{{ level.description }}</p>
      </div>
      <LevelSign :text="level.name" />
    </div>
      <BtnAction class="mt-12" :name="$t('checkAnswers')" @click="showMyTest"/>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'
import { useUserAnswersStore } from '@/stores/userAnswers'
import { useLevelsStore } from '@/stores/levelsStore'
import { useTestsStore } from '@/stores/tests'
import LevelSign from '@/components/atoms/LevelSign.vue'
import BtnAction from '@/components/atoms/BtnAction.vue'
import IntroResult from '@/components/atoms/IntroResult.vue'

export default defineComponent({
  name: 'ResultPage',
  components: {
    LevelSign,
    BtnAction,
    IntroResult
  },
  setup() {
    const storeAnswers = useUserAnswersStore()
    const { counter } = storeAnswers

    const storeLevels = useLevelsStore()
    const { a1, a2, b1, b2, c1, c2 } = storeLevels

    const testsStore = useTestsStore()
    const test = ref('')

    const router = useRouter()


    const level = ref({
      name: '',
      description: '',
      title: ''
    })

    const showMyTest = () => {
      test.value = testsStore.selectedTest
      console.log(test.value)
      if (test.value === 'english') {
        testsStore.showAnswers = true
        router.push('/EnglishPage')
      } else {
        testsStore.showAnswers = true
        router.push('/RussianPage')
      }
    }

    const setLevel = () => {
      if(counter < 10) {
        console.log(a1)
        level.value = a1
      } else if (counter > 9 && counter < 15) {
        console.log(a2)
        level.value = a2
      } else if (counter > 14 && counter < 20) {
        console.log(b1)
        level.value = b1
      } else if (counter > 19 && counter < 26) {
        console.log(b2)
        level.value = b2
      } else if (counter > 25 && counter < 29) {
        console.log(c1)
        level.value = c1
      } else {
        console.log(c2)
        level.value = c2
      }
    }

    onMounted(() => {
      setLevel()
    })
    return {
      counter,
      storeLevels,
      level,
      showMyTest
    }
  }
})
</script>
