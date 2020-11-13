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
            <el-input v-model="input" placeholder="请输入公告标题"></el-input>
          </li>
          <li>
            <div class="btnchaxun">查询</div>
          </li>

          <li>
            <div class="">
              <el-button type="text" @click="dialogFormVisible = true"><div class="btntianjia">添加</div></el-button>

              <el-dialog title="公告管理" :visible.sync="dialogFormVisible" append-to-body="true">
                <el-form :model="form">
                  <el-form-item label="公告时间" :label-width="formLabelWidth">
                    <!-- <el-input v-model="form.name" autocomplete="off"></el-input> -->
                    <div class="block">
                      <el-date-picker v-model="value1" type="date" placeholder="选择日期"></el-date-picker>
                    </div>
                  </el-form-item>
                  <el-form-item label="公告类型" :label-width="formLabelWidth">
                    <el-select v-model="form.region" placeholder="请选择公告类型">
                      <el-option label="业委会公告" value="shanghai"></el-option>
                      <el-option label="物业公告" value="beijing"></el-option>
                      <el-option label="街道办公告" value="jdbgg"></el-option>
                    </el-select>
                  </el-form-item>
                   <el-form-item label="公告标题" :label-width="formLabelWidth">
                    <el-input v-model="input" placeholder="请输入内容"></el-input>
                  </el-form-item>
                  <el-form-item label="公告内容" :label-width="formLabelWidth">
                    <el-input v-model="input" placeholder="请输入内容"></el-input>
                  </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                  <el-button @click="dialogFormVisible = false">取 消</el-button>
                  <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                </div>
              </el-dialog>
            </div>
          </li>
        </ul>
      </div>

      <div>
        <el-table
          :data="tableData"
          border
          style="width: 100%"
          header-cell-style="background-color: #C0C0FF; color: white;text-align: center; font-size: 18px;"
        >
          <el-table-column prop="date" label="序号" width="180" align="center"></el-table-column>
          <el-table-column prop="name" label="日期" width="180" align="center"></el-table-column>
          <el-table-column prop="address" label="公告类型" align="center"></el-table-column>
          <el-table-column prop="jfje" label="公告标题" align="center"></el-table-column>
          <el-table-column prop="jfr" label="公告内容" align="center"></el-table-column>
          <el-table-column prop="jfzt" label="发布者" align="center"></el-table-column>
          <el-table-column fixed="right" label="操作" width="300" align="center">
            <el-button @click="handleClick(scope.row)" type="text" size="medium">修改</el-button>
            <!-- <el-button :plain="true" @click="open3">警告</el-button> -->
            <el-button type="text" size="small">删除</el-button>
            <el-button type="text" size="small">详情</el-button>
          </el-table-column>
        </el-table>
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
          date: "1",
          name: "2016-05-02",
          address: "物业公告",
          jfje: "标题1",
          jfr: "内容1",
          jfzt: "zhangs"
        },
        {
          date: "1",
          name: "2016-05-02",
          address: "物业公告",
          jfje: "标题1",
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
  },
  methods: {
    open3() {
      this.$message({
        message: "是否删除",
        type: "warning"
      });
    }
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
.riqichaxun ul li {
  list-style: none;
  float: left;
  margin: 40px;
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
.btntianjia {
  width: 120px;
  height: 40px;
  background-color: #c0c0ff;
  color: white;
  font-size: 18px;
  text-align: center;
  border-radius: 9px;
  line-height: 38px;
  margin-top: -13px;
}
</style>