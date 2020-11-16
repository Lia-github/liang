<template>
  <div>
    <div class="neirs">
      <ul class="neirsul">
        <li class="el-icon-office-building">
          <span class="sp1">200</span>
          <p class="p1">楼宇数</p>
        </li>
        <li class="el-icon-user-solid">
          <span class="sp1">200</span>
          <p class="p2">登记人口数</p>
        </li>
        <li class="el-icon-s-platform">
          <span class="sp1">200</span>
          <p class="p2">智能设备数</p>
        </li>
        <li class="el-icon-refrigerator">
          <span class="sp1">200</span>
          <p class="p2">智能家居</p>
        </li>
        <li class="el-icon-mouse">
          <span class="sp1">200</span>
          <p class="p2">预约挂号</p>
        </li>
        <li class="el-icon-message-solid">
          <span class="sp1">100</span>
          <p class="p2">系统警报数</p>
        </li>
      </ul>
    </div>
    <div class="neirz">
      <ul>
        <li class="neirz01">
          <div>
            <span class="sp02">房屋类别统计</span>
            <span class="sp03">单位：个</span>
          </div>
        </li>
        <li class="neirz02">
          <div>
            <span class="sp02">设备分布图</span>
          </div>
        </li>
        <li class="neirz03">
          <div>
            <span class="sp02">设备状态</span>
            <span class="sp03">单位：个</span>
          </div>
        </li>
      </ul>
    </div>

    <div class="neirx">
      <ul>
        <li class="neirz01">
          <div>
            <span class="sp02">预约挂号统计</span>
          </div>
        </li>
        <li class="neirz02">
          <div>
            <span class="sp02">缴费统计</span>
          </div>
        </li>
        <li class="neirz03">
          <div>
            <span class="sp02">报修统计</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}
.el-aside {
  color: #333;
}
.neirs {
  height: 100px;
  border: 1px solid #e6e6ff;
  margin-left: 40px;
}
.neirsul {
  margin-top: -40px;
  margin-left: 0px;
}
.neirs ul li {
  float: left;
  list-style: none;
  font-size: 48px;
  margin: 70px;
}
.neirs ul li:nth-child(1) {
  color: #1597db;
}
.neirs ul li:nth-child(2) {
  color: #fcde9e;
}
.neirs ul li:nth-child(4) {
  color: #f4ea2a;
}
.neirs ul li:nth-child(5) {
  color: red;
}
.neirs ul li:nth-child(6) {
  color: red;
}
.sp1 {
  display: block;
  font-size: 28px;
  color: #623bfe;
  margin: -46px 0px 0px 49px;
}
.p1 {
  font-size: 12px;
  color: #000;
  margin: 0px 0px 0px 56px;
}
.p2 {
  font-size: 12px;
  color: #000;
  margin: 0px 0px 0px 50px;
}
.neirz {
  margin: 50px 0px 0px 40px;
  width: 1507px;
  height: 350px;
  /* border: 1px solid #e6e6ff; */
  color: #000;
 
}
.neirz ul li{
  list-style: none;
  float: left;
  /* margin: 10px; */
}
.neirz li:nth-child(2){
  margin-left: 40px;
}
.neirz li:nth-child(3){
  margin-left: 40px;
}
.neirz01{
  /* float: left; */
  width: 350px;
  height: 340px;
  border: 1px solid #e6e6ff;
}
.neirz02{
  width: 650px;
  height: 340px;
  border: 1px solid #e6e6ff;
}
.neirz01 div{
  width: 350px;
  height: 40px;
  border-bottom: 1px solid #e6e6ff;
}
.neirz02 div{
  
  width: 650px;
  height: 40px;
  border-bottom: 1px solid #e6e6ff;
}
.neirz03 div{
  width: 350px;
  height: 40px;
  border-bottom: 1px solid #e6e6ff;
}
.neirz03{
  
  width: 350px;
  height: 340px;
  border: 1px solid #e6e6ff;
}
.sp02{
 display: block;
 padding: 10px 0px 0px 15px;
  
}
.sp03{
  float: right;
   display: block;
  margin: -20px 10px 0px 0px;
}
.neirx {
  margin: 0px 0px 200px 40px;
  width: 1507px;
  height: 350px;
  /* border: 1px solid #e6e6ff; */
  color: #000;

 
}
.neirx ul li{
  list-style: none;
  float: left;
  /* margin: 10px; */
}
.neirx li:nth-child(2){
  margin-left: 40px;
}
.neirx li:nth-child(3){
  margin-left: 40px;
}
.el-icon-arrow-down:before {
    content: "";
}
</style>