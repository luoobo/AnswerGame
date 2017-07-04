const START_ANSWER = 'START_ANSWER'
const SET_QUESTIONS = 'SET_QUESTIONS'
const SET_ANSWERS = 'SET_ANSWERS'
const NEXT_QUESTION = 'NEXT_QUESTION'
const SET_USERANSWER = 'SET_USERANSWER'

export default {
  [START_ANSWER] (state) {
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
    state.userAnswer.push(answer)
  }
}
