<template>
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
               <el-button type="text" @click="dialogFormVisible = true">&nbsp;&nbsp;&nbsp; &nbsp;修改密码</el-button>
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
</template>
<script>
export default {
  data() {
    return {
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
  margin: -70px 0px 0px 380px;
}
.daohang {
  margin: -40px 80px 0px 0px;
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