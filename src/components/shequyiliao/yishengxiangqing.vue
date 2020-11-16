<template>
  <div>
    <div class="biaoti"></div>
    <div class="kuang">
      <div class="div1">
        <img src="../../../public/imgs/ystx.png" alt class="img1" />
        <p class="p1">张xx</p>
        <ul class="ul1">
          <li>国籍： 中国</li>
          <li>出生年月：1978年12月</li>
          <li>性别：男</li>
          <li>职业：外科医生</li>
          <li>职称：副主任医师</li>
        </ul>
      </div>
      <div class="div2">
          <p></p>
        <strong>&nbsp;&nbsp;主要经历：</strong>
        <ul class="jingli">
          <li>经历一：</li>
          <li>经历二：</li>
          <li>经历三：</li>
          <li>经历四：</li>
          <li>经历五：</li>
        </ul>
      </div>
      <div class="div3">
        <strong>&nbsp;&nbsp;职 务：</strong>
        <ul class="jingli">
          <li>职 务一：</li>
          <li>职 务二：</li>
          <li>职 务三：</li>
          <li>职 务四：</li>
          <li>职 务五：</li>
        </ul>
      </div>
      <div class="div4">
        <strong>&nbsp;&nbsp;荣 誉：</strong>
        <ul class="jingli">
          <li>2000年   荣获xx市xx优秀个人</li>
          <li>2003年   荣获xx市xx医院xx一等功</li>
          <li>2005年   荣获xx市评定为“优秀医生”</li>
          <li>2008年   荣获xx市xx医院xx一等功</li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style>
.biaoti {
  width: 100%;
  height: 40px;
  background: -webkit-gradient(
    linear,
    0% 0%,
    60% 0%,
    from(#baa8fe),
    to(#fafafa)
  );
}
.kuang {
  margin-top: 50px;
  width: 100%;
  height: 800px;
  border: 1px solid #e6e6ff;
}
.div1 {
  width: 400px;
  height: 800px;
  border-right: 1px solid #cccccc;
  /* text-align: center; */
}
.img1 {
  margin: 80px 0px 0px 50px;
}
.p1 {
  font-size: 32px;
  margin-left: 150px;
}
.ul1 {
  /* width: 220px; */
  margin-left: 50px;
}
.ul1 li {
  list-style: none;
  font-size: 20px;
  /* float: left; */
  padding-top: 20px;
}
.div2 {
  width: 1280px;
  height: 230px;
  border-bottom: 1px solid red;
  /* background-color: #baa8fe; */
  float: right;
  margin-top: -800px;
}
.div3 {
  width: 1280px;
  height: 230px;
  border-bottom: 1px solid red;
  /* background-color: #baa8fe; */
  float: right;
  margin-top: -470px;
}
.div4 {
  width: 1280px;
  height: 230px;
 
  /* background-color: #baa8fe; */
  float: right;
  margin-top: -200px;
}
.jingli li {
  list-style: none;
  margin-top: 10px;
}
</style>