<!--
URL: https://news-at.zhihu.com/api/4/news/before/20131119

若果需要查询 11 月 18 日的消息，before 后的数字应为 20131119

知乎日报的生日为 2013 年 5 月 19 日，若 before 后数字小于 20130520 ，只会接收到空消息

输入的今日之后的日期仍然获得今日内容，但是格式不同于最新消息的 JSON 格式

响应实例：

  {
      date: "20131118",
      stories: [
          {
              title: "深夜食堂 · 我的张曼妮",
              ga_prefix: "111822",
              images: [
                  "http://p4.zhimg.com/7b/c8/7bc8ef5947b069513c51e4b9521b5c82.jpg"
              ],
              type: 0,
              id: 1747159
          },
      ...
      ]
  }
格式与前同，恕不再赘述

!-->
<template>
    <div id="pastnews">
        <div class="past-box container">      
            <div class="news-item" v-for='(item,index) in news' v-bind:key='index' @click='jump(item.id)'> 
                <img class="item-img" v-bind:src="item.images[0]" alt="">
                <h2 >{{item.title}}</h2>
            </div>
            <div  class='clearfloat'>
                <div @click='getNewsByDate()' class="button">查看前一天</div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    /* eslint-disable */
    name:'PastNews',
    data(){
        return{
            year:'',
            month:'',
            day:'',
            news:[

            ]
        }
    },
    created(){
        this.year = new Date().getFullYear();
        this.month = new Date().getMonth()+1;
        this.day = new Date().getDate();
        this.getNewsByDate();
    },

    mounted(){
        console.log(this.$route.params.time);
    },
    watch:{

    },
    computed:{

    },
    methods:{
        //Date();
        getNewsByDate(){
            if(this.day>1){
                  this.day = this.day-1
                }else if(this.day ==1 && this.month ==2||4||6||8||9||11){
                    this.month = this.month-1;
                    this.day = 31
               }else if(this.day ==1 && this.month == 5||7||10||12){
                   this.month = this.month -1;
                   this.day = 30;
               }else if(this.month == 1){
                   this.month =12;
                   this.year = this.year-1;
                   this.day = 31;
               }else if(this.month ==3 && this.year %4 ==0 && this.year % 400 ==0 && this.year % 100 !=0 ){
                   this.month = this.month -1;
                   this.day = 29;
               }else{
                   this.month =2;
                   this.day =28;
               };
            let date = `${this.year}${this.month>10?this.month:'0'+this.month}${this.day>10?this.day:'0'+this.day}`;
            this.axios.get(`api/4/news/before/${date}`).then(res=>{
                if(res.status===200){
                    this.news = this.news.concat(res.data.stories);
                }
            })
        },
        /**
         * this.$router.push 函数式跳转 
         * <router-link to="/detail" /> 把它当作A标签来使用就行。
         * router-link :to="{}" 使用动态绑定的时候 to里面的对象就和函数式里面一样
         *  */
        jump(id){
            this.$router.push({
                    name:'detail',
                    params:{
                        id:id
                    }
            });
        }    
    }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}
#pastNews
{
    background-color: #f6f6f6;
    margin-left:100px;
}
.news-item 
{
    height:auto;
    width:320px;
    float:left;
    padding:20px;
    box-sizing: border-box;
    cursor: pointer;

}
img{
    display:block;
    max-width:100%;
    height:260px;
    margin-bottom:1em;
    margin-left:auto;
    margin-right:auto
}
h2{
    line-height: 40px;
    height:80px;
    overflow: hidden;
}
.button{
    width:200px;
    margin:0 auto;
    background-color: #008bed;
    color:white;
    text-align: center;
    padding:5px 30px;
    cursor: pointer;
}
</style>


