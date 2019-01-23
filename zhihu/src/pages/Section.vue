<template>
    <div id='section'>
        <div class="sectionBox">
            <div class='section-item' v-for='(item,index) in section' v-bind:key=index>
                <img v-bind:src="section.thumbnail" alt="">
                <h2>{{section.name}}</h2>
                <div class='section-info' v-html='section.description'></div>
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
            section:{
                id:'',
                thumbnail:'',
                name:'',
                description:''
            }
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
                        this.section = res.data
                    }
                }
            )
        }
    }

}
</script>

<style>

</style>
