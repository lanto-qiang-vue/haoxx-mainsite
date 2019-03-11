<template>
    <div class="headers">
        <div class="left">
            <img src="/img/phone/hxxlogin.png" width="60"/>
        </div>
        <div class="right">
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "headers"
    }
</script>

<style scoped lang="less">
    .headers {
        width: 100%;
        height: 40px;
        background-color: rgba(255, 255, 255, 1);
        .left {
            float: left;
            width:60px;
            height:26px;
            margin:8px 0 6px 20px;
        }
        .right {
            float: right;
            margin:8px 20px 6px 0px;
            div{
                width:18px;
                height:1px;
                background:rgba(51,51,51,1);
                margin-top:6px;
            }
        }
    }
</style>