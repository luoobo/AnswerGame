export default {
  start ({commit}) {
    commit('START_ANSWER')
  },
  nextQuestion ({commit}) {
    commit('NEXT_QUESTION')
  },
  setQuestions ({commit}, questions) {
    commit('SET_QUESTIONS', questions)
  },
  setAnswers ({commit}, answers) {
    commit('SET_ANSWERS', answers)
  },
  setUserAnswer ({commit}, answer) {
    commit('SET_USERANSWER', answer)
  },
  stopAnswer ({commit}) {
    commit('STOP_ANSWER')
  },
  setTotalScore ({commit}, totalScore) {
    commit('SET_TOTALSCORE', totalScore)
  }
}
