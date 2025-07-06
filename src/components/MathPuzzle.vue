<template>
  <div class="page":class="{ 'green-border': solved }">
    <h1 class="text-3xl  p-4">Löse die Aufgabe!</h1>
    <div class="flex-col items-center justify-center gap-4">
    <p class="text-lg ">{{ question }}</p>
    <input v-model="answer" type="text" @keydown.enter="checkAnswer" class="border-b w-[2em] text-lg"/>
        </div>

        <div class="h-[1em]"></div>
    <button v-if="solved" @click="next" class="cool-button ml-4">weiter</button>
    <button v-else @click="checkAnswer" class="cool-button ml-4">prüfen</button>

    <p v-if="error">{{ error }}</p>
    <p v-if="solved">{{ joke }}</p>
  </div>
</template>


<script>
export default {
  props: ['id'],
  data() {
    const questions = {
      1: { q: '5 + 7 = ', a: '12' },
      2: { q: '9 x 3 = ', a: '27' },
      3: { q: '(15 - 4) * 2 = ', a: '22' },
    }
    return {
      question: questions[this.id].q,
      correctAnswer: questions[this.id].a,
      answer: '',
      solved: false,
      error: '',
    }
  },
  watch: {
    id(newId) {
        Object.assign(this.$data, this.getPuzzleData(newId));
    },
  },    
  methods: {
       getPuzzleData(id) {
      const questions = {
        1: { question: '5 + 7 = ', correctAnswer: '12' },
        2: { question: '9 x 3 = ', correctAnswer: '27' },
        3: { question: '(15 - 4) * 2 = ', correctAnswer: '22' },
      };

      return {
        question: questions[id].question,
        correctAnswer: questions[id].correctAnswer,
        answer: '',
        solved: false,
        joke: "",
        error: '',
      };
    },
    checkAnswer() {
      if (this.answer.trim() === this.correctAnswer) {
        this.solved = true
        
        
        if (this.id == 1)this.joke = "Was liegt am Strand und spricht undeutlich? – Eine Nuschel"
        else if (this.id == 2) this.joke ="Wer schummelt im Dschungel? – Mogli"
        else this.joke ="Was trinken Führungskräfte? – Leitungswasser"
        this.error = ''
      } 
      else if (this.answer.trim() === '?') {
        this.error = 'Bitte gib eine Antwort ein.'
      }
      else if (isNaN(Number(this.answer.trim()))) {
        this.error = 'Bitte gib eine Zahl ein.'
      }      
      else {
        this.error = 'Falsch. Versuche es noch einmal.'
      }
    },
    next() {
      const nextId = parseInt(this.id) + 1
      if (nextId <= 3) {
        this.$router.push(`/math/${nextId}`)
      } else {
        this.$router.push('/typing')
      }
    },
  },
}
</script>

<style scoped>
.page { text-align: center; }
</style>
