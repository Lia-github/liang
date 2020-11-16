<template>
  <div>
    <div class="biaoti"></div>
    <div class="kuang">
      <div class="riqichaxun">
        <ul>
          <li>
            <div class="block">
              <el-date-picker
                v-model="value1"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期"
                size="large"
              ></el-date-picker>
            </div>
          </li>
          <li>
            <el-select v-model="value" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </li>
          <li>
            <div class="btnchaxun">查询</div>
          </li>
        </ul>
      </div>
      <div>
        <el-table :data="tableData" border style="width: 100%" header-cell-style="background-color: #C0C0FF; color: white;text-align: center;">
          <el-table-column prop="date" label="日期" width="180" align="center"></el-table-column>
          <el-table-column prop="name" label="缴费类型" width="180" align="center"></el-table-column>
          <el-table-column prop="address" label="住户楼室" align="center"></el-table-column>
          <el-table-column prop="jfje" label="缴费金额" align="center"></el-table-column>
          <el-table-column prop="jfr" label="缴费人" align="center"></el-table-column>
          <el-table-column prop="jfzt" label="缴费状态" align="center"></el-table-column>
          <el-table-column prop="jffs" label="缴费方式" align="center"></el-table-column>
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
      options: [
        {
          value: "选项1",
          label: "水费"
        },
        {
          value: "选项2",
          label: "电费"
        },
        {
          value: "选项3",
          label: "停车费"
        },
        {
          value: "选项4",
          label: "燃气费"
        },
        {
          value: "选项5",
          label: "物业费"
        },
        {
          value: "选项5",
          label: "有线电视"
        },
        {
          value: "选项5",
          label: "固化宽带"
        }
      ],
      value: "",
      tableData: [{
          date: '2016-05-02',
          name: '水费',
          address: '6栋1202',
          jfje:'50',
          jfr:'张xx',
          jfzt:'缴费成功',
          jffs:'微信支付'
        }, {
           date: '2016-05-02',
          name: '水费',
          address: '6栋1202',
          jfje:'50',
          jfr:'张xx',
          jfzt:'缴费成功',
          jffs:'微信支付'
        }, {
          date: '2016-05-02',
          name: '水费',
          address: '6栋1202',
          jfje:'50',
          jfr:'张xx',
          jfzt:'缴费成功',
          jffs:'微信支付'
        }, {
          date: '2016-05-02',
          name: '水费',
          address: '6栋1202',
          jfje:'50',
          jfr:'张xx',
          jfzt:'缴费成功',
          jffs:'微信支付'
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
.fenye {
  margin-top: 320px;
  width: 100%;
  height: 80px;
  border-top: 1px solid #e6e6ff;
}
.fy {
  float: right;
  margin: -26px 40px 0px 0px;
}
.sp2 {
  /* display: block; */
  font-size: 18px;
  padding: 22px 0px 0px 50px;
}
.riqichaxun ul li {
  list-style: none;
  float: left;
  margin: 50px;
}
.kuan {
  width: 200px;
  height: 40px;
}
.btnchaxun {
  width: 120px;
  height: 40px;
  background-color: #c0c0ff;
  color: white;
  font-size: 18px;
  text-align: center;
  border-radius: 9px;
  line-height: 38px;
}
</style>