<template>
    <div>
        <div class="biaoti"></div>
        <div class="kuang">
            <ul>
                <li class="kuang01">
                    <span class="el-icon-s-home"></span>
                    <span class="sp1">1000</span>
                    <p class="p1">水费</p>
                </li>
                <li class="kuang01">
                    <span class="el-icon-s-home"></span>
                    <span class="sp1">500</span>
                    <p class="p1">电费</p>
                </li>
                <li class="kuang01">
                    <span class="el-icon-s-home"></span>
                    <span class="sp1">100</span>
                    <p class="p1">没气费</p>
                </li>
                <li class="kuang01">
                    <span class="el-icon-s-home"></span>
                    <span class="sp1">100</span>
                    <p class="p1">宽带费</p>
                </li>
                <li class="kuang01">
                    <span class="el-icon-s-home"></span>
                    <span class="sp1">100</span>
                    <p class="p1">停车费</p>
                </li>
                <!-- <li class="kuang01">
                    <span class="el-icon-s-home"></span>
                    <span class="sp1">100</span>
                    <p class="p1">物业费</p>
                </li> -->
            </ul>
            <div class="shoufeifenxi">
                <div class="shoufeifenxis">
                    <span class="sffx">|收费分析</span>
                    <ul class="shoufeifenxisUL">
                        <li>银行转账（%）：</li>
                        <li class="li01">50</li>
                        <li>手机收款（%）：</li>
                        <li class="li01">20</li>
                        <li>现金交易（%）：</li>
                        <li class="li01">30</li>
                    </ul>
                </div>
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
  height: 1200px;
  border: 1px solid #e6e6ff;
}
.kuang ul{
    margin-left: 0px;
}
.kuang ul li{
    list-style: none;
    float: left;
    text-align: center;
    margin: 38px;
}
.kuang01{
    width: 200px;
    height: 80px;
    border: 1px solid #000;
    border-radius: 10px;
}
.el-icon-s-home{
    display: block;
    font-size: 60px;
    padding: 14px 80px 0px 0px;
}
.sp1{
     display: block;
    font-size: 28px;
    margin: -52px 0px 0px 40px;
}
.p1{
    font-size: 12px;
    display: block;
    margin: -5px 0px 0px 40px;
}
.p2{
    font-size: 12px;
    display: block;
    margin: -5px 0px 0px 52px;
}
.shoufeifenxi{
    width: 1500px;
    height: 400px;
    border: 1px solid #CECEFE;
    margin: 170px 0px 0px 20px;
}
.shoufeifenxis{
     width: 1500px;
    height: 40px;
     border-bottom: 1px solid #CECEFE;
}
.shoufeifenxis ul li{
    list-style: none;
    float: left;

}
.li01{
    font-size: 32px;
  
}
.shoufeifenxisUL{
    margin: -115px 0px 0px 100px;
}
.sffx{
    /* float: left; */
}
</style>