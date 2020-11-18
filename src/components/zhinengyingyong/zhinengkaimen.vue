<template>
  <div>
    <div class="biaoti"></div>
    <div class="kuang">
      <el-tabs type="border-card">
        <el-tab-pane label="开门统计"></el-tab-pane>
        <el-tab-pane label="开门记录">
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
      </ul>
      <div class="biao">
        <el-table
          :data="tableData"
          border
          style="width: 100%"
          header-cell-style="background-color: #C0C0FF; color: white;text-align: center; font-size: 18px;"
        >
          <el-table-column prop="date" label="入库日期" align="center"></el-table-column>
          <el-table-column prop="name" label="出库时间" align="center"></el-table-column>
          <el-table-column prop="address" label="停车场名称" align="center"></el-table-column>
          <el-table-column prop="jfje" label="车辆名称" align="center"></el-table-column>
          <el-table-column prop="jfr" label="车辆型号" align="center"></el-table-column>
          <el-table-column prop="jfzt" label="车辆车牌" align="center"></el-table-column>
          <el-table-column prop="zx" label="停车时长" align="center"></el-table-column>
          <el-table-column prop="tcfy" label="停车费用" align="center"></el-table-column>
          <el-table-column prop="zffs" label="支付方式" align="center"></el-table-column>
          <el-table-column fixed="right" label="操作" align="center">
            <el-button @click="dialogFormVisible = true" type="text" size="medium">调用监控录像</el-button>
          </el-table-column>
        </el-table>
      </div>
      <div class="fenye">
        <div class="sp2">
          <span>待缴账单数:100/条 页数:1/9 每页:9/条</span>
        </div>
        <el-pagination background layout="prev, pager, next" :total="1000" class="fy"></el-pagination>
      </div>
        </el-tab-pane>
      </el-tabs>
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
.ul1 {
  padding-top: 50px;
}
.ul1 li {
  list-style: none;
  float: left;
}
.ul1 li:nth-child(1) {
  padding-left: 400px;
}
.ul1 li:nth-child(2) {
  margin-left: 200px;
}
.ul1 li:nth-child(3) {
  margin-left: 50px;
}
.btnchax {
  width: 140px;
  height: 38px;
  background-color: #c0c0ff;
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
  margin-top: 308px;
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