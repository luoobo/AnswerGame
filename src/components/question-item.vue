<template>
  <div>
    <div v-if="rootCompontent === 'home'">
      <button @click="start">开始答题</button>
    </div>
    <div v-else>
      <router-link to="score">score</router-link>
      <p>用时:{{inter}}秒</p>
      <h1>{{ question.question }}</h1>
      <ul>
        <li v-for="(option, index) in question.options">
          <label><input type="radio" :value="index" v-model="ans">{{ option }}</label>
        </li>
      </ul>
      <button v-if="questionId < questions.length - 1" @click="next">下一题</button>
      <button v-else @click="submitAnswers">提交试卷</button>
    </div>
  </div>
</template>

<script>
  import { mapState, mapActions } from 'vuex'
  export default {
    name: 'questionItem',
    data () {
      return {
        ans: '',
        answer: ''
      }
    },
    props: ['rootCompontent'],
    computed: {
      ...mapState({
        inter: 'interval'
      }),
      // 所有题目
      questions () {
        return this.$store.state.questions
      },
      // 当前题目
      question () {
        return this.questions[this.questionId]
      },
      // 当前题目序号,从0开始
      questionId () {
        return this.$store.state.questionId
      }
    },
    methods: {
      ...mapActions({
        go: 'start',
        nextQuestion: 'nextQuestion',
        setUserAnswer: 'setUserAnswer'
      }),
      start () {
        this.$router.push('question')
        this.go()
      },
      next () {
        switch (this.ans) {
          case 0:
            this.answer = 'A'
            break
          case 1:
            this.answer = 'B'
            break
          case 2:
            this.answer = 'C'
            break
          default:
            this.answer = 'D'
        }
        this.setUserAnswer(this.answer)
        this.nextQuestion()
      },
      submitAnswers () {
        console.log('ok')
      }
    }
  }
</script>

<style>
  
</style>
