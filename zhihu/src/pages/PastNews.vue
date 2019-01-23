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


<template>
    <div id="pastnews">
        <div class="past-box">
            <div class="news-item" v-for='(item,index) in news' v-bind:key='index'>
                <h2>{{stories.title}}</h2>
                <img v-bind:src="item.images[0]" alt="">
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
            date:'',
            stories:[
                {
                    title:'',
                    images:[],
                    id:''
                }
            ]
        }
    },
    created(){
        this.getPastNews();
    },
    mount(){
        console.log(this.$route.params.time);
    },
    methods:{
        getPastNews(){
            if (this.$route.params.time>20130520){
                 this.axios.get('api/4/news/before/'+(this.$route.params.time+1)).then(
                     res=>{
                         if(res.status===200){
                             this.news = res.data.stories
                         }
                     }
                 )
            }else if(this.$route.params.time == (new Date().getFullYear()*10000+(new Date().getMonth()+1)*100+new Date().getDate())){
                this.axios.get('api/4/news/before/'+new Date().getFullYear()*10000+new Date().getMonth()*100+new Date().getDate()).then(
                     res=>{
                         if(res.status===200){
                             this.news = res.data.stories
                         }
                     }
                 )
            }
           
        }    
    }
}
</script>

<style>

</style>


!-->