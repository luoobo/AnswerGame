<template>
  <div>
    <questionItem root-compontent="home"></questionItem>
  </div>
</template>

<script>
  import questionItem from './question-item'
  import axios from 'axios'
  export default {
    created () {
      axios.get('http://localhost:3000/questions')
      .then(res => {
        this.$store.dispatch('setQuestions', res.data)
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
