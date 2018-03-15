<template>
  <div style="position: fixed; height: 100vh;width: 100%;overflow: auto;">
    <header-bar>购物车</header-bar>
    <div class="nologin" style="padding-top: 50px;">
      <router-link to="" class="box-flex">
        <span class="flex">登录后享受更多优惠</span>
        <router-link to="/regist"><em class="flex">去登录</em></router-link>
        <i class="fa fa-angle-right fa-x"></i>
      </router-link>
    </div>
    <div>
      <img src="https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/e95ade2750a7fde92369b416c7d3176d.jpg"
           alt="" style="width:375px;height: 62px;">
    </div>
    <div class="cartList">
      <div class="list-item" v-for="item in cartlist">
        <router-link to="" class="code">
          <div class="item-box">
            <img class="lazy" :src="'https://'+item.image_url" alt="" style="display: flex;">
          </div>
          <div class="goods-info">
            <div  class="goods-name">{{item.name}}</div>
            <div class="goods-price">￥{{item.price}}</div>
          </div>
        </router-link>
      </div>
    </div>
    <foot-bar></foot-bar>
  </div>

</template>

<script>
  import HeaderBar from './HeaderBar'
  import FootBar from './FootBar'
  import data from '../assets/cart.json'
    export default {
      name: "cart",
      components:{
        HeaderBar,
        FootBar
      },
      data(){
          return{
              cartlist:{}
          }
      },
      created(){
          this.cartlist = data.data.recom_list;
          console.log(this.cartlist);
      }
    }
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
a{
  text-decoration: none;
  color: rgba(0,0,0,.54);
}
::-webkit-scrollbar{
  width: 1px;
}
.box-flex{
  text-decoration: none;
  line-height: 3rem;
  padding: 0 2rem 0 1.2rem;
  position: relative;
  color: rgba(0,0,0,.54);
  -webkit-box-pack: justify;
  justify-content: space-between;
  align-items: center;
  display:flex;
  font-size:1rem;
  }
.flex{
  -webkit-box-flex: 1;
  flex: 1 1 auto;
}
span{
  text-align: left;
}
  em{
    font-style: normal;
    text-align: right;
    padding-right: 0.4rem;
  }
  .cartList{
    height: 2180px;
    overflow: hidden;
    flex-wrap: wrap;
    flex-direction: row;
    -webkit-box-pack: justify;
    justify-content: space-between;
    align-content: center;
    display: flex;
  }
  .list-item{
    -webkit-box-flex: 0;
    flex:0 1 49.5%;
    overflow: hidden;
    text-align: left;
  }
  .code{
    display: block;
    outline: 0;
  }
  .item-box{
    position: relative;
  }
  .lazy{
    display: block;
    width: 100%;
    min-height: 12rem;
  }
  .goods-info{
    padding: 0.4rem 0.8rem 0.8rem;
  }
  .goods-name{
    font-size: 1rem;
    white-space: nowrap;
    color: #3c3c3c;
  }
  .goods-price{
    font-size: 1.2rem;
    color: #ff6700;
    margin-top: 0.4rem;
  }
</style>
