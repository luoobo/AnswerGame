const START_ANSWER = 'START_ANSWER'
const SET_QUESTIONS = 'SET_QUESTIONS'
const SET_ANSWERS = 'SET_ANSWERS'
const NEXT_QUESTION = 'NEXT_QUESTION'
const SET_USERANSWER = 'SET_USERANSWER'
const STOP_ANSWER = 'STOP_ANSWER'
const SET_TOTALSCORE = 'SET_TOTALSCORE'
const SET_WIDGET = 'SET_WIDGET'
const SET_WIDGET_DATA = 'SET_WIDGET_DATA'

import Vue from 'vue'

export default {
  [START_ANSWER] (state) {
    state.interval = 0
    state.questionId = 0
    if (state.timer) {
      clearInterval(state.timer)
      state.timer = null
    }
    state.timer = setInterval(() => {
      state.interval++
    }, 1000)
  },
  [NEXT_QUESTION] (state, questionId) {
    state.questionId++
  },
  [SET_QUESTIONS] (state, questions) {
    state.questions = questions
  },
  [SET_ANSWERS] (state, answers) {
    state.answers = answers
  },
  [SET_USERANSWER] (state, answer) {
    state.userAnswers.push(answer)
  },
  [STOP_ANSWER] (state) {
    if (state.userAnswers.length === state.answers.length) {
      state.questionId = 0
      clearInterval(state.timer)
      state.timer = null
    }
  },
  [SET_TOTALSCORE] (state, totalScore) {
    state.totalScore = totalScore
  },
  [SET_WIDGET] (state, obj) {
    Vue.set(state.widgets, obj.key, obj)
  },
  [SET_WIDGET_DATA] (state, obj) {
    state.widgets[obj.key].data.push(obj.data)
  }
}
