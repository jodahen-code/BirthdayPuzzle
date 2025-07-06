import { createRouter, createWebHistory } from 'vue-router'
import StartPage from '../components/StartPage.vue'
import MathPuzzle from '../components/MathPuzzle.vue'
import TypingPuzzle from '../components/TypingPuzzle.vue'
import FinalMessage from '../components/FinalMessage.vue'

const routes = [
  { path: '/', name: 'Start', component: StartPage },
  { path: '/math/:id', name: 'MathPuzzle', component: MathPuzzle, props: true },
  { path: '/typing', name: 'TypingPuzzle', component: TypingPuzzle },
  { path: '/final', name: 'FinalMessage', component: FinalMessage },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})
