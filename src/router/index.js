import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
import Home from '../components/Home'
import Cart from  '../components/Cart'
import Mine from  '../components/Mine'
import Sort from  '../components/Sort'
import Search from  '../components/Search'
import Login from '../components/Login'
import Regist from '../components/Regist'
import Phone from '../components/Phone'
import Tj from '../components/Tj'
import Zn from '../components/Zn'
import Tv from '../components/Tv'
import Com from '../components/Com'
import Qm from '../components/Qm'
import Life from '../components/Life'
import Box from '../components/Box'
import Art from '../components/Art'



export default new Router({
  routes: [
    {path:'/',redirect:'/home/tj'},
    {
      path:'/home',component:Home,
      children:[
        {path:'/home/tj',component:Tj},
        {path:'/home/phone',component:Phone},
        {path:'/home/zn',component:Zn},
        {path:'/home/tv',component:Tv},
        {path:'/home/com',component:Com},
        {path:'/home/qm',component:Qm},
        {path:'/home/life',component:Life},
        {path:'/home/box',component:Box},
        {path:'/home/art',component:Art}

      ]
    },
    {path:'/sort',component:Sort},
    {path:'/cart',component:Cart},
    {path:'/mine',component:Mine},
    {path:'/search',component:Search},
    {path:'/login',component:Login},
    {path:'/regist',component:Regist}
  ]
})
