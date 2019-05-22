<template>
  <div id="app">
    <transition name="fade">
      <router-view></router-view>
    </transition> 
  </div>
</template>

<script>

export default {
  name: 'app',
  components: {
  }
  //scroll事件,滚动。
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
/**
* -enter
* -enter-active //控制元素进来时候的动画
* -enter-to
* -leave
* -leave-active //控制元素离开时的动画
* -leave-to
* transition-group 用于v-for循环产生的元素 ，列表的动画。
*/

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
