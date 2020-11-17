<template>
  <div>
    <div class="biaoti"></div>
    <div class="kuang">
      <ul class="fwxxul">
        <li>
          <el-input v-model="input" placeholder="请输入角色名称"></el-input>
        </li>
        <li>
          <div class="btnjiant">查询</div>
        </li>
        <li>
          <el-button type="text" @click="dialogFormVisible = true">
            <div class="btnjiant2">添加</div>
          </el-button>
          <el-dialog
            title=" 添加用户"
            :visible.sync="dialogFormVisible"
            append-to-body="true"
            width="700px"
          >
            <el-form :model="form">
              <el-form-item label=" 用户名" :label-width="formLabelWidth">
                <el-col :span="10">
                  <el-input v-model="input" placeholder="请输入用户名"></el-input>
                </el-col>
              </el-form-item>
                 <el-form-item label="用户角色" :label-width="formLabelWidth">
                <el-select v-model="form.region" placeholder="设备类型">
                  <el-option label="系统管理员" value="shanghai"></el-option>
                  <el-option label="社区管理员" value="beijing"></el-option>
                  <el-option label="运维管理员" value="shanghai"></el-option>
                  <el-option label="物业人员" value="shanghai"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="用户姓名" :label-width="formLabelWidth">
                <el-row>
                  <el-col :span="10">
                    <el-input v-model="input" placeholder="请输入用户姓名"></el-input>
                  </el-col>
                </el-row>
              </el-form-item>
              <el-form-item label="联系方式" :label-width="formLabelWidth">
                <el-row>
                  <el-col :span="10">
                    <el-input v-model="input" placeholder="请输入联系方式"></el-input>
                  </el-col>
                </el-row>
              </el-form-item>   

              <el-form-item label="用户备注" :label-width="formLabelWidth">
                <el-col :span="10">
                  <el-input v-model="input" placeholder="请输入备注"></el-input>
                </el-col>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible = false">取 消</el-button>
              <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
            </div>
          </el-dialog>
        </li>
      </ul>
      <div class="biao">
        <el-table
          :data="tableData"
          border
          style="width: 100%"
          header-cell-style="background-color: #C0C0FF; color: white;text-align: center; font-size: 18px;"
        >
          <el-table-column prop="date" label="序号" align="center" width="80"></el-table-column>
          <el-table-column prop="name" label="用户名" align="center"></el-table-column>
          <el-table-column prop="address" label="用户角色" align="center"></el-table-column>
          <el-table-column prop="jfje" label="用户姓名" align="center"></el-table-column>
          <el-table-column prop="jfr" label="联系方式" align="center"></el-table-column>
          <el-table-column prop="jfzt" label="用户备注" align="center"></el-table-column>
          
          <el-table-column fixed="right" label="操作" align="center">
               <el-button @click="dialogFormVisible = true" type="text" size="medium">重置密码</el-button>
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
      visible: false,
      value1: "",
      value2: "",

      value: "",
      value2: "",
      value3: "",
      value4: "",
      tableData: [
        {
          date: "1",
          name: "zhangs",
          address: "系统管理员",
          jfje: "张三",
          jfr: "13578955591",
          jfzt: "xxx"
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
    open() {
      this.$alert("<strong>是否删除</strong>", "系统提示", {
        dangerouslyUseHTMLString: true
      });
    }
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
.fwxxul li {
  list-style: none;
  float: left;
  padding-left: 40px;
}
.fwxxul {
  float: right;
  padding-right: 30px;
}
.btnjiant {
  width: 120px;
  height: 38px;
  border-radius: 12px;
  background-color: #c0c0ff;
  color: white;
  text-align: center;
  line-height: 38px;
}
.btnjiant2 {
  width: 120px;
  height: 38px;
  border-radius: 12px;
  background-color: #c0c0ff;
  color: white;
  text-align: center;
  line-height: 38px;
  margin: -12px 0px 0px 0px;
}
.biao {
  margin-top: 60px;
  padding-top: 40px;
}
.fenye {
  margin-top: 250px;
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