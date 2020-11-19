<template>
  <div>
    <div class="tou">
      <div class="head">
        <img src="../../public/imgs/Headlogo.png" alt />
        <div class="sp1">
          <span>XXXX智慧社区管理系统</span>
        </div>
        <div class="daohang">
          <ul>
            <li class="el-icon-user-solid">
              <el-dropdown>
                <span class="el-dropdown-link">
                  admin
                  <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-button
                    type="text"
                    @click="dialogFormVisible = true"
                  >&nbsp;&nbsp;&nbsp; &nbsp;修改密码</el-button>
                  <el-dropdown-item>个人资料</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>

              <!-- <el-button type="text" @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button> -->
              <el-dialog title="修改密码" :visible.sync="dialogFormVisible">
                <el-form :model="form">
                  <el-form-item label="旧密码" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="新密码" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                  </el-form-item>
                  <el-form-item label="确定密码" :label-width="formLabelWidth">
                    <el-input v-model="form.name" autocomplete="off"></el-input>
                  </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                  <el-button @click="dialogFormVisible = false">取 消</el-button>
                  <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                </div>
              </el-dialog>
            </li>
            <li class="el-icon-s-open">
              <span class="sp2">换肤</span>
            </li>
            <li class="el-icon-question">
              <el-dropdown>
                <span class="el-dropdown-link">
                  帮助
                  <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>帮助文档</el-dropdown-item>
                  <el-dropdown-item>关于系统</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </li>
            <li class="el-icon-switch-button"></li>
          </ul>
        </div>
      </div>
    </div>
    <div>
      <el-container style="height: 900px; border: 1px solid #eee">
        <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
          <el-menu :default-openeds="['1', '3','2','4','5','6','7']">
            <el-submenu index="1" @click="shouye">
              <template slot="title">
                <i class="el-icon-message" ></i>首页
              </template>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-menu"></i>智慧物业
              </template>
              <el-menu-item-group>
                <template slot="title"></template>
                <el-menu-item index="2-1" @click="wuyejiaofei">物业缴费</el-menu-item>
                <el-menu-item index="2-2" @click="jiaofeichaxun">缴费查询</el-menu-item>
              </el-menu-item-group>
              <el-menu-item index="2-3" @click="guzhangbaoxiu">故障报修</el-menu-item>
              <el-menu-item index="2-4" @click="gonggaoguanli">公告管理</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-setting"></i>社区医疗
              </template>
              <el-menu-item-group>
                <el-menu-item index="3-1" @click="yuyueguahao">预约挂号</el-menu-item>
                <el-menu-item index="3-2" @click="jiankangxiaoties">健康小贴士</el-menu-item>
                <el-menu-item index="3-3" @click="yishengjianjie">医生简介</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
             <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-setting"></i>智能应用
              </template>
              <el-menu-item-group>
                <el-menu-item index="4-1" @click="zhinengtingche">智能停车</el-menu-item>
                <el-menu-item index="4-2" @click="zhinengkaimen">智能开门</el-menu-item>
                <el-menu-item index="4-3" @click="cheweiluru">车位录入</el-menu-item>
                <el-menu-item index="4-4" @click="cheliangguanli">车辆管理</el-menu-item>
                <el-menu-item index="4-5" @click="tingchejilu">停车记录</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
               <el-submenu index="5">
              <template slot="title">
                <i class="el-icon-edit"></i>数据统计
              </template>
              <el-menu-item-group>
                <el-menu-item index="5-1" @click="fangwufenlei">房屋分类统计</el-menu-item>
                <el-menu-item index="5-2" @click="jiaofeifenxi">缴费分析统计</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
                <el-submenu index="6">
              <template slot="title">
                <i class="el-icon-postcard"></i>基本信息
              </template>
              <el-menu-item-group>
                <el-menu-item index="6-1" @click="fangwuxingxi">房屋信息</el-menu-item>
                <el-menu-item index="6-2" @click="renkouxinxi">人口信息</el-menu-item>
                <el-menu-item index="6-3" @click="shebeixinxi">设备信息</el-menu-item>
                <el-menu-item index="6-4" @click="dianziditu">电子地图</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
                <el-submenu index="7">
              <template slot="title">
                <i class="el-icon-setting"></i>系统管理
              </template>
              <el-menu-item-group>
                <el-menu-item index="7-1" @click="yonghuguanlil">用户管理</el-menu-item>
                <el-menu-item index="7-2" @click="juseguanli">角色管理</el-menu-item>
                <el-menu-item index="7-3" @click="quanxianguanli">权限管理</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>

        <!-- <el-container>
          <el-header style="text-align: right; font-size: 12px">
            <el-dropdown>
              <i class="el-icon-setting" style="margin-right: 15px"></i>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>查看</el-dropdown-item>
                <el-dropdown-item>新增</el-dropdown-item>
                <el-dropdown-item>删除</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <span>王小虎</span>
        </el-header>-->
        <div class="box">
          <router-view></router-view>
        </div>
      </el-container>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    };
    return {
      tableData: Array(20).fill(item),
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
    shouye(){
      this.$router.push({name:"shouyenr"})
    },
     wuyejiaofei(){
      this.$router.push({name:"wuyejiaofei"})
    },
     jiaofeichaxun(){
      this.$router.push({name:"jiaofeichaxun"})
    }
    ,
     guzhangbaoxiu(){
      this.$router.push({name:"guzhangbaoxiu"})
    },
     gonggaoguanli(){
      this.$router.push({name:"gonggaoguanli"})
    },
     yuyueguahao(){
      this.$router.push({name:"yuyueguahao"})
    },
     jiankangxiaoties(){
      this.$router.push({name:"jiankangxiaoties"})
    },
     yishengjianjie(){
      this.$router.push({name:"yishengjianjie"})
    },
     fangwuxingxi(){
      this.$router.push({name:"fangwuxingxi"})
    },
     renkouxinxi(){
      this.$router.push({name:"renkouxinxi"})
    }
    ,
     shebeixinxi(){
      this.$router.push({name:"shebeixinxi"})
    }
    ,
     yonghuguanlil(){
      this.$router.push({name:"yonghuguanlil"})
    }
    ,
     juseguanli(){
      this.$router.push({name:"juseguanli"})
    }
    ,
     fangwufenlei(){
      this.$router.push({name:"fangwufenlei"})
    }
    ,
     jiaofeifenxi(){
      this.$router.push({name:"jiaofeifenxi"})
    }
     ,
     dianziditu(){
      this.$router.push({name:"dianziditu"})
    }
    ,
     zhinengtingche(){
      this.$router.push({name:"zhinengtingche"})
    }
     ,
     cheweiluru(){
      this.$router.push({name:"cheweiluru"})
    }
     ,
     cheliangguanli(){
      this.$router.push({name:"cheliangguanli"})
    }
     ,
     tingchejilu(){
      this.$router.push({name:"tingchejilu"})
    }
    ,
     zhinengkaimen(){
      this.$router.push({name:"zhinengkaimen"})
    }
    ,
     quanxianguanli(){
      this.$router.push({name:"quanxianguanli"})
    }
  },
};
</script>
<style scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}
.el-aside {
  color: #333;
}


.el-icon-arrow-down:before {
  content: "";
}
.box {
  width: 1680px;
  height: 900px;
  /* border: 1px solid #000; */
  /* margin: 0 auto; */
}
.head {
  width: 100%;
  height: 100px;
  background-color: #957bfe;
}
.head img {
  padding: 10px 0px 0px 20px;
}
.sp1 {
  color: white;
  margin: -60px 0px 0px 300px;
  font-size: 24px;
}
.daohang {
  margin: -60px 50px 0px 0px;
  float: right;
}
.daohang ul li {
  list-style: none;
  color: white;
  /* font-size: 18px; */
  margin: 8px;
}
.daohang ul li:nth-child(1) {
  font-size: 35px;
}
.daohang ul li:nth-child(2) {
  font-size: 35px;
}
.daohang ul li:nth-child(3) {
  font-size: 35px;
}
.daohang ul li:nth-child(4) {
  font-size: 35px;
}
.el-dropdown-link {
  cursor: pointer;
  color: white;
  font-size: 18px;
}
.el-icon-arrow-down {
  font-size: 18px;
}
.sp2 {
  font-size: 18px;
}
</style>