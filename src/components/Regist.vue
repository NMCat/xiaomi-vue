<template>
  <div>
    <div class="layout" style="">
      <div class="logo">
        <div class="mi">
          <img class="image1" src="../assets/image/xm.png" alt="">
          <h4>小米账号注册</h4>
        </div>
      </div>
      <div style="height: 100%">
        <div class="login_area" style="text-align: center;">
          <form action="" :model="nweUser" ref="addForm" class="">
            <label class="box">
              <input class="box" type="text" required pattern="^[a-zA-Z0-9\u4e00-\u9fa5]{2,10}$"
                        placeholder="邮箱/手机号码/小米ID">
            </label>
            <label class="box1" style="height: 40px;">
              <input type="password" placeholder="密码">
            </label>
          </form>
        </div>
      </div>
      <div style="padding-top: 20px;">
        <input class="button1" type="submit" value="注册">
      </div>
      <div style="padding-top: 0px;">
        <router-link to="/login"><input class="button2" type="submit" value="手机登录"></router-link>
      </div>
      <div style="margin: 1rem;text-align: center;">
        <fieldset id="login-4">
          <legend>其他方式登陆</legend>
        </fieldset>
      </div>
      <div class="login-5">
        <div style="width: 65%;margin:0 auto;">
          <div class="login-5-img-1"></div>
          <div class="login-5-img-2"></div>
          <div class="login-5-img-3"></div>
        </div>
      </div>
      <div class="login-6">
        <span style="margin-right: 1rem;">立即注册</span>
        <span style="margin-left: 1rem;">忘记密码?</span>
      </div>
      <div class="login-7" style="color: rgba(0,0,0,.35); text-align: center">
        <span class="loginactive">简体</span>&nbsp;|&nbsp;
        <span>繁体</span>&nbsp;|&nbsp;
        <span>English</span>&nbsp;|&nbsp;
        <span>常见问题</span>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: "regist"
  }
</script>

<style scoped>
  *{
    margin:0;
    padding: 0;
  }
  a{
    text-decoration: none !important;
  }
  .layout{
    width: 100%;
    height: 100%;
    margin: 0 auto ;
    padding: 0 20px;
    position: relative;
    box-sizing: border-box;
    background: #eee;
  }
  .mi{
    padding: 40px 0 22px;
    text-align: center;
  }
  .image1{
    display: block;
    width: 49px;
    height: 48px;
    margin: 0 auto;
  }
  h4{
    display: block;
    font-size: 1.2rem;
    color: #424242;
    font-weight: normal;
    text-align: center;
    -webkit-margin-before: 1.33em;
    -webkit-margin-after: 1.33em;
  }
  .layout input{
    width: 100%;
    padding: 0.4rem 0;
    line-height: normal;
    display: block;
    font-size: 1rem;
    -webkit-box-flex: 1;
    border:   0 none;
    outline: none;
  }

  .box{
    background-color: #fff !important;
    margin-bottom: 1px;
    border-radius: 16px 16px 0 0;
    display: -webkit-box;
    padding: 0 10px;
    outline: 0;
  }

  .box1{
    background-color: #fff !important;
    border-radius: 0 0 16px 16px;
    display: -webkit-box;
    -webkit-box-align: center;
    padding-left: 10px;
  }
  .button1{
    -webkit-appearance: none;
    background-color: #33b4ff;
    width: 100%;
    height: 43px;
    display: block;
    margin-bottom: 14px;
    text-align: center;
    color: #fff;
    cursor: pointer;
    border-radius: 1rem;
    border: 1px solid rgba(186,186,186,0.3);
    overflow: hidden;
  }
  .button2{
    -webkit-appearance: none;
    background-color: #fff;
    width: 100%;
    height: 43px;
    display: block;
    margin-bottom: 14px;
    text-align: center;
    color: #666;
    cursor: pointer;
    border-radius: 1rem;
    border: 1px solid rgba(186,186,186,0.3);
    overflow: hidden;
  }
  #login-4{
    border: none;
    border-top: 1px dashed rgba(0,0,0,.25);
    color: rgba(0,0,0,.35);
  }
  .login-5 .login-5-img-1,.login-5-img-2,.login-5-img-3{
    display: inline-block;
  }
  .login-5-img-1{
    width: 4rem;
    height: 4rem;
    background-image: url(../assets/image/3.png);
    background-position: 12% -10px;
  }
  .login-5-img-2{
    width: 4rem;
    height: 4rem;
    background-image: url(../assets/image/3.png);
    background-position: center -10px;
  }
  .login-5-img-3{
    width: 4rem;
    height: 4rem;
    background-image: url(../assets/image/3.png);
    background-position: 90% -10px;
  }
  .login-6{
    margin: 2rem 4.5rem;
    color: rgba(0,0,0,.35);
  }
  .loginactive{
    color: rgba(0,0,0,.88);
  }
  .login-7{
    padding-bottom: 60px;
  }
</style>

