<template>
  <div class="hello">
    <h1>{{message}}</h1>
    <h1>content组件</h1>
   
    <input v-model="childInput" type="text" @keyup.enter='onSend()'/>
   
  </div>
</template>

<script>

export default {
  name: 'Content',
  props: {
    message:String
  },
  data:function(){
    return {
      childInput:''
      }
  },
  methods:{
    onSend(){
      this.$emit('recive',this.childInput)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
  color:red;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>