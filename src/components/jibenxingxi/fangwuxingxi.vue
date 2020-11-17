<template>
  <div>
    <div class="biaoti"></div>
    <div class="kuang">
      <ul class="fwxxul">
        <li>
          <!-- <el-select v-model="value" placeholder="房产类型">
            <el-optionw
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>-->
          <el-select v-model="value" placeholder="房产类型">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </li>
        <li>
          <el-select v-model="value2" placeholder="区域">
            <el-option
              v-for="item in options2"
              :key="item.value2"
              :label="item.label2"
              :value="item.value2"
            ></el-option>
          </el-select>
        </li>
        <li>
          <el-select v-model="value3" placeholder="装修">
            <el-option
              v-for="item in options3"
              :key="item.value3"
              :label="item.label3"
              :value="item.value3"
            ></el-option>
          </el-select>
        </li>
        <li>
          <el-select v-model="value4" placeholder="房产类型">
            <el-option
              v-for="item in options4"
              :key="item.value4"
              :label="item.label4"
              :value="item.value4"
            ></el-option>
          </el-select>
        </li>
        <li>
          <el-input v-model="input" placeholder="请输入房屋编号"></el-input>
        </li>
        <li>
          <div class="btnjiant">查询</div>
        </li>
        <li>
          <el-button type="text" @click="dialogFormVisible = true">
            <div class="btnjiant2">添加</div>
          </el-button>
          <el-dialog
            title="添加房屋"
            :visible.sync="dialogFormVisible"
            append-to-body="true"
            width="700px"
          >
            <el-form :model="form">
              <el-form-item label="房产类型" :label-width="formLabelWidth">
                <el-select v-model="value" placeholder="房产类型">
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="区域" :label-width="formLabelWidth">
                <el-select v-model="value2" placeholder="区域">
                  <el-option
                    v-for="item in options2"
                    :key="item.value2"
                    :label="item.label2"
                    :value="item.value2"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="面积" :label-width="formLabelWidth">
                <el-row>
                  <el-col :span="10">
                    <el-input v-model="input" placeholder="请输入面积"></el-input>
                  </el-col>
                </el-row>
              </el-form-item>
              <el-form-item label="几室几厅" :label-width="formLabelWidth">
                <el-select v-model="form.region" placeholder="请选择类型">
                  <el-option label="一室一厅" value="shanghai"></el-option>
                  <el-option label="两室两厅" value="beijing"></el-option>
                  <el-option label="两室一厅" value="jdbgg"></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="房屋编号" :label-width="formLabelWidth">
                <el-col :span="10">
                  <el-input v-model="input" placeholder="房屋编号"></el-input>
                </el-col>
              </el-form-item>
              <el-form-item label="装修" :label-width="formLabelWidth">
                <el-select v-model="value3" placeholder="装修">
                  <el-option
                    v-for="item in options3"
                    :key="item.value3"
                    :label="item.label3"
                    :value="item.value3"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="房产类型" :label-width="formLabelWidth">
                <el-select v-model="value4" placeholder="房产类型">
                  <el-option
                    v-for="item in options4"
                    :key="item.value4"
                    :label="item.label4"
                    :value="item.value4"
                  ></el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="房屋备注" :label-width="formLabelWidth">
                <el-col :span="10">
                  <el-input v-model="input" placeholder="房屋备注"></el-input>
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
          <el-table-column prop="name" label="房产类型" align="center"></el-table-column>
          <el-table-column prop="address" label="区域" align="center"></el-table-column>
          <el-table-column prop="jfje" label="面积" align="center" width="80"></el-table-column>
          <el-table-column prop="jfr" label="几室几厅" align="center"></el-table-column>
          <el-table-column prop="jfzt" label="楼层索引（房屋编号）" align="center"></el-table-column>
          <el-table-column prop="zx" label="装修" align="center"></el-table-column>
          <el-table-column prop="fwlx" label="房屋类型" align="center"></el-table-column>
          <el-table-column fixed="right" label="操作" align="center">
            <el-button @click="dialogFormVisible = true" type="text" size="medium">修改</el-button>

            <el-button type="text" size="small">
              
              <div>
                  <el-button type="text" @click="open">删除</el-button>
              
              </div>
            </el-button>
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
      visible: false,
      value1: "",
      value2: "",
      options: [
        {
          value: "选项1",
          label: "一手房"
        },
        {
          value: "选项2",
          label: "二手房"
        }
      ],
      options2: [
        {
          value2: "选项1",
          label2: "A区"
        },
        {
          value2: "选项2",
          label2: "B区"
        },
        {
          value2: "选项2",
          label2: "C区"
        },
        {
          value2: "选项2",
          label2: "D区"
        },
        {
          value2: "选项2",
          label2: "E区"
        }
      ],
      options3: [
        {
          value3: "选项1",
          label3: "毛坯"
        },
        {
          value3: "选项2",
          label3: "精装"
        },
        {
          value3: "选项2",
          label3: "简装"
        },
        {
          value3: "选项2",
          label3: "豪华装修"
        }
      ],
      options4: [
        {
          value4: "选项1",
          label4: "商品房"
        },
        {
          value4: "选项2",
          label4: "经济适用"
        },
        {
          value4: "选项2",
          label4: "小产权"
        }
      ],
      value: "",
      value2: "",
      value3: "",
      value4: "",
      tableData: [
        {
          date: "1",
          name: "二手房",
          address: "A区",
          jfje: "98/平米",
          jfr: "2室2厅",
          jfzt: "1栋101室",
          zx: "毛坏",
          fwlx: "商品房"
        },
        {
          date: "2",
          name: "二手房",
          address: "B区",
          jfje: "98/平米",
          jfr: "2室2厅",
          jfzt: "1栋101室",
          zx: "毛坏",
          fwlx: "商品房"
        },
        {
          date: "3",
          name: "二手房",
          address: "C区",
          jfje: "98/平米",
          jfr: "2室2厅",
          jfzt: "1栋101室",
          zx: "豪华精装",
          fwlx: "商品房"
        },
        {
          date: "4",
          name: "二手房",
          address: "D区",
          jfje: "98/平米",
          jfr: "2室2厅",
          jfzt: "1栋101室",
          zx: "精装",
          fwlx: "商品房"
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
        this.$alert('<strong>是否删除</strong>', '系统提示', {
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
  padding-top: 60px;
}
.fenye {
  margin-top: 320px;
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