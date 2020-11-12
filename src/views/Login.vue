<template>
  <div class="login">
    <div class="dengl">
      <p>XXX智慧社区管理系统</p>
    </div>
    <div class="kuang">
      <ul class="ul1">
        <li class="liz">
          <div class="kuangz">
            <img src="../../public/imgs/login01.png" alt width="300px" height="300px" />
          </div>
        </li>
        <li class="liy">
          <div class="kuangy">
            <form>
              <input type="text" value="请输入用户名" class="zh"/><br><br>
              <input type="text" value="请输入密码" class="mm"/><br><br>
              <span class="jzmm"><input type="checkbox">记住密码</span>
              <br><br>
              <button class="dl">登录</button>
            </form>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style>
.login {
  background-image: url("../../public/imgs/loginbj.png");
  height: 100%;
  width: 100%;
  background-size: 100% 100%;
  position: fixed;
  /* display: flex; */
  /* align-items: center; */
  /* justify-content: center; */
}
.dengl
{
    text-align: center;
    margin-top: 300px;
}
.dengl p {
  color: white;
  font-size: 38px;
}
.kuang {
  width: 800px;
  height: 300px;
  background-color: white;
  border-radius: 10px;
  margin-left: 600px;
}
.kuang ul li{
    float: left;
    list-style: none;
}
.kuangz img {
  border-right: 2px solid #3f9bde;
}
.zh{
    width: 280px;
    height: 30px;
    -moz-box-shadow:0 0 5px 5px #E9E9E9;
    -webkit-box-shadow:0 0 5px 5px #E9E9E9;
    box-shadow:0 0 5px 5px #E9E9E9;
}
.mm{
 width: 280px;
    height:30px;
    -moz-box-shadow:0 0 5px 5px #E9E9E9;
    -webkit-box-shadow:0 0 5px 5px #E9E9E9;
    box-shadow:0 0 5px 5px #E9E9E9;
}
.ul1{
    padding: 0px 0px 0px 0px;
 
}
.kuangy{
    margin: 60px 0px 0px 80px;
}
.dl{
    width: 280px;
    height:30px;
    border-radius: 20px;
    color: white;
    background-color: #51A7E4;
}
.dl:hover{
     background-color: #00DAEC;
     cursor: pointer;
}
.jzmm{
    margin-left:200px; 
}
</style>