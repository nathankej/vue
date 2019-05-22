<template>
  <div class="hello">
    <h1>hello world</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  mouted(){
    // $on 函数两个参数 第一个 事件名称，第二个事件处理函数。
    this.bus.$on('name',function(value){
        alert(value)
    })
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
