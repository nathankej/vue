<template>
    <div class="detail">
        <header><meta name="referrer" content="no-referrer" /></header>
        <link v-for="(item,key) in detail.css" rel="stylesheet" v-bind:href="item" v-bind:key="key">
        <img v-bind:src="detail.image" alt="">
        <h2>{{detail.title}}</h2>
        <div class="detail-info" v-html="detail.body">
            <!-- v-html -->
        </div>
    </div>
</template>


<script>
/* eslint-disable */
export default {
    name:'detail',
    
    data(){
        return{
            detail:{
                title:'',
                image:'',
                body:'',
                css:[]                                                                                
            }
        }
    },
    created(){
        this.getInterface()
    },
    mounted(){
        console.log(this.$route.params.id)
    },
    methods:{
        getInterface(){
            //https://news-at.zhihu.com/api/4/news/3892357
            this.axios.get("/api/4/news/"+this.$route.params.id).then(
                res=>{
                    if(res.status===200){
                        this.detail = res.data
                    }
                }
            )
        }
    }
    //  /detail/15646156
}
</script>


<style>

</style>


