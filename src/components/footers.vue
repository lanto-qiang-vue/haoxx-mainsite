<template>
    <div class="footer">
    <div class="title">
        &nbsp;门店赋能 &nbsp;| &nbsp;车主服&nbsp; | &nbsp;关于我们&nbsp; | &nbsp;联系我们
    </div>
        <div class="line">
        </div>
        <div class="copyright">
            Copyright &#169 2018 上海衡益网络技术有限公司 All Rights Reserved 沪ICP备18016827号-1
        </div>
    </div>
</template>

<script>
    export default {
        name: "footers"
    }
</script>

<style scoped>
.footer{
    width:100%;
    height:100px;
    background-color:rgba(46,48,51,1);
}
    .footer .title{
        font-size:12px;
        color:rgba(204,204,204,1);
        width:248px;
        margin: 0 auto;
        padding-top:10px;
    }
    .footer .line{
        width:100%;
        height:1px;
        background:rgba(56,59,63,1);
        margin-top:10px;
    }
    .footer .copyright{
        color:rgba(204,204,204,1);
        width:90%;
        font-size:12px;
        padding-top:10px;
        margin:0 auto;
        text-align:center;
    }
</style>