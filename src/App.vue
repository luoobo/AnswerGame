<template>
  <div id="app">
    <router-view></router-view>
    <!-- <test></test> -->
  </div>
</template>

<script>
import Test from './components/test'
export default {
  name: 'app',
  components: { Test }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
li{
  list-style: none;
}
a{
  text-decoration: none;
}
#app{
  padding: 10px;
}
#app{
  height: 100%;
}
</style>
