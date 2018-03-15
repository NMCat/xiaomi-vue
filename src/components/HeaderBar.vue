<template>
 <div class="header">
   <div class="back">
     <span @click="back" class="fa fa-chevron-left fa-x icon"></span>
   </div>
   <div class="font"><slot></slot></div>
   <div class="search">
     <router-link to="/search" class="fa fa-search icon"></router-link>
   </div>
 </div>
</template>

<script>
    export default {
      name: "headerbar",
      methods:{
        back(){
            window.history.back();
        }
      }
    }
</script>

<style scoped>
  div{
    margin:0;
    padding:0;
  }
  ul,li{
    list-style: none;
  }
  a{
    text-decoration: none;
    color: #919191;
    font-size:1.3rem;
  }
  span{
    color: #919191;
  }
  .header{
   position: fixed;
    z-index:9999;
    top:0;
    left:0;
    right:0;
    display: flex;
    justify-content: space-between;
    -webkit-box-align: center;
    height: 50px;
    background: #f2f2f2;
    padding: 0;
    line-height: 3rem;
    /*padding-bottom: 50px;*/
  }
  .back{
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding-left: 1rem;
  }
  .font{
    flex:1;
    width: 100%;
    font-size:1.1rem;
    display: flex;
    padding-left: 8.5rem;
    color: #666;
  }
  .search{
    min-width: 2.2rem;
  }


</style>
