<template>
  <div>
    <div class="biaoti"></div>
    <div class="kuang">
      <!-- <el-tabs type="border-card" class="qiehuan">
        <el-tab-pane label="公共报修 （4 | 2）">用户管理</el-tab-pane>
        <el-tab-pane label="个人报修（4 | 2）">配置管理</el-tab-pane>
       
      </el-tabs>-->
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="公共报修 （4 | 2）" name="first">
          <div>
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
                  <el-select v-model="value" placeholder="状态">
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
              </ul>
            </div>
            <el-table
              :data="tableData"
              border
              style="width: 100%"
              header-cell-style="background-color: #C0C0FF; color: white;text-align: center; font-size: 18px;"
            >
              <el-table-column prop="date" label="序号" width="180" align="center"></el-table-column>
              <el-table-column prop="name" label="报修时间" width="180" align="center"></el-table-column>
              <el-table-column prop="address" label="报修内容" align="center"></el-table-column>
              <el-table-column prop="jfje" label="报修人" align="center"></el-table-column>
              <el-table-column prop="jfr" label="受理状态" align="center"></el-table-column>
              <el-table-column prop="jfzt" label="修复状态" align="center"></el-table-column>
              <el-table-column prop="jfzt2" label="修复时间" align="center"></el-table-column>
              <el-table-column prop="jfzt3" label="解决人" align="center"></el-table-column>

              <el-table-column fixed="right" label="操作" width align="center">
                <el-button type="text" size="small">查看详情</el-button>
              </el-table-column>
            </el-table>
          </div>

          <div></div>
        </el-tab-pane>
        <el-tab-pane label="个人报修（4 | 2）" name="second">
          <div>
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
                  <el-select v-model="value" placeholder="状态">
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
              </ul>
            </div>
            <el-table
              :data="tableData2"
              border
              style="width: 100%"
              header-cell-style="background-color: #C0C0FF; color: white;text-align: center; font-size: 18px;"
            >
              <el-table-column prop="date" label="序号" width="180" align="center"></el-table-column>
              <el-table-column prop="name" label="报修时间" width="180" align="center"></el-table-column>
              <el-table-column prop="address" label="报修内容" align="center"></el-table-column>
              <el-table-column prop="jfje" label="报修人" align="center"></el-table-column>
              <el-table-column prop="jfr" label="受理状态" align="center"></el-table-column>
              <el-table-column prop="jfzt" label="修复状态" align="center"></el-table-column>
              <el-table-column prop="jfzt2" label="修复时间" align="center"></el-table-column>
              <el-table-column prop="jfzt3" label="解决人" align="center"></el-table-column>

              <el-table-column fixed="right" label="操作" width align="center">
                <el-button type="text" size="small">查看详情</el-button>
              </el-table-column>
            </el-table>
          </div>
        </el-tab-pane>
      </el-tabs>
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
          value: "选项2",
          label: "已受理"
        },
        {
          value: "选项3",
          label: "正在进行"
        },
        {
          value: "选项4",
          label: "已修复"
        },
        {
          value: "选项5",
          label: "等待修复"
        }
      ],
      value: "",
      tableData: [
        {
          date: "1",
          name: "2016-05-02",
          address: "物业公告",
          jfje: "电梯口门锁损坏",
          jfr: "张xx",
          jfzt: "等待受理",
          jfzt2: "-",
          jfzt3: "-",
          jjr: "111"
        },
        {
          date: "2",
          name: "2016-05-02",
          address: "物业公告",
          jfje: "电梯口门锁损坏",
          jfr: "张xx",
          jfzt: "等待受理",
          jfzt2: "-",
          jfzt3: "-",
          jjr: "111"
        },
        {
          date: "3",
          name: "2016-05-02",
          address: "物业公告",
          jfje: "电梯口门锁损坏",
          jfr: "张xx",
          jfzt: "等待受理",
          jfzt2: "-",
          jfzt3: "-",
          jjr: "111"
        },
        {
          date: "4",
          name: "2016-05-02",
          address: "物业公告",
          jfje: "电梯口门锁损坏",
          jfr: "张xx",
          jfzt: "等待受理",
          jfzt2: "-",
          jfzt3: "-",
          jjr: "111"
        }
      ],
       tableData2: [
        {
          date: "1",
          name: "2016-05-02",
          address: "物业公告",
          jfje: "水管漏水",
          jfr: "张xx",
          jfzt: "等待受理",
          jfzt2: "-",
          jfzt3: "-",
          jjr: "111"
        },
        {
          date: "2",
          name: "2016-05-02",
          address: "物业公告",
          jfje: "水管漏水",
          jfr: "张xx",
          jfzt: "等待受理",
          jfzt2: "-",
          jfzt3: "-",
          jjr: "111"
        },
        {
          date: "3",
          name: "2016-05-02",
          address: "物业公告",
          jfje: "水管漏水",
          jfr: "张xx",
          jfzt: "等待受理",
          jfzt2: "-",
          jfzt3: "-",
          jjr: "111"
        },
        {
          date: "4",
          name: "2016-05-02",
          address: "物业公告",
          jfje: "水管漏水",
          jfr: "张xx",
          jfzt: "等待受理",
          jfzt2: "-",
          jfzt3: "-",
          jjr: "111"
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
.fenye {
  margin-top: 250px;
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
.qiehuan {
  /* background-color: #baa8fe; */
}
/* .el-tabs--border-card>.el-tabs__header .el-tabs__item {
    background-color: #baa8fe;
} */
.el-tabs__item.is-active {
  color: white;
  background-color: #957bfe;
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