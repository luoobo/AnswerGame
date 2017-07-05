<template>
  <div>
    <div v-if="rootCompontent === 'home'">
      <button @click="start">开始答题</button>
    </div>
    <div v-else>
      <div>{{ question.question }}</div>
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
        answers: 'answers',
        userAnswers: 'userAnswers'
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
        setUserAnswer: 'setUserAnswer',
        stopAnswer: 'stopAnswer',
        setTotalScore: 'setTotalScore'
      }),
      start () {
        this.$router.push('question')
        this.go()
      },
      next () {
        if (this.ans === '') {
          alert('请选择答案')
          return
        }
        this.setAnswer()
        this.nextQuestion()
      },
      setAnswer () {
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
        this.ans = ''
      },
      submitAnswers () {
        if (this.ans === '') {
          alert('请选择答案')
          return
        }
        this.setAnswer()
        this.stopAnswer()
        this.setTotalScore(this.calcTotalScore())
        this.$router.push('/score')
      },
      calcTotalScore () {
        let totalNum = 0
        for (var i = 0; i < this.userAnswers.length; i++) {
          if (this.userAnswers[i] === this.answers[i]) {
            totalNum++
          }
        }
        return Math.round(totalNum * 100 / this.userAnswers.length)
      }
    }
  }
</script>

<style>
  
</style>
