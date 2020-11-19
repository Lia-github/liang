<template>
  <div>
    <div class="biaoti"></div>
    <div class="kuang">
      <ul>
        <li class="kuang01">
          <span class="el-icon-s-home"></span>
          <span class="sp1">1000</span>
          <p class="p1">毛坯数</p>
        </li>
        <li class="kuang01">
          <span class="el-icon-s-home"></span>
          <span class="sp1">500</span>
          <p class="p1">精装数</p>
        </li>
        <li class="kuang01">
          <span class="el-icon-s-home"></span>
          <span class="sp1">100</span>
          <p class="p2">豪华精装数</p>
        </li>
        <li class="kuang01">
          <span class="el-icon-s-home"></span>
          <span class="sp1">100</span>
          <p class="p1">入住数</p>
        </li>
      </ul>
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
.kuang ul li {
  list-style: none;
  float: left;
  text-align: center;
  margin: 38px;
}
.kuang01 {
  width: 200px;
  height: 80px;
  border: 1px solid #000;
  border-radius: 10px;
}
.el-icon-s-home {
  display: block;
  font-size: 60px;
  padding: 14px 80px 0px 0px;
}
.sp1 {
  display: block;
  font-size: 28px;
  margin: -52px 0px 0px 40px;
}
.p1 {
  font-size: 12px;
  display: block;
  margin: -5px 0px 0px 40px;
}
.p2 {
  font-size: 12px;
  display: block;
  margin: -5px 0px 0px 52px;
}
</style>