<template>
  <div class="ppp">
    <div class="aaa" :class="{show: isShow}">aaa</div>
    <div class="bbb" :class="{showbbb: isShowbbb}">aaa</div>
    <button @click="btn">button</button>
    <button @click="btn2">button</button>
  </div>
</template>

<script>
export default {
  name: 'Test',
  data () {
    return {
      isShow: false,
      isShowbbb: false
    }
  },
  methods: {
    btn () {
      this.isShow = !this.isShow
      this.isShowbbb = !this.isShowbbb
    },
    btn2 () {
      this.isShow = !this.isShow
      this.isShowbbb = !this.isShowbbb
    }
  }
}
</script>

<style>
.aaa {
  width: 20%;
  height: 200px;
  background: #000;
  position: fixed;
  top: 0;
  right: calc(-20% - 30px);
  transition: transform 0.5s ease;
}
.bbb{
    width: 30px;
    height: 100%;
    position: fixed;
    top: 0;
    right: -30px;
    background: red;
    transition: transform 0.5s ease;
    opacity: 0.2;
}
.show {
  transform: translateX(-100%);
}
.showbbb {
  transform: translateX(-100%);
}
.ppp{
    width: 100%;
    height: 100%;
}
html,body{
    height: 100%;
}
</style>
