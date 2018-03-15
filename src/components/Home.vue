<template>
  <div class="home" style="padding-bottom: 50px;">
    <div class="header">
      <div class="headerwrapper">
      <div class="logo">
        <img
          class="image1" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAyCAYAAAD2vz2aAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjQ2OUE2MkU0RTQ4MTFFNzgxOTZBRDJFQjk4Qjk0NjQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjQ2OUE2MkY0RTQ4MTFFNzgxOTZBRDJFQjk4Qjk0NjQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpCOUQ0QkM2RjREQ0MxMUU3ODE5NkFEMkVCOThCOTQ2NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpCOUQ0QkM3MDREQ0MxMUU3ODE5NkFEMkVCOThCOTQ2NCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PiL8gcIAAAF1SURBVHja7Ju/LwRRFEbf+FVsQ0dBdJKNSksUSqVCr6AhKxGVwn+gVUpQEI1So5XoZUOhEbKMDiESIeOTzPbvzpoxz5wvOd3duzsn++7cSXajZMU9OOeGXPmTiHtxIU7FoYh/oe+ZmPKsjSMJS1yY+RS7YrNDcTdi1Le4y4WbHrEorsRcUW8asrB2BsSxWEeYLVtiCWG2bIsJhPmnV+zkeV3/TZhLv2HzCLNlFWG2TIqRvHYZa97FR84XXEvnUSeZEft/LexZDIvXnIVFop6uCQ3RnaHHeBmO5FMBstrPjZdiTUyLlww9Bqs6w87FcobX9Vd56B+IZoZjXVlhP0f0qAwfJKS1ookw+w0HYaEFYQVs+j4ZE7Oed6o3sVfA00OphW2IBUN9S5xU+Uhad6A+ZhhDnyAMYQhDGMIQRhCGMIQhDGEEYQhDGMIQhjCCMIQhDGEIIwhDWFHCLP81vPOsezT0/BK3nj0tP1i59qxrGXrG3wIMAK5yNsqRAjAyAAAAAElFTkSuQmCC"
          alt="">
      </div>
      <router-link to="/search" class="search" style="display:block">
        <i class="fa fa-search fa-x" style="padding-left: 1rem"></i>
        <span style="padding-left: 0.8rem">搜索商品名称</span>
      </router-link>
      <div class="user">
        <router-link to="/mine"><i class="fa fa-user-o fa-x"></i></router-link>
      </div>
      </div>
      <div class="nav">
        <div class="nav-item" v-for="item  in hotlist">
         <router-link :to="'/home/'+item.id" active-class="active">{{item.name}}</router-link>
        </div>
      </div>
    </div>
    <transition name="fade">
      <router-view></router-view>
    </transition>
    <foot-bar></foot-bar>
  </div>

</template>
<script>
  import FootBar from  './FootBar'
  export default{
    name:'home',
    components:{
          FootBar
    },
    data(){
     return{
      hotlist:[
        {name:'推荐',id:'tj'},
        {name:'手机',id:'phone'},
        {name:'智能',id:'zn'},
        {name:'电视',id:'tv'},
        {name:'电脑',id:'com'},
        {name:'全面屏',id:'qm'},
        {name:'生活周边',id:'life'},
        {name:'盒子',id:'box'},
        {name:'艺术',id:'art'}
      ],
       images:[
         {url:'https://i8.mifile.cn/v1/a1/eae16128-5550-41f6-fa6c-e969a25c6b99.webp?bg=E1D8C8'},
         {url:'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/37a79c01ef3e3d0ab5e657070e9bbbde.jpg?bg=FFFFFF'},
         {url:'https://i8.mifile.cn/v1/a1/44c05ea1-5c4c-71bd-7bf8-ff1097bb0535.webp?bg=698FAB'},
         {url:'https://i8.mifile.cn/v1/a1/d3df9dff-58da-f50e-ff73-21dfa694482f.webp?bg=B2C5AB'}
       ]
     }
    },
    created(){
//      this.http.get('/miapi/v1/home/category_v2').then(res=>{
//        console.log(res.data);
//
//
//      });
    }
  }

</script>
<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: all 0.5s;
    position: absolute;
  }
  .fade-enter {
    transform: translateX(100%);
  }
  .fade-leave-to{
    transform: translateX(-100%);
  }
  *{
    background-repeat: no-repeat;
    box-sizing: inherit;
  }
  div{
    margin:0;
    padding: 0;
  }
  a{
    text-decoration: none;
    color: #666;
  }
  ::-webkit-scrollbar{
    width: 1px;
  }
.header{
  position: fixed;
  width: 375px;
  height: 93px;
  top:0px;
  left:0;
  right:0;
  z-index: 99;
  box-shadow: 0 2px 4px -1px rgba(0,0,0,0.2);
  background-color: #f2f2f2;
}
.active{
  color:#ff6709 !important;
  border-bottom: 1px solid #ff6709 !important;
}
.headerwrapper{
  display: flex;
  -webkit-box-align: center;
  align-items: center;
}
  .logo{
    display: block;
    -webkit-box-align: center;
    align-items: center;
    width:2rem;
    margin: 0.5rem 0.3rem 0 0.9rem;
  }
  .image1{
    width:80%;
  }
  .search{
    display: block;
    -webkit-box-flex: 1;
    line-height: 2.1rem;
    flex:1;
    font-size: 1rem;
    justify-content: flex-start;
    align-items: center;
    border:1px solid #e5e5e5;
    text-align: left;
    width:268px;
    height: 33px;
    color: rgba(0,0,0,.3);
    background-color: #fff;
    border-radius: 0.1rem;
    margin: 0.6rem 1rem 0.4rem 0.5rem;
  }
  .user{
    width: 2rem;
    margin-top: 0.2rem;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    color: #666;
  }

  .nav{
    /*height: 45px;*/
    overflow-x:auto;
    background: #f2f2f2;
    font-size:0.9rem;
    white-space:nowrap;
    color: rgb(116,116,116);
  }
  .nav-item{
    display: inline-block;
    padding: 0.4rem;
  }

</style>
