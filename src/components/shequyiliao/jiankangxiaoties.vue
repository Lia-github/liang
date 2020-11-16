<template>
  <div>
    <div class="biaoti"></div>
    <div class="kuang">
        <div class="shijiankuang">
             <el-date-picker
        v-model="value1"
        type="daterange"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        size="large"
      ></el-date-picker>
        </div>
     
      <div class="btnchaxun">查询</div>
      <div class="xts">
        <el-button type="text" @click="dialogFormVisible = true">
          <div class="btntianjia">发布小贴士</div>
        </el-button>

        <el-dialog title=" 发布小贴士" :visible.sync="dialogFormVisible" append-to-body="true">
          <el-form :model="form">
            <el-form-item label="键康标题" :label-width="formLabelWidth">
              <div class="block">
                <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
              </div>
            </el-form-item>
            <el-form-item label="键康内容" :label-width="formLabelWidth">
              <el-input v-model="input" placeholder="请输入内容"></el-input>
            </el-form-item>
            <el-form-item label="备       注" :label-width="formLabelWidth">
              <el-input v-model="input" placeholder="请输入内容"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
          </div>
        </el-dialog>
      </div>
            <div>
        <el-table
          :data="tableData"
          border
          style="width: 100%"
          header-cell-style="background-color: #C0C0FF; color: white;text-align: center; font-size: 18px;"
        >
          <el-table-column prop="date" label="发布日期" align="center"></el-table-column>
          <el-table-column prop="name" label="健康标题" align="center"></el-table-column>
          <el-table-column prop="address" label="健康内容" align="center"></el-table-column>
          <el-table-column prop="jfje" label="备注" align="center"></el-table-column>
          <el-table-column fixed="right" label="操作" align="center">
            <el-button @click="handleClick(scope.row)" type="text" size="medium">修改</el-button>
            <el-button type="text" size="small">删除</el-button>
            <el-button type="text" size="small">详情</el-button>
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
      options: [
        {
          value: "选项1",
          label: "业委会公告"
        },
        {
          value: "选项2",
          label: "物业公告"
        },
        {
          value: "选项3",
          label: "街道办公告"
        }
      ],
      value: "",
      tableData: [
        {
          date: "2019-09-01 10:12:11",
          name: "标题1",
          address: "内容1",
          jfje: "xxx",
          jfr: "内容1",
          jfzt: "zhangs"
        },
        {
         date: "2019-09-01 10:12:11",
          name: "标题1",
          address: "内容1",
          jfje: "xxx",
          jfr: "内容1",
          jfzt: "zhangs"
        }
      ],
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      formLabelWidth: "120px"
    };
  }
};
</script>
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
.btnchaxun {
  width: 120px;
  height: 40px;
  background-color: #c0c0ff;
  color: white;
  font-size: 18px;
  text-align: center;
  border-radius: 9px;
  line-height: 38px;
  margin: -35px 0px 0px 900px;
}
.btntianjia {
  width: 120px;
  height: 40px;
  background-color: #c0c0ff;
  color: white;
  font-size: 18px;
  text-align: center;
  border-radius: 9px;
  line-height: 38px;
 
}
.shijiankuang{
    margin: 40px 0px 0px 260px;
}
.xts{
  margin: -53px 0px 0px 1100px;
}
.fenye {
  margin-top: 440px;
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
</style>