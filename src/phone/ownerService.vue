<template>
    <div class="owner-body">
        <headers>
        <div>
            <img src="/img/phone/owner-head.png" width="100%"/>
        </div>
        <div class="content">
            <div class="stores-menu">
                <div class="stores-li">
                    <div class="store-li-menu">
                        <div class="stores-left-menu">
                            <div class="menu-img">
                                <img src="/img/phone/owner-help.png" alt="">
                            </div>
                            <h1>一键救援</h1>
                            <div class="line"></div>
                            <p>紧急救援快捷、省</p>
                        </div>
                    </div>
                </div>
                <div class="stores-li">
                    <div class="store-li-menu">
                        <div class="stores-left-menu">
                            <div class="menu-img">
                                <img src="/img/phone/owner-stop.png" alt="">
                            </div>
                            <h1>停车服务</h1>
                            <div class="line"></div>
                            <p>车位查找、错峰停车</p>

                        </div>
                    </div>


                </div>
                <div class="stores-li">
                    <div class="store-li-menu">
                        <div class="stores-left-menu">
                            <div class="menu-img">
                                <img src="/img/phone/owner-select.png" alt="">
                            </div>
                            <h1>查选维修</h1>
                            <div class="line"></div>
                            <p>查选正规门店、远离黑汽修</p>

                        </div>
                    </div>
                </div>
                <div class="stores-li">
                    <div class="store-li-menu">
                        <div class="stores-left-menu">
                            <div class="menu-img">
                                <img src="/img/phone/used-car.png" alt="">
                            </div>
                            <h1>二手车服务</h1>
                            <div class="line"></div>
                            <p>车辆价值评估、二手车增值</p>
                        </div>
                    </div>
                </div>
                <div class="stores-li">
                    <div class="store-li-menu">
                        <div class="stores-left-menu">
                            <div class="menu-img">
                                <img src="/img/phone/learn-driving.png" alt="">
                            </div>
                            <h1>学车找我</h1>
                            <div class="line"></div>
                            <p>查选正规驾校、满足个性学车需求</p>
                        </div>
                    </div>
                </div>
                <div class="stores-li">
                    <div class="store-li-menu">
                        <div class="stores-left-menu">
                            <div class="menu-img">
                                <img src="/img/phone/owner-comment.png" alt="">
                            </div>
                            <h1>学车找我</h1>
                            <div class="line"></div>
                            <p>点评服务、口碑推荐</p>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div style="clear: both;"></div>
        <consult></consult>
        <footers></footers>
        </headers>
    </div>
</template>

<script>
    import headers from '@/components/headers.vue';
    import consult from '@/components/consult.vue';
    import footers from '@/components/footers.vue';

    export default {
        name: "ownerService",
        components: {consult, footers, headers},
        methods:{

        }
    }
</script>

<style scoped lang="less">
    .owner-body {
        width: 100%;
        background: rgba(255, 255, 255, 1);
        .content {
            width: 100%;
            /*background: pink;*/
        }
    }

    .stores-menu {
        overflow: hidden;
        padding: 20px 5px 0 5px;
        .stores-li {
            padding: 0 5px 10px 5px;
            width: 50%;
            display: inline-block;
            /*float: left;*/
            .store-li-menu {
                /*box-shadow:0px 1px 4px 1px rgba(0,0,0,0.1);*/
                /*border-radius:5px;*/
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
                    .line {
                        margin: 0 auto;
                        height: 1px;
                        width: 14px;
                        background: black;
                        margin-bottom: 5px;
                    }
                    .menu-img {
                        margin: 0 auto;
                        width: 70px;
                        height: 70px;
                        img {
                            width: 100%;
                            height: 100%;
                        }
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
                        padding: 6px 15px;
                        height: 32px;
                        font-size: 13px;
                        font-weight: 500;
                        color: rgba(51, 51, 51, 1);
                        line-height: 20px;
                        text-align: center;

                    }
                    p {
                        padding: 0 15px;
                        height: 34px;
                        font-size: 12px;
                        font-weight: 400;
                        color: rgba(102, 102, 102, 1);
                        line-height: 17px;
                        text-align: center;

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