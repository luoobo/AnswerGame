<template>
  <div>
    <div v-if="rootCompontent === 'home'">
      <p class="title">2017年程序员高考试卷</p>
      <el-button type="primary" size="small" @click="start">开始答题</el-button>
    </div>
    <div v-else>
      <div class="test">{{ widgets}}</div>
      <el-row :gutter="10">
        <el-col :span="3">
          <el-progress type="circle" :percentage="percentage"></el-progress>
        </el-col>
        <el-col :span="6">
          <el-card class="box-card">
            <div>{{ question.question }}</div>
            <ul>
              <li v-for="(option, index) in question.options" :key="index">
                <el-radio class="radio" v-model="ans" :label="index">{{ option }}</el-radio>
              </li>
            </ul>
            <el-button class="nextQuestion" type="primary" size="small" v-if="questionId < questions.length - 1" @click="next">下一题</el-button>
            <el-button class="submitAnswers" type="primary" size="small" v-else @click="submitAnswers">提交试卷</el-button>
          </el-card>
        </el-col>
      </el-row>
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
        answer: '',
        ii: 0
      }
    },
    props: ['rootCompontent'],
    computed: {
      ...mapState({
        answers: 'answers',
        userAnswers: 'userAnswers',
        widgets: 'widgets'
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
      },
      percentage () {
        return this.$store.state.questionId * 100 / this.questions.length
      }
    },
    mounted () {
      this.setWidget({key: 'aa', data: []})
    },
    methods: {
      ...mapActions({
        go: 'start',
        nextQuestion: 'nextQuestion',
        setUserAnswer: 'setUserAnswer',
        stopAnswer: 'stopAnswer',
        setTotalScore: 'setTotalScore',
        setWidget: 'setWidget',
        setWidgetData: 'setWidgetData'
      }),
      start () {
        this.$router.push('question')
        this.go()
      },
      next () {
        if (this.ans === '') {
          this.$message({
            message: '请选择答案',
            type: 'warning',
            duration: 1000
          })
          this.setWidgetData({key: 'aa', data: this.ii})
          this.ii++
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
.title{
  margin-bottom: 10px;
}
.box-card{
  padding: 10px;
}
.nextQuestion, .submitAnswers{
  float: right;
}
</style>
