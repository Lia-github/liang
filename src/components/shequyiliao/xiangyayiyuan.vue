<template>
  <div>
    <div class="biaoti"></div>
    <div class="kuang">
      <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
      <div class="div1">
        <span class="sp1">湘雅第一医院</span>
        <p>
          <span class="sp3">地址：xxxxxxx</span>
          <span>电话：12314522541</span>
        </p>
      </div>
      <div class="div2">
        <ul>
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
          <li>
            <el-select v-model="value" placeholder="请选择医生">
              <el-option
                v-for="item in options2"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </li>
          <li>
            <el-select v-model="value" placeholder="请选择日期">
              <el-option
                v-for="item in options3"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </li>
          <li>
            <el-select v-model="value" placeholder="请选择时间段">
              <el-option
                v-for="item in options4"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              ></el-option>
            </el-select>
          </li>
        </ul>
      </div>
      <div class="div3">
        <div class="divx">
          请选择患者
          <el-button type="text" @click="dialogFormVisible2 = true">新增</el-button>
          <el-dialog
            title="新增患者"
            :visible.sync="dialogFormVisible2"
            append-to-body="true"
            width="30%"
          >
            <el-form :model="form">
              <el-form-item label="患者姓名" :label-width="formLabelWidth">
                <el-col :span="8">
                  <el-input v-model="input" placeholder="请输入内容"></el-input>
                </el-col>
              </el-form-item>
              <el-form-item label="联系方式" :label-width="formLabelWidth">
                 <el-col :span="8">
                  <el-input v-model="input" placeholder="请输入内容"></el-input>
                </el-col>
              </el-form-item>
              <el-form-item label="证件类型" :label-width="formLabelWidth">
                <el-select v-model="form.region" placeholder="请选择证件类型类型">
                  <el-option label="居民身份证" value="shanghai"></el-option>
                  <el-option label="护照" value="beijing"></el-option>
                  <el-option label="军人证" value="jdbgg"></el-option>
                  <el-option label="党员" value="dg"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="证件号码" :label-width="formLabelWidth">
                 <el-col :span="8">
                  <el-input v-model="input" placeholder="请输入内容"></el-input>
                </el-col>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisible2 = false">取 消</el-button>
              <el-button type="primary" @click="dialogFormVisible2 = false">确 定</el-button>
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
            <el-table-column prop="date" label="单选" width="180" align="center" fixed="left">
              <template scope="scope">
                <el-radio
                  :label="scope.$index"
                  v-model="radio"
                  @change.native="getCurrentRow(scope.row)"
                >&nbsp;</el-radio>
              </template>
            </el-table-column>
            <el-table-column prop="name" label="序号" width="180" align="center"></el-table-column>
            <el-table-column prop="address" label="姓名" align="center"></el-table-column>
            <el-table-column prop="jfje" label="联系方式" align="center"></el-table-column>
            <el-table-column prop="jfr" label="证件类型" align="center"></el-table-column>
            <el-table-column prop="jfzt" label="身份证号" align="center"></el-table-column>
          </el-table>
          <!-- <el-table
    ref="multipleTable"
    :data="tableData"
    tooltip-effect="dark"
    style="width: 100%">
    <el-table-column label="选择" width="65">
     <template scope="scope">
      <el-radio :label="scope.$index" v-model="radio" @change.native="getCurrentRow(scope.row)"></el-radio>
    </template>
    </el-table-column>
    <el-table-column label="日期" width="120">
      <template slot-scope="scope">{{ scope.row.date }}</template>
    </el-table-column>
    <el-table-column prop="name" label="姓名" width="120"></el-table-column>
    <el-table-column prop="address" label="地址" show-overflow-tooltip></el-table-column>
          </el-table>-->
        </div>
        <div class="fenye">
          <div class="sp2">
            <span>待缴账单数:100/条 页数:1/9 每页:9/条</span>
          </div>
          <el-pagination background layout="prev, pager, next" :total="1000" class="fy"></el-pagination>
        </div>
      </div>
      <el-button type="text" @click="dialogFormVisible = true">
        <div class="div4">确认</div>
      </el-button>
      <el-dialog title="提示" :visible.sync="dialogFormVisible" append-to-body="true" width="30%">
        <div>确定提交预约吗?</div>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      options: [
        {
          value: "选项1",
          label: "1科"
        },
        {
          value: "选项2",
          label: "2科"
        },
        {
          value: "选项3",
          label: "3科"
        }
      ],
      options2: [
        {
          value: "选项1",
          label: "医生1"
        },
        {
          value: "选项2",
          label: "医生2"
        },
        {
          value: "选项3",
          label: "医生3"
        }
      ],
      radio: "",
      tableData: [
        {
          name: "1",
          address: "张三",
          jfje: "18246599958",
          jfr: "身份证",
          jfzt: "437984669505261510"
        },
        {
          name: "2",
          address: "张三",
          jfje: "18246599958",
          jfr: "身份证",
          jfzt: "437984669505261510"
        }
      ],
      templateSelection: [],
      dialogTableVisible: false,
      dialogFormVisible: false,
      dialogTableVisible2: false,
      dialogFormVisible2: false,
      form: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  },
  methods: {
    getCurrentRow(row) {
      //获取选中数据this.templateSelection = row;
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
.div1 {
  text-align: center;
}
.sp1 {
  font-size: 38px;
}
.sp3 {
  padding: 70px;
}
.div2 ul li {
  list-style: none;
  float: left;
  padding: 80px;
}
.div2 ul {
  padding-left: 40px;
}
.div3 {
  width: 1400px;
  height: 350px;
  border: 1px solid #cccccc;
  margin: 170px 0px 0px 140px;
}
.fenye {
  margin-top: 30px;
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
.div4 {
  width: 180px;
  height: 40px;
  background-color: #169bd5;
  color: white;
  text-align: center;
  line-height: 35px;
  border-radius: 8px;
  margin: 30px 0px 0px 1350px;
}
.divx {
  margin: 0px 0px 0px 50px;
}
</style>