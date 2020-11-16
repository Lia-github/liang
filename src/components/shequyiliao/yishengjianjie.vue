<template>
  <div>
    <div class="biaoti"></div>
    <div class="kuangding">
      <div class="kuangdingz">
        <el-col :span="14">
          <el-input v-model="input" placeholder="请输入医院名称"></el-input>
        </el-col>
        <div class="go">Go</div>
      </div>
      <div class="kuangdingy">
        <i class="el-icon-location-outline"></i>
        长沙
        <span class="sp1">&nbsp;切换城市</span>
        <ul class="ul1">
          <li>
            <el-select v-model="value" placeholder="请选择科室">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </li>
          <li><el-input v-model="input" placeholder="请输入医生名称"></el-input></li>
          <li><div class="btnss">搜索</div></li>
        </ul>
      </div>
    </div>

    <div class="kuang">
      <el-container style="height: 800px; border: 1px solid #eee">
        <el-aside width="250px" style="background-color: rgb(238, 241, 246)">
          <el-menu :default-openeds="['1', '3']">
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-message"></i>当前位置
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">佑姆塘社区医院</el-menu-item>
                <el-menu-item index="1-2">湘雅一医院</el-menu-item>
                <el-menu-item index="1-3">长沙光大医院</el-menu-item>
                <el-menu-item index="1-4">长沙爱耳眼科</el-menu-item>
                <el-menu-item index="1-5">湖南省中医附属医院</el-menu-item>
                <el-menu-item index="1-6">岳麓区人民医院</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-menu"></i>省级医院
              </template>
              <el-menu-item-group>
                <el-menu-item index="2-1">湖南省人民医院</el-menu-item>
                <el-menu-item index="2-2">湖南省儿童医院</el-menu-item>
                <el-menu-item index="2-3">湖南省妇幼保键院</el-menu-item>
                <el-menu-item index="2-4">湖南省xxx医院</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-menu"></i>市级医院
              </template>
              <el-menu-item-group>
                <el-menu-item index="3-1">长沙市一医院</el-menu-item>
                <el-menu-item index="3-2">长沙市二医院</el-menu-item>
                <el-menu-item index="3-3">长沙市三医院</el-menu-item>
                <el-menu-item index="3-4">长沙市四医院</el-menu-item>
                <el-menu-item index="3-5">长沙市妇幼保键医</el-menu-item>
                <el-menu-item index="3-6">长沙xxx医院</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-menu"></i>专科医院
              </template>
              <el-menu-item-group>
                <el-menu-item index="4-1">xxx牙科医院</el-menu-item>
                <el-menu-item index="4-2">xxx口腔医院</el-menu-item>
                <el-menu-item index="4-3">xxx皮肤病医院</el-menu-item>
                <el-menu-item index="4-4">xxx眼科医院</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title">
                <i class="el-icon-menu"></i>重点医院
              </template>
              <el-menu-item-group>
                <el-menu-item index="5-1">湘雅一医院</el-menu-item>
                <el-menu-item index="5-2">湘雅二医院</el-menu-item>
                <el-menu-item index="5-3">湘雅三医院</el-menu-item>
                <el-menu-item index="5-4">湘雅四医院</el-menu-item>
                <el-menu-item index="5-5">湘雅五医院</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
        <div>
          <ul class="ysjj">
            <li class="yskuang">
              <div class="keshi">
                <span>&nbsp;xxx科室</span>
              </div>
              <router-link to="yishengxiangqing"><img src="../../../public/imgs/Headlogo.png" alt class="img1" /></router-link>
              <p class="p1">主任医生：张xx</p>
            </li>
            <li class="yskuang">
              <div class="keshi">
                <span>&nbsp;xxx科室</span>
              </div>
              <img src="../../../public/imgs/Headlogo.png" alt class="img1" />
              <p class="p1">主任医生：张xx</p>
            </li>
            <li class="yskuang">
              <div class="keshi">
                <span>&nbsp;xxx科室</span>
              </div>
              <img src="../../../public/imgs/Headlogo.png" alt class="img1" />
              <p class="p1">主任医生：张xx</p>
            </li>
          </ul>
          <ul class="ysjj">
            <li class="yskuang">
              <div class="keshi">
                <span>&nbsp;xxx科室</span>
              </div>
              <img src="../../../public/imgs/Headlogo.png" alt class="img1" />
              <p class="p1">主任医生：张xx</p>
            </li>
            <li class="yskuang">
              <div class="keshi">
                <span>&nbsp;xxx科室</span>
              </div>
              <img src="../../../public/imgs/Headlogo.png" alt class="img1" />
              <p class="p1">主任医生：张xx</p>
            </li>
            <li class="yskuang">
              <div class="keshi">
                <span>&nbsp;xxx科室</span>
              </div>
              <img src="../../../public/imgs/Headlogo.png" alt class="img1" />
              <p class="p1">主任医生：张xx</p>
            </li>
          </ul>
          <div class="fenye">
            <div class="sp2">
              <span>待缴账单数:100/条 页数:1/9 每页:9/条</span>
            </div>
            <el-pagination background layout="prev, pager, next" :total="1000" class="fy"></el-pagination>
          </div>
        </div>
      </el-container>
    </div>
  </div>
</template>
<script>
export default {
  data() {
   
    return {
      tableData: Array(20).fill(item),
      options: [{
          value: '选项1',
          label: '1科'
        }, {
          value: '选项2',
          label: '2科'
        }, {
          value: '选项3',
          label: '3科'
        }],
        value: ''

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
  margin-top: 0px;
  width: 100%;
  height: 800px;
  border: 1px solid #e6e6ff;
}
.ysjj {
  margin-left: 0px;
}
.ysjj li {
  list-style: none;
  float: left;
  margin: 70px;
}
.yskuang {
  width: 300px;
  height: 200px;
  border-radius: 12px;
  border: 1px solid #d7d7d7;
}
.keshi {
  width: 300px;
  height: 30px;
  border-bottom: 1px solid #d7d7d7;
  line-height: 28px;
}
.img1 {
  margin: 18px 0px 0px 40px;
}
.p1 {
  text-align: center;
  font-size: 18px;
}
.fenye {
  margin-top: 680px;
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
.kuangding {
  margin: 40px 0px 0px 0px;
  width: 100%;
  height: 60px;
  border-top: 1px solid #d7d7d7;
  border-right: 1px solid #d7d7d7;
  border-left: 1px solid #d7d7d7;
}
.kuangdingz {
  width: 240px;
  height: 60px;
  border-right: 1px solid #d7d7d7;
  padding: 10px 0px 0px 10px;
}
.go {
  width: 58px;
  height: 38px;
  background-color: #169bd5;
  color: white;
  border-radius: 8px;
  font-size: 12px;
  text-align: center;
  line-height: 34px;
  margin: 0px 0px 0px 170px;
}
.kuangdingy {
  margin: -50px 0px 0px 300px;
}
.sp1 {
  color: #0000ff;
}

.ul1 li {
  list-style: none;
  float: left;
  margin-left: 40px;

}
.ul1 {
  margin: -10px 10px 0px 0px;
  float: right;
}
.btnss{
    width: 140px;
    height: 40px;
    color: white;
    background-color:#169bd5;
    text-align:center;
    line-height: 40px; 
    border-radius: 12px;
}
</style>