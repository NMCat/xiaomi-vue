<template>
  <div style="height: 100%;">
    <div class="header">
      <div class="back">
        <span @click="back" class="fa fa-chevron-left fa-x icon"></span>
      </div>
      <div class="font">
        <input type="search" placeholder="搜索商品名称">
      </div>
      <div class="search">
        <router-link to="/search" class="fa fa-search icon"></router-link>
      </div>
    </div>

    <div class="hot">热门搜索</div>
    <div class="image">
      <img src="http://i8.mifile.cn/b2c-mimall-media/9c1f3d565f10229dbd0b06c102789783.jpg?bg=CE4249" alt="">
    </div>
    <div class="search-key">
      <a href="">红米5 新品</a>
      <a href="">电视32英寸</a>
      <a href="">净水器厨下</a>
      <a href="">小米MIX2</a>
    </div>

  </div>

</template>

<script>

    export default {
      name: "search",
      components:{
      },
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
    /*padding: 0;*/
    line-height: 3.1rem;
    /*margin-bottom: 50px;*/
  }
  .back{
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    padding-left: 1rem;
  }
  .font{
    position: relative;
    width: 276px;
    height: 27px;
    font-size:1.1rem;
    color: #666;
    border: 1px solid #e5e5e5;
    margin-top: 0.6rem;
    background: #fff;
    border-radius: .16rem;
    text-align: center;
  }
  .search{
    min-width: 2.2rem;
  }
  input{
    position: absolute;
    /*display: inline-block;*/
    width: 100%;
    height: 100%;
    top: 0rem;
    left: 0.5rem;
    right: 0rem;
    border: 0 none;
    font-size: 1rem;
    outline: 0;
    font-weight: 400;
  }
 .hot{
   margin-top: 50px;
  font-size: 0.9rem;
   color: #3c3c3c;
   padding-top: 0.5rem;
   padding-left: 1.2rem;
   padding-bottom: 1rem;
 }
  img{
    width: 375px;
    height: 104px;
  }
  .search-key a{
    display: inline-block;
    padding: 0.4rem 0.9rem;
    margin: 0.6rem;
    border:1px solid #e4e4e4;
    background: hsla(12,99%,71%,0.05);
    font-size: 0.8rem;
    color:#484848;
  }
</style>
