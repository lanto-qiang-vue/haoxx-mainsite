<template>
    <div class="contact">
        <headers>
        <div>
            <img src="/img/phone/contact-head.png" width="100%"/>
        </div>
        <div class="stores-menu">
            <div class="stores-li" style="padding-right:10px;padding-bottom:20px;">
                <div class="store-li-menu">
                    <div class="stores-left-menu">
                        <img class="menu-img" src="/img/phone/contact-tel.png" alt="">
                        <h1>客服热线</h1>
                        <p style="color:rgba(255, 120, 0, 1)">400-663-8210</p>
                        <button>致电客服咨询</button>
                    </div>
                </div>
            </div>
            <div class="stores-li" style="padding-left:10px;padding-bottom:20px;">
                <div class="store-li-menu">
                    <div class="stores-left-menu">
                        <img class="menu-img" src="/img/phone/contact-consult.png" style="width:36px;margin-top:5px;">
                        <h1>留言咨询</h1>
                        <p>hoxiuxiu@lantoev.com</p>
                        <button>
                            点击业务咨询
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="content">
            总机：021-23571898<br/> 邮箱：hoxiuxiu@lantoev.com <br/>地址：上海市长宁区淞虹路207号明基商务广场C栋4楼B座
        </div>
        <div class="qq-web">
            <img src="/img/phone/qq.png" width="22"/>
            <div>官方QQ：3181682369</div>
        </div>
        <div class="qq-web">
            <img src="/img/phone/wb.png" width="22"/>
            <div>好修修官方微博</div>
        </div>
        <div class="qrCode">
            <img src="/img/phone/qrCode.png" width="130"/>
            <div>关注好修修微信公众号</div>
        </div>
        <footers></footers>
        </headers>
    </div>
</template>
<script>
    import headers from '@/components/headers.vue';
    import footers from '@/components/footers.vue';

    export default {
        name: "contactUs",
        components: {headers, footers},
    }
</script>

<style scoped lang="less">
    .contact {
        width: 100%;
        height: auto;
        .content {
            margin: 10px 72px 24px 20px;
            line-height: 24px;
            font-size: 12px;
            color: rgba(51, 51, 51, 1);
            font-weight: 500;
        }
        .qq-web {
            height: 22px;
            margin: 0 0 8px 19px;
            img {
                float: left;
            }
            div {
                float: left;
                font-weight: 500;
                line-height: 20px;
                color: rgba(51, 51, 51, 1);
                padding-left: 8px;
            }
        }
        .qrCode {
            margin: 11px 0px 0 20px;
            width: 130px;
            padding-bottom: 40px;
            div {
                font-weight: 500;
                color: rgba(102, 102, 102, 1);
                line-height: 17px;
                width: 100%;
                text-align: center;
            }
        }
    }

    .stores-menu {
        overflow: hidden;
        padding: 20px 20px 0 20px;
        .stores-li {
            width: 50%;
            display: inline-block;
            /*float: left;*/
            .store-li-menu {
                box-shadow: 0px 1px 4px 1px rgba(0, 0, 0, 0.1);
                padding-bottom: 10px;
                border-radius: 5px;
                position: relative;
                overflow: hidden;
                .stores-left-menu {
                    width: 100%;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    -webkit-transform: translateX(-50%) translateY(-50%);
                    -webkit-transform: translateX(-50%) translateY(-50%);
                    -moz-transform: translateX(-50%) translateY(-50%);
                    -ms-transform: translateX(-50%) translateY(-50%);
                    transform: translateX(-50%) translateY(-50%);
                    text-align: center;
                    .menu-img {
                        width: 32px;
                        position: absolute;
                        left: 50%;
                        transform: translateX(-50%);
                    }
                    .menu-img1 {
                        margin: 0 auto;
                        width: 90px;
                        height: 90px;
                        img {
                            width: 100%;
                            height: 100%;
                        }
                    }
                    h1 {
                        margin-top: 30px;
                        padding: 6px 15px;
                        font-size: 12px;
                        font-weight: 500;
                        color: rgba(51, 51, 51, 1);
                        line-height: 20px;
                        text-align: center;

                    }
                    p {
                        padding: 0 15px;
                        /*height: 25px;*/
                        font-size: 12px;
                        font-weight: 400;
                        color: rgba(102, 102, 102, 1);
                        line-height: 17px;
                        text-align: center;
                    }
                    button {
                        display: block;
                        margin: 0 auto;
                        width: 80%;
                        margin-top: 11px;
                        background: rgba(67, 142, 255, 1);
                        color: white;
                        line-height: 30px;
                        font-size: 12px;
                    }
                }
                &:before {
                    content: '';
                    width: 100%;
                    margin-top: 100%;
                    display: block;
                }
            }

        }

    }
</style>