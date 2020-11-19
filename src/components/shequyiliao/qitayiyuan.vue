<template>
  <div>
    <div class="biaoti"></div>
    <div class="kuang">
      <div class="div1">
        <div class="fh">
          <el-button type="primary" icon="el-icon-arrow-left"><router-link to="kuaisuyuyue" tag="i">上一页</router-link></el-button>
        </div>

        <ul class="ul1">
          <li>类型：</li>
          <li>
            <el-radio v-model="radio" label="1">全部医院</el-radio>
          </li>
          <li>
            <el-radio v-model="radio" label="2">省级医院</el-radio>
          </li>
          <li>
            <el-radio v-model="radio" label="3">市级医院</el-radio>
          </li>
          <li>
            <el-radio v-model="radio" label="4">专科医院</el-radio>
          </li>
          <li>
            <el-radio v-model="radio" label="5">重点医院</el-radio>
          </li>
        </ul>
        <div class="ss">
          <el-col :span="12">
            <el-input v-model="input" placeholder="请输入医院名称"></el-input>
          </el-col>
        </div>
        <div class="btnss">搜索</div>
      </div>
      <div class="yy">
        <ul>
          <li class="yiyuankuang">湘雅二医院</li>
          <li class="yiyuankuang">湘雅三医院</li>
          <li class="yiyuankuang">湘雅口腔医院</li>
          <li class="yiyuankuang">长沙市一医院</li>
        </ul>
        <ul>
          <li class="yiyuankuang">长沙市二医院</li>
          <li class="yiyuankuang">长沙市三医院</li>
          <li class="yiyuankuang">长沙市四医院</li>
          <li class="yiyuankuang">长沙市妇幼保键院</li>
        </ul>
        <ul>
          <li class="yiyuankuang">湖南省儿童医院</li>
          <li class="yiyuankuang">湖南省妇幼保键院</li>
          <li class="yiyuankuang">湖南省人民医院</li>
          <li class="yiyuankuang">湖南省xxx医院</li>
        </ul>
      </div>
      <div class="jiazai"><img src="../../../public/imgs/jiazai.png" alt=""></div>
      <div class="fenye">
        <div class="sp2">
          <span>待缴账单数:100/条 页数:1/9 每页:9/条</span>
        </div>
        <el-pagination background layout="prev, pager, next" :total="1000" class="fy"></el-pagination>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      radio: "1",
      input: ""
    };
  }
};
</script>
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
  margin-top: 130px;
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
.div1 {
  width: 100%;
  height: 60px;
  border-bottom: 1px solid #d7d7d7;
}
.ul1 {
  margin: -55px 0px 0px 100px;
}
.ul1 li {
  list-style: none;
  float: left;
  padding: 30px;
}
.fh {
  padding: 10px 0px 0px 15px;
}
.btnss {
  width: 80px;
  height: 38px;
  border-radius: 6px;
  color: white;
  line-height: 38px;
  background-color: #169bd5;
  text-align: center;
  float: left;
}
.ss {
  margin: 15px 0px 0px 1400px;
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
.jiazai{
    text-align: center;
    margin: 50px 0px 0px 0px;
}
</style>
