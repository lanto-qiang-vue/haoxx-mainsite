<template>
    <headers>
        <div class="businessConsult">
            <img src="/img/phone/businessConsult-head.png" width="100%">
            <div class="businessConsult-content">
                <Form label-position="top"  ref="form">
                    <FormItem label="姓名" prop="name">
                        <Input  size="large"></Input>
                    </FormItem>
                    <FormItem label="公司" prop="company">
                        <Input  size="large"></Input>
                    </FormItem>
                    <FormItem label="手机号" prop="tel">
                        <Input  size="large" :maxlength="11"></Input>
                    </FormItem>
                    <FormItem label="电子邮箱地址" prop="email">
                        <Input  size="large"></Input>
                    </FormItem>
                    <FormItem label="请在此输入您的问题" prop="note" style="margin-bottom:10px;">
                        <Input  type="textarea" :rows="4" size="large"></Input>
                    </FormItem>
                </Form>
                <small>提交后我们将尽快与您取得联系</small>
            </div>
            <div class="submit">提交</div>
            <footers></footers>
        </div>
    </headers>
</template>

<script>
    import headers from '@/components/headers.vue';
    import footers from '@/components/footers.vue';
    export default {
        name: "businessConsult",
        components:{headers,footers},
    }
</script>
<style>
    .businessConsult-content .ivu-form-label-top .ivu-form-item .ivu-form-item-label{
         font-size:13px;
         color:rgba(51, 51, 51, 1);
    }
    .businessConsult-content .ivu-form-label-top .ivu-form-item{
        margin-bottom:20px;
    }
</style>
<style scoped lang="less">
    .businessConsult{
        width:100%;
        height:100vh;
        /*overflow:hidden;*/
        .businessConsult-content{
            margin:30px 20px 0 20px;
            small{
                font-size:12px;
                color:rgba(153, 153, 153, 1);
            }
        }
        .submit{
            margin:20px 15px 40px 15px;
            line-height:40px;
            font-weight:500;
            font-size:14px;
            background:rgba(67, 142, 255, 1);
            text-align:center;
            color:rgba(255, 255, 255, 1);
        }
    }
</style>