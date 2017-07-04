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
  setAnswers ({commit}) {
    commit('SET_ANSWERS')
  },
  setUserAnswer ({commit}) {
    commit('SET_USERANSWER')
  }
}
