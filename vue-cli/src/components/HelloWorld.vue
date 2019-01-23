<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3>This is H3</h3>  
    <Content message="my page" @recive='getData' />
    <h1>{{DataFromChild}}</h1>
  </div>
</template>

<script>
import Content from './Content.vue'
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data(){
    return{
      DataFromChild:''
    }
  },
  //类似的还有header，nav，footer 等等，因为是html标签，所以直接用作组件名称它会报错。
  components:{
    Content
  },
  methods:{
    getData(data){
      this.DataFromChild = data
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
