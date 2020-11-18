<template>
  <div>
    <div class="biaoti"></div>
    <div class="kuang">
      <el-tabs type="border-card">
        <el-tab-pane label="地图"></el-tab-pane>
        <el-tab-pane label="列表">
          <div class="div1">
            <ul class="ul1">
              <li class="li01">创建资源</li>
              <li>
                <el-input v-model="input" placeholder="请输入内容"></el-input>
              </li>
              <li class="li01">搜索</li>
            </ul>
            <br>
            <div class="biao">
              <el-table
                :data="tableData"
                border
                style="width: 100%"
                header-cell-style="background-color: #C0C0FF; color: white;text-align: center; font-size: 18px;"
              >
                <el-table-column prop="date" label="序号" align="center" width="80"></el-table-column>
                <el-table-column prop="name" label="设备ID" align="center"></el-table-column>
                <el-table-column prop="address" label="资源名称" align="center"></el-table-column>
                <el-table-column prop="jfje" label="详细地址" align="center"></el-table-column>
                <el-table-column prop="jfr" label="地理位置" align="center"></el-table-column>
                <el-table-column prop="jfzt" label="备注" align="center"></el-table-column>

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
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      input: "",
      tableData: [
        {
          date: "1",
          name: "id1",
          address: "名称1",
          jfje: "地址1",
          jfr: "经度xxx; 续度xxx",
          jfzt: "备注1"
        },
        {
          date: "2",
          name: "zhangs",
          address: "系统管理员",
          jfje: "张三",
          jfr: "13578955591",
          jfzt: "xxx"
        },
        {
          date: "3",
          name: "zhangs",
          address: "系统管理员",
          jfje: "张三",
          jfr: "13578955591",
          jfzt: "xxx"
        },
        {
          date: "4",
          name: "zhangs",
          address: "系统管理员",
          jfje: "张三",
          jfr: "13578955591",
          jfzt: "xxx"
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
.ul1 li {
  list-style: none;
  float: left;
}
.li01 {
  width: 120px;
  height: 35px;
  border: 1px solid #000;
  text-align: center;
  line-height: 35px;
  border-radius: 12px;
}
.ul1{
    padding-bottom: -50px;
}
.ul1 li:nth-child(2) {
  padding-left: 1050px;
}
.ul1 li:nth-child(3) {
  margin-left: 50px;
}
.biao {
  /* margin-top: 60px; */
  padding-top: 40px;
}
.fenye {
  margin-top:120px;
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
.div1{
    width: 100%;
    height: 500px;
}
</style>