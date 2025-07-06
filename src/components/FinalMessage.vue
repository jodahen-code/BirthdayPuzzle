<template>
  <div class="page">
    <h1 class="text-[2em]">Alles Gute zum Geburtstag!</h1>
    <p class="text-lg p-4">Es ist so schön, dass es dich gibt.    </p>
    <div class="h-3"></div>

    
<hr>
  <div class="h-6"></div>
    <h1 class="text-5xl">Wünsch dir was:</h1>
        <div class="h-3"></div>

<div class="flex items-center justify-center gap-4">  
    <textarea class="text-center mt-4 h-[4em]" placeholder="Gib hier deinen Wunsch ein" v-model="wish"></textarea> 
    <div class="w-3 inline"></div>
    </div>
  
<!-- <div class="flex items-center justify-center">    <DrawBoard/>
</div> -->
  </div>
</template>

<style scoped>
.page { text-align: center; margin-top: 50px; }
</style>


<script>
import DrawBoard  from '@/components/DrawBoard.vue'
export default {
  components: {
    DrawBoard,
  },
  data() {
    return {
      wish: '',
    }
  },
}
</script>