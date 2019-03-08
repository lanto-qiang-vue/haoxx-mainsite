<template>
    <div class="consult">
        <div class="title"><b>在线业务咨询</b></div>
        <div class="content">
            如果你想了解更多业务内容或洽谈合作请立即联系我们我们将以最快速度回复你
        </div>
        <button class="button">
            立即咨询
        </button>
    </div>
</template>

<script>
    export default {
        name: "consult"
    }
</script>

<style scoped>
.consult{
    width:100%;height:auto;background:pink;padding-bottom:30px;
}
    .consult .title{
        width:100%;text-align: center;font-size:18px;padding-top:30px;
    }
    .consult .content{
        text-align: center;
        margin: 0 auto;
        font-size:13px;padding-top:20px;width:80%;
    }
    .consult .button{
        width:90%;background:#438EFF;margin:0 auto;display:block;margin-top:25px;line-height:40px;font-size:14px;color:white;
    }
</style>