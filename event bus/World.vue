<template>
  <div class="hello">
    <h1>World</h1>
    <button @click='emitEvent()'></button>
  </div>
</template>

<script>
export default {
  name: 'World',
  methods:{
    // $emit 触发事件 第一个参数 ，需要触发的事件的名称，后边参数是 往事件处理函数中传递的参数
    emitEvent(){
      let value = '你好啊！';
      this.bus.$emit('name',value)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
h3
  margin 40px 0 0

ul
  list-style-type none
  padding 0

li
  display inline-block
  margin 0 10px

a
  color #42b983
</style>
