<template>
    <div class="body">
    <div class="head-img">
    <img src="/img/phone/head-img.png">
    </div>
        <div class="main">
            <div class="main-body">
        <div class="width-15 auto">
        <img src="/img/phone/keyed-carcopy.png" class="width-100"/>
        </div>
                <div  class="width-100 line-56 center font-35e margin-top20">
                                   <!--<b>一键接车</b>-->
                    一键接车
                </div>
                <div class="width-100 line-56 center font-3e margin-top20" style="rgba(102,102,102,1)">
                        手机APP扫车牌/智能识别/自动开单
                </div>
            </div>
            <!--2-->
            <div class="main-body">
                <div class="width-15 auto">
                    <img src="/img/phone/service.png" class="width-100"/>
                </div>
                <div  class="width-100 line-56 center font-35e margin-top20">
                    <b>智能维修</b>
                </div>
                <div class="width-100 line-56 center font-3e margin-top20" style="rgba(102,102,102,1)">
                    全系车型保养规则/整车结构图/在线商城精准选购配件
                </div>
            </div>
            <!--3-->
            <div class="main-body">
                <div class="width-15 auto">
                    <img src="/img/phone/insurance.png" class="width-100"/>
                </div>
                <div  class="width-100 line-56 center font-35e margin-top20">
                    <b>车险服务</b>
                </div>
                <div class="width-100 line-56 center font-3e margin-top20" style="rgba(102,102,102,1)">
                    手机APP只能报价/保险到期提醒
                </div>
            </div>
            <!--4-->
            <div class="main-body">
                <div class="width-15 auto">
                    <img src="/img/phone/store.png" class="width-100"/>
                </div>
                <div  class="width-100 line-56 center font-35e margin-top20">
                    <b>进销存</b>
                </div>
                <div class="width-100 line-56 center font-3e margin-top20" style="rgba(102,102,102,1)">
                    动态库存管理/智能下单补货
                </div>
            </div>
            <!--5-->
            <div class="main-body">
                <div class="width-15 auto">
                    <img src="/img/phone/relation.png" class="width-100"/>
                </div>
                <div  class="width-100 line-56 center font-35e margin-top20">
                    <b>客户关系</b>
                </div>
                <div class="width-100 line-56 center font-3e margin-top20" style="rgba(102,102,102,1)">
                    智能画像/精准服务
                </div>
            </div>
            <!---->
            <div class="main-body auto" style="width:30%;background:rgba(255,255,255,1);padding:20px;border:2px solid rgba(0,0,0,0.08);margin-bottom:60px;">
                <div class="width-100 auto" style="border:1px dashed black;">
                    <img src="/img/phone/hoxiuxiu.png" class="width-100"/>
                </div>
                <div  class="width-100 auto line-56 center font-35e">
                   扫我下载好修修门店APP
                </div>
            </div>
        </div>
        <!--咨询-->
        <div style="width:100%;height:auto;background:pink;padding-bottom:60px;">
            <div class="width-100 center" style="font-size:4em;padding-top:60px;"><b>在线业务咨询</b></div>
            <div class="center auto" style="font-size:3.3em;padding-top:30px;width:80%;">
                如果你想了解更多业务内容或洽谈合作请立即联系我们我们将以最快速度回复你
            </div>
            <button style="width:90%;background:#438EFF;margin:0 auto;display:block;margin-top:30px;line-height:2.5em;font-size:4em;color:white;">
             立即咨询
            </button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "storeFunction"
    }
</script>

<style scoped>
    .auto{
        margin: 0 auto;
    }
    .width-15{
        width:15%;
    }
    .width-30{
        width:30%;
    }
    .margin-top20{
     margin-top:20px;
    }
    .font-35e{
        /*font-size:3.5em;*/
        font-size:14px;
    }
    .font-3e{
        font-size:3em;
    }
    .line-56{
        line-height:56px;
    }
    .center{
        text-align:center;
    }
    .width-100{
        width:100%;
    }
    .main{
        width:calc(100% - 40px);
        margin: 20px 20px 20px 20px;
        background:rgba(255,255,255,1);
        border:2px solid rgba(0,0,0,0.06);
    }
    .main .main-body{
        width:100%;height: auto;margin-top:60px;

    }
    .head-img{
        width:100%;
    }
    .head-img img{
        width:100%;
        /*height:375px;*/
    }
    .body{
        width:100%;
        height:100%;
        background:rgba(248,248,248,1);
    }
</style>