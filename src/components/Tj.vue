<template>
    <div class="tj">
      <div class="block">
        <el-carousel height="187px">
          <el-carousel-item v-for="item in images" :key="item.url">
            <img :src=item.url alt="" style="width: 100%;">
          </el-carousel-item>
        </el-carousel>
      </div>
      <div>
        <img src="https://i8.mifile.cn/v1/a1/594dec83-b317-175c-1916-e73c591452b7!180x152.webp" alt="" class="image2">
        <img src="https://i8.mifile.cn/v1/a1/82d92b9e-63fa-16d5-2a37-a1675c72351a!180x152.webp" alt="" class="image2">
        <img src="https://i8.mifile.cn/v1/a1/0437c9f2-dfba-a19f-d8d6-472e107bc4ca!180x152.webp" alt="" class="image2">
        <img src="https://i8.mifile.cn/v1/a1/6b06addd-6460-aa48-bdb2-043292b3d141!180x152.webp" alt="" class="image2">
      </div>
      <div style="position: relative">
        <img src="../assets/image/main-1.png" alt="" style="width: 184px;height:265px;;display: block;position: absolute">
        <img src="../assets/image/main-2.png" alt="" style="width: 183px;height:131px;display: block;position: absolute;left: 11.8rem;">
        <img src="../assets/image/main-3.png" alt="" style="width: 183px;height: 131px;display: block;position: absolute;left: 11.8rem;top:8.5rem">
      </div>
      <div style="margin-top: 17rem;">
        <img src="../assets/image/main-4.png" alt="" class="image3">
        <img src="../assets/image/main-5.png" alt="" class="image3">
        <img src="../assets/image/main-6.png" alt="" style="width: 100%;height: 229px">
      </div>
      <div style="position: relative">
        <img src="../assets/image/body-1.png" alt="" style="width: 185px;height: 185px;">
        <img src="../assets/image/-50.png" alt="" style="width: 62px;height: 16px;position: absolute;top: 0;left: 0">
        <img src="../assets/image/body-2.png" alt="" style="width: 185px;height: 185px;">
        <img src="../assets/image/-50.png" alt="" style="width: 62px;height: 16px;position: absolute;top: 0;left: 12rem">
      </div>
      <div style="padding-left: 1rem; float: left;">
        <div style="font-size: 1rem;">红米Note 5A 16GB</div>
        <div style="font-size: 0.8rem;color:grey;">5.5高清大屏</div>
        <div style="color:#ea625b">￥699</div>
      </div>
      <div style="float: right; padding-right: 6.4rem;">
        <div style="font-size: 1rem;">红米 4A</div>
        <div style="font-size: 0.8rem;color:grey;">6.5高清大屏</div>
        <div style="color:#ea625b">￥899</div>
      </div>
      <div style="height: 5rem">

      </div>


    </div>
</template>

<script>
    export default {
        name: "tj",
      data(){
        return{
          images:[
            {url:'https://i8.mifile.cn/v1/a1/eae16128-5550-41f6-fa6c-e969a25c6b99.webp?bg=E1D8C8'},
            {url:'https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/37a79c01ef3e3d0ab5e657070e9bbbde.jpg?bg=FFFFFF'},
            {url:'https://i8.mifile.cn/v1/a1/44c05ea1-5c4c-71bd-7bf8-ff1097bb0535.webp?bg=698FAB'},
            {url:'https://i8.mifile.cn/v1/a1/d3df9dff-58da-f50e-ff73-21dfa694482f.webp?bg=B2C5AB'}
          ]
        }
      },
    }
</script>

<style scoped>
  .block {
    margin-top: 5.3rem;
  }


  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
  .image2{
    width: 90px;
    height: 80px;
  }
  .image3{
    width: 375px;
    height: 145px;
  }
</style>
