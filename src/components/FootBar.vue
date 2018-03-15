<template>
  <div class="footer">
    <ul>
      <li><router-link to="/home/tj" active-class="active"><i class="image fa fa-home fa-x"></i><span>首页</span></router-link></li>
      <li><router-link to="/sort" active-class="active"><i class="image fa fa-bars fa-x"></i><span>分类</span></router-link></li>
      <li><router-link to="/cart" active-class="active"><i class="image fa fa-cart-plus fa-x"></i><span>购物车</span></router-link></li>
      <li><router-link to="/mine" active-class="active"><i class="image fa fa-user-o fa-x"></i><span>我的</span></router-link></li>
    </ul>
  </div>
</template>
<script>

</script>
<style scoped>
 ul,li{
   list-style: none;
   margin: 0;
   padding: 0;
 }
 a{
   display: block;
   color: #999;
   text-decoration: none;
   outline:0;

 }
 .footer{
   position: fixed;
   z-index: 999;
   bottom: 0;
   left: 0;
   right: 0;
   background-color: white;
   /*padding-top: 40px;*/
 }
  ul{
    height: 50px;
    align-items:center;
    display: flex;
  }
  li{
    margin-left: 1rem;
    display: block;
    flex:1 1 auto;
    text-align: center;

  }
 .active{
   color:#ff6709 !important;
   font-size:1.5rem;
 }
  span{
    display: block;
    font-size: 0.9rem;
  }

</style>
