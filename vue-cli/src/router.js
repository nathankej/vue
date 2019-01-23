import Vue from 'vue'
import Router from 'vue-router'
import Index from './pages/Index.vue'
import Test from './pages/Test.vue'
import routerTest from './pages/test/router.vue'
Vue.use(Router)
export default new Router({
    /**
     * http://b.fufentong.com/#/gift hash模式下 gift页面 
     * http://b.fufentong.com/gift history模式下的 gift页面 
     * 
     */
    mode:'hash',//路由的模式 hash（链接和页面路由之间以星号分开）和 history（没有星号）
    routes:[
        {
            name:'index',
            path:'/',
            component:Index
        },
        {
            name:'test',
            path:'/test',
            component:Test
        },
        {
            name:'router',
            path:'/test/router',
            component:routerTest
        }
    ]
})

