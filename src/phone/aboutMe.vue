<template>
    <div class="about">
        <headers></headers>
        <div>
            <img src="/img/phone/about-head.png" width="100%"/>
        </div>
        <div class="vision">
            <div class="vision-title"><b>让车主都能享受美好的汽车生活是我们的愿景！</b></div>
            <div style="width:30px;height:2px;margin: 0 auto;background:rgba(88,124,226,1);margin-top:4px;"></div>
            <div class="vision-description">
                <b>“好修修”</b>专注于汽车生活相关大数据的智能化应用，打造以云计算为基础的S2b2C的汽车后市场服务平台。
            </div>
            <div class="vision-img">
                <img src="/img/phone/about-background.png">
            </div>
        </div>
        <div class="content">
            <div class="box">
                <div class="box-left">

                </div>
                <div class="box-right" style="position:relative;">
                    提供汽车使用过程中的稳定性分析与价值评估，制定汽车及零部件的智能维护策略，聚合车主并智能匹配其个性化养车需求。
                    <img src="/img/phone/about-cost.png" style="position:absolute;top:50%;margin-top: -26px;left:-30%;" width="52"/>
                </div>
            </div>
            <div style="clear:both;"></div>
            <div class="box" style="margin-top:21px;">
                <div class="box-left">

                </div>
                <div class="box-right" style="position:relative;">
                    提供SaaS化工具赋能门店，整合上游供应链，提供增值服务，帮助门店，共同服务车主，为车主提供高效、智能、便捷的创新型服务。
                    <img src="/img/phone/saas.png" style="position:absolute;top:50%;margin-top: -26px;left:-30%;" width="52"/>
                </div>
            </div>
            <div style="clear:both;"></div>
            <div style="height:40px;"></div>
        </div>
        <consult></consult>
        <footers></footers>
    </div>
</template>
<script>
    import headers from '@/components/headers.vue';
    import consult from '@/components/consult.vue';
    import footers from '@/components/footers.vue';

    export default {
        name: "aboutMe",
        components: {headers, consult, footers},
    }
</script>

<style scoped lang="less">
    .about {
        width: 100%;
        .vision {
            width: 100%;
            height: auto;
            background: rgba(255, 255, 255, 1);
            .vision-title {
                font-size: 18px;
                width: 260px;
                margin: 0 auto;
                text-align: center;
                color: rgba(51, 51, 51, 1);
                padding-top: 18px;
            }
            .vision-description {
                margin: 16px 27px 0px 26px;
                font-size: 14px;
                color: rgba(51, 51, 51, 1);
            }
            .vision-img {
                margin: 15px 21px 20px 22px;
                img {
                    width: 100%;
                }
            }
        }
        .content {
            width: 100%;
            /*height: 300px;*/
            /*height:auto;*/
            background: rgba(248, 248, 248, 1);
            padding-top:40px;
            .box {
                width: 100%;
                .box-left{
                    float:left;
                    width:30%;
                    /*background:red;*/
                }
                .box-right{
                    float:right;
                    width:70%;
                    color:rgba(74, 74, 74, 1);
                    font-size:12px;
                    line-height:26px;
                    font-weight:400;
                    padding-right:20px;
                }
            }
        }
    }
</style>