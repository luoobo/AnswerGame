<template>
  <div>
    <p>用时:{{ inter }}秒</p>
    <div>得分:{{ totalScore }}</div>
    <button @click="goHome">返回首页</button>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: 'score',
    computed: {
      ...mapState({
        inter: 'interval',
        totalScore: 'totalScore'
      })
    },
    methods: {
      goHome () {
        this.$router.push('/')
      }
    }
  }
</script>

<style>
  
</style>
