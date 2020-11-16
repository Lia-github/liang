<template>
  <div>
    <div class="biaoti"></div>
    <div class="kuang">
      <div class="kuangdin">
      <div class="fanhui">
          <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
          <span class="sp1">当前位置：长沙市岳麓区茶子山路佑姆塘社区</span><l class="el-icon-location-outline"></l>
          <span class="sp3"><el-link type="primary" :underline="false">
            <router-link to="qitayiyuan">选择其他医院</router-link>
            </el-link></span>
      </div>
        
      </div>
      <div class="yy">
        <ul>
          <li class="yiyuankuang">佑姆塘社区医院</li>
          <li class="yiyuankuang"><router-link to="xiangyayiyuan" tag="div">湘雅第一医院</router-link></li>
          <li class="yiyuankuang">长沙光大医院</li>
          <li class="yiyuankuang">长沙爱耳眼科</li>
        </ul>
         <ul>
          <li class="yiyuankuang">佑姆塘社区医院</li>
          <li class="yiyuankuang">湘雅第一医院</li>
          <li class="yiyuankuang">长沙光大医院</li>
          <li class="yiyuankuang">长沙爱耳眼科</li>
        </ul>
      </div>
      <div class="fenye">
        <div class="sp2">
          <span>待缴账单数:100/条 页数:1/9 每页:9/条</span>
        </div>
        <el-pagination background layout="prev, pager, next" :total="1000" class="fy"></el-pagination>
      </div>
    </div>
  </div>
</template>
<style scoped>
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
.fenye {
  margin-top: 660px;
  width: 100%;
  height: 80px;
  border-top: 1px solid #e6e6ff;
}
.fy {
  float: right;
  margin: -20px 40px 0px 0px;
}
.sp2 {
  /* display: block; */
  font-size: 18px;
  padding: 22px 0px 0px 50px;
}
.kuangdin {
  height: 60px;
  width: 100%;
  border-bottom: 1px solid #d7d7d7;
}
.yy ul li {
  list-style: none;
  float: left;
  margin: 32px;
}
.yiyuankuang {
  width: 240px;
  height: 150px;
  border: 1px solid #d7d7d7;
  border-radius: 12px;
  text-align: center;
  line-height: 150px;
}
.fanhui{
    padding: 11px 0px 0px 40px;
}
.sp1{
    padding-left: 20px;
}
.sp3{
    padding-top: 10px;
    float: right;
    margin-right:20px; 
}
</style>
