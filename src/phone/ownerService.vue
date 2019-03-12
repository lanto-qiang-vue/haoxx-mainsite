<template>
    <div class="owner-body">
        <headers></headers>
        <div>
            <img src="/img/phone/owner-head.png" width="100%"/>
        </div>
        <div class="content">
            <div class="box">
                <div class="block-left">
                    <div style="margin:0px 26px 0px 25px;">
                          <img src="/img/phone/owner-help.png" style="width:100%;"/>
                    </div>
                    <div style="font-size:14px;margin:0px 20px 0px 19px;text-align:center;">一键救援</div>
                </div>
            </div>
            <div class="box">
                <div class="block-right"></div>
            </div>
        </div>
        <div style="clear: both;"></div>
        <consult></consult>
        <footers></footers>
    </div>
</template>

<script>
    import headers from '@/components/headers.vue';
    import consult from '@/components/consult.vue';
    import footers from '@/components/footers.vue';

    export default {
        name: "ownerService",
        components: {consult, footers, headers}
    }
</script>

<style scoped lang="less">
    .owner-body {
        width: 100%;
        background: rgba(255,255,255,1);
        .content {
            width: 100%;
            background: pink;
        }
    }
    .owner-body .content .box{
        width:50%;
        height:300px;
        /*background:green;*/
        float:left;
    }
    .owner-body .content .box .block-left{
        margin:20px 27px 0px 40px;
        height:100px;
        /*background: red;*/
    }
    .owner-body .content .box .block-right{
        margin:20px 40px 0px 27px;
        height:100px;
        background: red;
    }
</style>