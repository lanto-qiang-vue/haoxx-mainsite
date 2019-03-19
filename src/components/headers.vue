<template>
    <div :class="['headers-parent',{'headers-hide':!iconType || qrCode}]">
        <div class="headers">
            <div class="left">
                <img src="/img/phone/hxxlogin.png" width="60"/>
            </div>
            <div class="right" v-show="iconType" @click="icon(false)">
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div class="right" v-show="!iconType" @click="icon(true)">
                <img src="/img/phone/close-icon.png"/>
            </div>
        </div>
        <div v-show="!iconType" class="mask-white">
            <div v-for="item in menu" @click="to(item.url)" :class="['menu',{'colorBlue':(item.url == url)}]">
                {{item.name}}
                <img v-show="item.url != url" src="/img/phone/arrows.png" width="6"
                     style="position:absolute;right:20px;top:20px;"/>
            </div>
        </div>
        <div class="mask-white" v-show="qrCode" style="top:0;background:rgba(0, 0, 0, 0.7);">
            <div class="qrcode-box">
                <img src="/img/phone/bigQrcode.png" style="position:relative;" width="200"/>
                <div class="title">
                    扫我下载好修修门店App
                </div>
                <img src="/img/phone/circle-close.png" style="position:absolute;top:318px;left:50%;margin-left:-16px;" @click="qrCode = false"
                     width="36"/>
            </div>
        </div>
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: "headers",
        props:{qrCodeType:{default:''}},
        data() {
            return {
                menu: [
                    {name: '首页', url: '/hxx-content'},
                    {name: '门店赋能', url: '/storeFunction'},
                    {name: '车主服务', url: '/ownerService'},
                    {name: '关于我们', url: '/aboutMe'},
                    {name: '联系我们', url: '/contactUs'},
                ],
                qrCode:false,
                flag: false,
                url: '',
                style: {
                    width: '100%',
                    height: '100vh',
                },
                iconType: true,
            }
        },
        mounted() {
            this.url = this.$route.path;
            // this.qrCodeTrigger();
        },
        watch:{
            qrCodeType(){
                this.qrCode = true;
            }
        },
        methods: {
            to(url) {
                if (url != this.url) this.$router.push({path: url});
            },
            icon(bolean) {
                this.iconType = bolean;
                if (bolean) {

                } else {

                }
            }
        }
    }
</script>

<style scoped lang="less">
    .headers-parent {
        width: 100%;
        height: 100vh;
    }

    .headers-hide {
        overflow: hidden;
    }

    .headers {
        width: 100%;
        height: 40px;
        position: relative;
        background-color: rgba(255, 255, 255, 1);
        /*overflow: hidden;*/
        .left {
            float: left;
            width: 60px;
            height: 26px;
            margin: 8px 0 6px 20px;
        }
        .right {
            float: right;
            margin: 8px 20px 6px 0px;
            div {
                width: 18px;
                height: 1px;
                background: rgba(51, 51, 51, 1);
                margin-top: 6px;
            }
            img {
                margin-top: 8px;
                width: 13px;
            }
        }
    }

    .mask-white {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 40px;
        z-index: 1;
        background: rgba(255, 255, 255, 1);
        .menu {
            height: 50px;
            width: 100%;
            border-top: 1px solid rgba(238, 238, 238, 1);
            font-size: 14px;
            color: rgba(51, 51, 51, 1);
            line-height: 50px;
            padding-left: 24px;
            position: relative;
        }
        .colorBlue {
            color: rgba(67, 142, 255, 1);
        }
        .qrcode-box {
            padding: 20px;
            background: white;
            border: 1px solid rgba(0, 0, 0, 0.08);
            border-radius: 5px;
            position: absolute;
            top: 20%;
            left: 50%;
            transform: translateX(-50%);
            .title {
                margin: 0 auto;
                font-size: 14px;
                color: rgba(51, 51, 51, 1);
                text-align: center;
                line-height: 20px;
                padding: 10px 0 8px 0
            }
        }
    }
</style>