<template>
  <div class="page" :class="{ 'green-border': solved }">
    <p class="text-4xl text-left">Gebe das folgende Wort exakt in das Textfeld ein:</p>
    <div class=" ">
    <p class="text-green-300 pt-4 text-xl overflow-x-auto"><span class="select-none overflow-x-auto">{{ targetWord }}</span> </p>
    </div>
    <div class="h-3"></div>
    <textarea v-model="userInput" rows="3" cols="50" class="text-center text-xl h-[3em] border-b w-full"/>
    <div class="h-3"></div>

    <div>
      <button v-if="solved" @click="$router.push('/final')" class="cool-button">Next</button>
      <button v-else @click="checkInput"  class="cool-button">Submit</button>
    </div>
    <p class="pt-3" v-if="error">{{ error }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      targetWord: 'Rhabarberbarbarabarbarenbarbartbarbier',
      userInput: '',
      solved: false,
      error: '',
    }
  },
  methods: {
    checkInput() {
      if (this.userInput.trim() === this.targetWord) {
        this.solved = true
        this.error = ''
      } else {
        this.error = 'Falsch. Versuch\'s nochmal.'
      }
    },
  },
}
</script>

<style scoped>
.page { text-align: center; }
</style>
