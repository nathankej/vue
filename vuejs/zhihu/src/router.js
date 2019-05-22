import Vue from 'vue'
import Router from 'vue-router'
import LatestNews from './pages/LatestNews.vue'
import Detail from './pages/Detail.vue'
import Section from './pages/Section.vue'
import PastNews from './pages/PastNews.vue'
import SectionDetail from './pages/SectionDetail'

Vue.use(Router)

export default new Router({
    mode:'hash',
    routes:[
        {
            name:'lastestNews',
            path:'/',
            component:LatestNews
        },
        //文章详情
        /**
         * /?name=123 这样的路径  
         * query:{
         *  name:123
         * }
         * 
         * /detail/1516
         * 
         * $rouer.params.id
         * 
         * params:{
         *  id:1516
         * }
         * 
         */
        { 
            name:'detail',
            path: '/detail/:id',
            component: Detail //$route
        },
        //
        { 
            name:'section',
            path: '/section',
            component: Section //
        },
        // section-detail/:id 
        { 
            name:'section-detail',
            path: '/section-detail/:id',
            component: SectionDetail //
        },

         // past news
        { 
            name:'pastNews',
            path: '/pastnews',
            component: PastNews //
        }


        // {
        //     name:'getNews',
        //     path:'/getNews',
        //     component:GetNews
        // },
        // {
        //     name:'extraStories',
        //     path:'/extraStories',
        //     component:ExtraStpries
        // },
        // {
        //     name:'pastNews',
        //     path:'/pastNews',
        //     component:PastNews
        // },
        // {
        //     name:'version',
        //     path:'/version',
        //     component:Version
        // }
    ]
})