<template>
  <div v-loading.fullscreen.lock="fullscreenLoading">
    <questionItem root-compontent="home"></questionItem>
  </div>
</template>

<script>
  import questionItem from './question-item'
  import axios from 'axios'
  export default {
    data () {
      return {
        fullscreenLoading: true
      }
    },
    mounted () {
      axios.get('http://localhost:3000/questions')
      .then(res => {
        this.$store.dispatch('setQuestions', res.data)
        this.fullscreenLoading = false
      })
      .catch(error => {
        console.log(error.message)
      })

      axios.get('http://localhost:3000/answers')
      .then(res => {
        this.$store.dispatch('setAnswers', res.data)
      })
      .catch(error => {
        console.log(error.message)
      })
    },
    components: {
      questionItem
    }
  }
</script>

<style>
  
</style>
