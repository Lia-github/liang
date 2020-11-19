<template>
  <div>
    <div class="biaoti"></div>
    <div class="kuang">
      <div>
        <ul class="ul1">
          <li class="li1">角色列表</li>
          <li class="li2">系统管理员</li>
          <li class="li3">社区管理员</li>
          <li class="li3">运维人员</li>
          <li class="li3">物业人员</li>
        </ul>
      </div>
      <div class="biaoge">
        <el-table
          :data="tableData"
          border
          style="width: 100%"
          header-cell-style="background-color: #0C0C0FF; color: white;text-align: center; font-size: 18px;"
        >
          <el-table-column prop="date" align="center" width="80" type="selection"></el-table-column>
          <el-table-column prop="name" label="功能菜单" align="center" width="120">
          </el-table-column>
          <el-table-column prop="address" label="二级菜单" align="center" width="160"></el-table-column>
          <el-table-column prop="jfje" label="三级菜单" align="center" width="120"></el-table-column>
          <el-table-column prop="jfr" label="操作功能" align="center"></el-table-column>
        </el-table>
      </div>
    </div>
  </div>
</template>

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
.ul1 li {
  list-style: none;
}
.li1 {
  width: 200px;
  height: 48px;
  background-color: #baa8fe;
  text-align: center;
  color: white;
  line-height: 50px;
  padding-top: 0px;
}
.li2 {
  width: 200px;
  height: 48px;
  background-color: #666699;
  text-align: center;
  color: white;
  line-height: 50px;
}
.li3 {
  width: 200px;
  height: 48px;

  text-align: center;
  border: 1px solid #cfcfff;
  line-height: 50px;
}
.biaoge{
    margin: -260px 0px 0px 280px;
}
</style>