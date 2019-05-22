<!--知乎最新消息
URL: https://news-at.zhihu.com/api/4/news/latest

响应实例：

  {
      date: "20140523",
      stories: [
          {
              title: "中国古代家具发展到今天有两个高峰，一个两宋一个明末（多图）",
              ga_prefix: "052321",
              images: [
                  "http://p1.zhimg.com/45/b9/45b9f057fc1957ed2c946814342c0f02.jpg"
              ],
              type: 0,
              id: 3930445
          },
      ...
      ],
      top_stories: [
          {
              title: "商场和很多人家里，竹制家具越来越多（多图）",
              image: "http://p2.zhimg.com/9a/15/9a1570bb9e5fa53ae9fb9269a56ee019.jpg",
              ga_prefix: "052315",
              type: 0,
              id: 3930883
          },
      ...
      ]
  }
分析：

date : 日期
stories : 当日新闻
title : 新闻标题
images : 图像地址（官方 API 使用数组形式。目前暂未有使用多张图片的情形出现，曾见无 images 属性的情况，请在使用中注意 ）
ga_prefix : 供 Google Analytics 使用
type : 作用未知
id : url 与 share_url 中最后的数字（应为内容的 id）
multipic : 消息是否包含多张图片（仅出现在包含多图的新闻中）
top_stories : 界面顶部 ViewPager 滚动显示的显示内容（子项格式同上）（请注意区分此处的 image 属性与 stories 中的 images 属性）
!-->



<template>
    <div id='latestNews'>
        <h1>最新消息</h1>
        <h4 >{{time | count}}</h4>
        <div class="latest-box">
            <div class="news-item" v-for='(item,index) in news' v-bind:key="index">
                <img v-bind:src="item.images[0] | image " alt="">
                <h3 @click='jump(item.id)'>{{item.title}}</h3>
            </div>
        </div>
        <transition name='backTop'><div class="back-top" @click="backTop" v-show="showTop">回到顶部</div></transition>
    </div>
</template>

<script>
/* eslint-disable */
export default {
    data(){
        return {
            time:100,//当time>99的时候 显示 更多 否则显示当前数字
            news:[],
            showTop:false
        }
    },
    created(){
        this.getLatest()
    },
    mounted(){
        // 页面渲染完成，dom节点可以操作了。scroll
        window.addEventListener('scroll',()=>{
           // console.log(document.documentElement.scrollTop);
           // a = document.documentElement.scrollTop 滚动了多少 
           // b = document.documentElement.clientHeight 窗口的高度 
           // c = document.documentElement.scrollTop可以滚动的高度。
           // a+b <= c 
           if(document.documentElement.scrollTop>500){
               this.showTop = true
           }else{
                this.showTop = false
           }
        },false)
    },
   beforeDestory(){
        window.removeEventListener('scroll')
   },
    methods:{
        backTop(){
            // document.documentElement.scrollTop;

            let timer;
            timer = setInterval(()=>{
                document.documentElement.scrollTop = document.documentElement.scrollTop-document.documentElement.scrollTop/8;
                if (document.documentElement.scrollTop<=20){
                    clearInterval(timer)
                }
                },20
            )

             
        },
        getLatest(){
            this.axios.get('/api/4/news/latest').then(res=>{
                if(res.status===200){
                    this.news = res.data.stories
                }
            })
        },
        jump(id){
            // $route
            this.$router.push({
                    name:'detail',
                    params:{
                        id:id
                    }
            });
        }
    },

    filters:{
        //过滤图片路径
        image(url){
            return `https://images.weserv.nl/?url=${url}`
        },
        //同一个字段根据数值不同展示不同，使用过滤器
        count(time){
            return time>99?"更多":time
        }
    }
}
</script>


<style scoped>

/**
    scoped 在vue单文件开发中 让css局部执行。
 */
.back-top
{
    position: fixed;
    bottom:50px;
    right:50px;
    width:100px;
    height:100px;
    cursor: pointer;
}
.backTop-enter-active, .backTop-leave-active {
  transition: opacity .5s;
}
.backTop-enter, .backTop-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
* {
  margin: 0;
  padding: 0;
}
#latestNews
{
    background-color: #f6f6f6;
    margin-left:100px;
}
.news-item 
{
    height:330px;
    width:300px;
    float:left;
   
}
img{
    display:block;
    max-width:100%;
    height:260px;
    margin-bottom:1em;
    margin-left:auto;
    margin-right:auto
}
h3{
    font-size: 16px;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}

</style>
