<template>
  <div class="hello">
    <questionItem root-compontent="question"></questionItem>
  </div>
</template>

<script>
  import questionItem from './question-item'
  export default {
    name: 'question',
    components: {
      questionItem
    }
  }
</script>

<style scoped>

</style>
