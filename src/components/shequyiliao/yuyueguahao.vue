<template>
    <div>
        <div class="biaoti"></div>
        <div class="kuang">
            <div class="ksyy">
                <router-link to="kuaisuyuyue" tag="div">快速预约</router-link>
            </div>
            <div class="yyjl">
                快速预约
            </div>
            <div class="ewm">
                <img src="../../../public/imgs/yyghewm.png">
            </div>
            <div class="diwen">
                <p><span class="sp1">温馨提示：</span>预约完成后，预约结果将已社区公众号推送给您。如果您未关注公众号，则以短信方式发送到您的手机</p>
            </div>
        </div>
    </div>
</template>
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
.ksyy{
    width: 280px;
    height: 200px;
    background-color: #33CC99;
    border-radius: 12px;
    color: white;
    text-align: center;
    line-height: 180px;
    font-size: 24px;
    margin: 200px 0px 0px 490px;
}
.yyjl{
      width: 280px;
    height: 200px;
    background-color: #CCCCCC;
    border-radius: 12px;
    color: #000;
    text-align: center;
    line-height: 180px;
    font-size: 24px;
     margin: -200px 0px 0px 860px;
}
.ewm{
    text-align: center;
}
.sp1{
    color: red;
}
.diwen{
    margin: 60px 0px 0px 550px;
}
</style>