<template>
  <div>
    <div class="biaoti"></div>
    <div class="kuang">
      <ul class="ul1">
        <li>
          <div class="block">
            <el-date-picker
              v-model="value1"
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期"
            ></el-date-picker>
          </div>
        </li>
        <li class="btnchax">查询</li>
        <li class="btnchax">车位录入</li>
      </ul>
            <div class="biao">
        <el-table
          :data="tableData"
          border
          style="width: 100%"
          header-cell-style="background-color: #C0C0FF; color: white;text-align: center; font-size: 18px;"
        >
          <el-table-column prop="date" label="录入日期" align="center" ></el-table-column>
          <el-table-column prop="name" label="停车场名称" align="center"></el-table-column>
          <el-table-column prop="address" label="车库位置" align="center"></el-table-column>
          <el-table-column prop="jfje" label="车位标识" align="center"></el-table-column>
          <el-table-column prop="jfr" label="车位照片" align="center"></el-table-column>
          <el-table-column prop="jfzt" label="车为业主" align="center"></el-table-column>
          <el-table-column prop="zx" label="停放车辆（车牌）" align="center"></el-table-column>
         
          <el-table-column fixed="right" label="操作" align="center">
            <el-button @click="dialogFormVisible = true" type="text" size="medium">修改</el-button>

            <el-button type="text" size="small">
              
              <div>
                  <el-button type="text" @click="open">删除</el-button>
              
              </div>
            </el-button>
          
          </el-table-column>
        </el-table>
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
<script>
export default {
  data() {
    return {
      value1: "",
      value2: "",
      tableData: [
        {
          date: "2019-09-01 10:12:11",
          name: "A区 停车场",
          address: "位置1......",
          jfje: "xx标识1",
          jfr: "照片1",
          jfzt: "张xx",
          zx: "京A~F0236"
         
        },
        {
          date: "2019-09-01 10:12:11",
          name: "A区 停车场",
          address: "位置1......",
          jfje: "xx标识1",
          jfr: "照片1",
          jfzt: "张xx",
          zx: "京A~F0236"
        },
        {
           date: "2019-09-01 10:12:11",
          name: "A区 停车场",
          address: "位置1......",
          jfje: "xx标识1",
          jfr: "照片1",
          jfzt: "张xx",
          zx: "京A~F0236"
        },
        {
          date: "2019-09-01 10:12:11",
          name: "A区 停车场",
          address: "位置1......",
          jfje: "xx标识1",
          jfr: "照片1",
          jfzt: "张xx",
          zx: "京A~F0236"
        }
      ]
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
.ul1{
    padding-top:50px; 
}
.ul1 li{
    list-style: none;
    float: left;
}
.ul1 li:nth-child(1){
    padding-left: 400px;
}
.ul1 li:nth-child(2){
    margin-left: 200px;
}
.ul1 li:nth-child(3){
  margin-left: 50px;
}
.btnchax{
    width: 140px;
    height: 38px;
    background-color: #C0C0FF;
    border-radius: 8px;
    text-align: center;
    color: white;
    line-height: 38px;
}
.biao {
  margin-top: 60px;
  padding-top: 20px;
}
.fenye {
  margin-top: 200px;
  width: 100%;
  height: 80px;
  border-top: 1px solid #e6e6ff;
}
.fy {
  float: right;
  margin: -26px 0px 0px 0px;
}
.sp2 {
  /* display: block; */
  font-size: 12px;
  padding: 22px 0px 0px 50px;
}
</style>