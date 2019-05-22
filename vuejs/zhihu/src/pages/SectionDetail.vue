<template>
    <div class="section-detail">
        <div class="past-box container">      
            <div class="news-item" v-for='(item,index) in list' v-bind:key='index' @click='jump(item.id)'> 
                <img class="item-img" v-bind:src="item.images[0]" alt="">
                <h2 >{{item.title}}</h2>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'section-detail',
    data(){
        return{
            list:[]
        }
    },
    created(){
        this.getSectionList();
    },
    methods:{
        //https://news-at.zhihu.com/api/4/theme/${id} 分类文章列表
        getSectionList(){
            let id = this.$route.params.id;
            this.axios.get(`/api/4/theme/${id}`).then(res=>{
                this.list = res.data.data
            })
        },
        jump(id){
            this.$router.push({
                    name:'section-detail',
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

