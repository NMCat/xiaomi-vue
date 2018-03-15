<template>
  <div style="height: 1550px;">
   <header-bar>分类</header-bar>
    <div class="view" style="">
      <div class="container">
        <ul class="left" active="#fb7d34">
          <li class="left-item" v-for="(item,index) in list">
            <a :href="'#'+item.id" @click="isActive(index+1)">{{item.name}}</a>
          </li>
        </ul>
        <div class="detail">
          <div :id="item.id" v-for="item in list" class="font" @click="">
             -{{item.name}}-
            <img src="../assets/image/main-5.png" alt="" class="image1">
          </div>
        </div>
      </div>
    </div>
    <foot-bar></foot-bar>
  </div>
</template>
<script>
  import HeaderBar from './HeaderBar'
  import FootBar from './FootBar'
  import  {Tab,TabItem} from 'vux'
  import data from '../assets/data.json'
  export default{
    name:'sort',
    components:{
        Tab,TabItem,
        HeaderBar,
        FootBar,
        data

    },
    mounted:function(){
        document.getElementsByTagName('a')[1].style.cssText = 'color:#Fb7d34;font-size:1rem;'
    },
    methods:{
     isActive:function (index) {
       var ind = document.getElementsByTagName('a')[index];
       console.log(ind);
       var aArr = document.getElementsByTagName('a');
       for(var i=0; i<aArr.length; i++){
           if(i==index){
               ind.style.cssText = 'color:#Fb7d34;font-size:1rem;'
           }else{
               aArr[i].style.cssText = ''
           }
       }
     }
    },
    data(){
       return{
         list:[
           {name:'新品',id:'new'},
           {name:'手机',id:'phone'},
           {name:'电视',id:'tv'},
           {name:'电脑',id:'com'},
           {name:'家电',id:'jd'},
           {name:'路由',id:'rou'},
           {name:'智能',id:'telent'},
           {name:'电源',id:'power'},
           {name:'耳机',id:'ej'},
           {name:'音箱',id:'radio'},
           {name:'礼品',id:'gift'},
           {name:'生活',id:'life'},
           {name:'米粉卡',id:'card'},
           {name:'零售店',id:'store'},
         ]
       }
    }
  }

</script>
<style scoped>
  *{
    margin: 0;
    padding: 0;
  }
ul,li{
  list-style: none;
}
.view{
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 1200px;
  max-width: 28rem;
  margin: 0 auto;
}
.container{
  padding-bottom: 40px;
  padding-top: 50px;
  position: absolute;
  z-index:999;
  top:0;
  right:0;
  bottom: 0;
  left: 0;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  background: #fff;
  color: #3c3c3c;
}
a{
  text-decoration: none;
  color:black;
  font-size: 0.9rem;
}
  .left{
    width: 15%;
    height: 80vh;
    z-index:90;
    position: fixed;
    top:50px;
    bottom:0;
    left: 0;
    padding:1.2rem 1.5rem 0.6rem 1.3rem;
    background: #fefefe;
    ovflow-y:auto;
    border-right: 1px solid #efefef;
    overflow: scroll;
  }
  ::-webkit-scrollbar{
    width: 1px;
  }
  .left-item{
    height: 3.3rem;
    line-height: 2.5rem;
    overflow: hidden;
    text-align: center;
  }

  .detail{
    height: 100%;
    position: fixed;
    right:0;
    left: 6.6rem;
    top:4rem;
    overflow: auto;
  }
  .font{
    text-align: center;
    color:grey;
    padding: 0rem  0  2rem 0;
  }
  .image1{
    display: block;
    width: 266px;
    height: 220px;
  }
</style>
