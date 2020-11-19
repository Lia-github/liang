<template>
  <div>
    <div class="biaoti"></div>
    <div class="qiehuan">
      <div class="sp1">缴费类型</div>
      <div class="qiehuanleibiao">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
          <el-tab-pane label="水费" name="first1">
            <div class="shuifei">
              <div class="chakan">查看历史账单</div>
              <div class="shuifeikuang">
                <ul>
                  <li class="shuifeikuang01">
                    <span class="sp3">2019/08 &nbsp; &nbsp;水费</span>
                    <p class="p1">小星社区1栋2单元5楼0501室小张</p>
                    <span class="sp4">￥100.00</span>
                    <div class="btnjf">立即缴费</div>
                  </li>
                  <li class="shuifeikuang01">
                    <span class="sp3">2019/08 &nbsp; &nbsp;水费</span>
                    <p class="p1">小星社区1栋2单元5楼0501室小张</p>
                    <span class="sp4">￥100.00</span>
                    <div class="btnjf">立即缴费</div>
                  </li>
                  <li class="shuifeikuang01">
                    <span class="sp3">2019/08 &nbsp; &nbsp;水费</span>
                    <p class="p1">小星社区1栋2单元5楼0501室小张</p>
                    <span class="sp4">￥100.00</span>
                    <div class="btnjf">立即缴费</div>
                  </li>
                </ul>
              </div>
              <div class="shuifeikuang">
                <ul>
                  <li class="shuifeikuang01">
                    <span class="sp3">2019/08 &nbsp; &nbsp;水费</span>
                    <p class="p1">小星社区1栋2单元5楼0501室小张</p>
                    <span class="sp4">￥100.00</span>
                    <div class="btnjf">立即缴费</div>
                  </li>
                  <li class="shuifeikuang01">
                    <span class="sp3">2019/08 &nbsp; &nbsp;水费</span>
                    <p class="p1">小星社区1栋2单元5楼0501室小张</p>
                    <span class="sp4">￥100.00</span>
                    <div class="btnjf">立即缴费</div>
                  </li>
                  <li class="shuifeikuang01">
                    <span class="sp3">2019/08 &nbsp; &nbsp; 水费</span>
                    <p class="p1">小星社区1栋2单元5楼0501室小张</p>
                    <span class="sp4">￥100.00</span>
                    <div class="btnjf">立即缴费</div>
                  </li>
                </ul>
              </div>
              <div class="shuifeikuang">
                <ul>
                  <li class="shuifeikuang01">
                    <span class="sp3">2019/08 &nbsp; &nbsp;水费</span>
                    <p class="p1">小星社区1栋2单元5楼0501室小张</p>
                    <span class="sp4">￥100.00</span>
                    <div class="btnjf">立即缴费</div>
                  </li>
                  <li class="shuifeikuang01">
                    <span class="sp3">2019/08 &nbsp; &nbsp;水费</span>
                    <p class="p1">小星社区1栋2单元5楼0501室小张</p>
                    <span class="sp4">￥100.00</span>
                    <div class="btnjf">立即缴费</div>
                  </li>
                  <li class="shuifeikuang01">
                    <span class="sp3">2019/08 &nbsp; &nbsp;水费</span>
                    <p class="p1">小星社区1栋2单元5楼0501室小张</p>
                    <span class="sp4">￥100.00</span>
                    <div class="btnjf">立即缴费</div>
                  </li>
                </ul>
              </div>
              <div class="fenye">
                <div class="sp2">
                  <span>待缴账单数:100/条 页数:1/9 每页:9/条</span>
                </div>
                <el-pagination background layout="prev, pager, next" :total="1000" class="fy"></el-pagination>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="电费" name="second">
            <div class="shuifei">
              <div class="chakan">查看历史账单</div>
              <div class="shuifeikuang">
                <ul>
                  <li class="shuifeikuang01">
                    <span class="sp3">2019/08 &nbsp; &nbsp;电费</span>
                    <p class="p1">小星社区1栋2单元5楼0501室小张</p>
                    <span class="sp4">￥300.00</span>
                    <div class="btnjf">立即缴费</div>
                  </li>
                  <li class="shuifeikuang01">
                    <span class="sp3">2019/08 &nbsp; &nbsp;电费</span>
                    <p class="p1">小星社区1栋2单元5楼0501室小张</p>
                    <span class="sp4">￥300.00</span>
                    <div class="btnjf">立即缴费</div>
                  </li>
                  <li class="shuifeikuang01">
                    <span class="sp3">2019/08 &nbsp; &nbsp;电费</span>
                    <p class="p1">小星社区1栋2单元5楼0501室小张</p>
                    <span class="sp4">￥300.00</span>
                    <div class="btnjf">立即缴费</div>
                  </li>
                </ul>
              </div>
              <div class="shuifeikuang">
                <ul>
                  <li class="shuifeikuang01">
                    <span class="sp3">2019/08 &nbsp; &nbsp;电费</span>
                    <p class="p1">小星社区1栋2单元5楼0501室小张</p>
                    <span class="sp4">￥300.00</span>
                    <div class="btnjf">立即缴费</div>
                  </li>
                  <li class="shuifeikuang01">
                    <span class="sp3">2019/08 &nbsp; &nbsp;电费</span>
                    <p class="p1">小星社区1栋2单元5楼0501室小张</p>
                    <span class="sp4">￥300.00</span>
                    <div class="btnjf">立即缴费</div>
                  </li>
                  <li class="shuifeikuang01">
                    <span class="sp3">2019/08 &nbsp; &nbsp; 电费</span>
                    <p class="p1">小星社区1栋2单元5楼0501室小张</p>
                    <span class="sp4">￥300.00</span>
                    <div class="btnjf">立即缴费</div>
                  </li>
                </ul>
              </div>
              <div class="shuifeikuang">
                <ul>
                  <li class="shuifeikuang01">
                    <span class="sp3">2019/08 &nbsp; &nbsp;电费</span>
                    <p class="p1">小星社区1栋2单元5楼0501室小张</p>
                    <span class="sp4">￥300.00</span>
                    <div class="btnjf">立即缴费</div>
                  </li>
                  <li class="shuifeikuang01">
                    <span class="sp3">2019/08 &nbsp; &nbsp;电费</span>
                    <p class="p1">小星社区1栋2单元5楼0501室小张</p>
                    <span class="sp4">￥300.00</span>
                    <div class="btnjf">立即缴费</div>
                  </li>
                  <li class="shuifeikuang01">
                    <span class="sp3">2019/08 &nbsp; &nbsp;电费</span>
                    <p class="p1">小星社区1栋2单元5楼0501室小张</p>
                    <span class="sp4">￥300.00</span>
                    <div class="btnjf">立即缴费</div>
                  </li>
                </ul>
              </div>
              <div class="fenye">
                <div class="sp2">
                  <span>待缴账单数:100/条 页数:1/9 每页:9/条</span>
                </div>
                <el-pagination background layout="prev, pager, next" :total="1000" class="fy"></el-pagination>
              </div>
            </div>
          </el-tab-pane>

          <el-tab-pane label="停车费" name="third">
            <div class="tingchefei">
              <div class="chakan">查看历史账单</div>
              <div class="shuifeikuang">
                <div class="tingchekuang">
                  <ul>
                    <li class="tingchekuang01">
                      <div class="tingchekuang01s">
                        <p>湘A23J89</p>
                        <p>长沙XXX社区停车场</p>
                      </div>
                      <div class="tingchekuang01x">
                        <p></p>
                        <p class="p1">入场时间: 2019-08-13 12:30</p>
                        <p class="p1">停车时长: 1天2小时30分05秒</p>
                        <p class="p2">
                          缴费金额:
                          <span class="sp5">20</span>元
                        </p>
                      </div>
                    </li>
                    <li class="tingchekuang01">
                      <div class="tingchekuang01s">
                        <p>湘A23J89</p>
                        <p>长沙XXX社区停车场</p>
                      </div>
                      <div class="tingchekuang01x">
                        <p></p>
                        <p class="p1">入场时间: 2019-08-13 12:30</p>
                        <p class="p1">停车时长: 1天2小时30分05秒</p>
                        <p class="p2">
                          缴费金额:
                          <span class="sp5">20</span>元
                        </p>
                      </div>
                    </li>
                    <li class="tingchekuang01">
                      <div class="tingchekuang01s">
                        <p>湘A23J89</p>
                        <p>长沙XXX社区停车场</p>
                      </div>
                      <div class="tingchekuang01x">
                        <p></p>
                        <p class="p1">入场时间: 2019-08-13 12:30</p>
                        <p class="p1">停车时长: 1天2小时30分05秒</p>
                        <p class="p2">
                          缴费金额:
                          <span class="sp5">20</span>元
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div class="tingchekuangx">
                  <ul class="tingchekuangxul">
                    <li class="tingchekuang01">
                      <div class="tingchekuang01s">
                        <p>湘A23J89</p>
                        <p>长沙XXX社区停车场</p>
                      </div>
                      <div class="tingchekuang01x">
                        <p></p>
                        <p class="p1">入场时间: 2019-08-13 12:30</p>
                        <p class="p1">停车时长: 1天2小时30分05秒</p>
                        <p class="p2">
                          缴费金额:
                          <span class="sp5">20</span>元
                        </p>
                      </div>
                    </li>
                    <li class="tingchekuang01">
                      <div class="tingchekuang01s">
                        <p>湘A23J89</p>
                        <p>长沙XXX社区停车场</p>
                      </div>
                      <div class="tingchekuang01x">
                        <p></p>
                        <p class="p1">入场时间: 2019-08-13 12:30</p>
                        <p class="p1">停车时长: 1天2小时30分05秒</p>
                        <p class="p2">
                          缴费金额:
                          <span class="sp5">20</span>元
                        </p>
                      </div>
                    </li>
                    <li class="tingchekuang01">
                      <div class="tingchekuang01s">
                        <p>湘A23J89</p>
                        <p>长沙XXX社区停车场</p>
                      </div>
                      <div class="tingchekuang01x">
                        <p></p>
                        <p class="p1">入场时间: 2019-08-13 12:30</p>
                        <p class="p1">停车时长: 1天2小时30分05秒</p>
                        <p class="p2">
                          缴费金额:
                          <span class="sp5">20</span>元
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="fenye2">
                <div class="sp2">
                  <span>待缴账单数:100/条 页数:1/9 每页:9/条</span>
                </div>
                <el-pagination background layout="prev, pager, next" :total="1000" class="fy"></el-pagination>
              </div>
            </div>
          </el-tab-pane>

          <el-tab-pane label="燃气费" name="fourth">
            <div class="shuifei">
              <div class="ranqifeis">
                <div class="rqfnr">
                  缴费单位：
                  <el-select v-model="value" placeholder="请选择">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>用户编号：
                  <el-input v-model="input" placeholder="请输入内容" class="iput01"></el-input>
                  <div class="btnchaxun">查询</div>
                  <div class="btnchaxun2">查看历史账单</div>
                </div>
              </div>
              <div class="rqfnrx">
                &nbsp; *燃汽费用(元):
                <el-input v-model="input" placeholder="300.00" class="iput02"></el-input>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*违约金(元):
                  <el-input v-model="input" placeholder="300.00" class="iput02"></el-input>
                </p>
                <p>
                  &nbsp;&nbsp;*应交金额(元):
                  <el-input v-model="input" placeholder="300.00" class="iput02"></el-input>
                </p>
                <p>
                  &nbsp;&nbsp;*当前余额(元):
                  <el-input v-model="input" placeholder="300.00" class="iput02"></el-input>
                </p>
                <p>
                  *未缴纳金额(元):
                  <el-input v-model="input" placeholder="300.00" class="iput02"></el-input>
                </p>
                <div class="btnljjf">立即缴费</div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="固话宽带" name="kuandai">
            <div class="shuifei">
              <div>
                <template>
                  <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
                    <el-tab-pane label="个人充值交费" name="first2">
                      <div class="grczjf">
                        <el-divider content-position="left">填写充值信息</el-divider>
                        <div class="juzhong">
                          <el-form
                            :label-position="labelPosition"
                            label-width="80px"
                            :model="formLabelAlign"
                          >
                            <el-form-item label="产品类型">
                              <el-select v-model="value" placeholder="请选择">
                                <el-option
                                  v-for="item in options"
                                  :key="item.value"
                                  :label="item.label"
                                  :value="item.value"
                                ></el-option>
                              </el-select>
                            </el-form-item>
                            <el-form-item label="所在城市">
                              <i class="el-icon-location">长沙[切换城市]</i>
                            </el-form-item>
                            <el-form-item label="充值号码">
                              <el-input v-model="formLabelAlign.type" class="iput02"></el-input>
                            </el-form-item>
                            <el-form-item label="确认号码">
                              <el-input v-model="formLabelAlign.type" class="iput02"></el-input>
                            </el-form-item>
                          </el-form>
                        </div>
                      </div>
                       <div class="grczjf">
                        <el-divider content-position="left">选择支付方式</el-divider>
                        <div class="juzhong">
                          <el-form
                            :label-position="labelPosition"
                            label-width="80px"
                            :model="formLabelAlign"
                          >
                            <el-form-item label="充值金额">
                              <el-select v-model="value" placeholder="请选择">
                                <el-option
                                  v-for="item in options"
                                  :key="item.value"
                                  :label="item.label"
                                  :value="item.value"
                                ></el-option>
                              </el-select>
                            </el-form-item>
                            <el-form-item label="验证码">
                               <el-input v-model="formLabelAlign.type" class="iput02"></el-input>
                            </el-form-item>
                            <el-form-item label="支付方式">
                                <ul class="zful">
                          <li><el-radio v-model="radio" label="1"><img src="../../../public/imgs/zfb.png" alt="" width="60px" height="30px"></el-radio></li>
                          <li><el-radio v-model="radio" label="2"><img src="../../../public/imgs/wx.png" alt="" width="60px" height="30px"></el-radio></li>
                        </ul>
                            </el-form-item>
                            <el-form-item label="确认号码">
                              <el-input v-model="formLabelAlign.type" class="iput02"></el-input>
                            </el-form-item>
                          </el-form>
                        </div>
                      </div>
                    </el-tab-pane>
                    <el-tab-pane label="宽带包年续费" name="second">
                       <div class="grczjf2">
                        <el-divider content-position="left">填写充值信息</el-divider>
                        <div class="juzhong">
                          <el-form
                            :label-position="labelPosition"
                            label-width="80px"
                            :model="formLabelAlign"
                          >
                            <el-form-item label="宽带账号">
                             <el-input v-model="formLabelAlign.type" class="iput02" placeholder="13512322262"></el-input>
                            </el-form-item>
                            <el-form-item label="确认账号">
                              13512322262
                            </el-form-item>
                            <el-form-item label="宽带密码">
                              <el-input v-model="formLabelAlign.type" class="iput02" placeholder="13512322262"></el-input>
                            </el-form-item>
                            <el-form-item label="验证码">
                              <el-input v-model="formLabelAlign.type" class="iput02"></el-input>
                              <!-- <img src="../../../public/imgs/yzm.png" class="imgyzm"> -->
                            </el-form-item>
                            
                            <div class="btnljjf4">立即缴费</div>
                          </el-form>
                        </div>
                      </div>

                    </el-tab-pane>
                  </el-tabs>
                </template>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="有线电视" name="yxds">
            <div class="shuifei">
              <div class="ranqifeis">
                <div class="rqfnr">
                  缴费单位：
                  <el-select v-model="value" placeholder="请选择">
                    <el-option
                      v-for="item in options"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    ></el-option>
                  </el-select>用户编号：
                  <el-input v-model="input" placeholder="请输入内容" class="iput01"></el-input>
                  <div class="btnchaxun">查询</div>
                  <div class="btnchaxun2">查看历史账单</div>
                </div>
              </div>
              <div class="rqfnrx">
                已购套餐：
                <el-input v-model="input" placeholder="488.00元/年 - 单向高清全能套餐" class="iput02"></el-input>
                <p>
                  缴费单位：
                  <el-input v-model="input" placeholder="111广播电视有限公司" class="iput02"></el-input>
                </p>
                <p>
                  缴费户号：
                  <el-input v-model="input" placeholder="111111" class="iput02"></el-input>
                </p>
                <p>
                  户&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 名：
                  <el-input v-model="input" placeholder="xxx" class="iput02"></el-input>
                </p>
                <p>
                  地 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 址：
                  <el-input v-model="input" placeholder="xx市xx区xx街道xx社区xx栋xx室" class="iput02"></el-input>
                </p>
                <div class="btnljjf3">立即缴费</div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="物业费" name="wyf">
            <div class="shuifei">
              <div class="ranqifeis">
                <div class="rqfnr">
                  业主姓名:
                  <el-input v-model="input" placeholder="小明" class="iput01"></el-input>手机号码：
                  <el-input v-model="input" placeholder="15212311109" class="iput01"></el-input>
                  <div class="btnchaxun">查询</div>
                  <div class="btnchaxun2">查看历史账单</div>
                </div>
              </div>
              <div class="rqfnrx">
                已购套餐：
                <el-input v-model="input" placeholder="488.00元/年 - 单向高清全能套餐" class="iput02"></el-input>
                <p>
                  缴费单位：
                  <el-input v-model="input" placeholder="111广播电视有限公司" class="iput02"></el-input>
                </p>
                <p>
                  缴费户号：
                  <el-input v-model="input" placeholder="111111" class="iput02"></el-input>
                </p>需缴纳的物业费如下：
                <div class="jiaonabiao">
                  <el-table
                    :data="tableData"
                    style="width: 50%"
                    border
                    header-cell-style="background-color: #C0C0FF;"
                  >
                    <!-- <el-checkbox v-model="checked" ></el-checkbox> -->

                    <el-table-column type="selection" width="55"></el-table-column>
                    <el-table-column prop="name" label="时间" width="180"></el-table-column>
                    <el-table-column prop="address" label="费用"></el-table-column>
                  </el-table>
                </div>

                <div class="btnljjf2">立即缴费</div>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
        <!-- <el-radio-group v-model="tabPosition" style="margin-bottom: 30px;">
          <el-radio-button label="水费">水费</el-radio-button>
          <el-radio-button label="right">right</el-radio-button>
          <el-radio-button label="bottom">bottom</el-radio-button>
          <el-radio-button label="left">left</el-radio-button>
        </el-radio-group>-->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  //   data() {
  //     return {
  //       activeName: "first"
  //     };
  //   },
  //   methods: {
  //     handleClick(tab, event) {
  //       console.log(tab, event);
  //     }
  //   }
  //   data() {
  //     return {
  //       tabPosition: "left"
  //     };
  //   }
  data() {
    return {
      activeName:'first1',
       activeName2:'first2',
      options: [
        {
          value: "选项1",
          label: "111燃汽有限公司"
        },
        {
          value: "选项2",
          label: "222燃汽有限公司"
        },
        {
          value: "选项3",
          label: "333燃汽有限公司"
        },
        {
          value: "选项4",
          label: "444燃汽有限公司"
        }
      ],
      value: "",
      tableData: [
        {
          name: "2019年6月",
          address: "￥100.00"
        },
        {
          name: "2019年6月",
          address: "￥100.00"
        },
        {
          name: "2019年6月",
          address: "￥100.00"
        }
      ],
      labelPosition: "right",
      formLabelAlign: {
        name: "",
        region: "",
        type: ""
      },
      radio: '1'
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

.sp1 {
  width: 240px;
  height: 40px;
  background-color: #623bff;
  color: white;
  font-size: 16px;
  text-align: center;
  padding-top: 15px;
  margin-top: 20px;
}

.qiehuanleibiao {
  margin: -40px 0px 0px 265px;
}
.el-tabs__item.is-active {
  color: white;
  background-color: #957bfe;
}
.shuifei {
  width: 850px;
  height: 700px;
  border: 1px solid #e6e6ff;
}
.fenye {
  margin-top: 640px;
  width: 850px;
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
.shuifeikuang ul li {
  list-style: none;
  float: left;
  margin: 15px;
}
.shuifeikuang {
  margin-top: 100px;
}
.shuifeikuang01 {
  width: 230px;
  height: 100px;
  border-radius: 15px;
  background-color: #f9f9ff;
}
.p1 {
  font-size: 8px;
}
.sp4 {
  display: block;
  color: red;
  padding-top: 10px;
}
.btnjf {
  width: 60px;
  height: 20px;
  background-color: #b9b9ff;
  border-radius: 6px;
  color: white;
  font-size: 12px;
  text-align: center;
  cursor: pointer;
  float: right;
  margin: -20px 10px 0px 0px;
}
.chakan {
  width: 120px;
  height: 30px;
  background-color: #c0c0ff;
  float: right;
  color: white;
  text-align: center;
  font-size: 12px;
  padding-top: 15px;
}

.tingchekuang01 {
  width: 200px;
  border-radius: 100px 100px 0 0;
  height: 100px;
  background-color: #c0c0ff;
}
.tingchekuang01s {
  color: white;
  text-align: center;
}
.tingchekuang01s {
  color: white;
  text-align: center;
}
.tingchekuang01s p:nth-child(1) {
  color: white;
  text-align: center;
  font-size: 24px;
}
.tingchekuang01x {
  width: 200px;
  height: 140px;
  border: 1px solid #e6e6ff;
  margin-top: -17px;
  text-align: center;
}
.p2 {
  font-size: 14px;
}
.sp5 {
  font-size: 20px;
  color: red;
}
.tingchekuangxul {
  padding: 300px 0px 0px 43px;
}
.tingchefei {
  width: 850px;
  height: 760px;
  border: 1px solid #e6e6ff;
}
.fenye2 {
  margin-top: 310px;
  width: 850px;
  height: 80px;
  border-top: 1px solid #e6e6ff;
}
.ranqifeis {
  width: 850px;
  height: 100px;
  border-bottom: 1px solid #e6e6ff;
}
.iput01 {
  width: 20%;
  height: 30px;
}
.iput02 {
  width: 40%;
  height: 30px;
}
.btnchaxun {
  width: 100px;
  height: 20px;
  border-radius: 6px;
  background-color: #bdbdff;
  color: white;
  font-size: 13px;
  text-align: center;
  margin: -30px 0px 0px 580px;
}
.btnchaxun2 {
  width: 110px;
  height: 20px;
  border-radius: 6px;
  background-color: #bdbdff;
  color: white;
  font-size: 13px;
  text-align: center;
  margin: -20px 0px 0px 700px;
}
.rqfnr {
  margin: 60px 0px 0px 30px;
}
.rqfnrx {
  text-align: center;
  margin-top: 100px;
}
.btnljjf {
  width: 340px;
  height: 40px;
  background-color: #bdbdff;
  color: white;
  font-size: 24px;
  text-align: center;
  border-radius: 8px;
  margin-left: 314px;
}
.btnljjf4 {
  width: 340px;
  height: 40px;
  background-color: #bdbdff;
  color: white;
  font-size: 24px;
  text-align: center;
  border-radius: 8px;
  margin-left: 44px;
}
/* .biaogebj{
  background: #C0C0FF;
  text-align: center;
  
} */
.jiaonabiao {
  margin-top: 20px;
  margin-left: 200px;
}
.btnljjf2 {
  width: 340px;
  height: 40px;
  background-color: #bdbdff;
  color: white;
  font-size: 24px;
  text-align: center;
  border-radius: 8px;
  margin-left: 190px;
  margin-top: 14px;
}
.grczjf {
  width: 800px;
  height: 290px;
  border-right: 1px solid #e4e4e4;
  border-left: 1px solid #e4e4e4;
  border-bottom: 1px solid #e4e4e4;
  margin: 20px 0px 0px 25px;
}
.grczjf2 {
  width: 800px;
  height: 380px;
  border-right: 1px solid #e4e4e4;
  border-left: 1px solid #e4e4e4;
  border-bottom: 1px solid #e4e4e4;
  margin: 20px 0px 0px 25px;
}
.btnljjf3{
  width: 400px;
  height: 50px;
  background-color: #169BD5;
  color: white;
  text-align: center;
  line-height: 48px;
  margin: 0px 0px 0px 250px;
}
.imgyzm{
  margin: 10px 0px 0px 20px;
}
.zful li{
  float: left;
  list-style: none;
}
</style>