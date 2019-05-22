<template>
    <div id='section'>
        <div class="sectionBox container">
            <div class='section-item' v-for='(item,index) in section' v-bind:key=index>
                <img class="section-img" v-bind:src="item.thumbnail" alt="">
                <div class="section-title">
                    <h2 @click='jump(item.id)'>{{item.name}}</h2>
                    <div class='section-info' v-html='item.description'></div>
                </div>
            </div>
        </div>
    </div>
</template>



<script>
/* eslint-disable */
export default {
    name:'section',
    data(){
        return{
            section:[]
        }
    },
    created(){
        this.getInterface();
    },
    mount(){

    },
    methods:{
        getInterface(){
            //https://news-at.zhihu.com/api/3/sections
            this.axios.get('/api/3/sections').then(
                res=>{
                     if(res.status===200){
                        console.log(res)                         
                        this.section = res.data.data
                    }
                }
            )
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

<style>
/**
flex  布局 一般移动端比较多
column 竖着下来
row 横着
*/
.section-item{
    display: flex;
    flex-direction: row;
    padding:30px;
    margin-bottom: 50px;
    justify-content: space-around;
    border:1px solid #000;
}
/**
* 
*/
.section-item:hover{
    box-shadow: 0px 0px 24px #ccc;
}
.section-img{
    width: 150px;
    height: 150px;
}
.section-title{
    width:400px;
}
.section-title h2{
    cursor: pointer;
}

</style>
