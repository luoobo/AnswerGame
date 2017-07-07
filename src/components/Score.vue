<template>
  <el-row>
    <el-col :span="4">
      <el-card class="box-card">
        <p>用时:{{ inter }}秒</p>
        <p>得分:{{ totalScore }}</p>
      </el-card>
      <el-button type="primary" @click="goHome" size="small">返回首页</el-button>
    </el-col>
  </el-row>
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
  .box-card{
    margin-bottom: 10px;
  }
  p{
    line-height: 24px;
  }
</style>
