<template>
<div class="layout">

    <div class="banner-block">
        <img src="/img/phone/banner-1.png" style="width: 100%;height: 100%"/>
        <div class="text">
            <h1 class="t1">赋能万千门店</h1>
            <h1 class="t2">服务亿万车主</h1>
        </div>
        <div class="t3">
            <p>好修修门店系统</p>
            <div class="modal-button">立即下载</div>
        </div>
        
    </div>

    <div class="car-serve">
        <div class="serve-head">
            <h1>让车主都能享受美好的汽车生活</h1>
            <span></span>
        </div>
        <div class="serve-content">
            <div class="serve-menu">
            <div class="menu-left">
                <img src="/img/phone/icon-capacity.png" alt="">
            </div>
            <div class="menu-right menu-right-border">
                <h1>智能服务</h1>
                <p>智能识别汽车的显性和隐性需求，主动、高效、安全、绿色地为您的汽车生活服务。</p>
            </div>
            
        </div>
        <div class="serve-menu">
            <div class="menu-left">
                <img src="/img/phone/icon-Sa.png" alt="">
            </div>
            <div class="menu-right menu-right-border">
                <h1>SaaS门店</h1>
                <p>针对维修门店的痛点，提供涵盖PC端和移动端的、使用便捷的智能化SaaS经营管理工具。</p>
            </div>
            
        </div>
        <div class="serve-menu">
            <div class="menu-left">
                <img src="/img/phone/icon-assess.png" alt="">
            </div>
            <div class="menu-right menu-right-border">
                <h1>车辆价值评估</h1>
                <p>通过大数据和云计算，提供汽车使用过程的稳定性分析与价值评估。</p>
            </div>
            
        </div>
        <div class="serve-menu">
            <div class="menu-left">
                <img src="/img/phone/icon-supply.png" alt="">
            </div>
            <div class="menu-right">
                <h1>高效供应链</h1>
                <p>整合供应链，通过配件商城，实现渠道扁平化和动态进销存，为门店提供低成本、高效的智能化服务。</p>
            </div>
            
        </div>
        </div>
        
    </div>
    <div class="car-serve car-common">
        <div class="serve-head">
            <h1>门店赋能</h1>
            <span></span>
        </div>
        <div class="stores-menu">
            <div class="stores-li">
                <div class="store-li-menu">
                <div class="stores-left-menu">
                    <div class="menu-img">
                        <img src="/img/phone/keyed-car.png" alt="">
                    </div>
                    <h1>一键接车</h1>
                    <p>手机App扫车牌／智能识别／自动开单</p>

                </div>
                </div>
            </div>
            <div class="stores-li">
                <div class="store-li-menu">
                        <div class="stores-left-menu">
                            <div class="menu-img">
                                <img src="/img/phone/service copy.png" alt="">
                            </div>
                            <h1>智能维修</h1>
                            <p>全系车型保养规则／整车结构图/在线商城精准选购配件</p>

                        </div>
                </div>
                
                
            </div>
            <div class="stores-li">
                <div class="store-li-menu">
                <div class="stores-left-menu">
                    <div class="menu-img">
                        <img src="/img/phone/insurance copy.png" alt="">
                    </div>
                    <h1>车险服务</h1>
                    <p>手机APP智能报价／保险到期提醒</p>

                </div>
                </div>
            </div>
            <div class="stores-li">
                <div class="store-li-menu">
                <div class="stores-left-menu">
                    <div class="menu-img">
                        <img src="/img/phone/store copy.png" alt="">
                    </div>
                    <h1>进销存</h1>
                    <p>动态库存管理／智能下单补货</p>

                </div>
                </div>
            </div>
            <div class="stores-li">
                <div class="store-li-menu">
                <div class="stores-left-menu">
                    <div class="menu-img">
                        <img src="/img/phone/relation copy.png" alt="">
                    </div>
                    <h1>客户关系</h1>
                    <p>智能画像／精准服务</p>

                </div>
                </div>
            </div>
            <div class="stores-li">
                <div class="store-li-menu">
                <div class="stores-left-menu">
                    <div class="menu-img1">
                        <img src="/img/phone/hoxiuxiu-app.png" alt="">
                    </div>
                    <p>扫我下载好修修门店App</p>

                </div>
                </div>
            </div>
            
        </div>


        

    </div>
    <div class="driver-serve">
        <!--<img src="/img/phone/driver-bg.png" style="width: 100%;height: 100%"/>-->
        <div class="driver-serve-content">
            <div class="driver-serve-img">
                <img src="/img/phone/energize-bg.png" style="width: 100%;height: 100%"/>
            </div>
            <div class="driver-serve-head">
                <h1>车主服务</h1>
                <span></span>
            </div>
            
            <swiper :options="swiperOption" ref="banner">
                <swiper-slide>
                    <div class="stores-menu">
                        <div class="stores-li">
                            <div class="store-li-menu">
                            <div class="stores-left-menu">
                                <div class="menu-img">
                                    <img src="/img/phone/key-rescue.png" alt="">
                                </div>
                                <h1>一键救援</h1>
                                <p>紧急救援</p>
                                <p>快捷、省心</p>

                            </div>
                            </div>
                        </div>
                        <div class="stores-li">
                            <div class="store-li-menu">
                                    <div class="stores-left-menu">
                                        <div class="menu-img">
                                            <img src="/img/phone/stop-car.png" alt="">
                                        </div>
                                        <h1>停车服务</h1>
                                        <p>车位查找</p>
                                        <p>错峰停车</p>
                                    </div>
                            </div>
                        </div>
                    </div>

                </swiper-slide>
                <swiper-slide>
                    <div class="stores-menu">
                        <div class="stores-li">
                            <div class="store-li-menu">
                            <div class="stores-left-menu">
                                <div class="menu-img">
                                    <img src="/img/phone/key-rescue.png" alt="">
                                </div>
                                <h1>一键救援</h1>
                                <p>紧急救援</p>
                                <p>快捷、省心</p>

                            </div>
                            </div>
                        </div>
                        <div class="stores-li">
                            <div class="store-li-menu">
                                    <div class="stores-left-menu">
                                        <div class="menu-img">
                                            <img src="/img/phone/stop-car.png" alt="">
                                        </div>
                                        <h1>停车服务</h1>
                                        <p>车位查找</p>
                                        <p>错峰停车</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
                
                <div class="swiper-pagination"  slot="pagination"></div>
                
            </swiper>
        </div>
        
    </div>

    <div class="about-us">
        <div class="serve-head">
            <h1>关于我们</h1>
            <span></span>
        </div>
        <div class="about-content">
            <p>
                <span>好修修</span>
                专注于汽车生活相关大数据的智能化应用，打造以云计算为基础的S2b2C的汽车后市场服务平台。
                <i>了解更多>></i>
            </p>
        </div>
        <div class="about-menu">
            <div class="stores-li">
                <div class="store-li-menu">
                        <div class="stores-left-menu">
                            <div class="menu-img">
                                <img src="/img/phone/jiazhipinggu.png" alt="">
                            </div>
                            <p>汽车价值评估</p>
                        </div>
                </div>
            </div>
            <div class="stores-li">
                <div class="store-li-menu">
                        <div class="stores-left-menu">
                            <div class="menu-img">
                                <img src="/img/phone/zhineng.png" alt="">
                            </div>
                            <p>SaaS化智能门店</p>
                        </div>
                </div>
            </div>
            <div class="stores-li">
                <div class="store-li-menu">
                        <div class="stores-left-menu">
                            <div class="menu-img">
                                <img src="/img/phone/chuangyitubiao.png" alt="">
                            </div>
                            <p>创新型服务</p>
                        </div>
                </div>
            </div>

        </div>
    </div>

</div>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
	name: "hxx-content",
	components: {swiper, swiperSlide},
	data(){
		
		return{
			swiperOption:{
				
				centeredSlides : true,
				loop : true,
				
				pagination: {
					el: '.swiper-pagination',
					clickable: true
				},
				navigation: {
					
				},
				autoplay: {
					delay: 300000,
					disableOnInteraction: false,
				},
			},
		}
	},
	methods:{
		
	}
}
</script>

<style scoped lang="less">

.layout{
    width: 100%;
    height: 100%;
    .banner-block{
        width: 100%;
        position: relative;
        .text{
            width: 100%;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            padding-left:25px;
            h1{
                height:32px;
                font-size:23px;
                font-weight:400;
                color:rgba(255,255,255,1);
                line-height:32px;
                text-shadow:3px 3px 6px rgba(0,0,0,0.68);
            }
            .t1{
            }
            .t2{
                padding-left:25px;
            }
            
        }
        .t3{
            position: absolute;
            top:35%;
            right: 23px;
            p{
                width:86px;
                height:17px;
                font-size:12px;
                font-weight:400;
                color:rgba(255,255,255,1);
                line-height:17px;
                text-shadow:0px 2px 3px rgba(0,0,0,0.3);
            }
            .modal-button{
                width: 71px;
                margin-left:5px;
                margin-top: 7px;
                display: inline-block;
                font-size: 9px;
                height: 20px;
                line-height: 20px;
                color: white;
                text-align: center;
                background:linear-gradient(90deg,rgba(249,172,59,1) 0%,rgba(255,102,15,1) 100%);
                box-shadow:0px 4px 9px 3px rgba(112,60,2,0.61);
                border-radius:24px;
                cursor: pointer;
            }
        }
    }

    /*---------------------内容部分---------------*/
    div.car-common{
        background: #FFFFFF;
    }
    .car-serve{
        width: 100%;
        background: #F8F8F8;
        overflow: hidden;
        .serve-head{
            width: 100%;
            position: relative;
            margin:20px 0;
            text-align: center;
            h1{
                height:25px;
                font-size:18px;
                font-weight:600;
                color:rgba(51,51,51,1);
                line-height:25px;
                text-align: center;
            }
            span{
                width:30px;
                height:2px;
                background:rgba(88,125,226,1);
                border-radius:1px;
                position: absolute;
                left: 50%;
                display: block;
                bottom: -7px;
                transform: translateX(-50%);
            }
        }
        .serve-content{
            padding-top:10px; 
            .serve-menu{
                overflow: hidden;
                margin: 15px 20px 0 13px;
                position: relative;
                .menu-left{
                width: 60px;
                    height: 60px;
                    position: absolute;
                    top: 0;
                    left: 0;
                    img{
                        width:100%;
                        height:100%;
                    }
                }
                .menu-right{
                margin-left: 68px;
                    padding-bottom: 15px;
                    h1{
                        height:20px;
                        font-size:15px;
                        font-weight:500;
                        color:rgba(51,51,51,1);
                        line-height:20px;
                    }
                    p{  
                        font-size:13px;
                        font-weight:400;
                        color:rgba(102,102,102,1);
                        line-height:18px;
                    }
                }
                .menu-right-border{
                    border-bottom: 1px solid #eee;
                }
            }
        }
        
        .stores-menu{
            overflow: hidden;
            padding: 20px 5px 0 5px;
            .stores-li{
                padding: 0 5px 20px 5px;
                width:50%;
                display:inline-block;
                /*float: left;*/
                .store-li-menu{
                    box-shadow:0px 1px 4px 1px rgba(0,0,0,0.1);
                    border-radius:5px;
                    border:1px solid rgba(255,255,255,0.6);
                    position: relative;
                    overflow: hidden;
                    .stores-left-menu{
                        width: 100%;
                        position: absolute;
                        top: 50%;
                        left:50%;
                        -webkit-transform: translateX(-50%) translateY(-50%);
                        -webkit-transform: translateX(-50%) translateY(-50%);
                        -moz-transform: translateX(-50%) translateY(-50%);
                        -ms-transform: translateX(-50%) translateY(-50%);
                        transform: translateX(-50%) translateY(-50%);
                        .menu-img{
                            margin: 0 auto;
                            width: 40px;
                            height:40px;
                            img{
                                width: 100%;
                                height: 100%;
                            }
                        }
                        .menu-img1{
                            margin: 0 auto;
                            width: 90px;
                            height:90px;
                            img{
                                width: 100%;
                                height: 100%;
                            }
                        }
                        h1{
                            padding: 6px 15px;
                            height:32px;
                            font-size:13px;
                            font-weight:500;
                            color:rgba(51,51,51,1);
                            line-height:20px;
                            text-align: center;
                            
                        }
                        p{
                            padding: 0 15px;
                            height:34px;
                            font-size:11px;
                            font-weight:400;
                            color:rgba(102,102,102,1);
                            line-height:17px;
                            text-align: center;
                            
                        }
                    }
                    &:before{
                        content: '';
                        width: 100%;
                        margin-top: 100%;
                        display: block;
                    }
                }
                
                
            }
            
        }




    }

    .driver-serve{
        width: 100%;
        background: url('/img/phone/driver-bg.png');
        .driver-serve-content{
            width: 100%;
            overflow: hidden;
            padding-bottom: 20px;
            .driver-serve-img{
                margin: 40px 45px;
            }
            .driver-serve-head{
                width: 100%;
                position: relative;
                margin:20px 0;
                text-align: center;
                h1{
                    height:25px;
                    font-size:18px;
                    font-weight:600;
                    color: #fff;
                    line-height:25px;
                    text-align: center;

                }
                span{
                    width:30px;
                    height:2px;
                    background:#fff;
                    border-radius:1px;
                    position: absolute;
                    left: 50%;
                    display: block;
                    bottom: -7px;
                    transform: translateX(-50%);
                }
            }

            .stores-menu{
                overflow: hidden;
                padding: 20px 10px;
                .stores-li{
                    padding: 0 10px 20px 10px;
                    width:50%;
                    display:inline-block;
                    ;
                    /*float: left;*/
                    .store-li-menu{
                        box-shadow:0px 1px 4px 1px rgba(0,0,0,0.1);
                        border-radius:5px;
                        border:1px solid rgba(255,255,255,0.3);
                        background:rgba(255,255,255,0.2);
                        position: relative;
                        overflow: hidden;
                        .stores-left-menu{
                            width: 100%;
                            position: absolute;
                            top: 50%;
                            left:50%;
                            -webkit-transform: translateX(-50%) translateY(-50%);
                            -webkit-transform: translateX(-50%) translateY(-50%);
                            -moz-transform: translateX(-50%) translateY(-50%);
                            -ms-transform: translateX(-50%) translateY(-50%);
                            transform: translateX(-50%) translateY(-50%);
                            .menu-img{
                                margin: 0 auto;
                                width: 20px;
                                height:20px;
                                img{
                                    width: 100%;
                                    height: 100%;
                                }
                            }
                            .menu-img1{
                                margin: 0 auto;
                                width: 90px;
                                height:90px;
                                img{
                                    width: 100%;
                                    height: 100%;
                                }
                            }
                            h1{
                                padding: 6px 15px;
                                height:32px;
                                font-size:13px;
                                font-weight:500;
                                color:#fff;
                                line-height:20px;
                                text-align: center;
                                
                            }
                            p{
                                padding: 0 15px;
                                height:18px;
                                font-size:11px;
                                font-weight:400;
                                color:#fff;
                                line-height:17px;
                                text-align: center;
                                
                            }
                        }
                        &:before{
                            content: '';
                            width: 100%;
                            margin-top: 100%;
                            display: block;
                        }
                    }
                    
                    
                }
                
            }


        }

    }
    .about-us{
        padding: 30px 15px;
        .serve-head{
            width: 100%;
            position: relative;
            margin:20px 0;
            text-align: center;
            h1{
                height:25px;
                font-size:18px;
                font-weight:600;
                color:rgba(51,51,51,1);
                line-height:25px;
                text-align: center;
            }
            span{
                width:30px;
                height:2px;
                background:rgba(88,125,226,1);
                border-radius:1px;
                position: absolute;
                left: 50%;
                display: block;
                bottom: -7px;
                transform: translateX(-50%);
            }
        }
        .about-content{
            margin: 10px 0;
            p{
                font-size:13px;
                color: #4A4A4A;
                span{
                    color: #587DE2;
                }
                i{
                    color: #438EFF;
                    font-style:normal
                }
            }
        }
        .about-menu{
            .stores-li{
                    width:33.3%;
                    display:inline-block;
                    /*float: left;*/
                    .store-li-menu{
                        position: relative;
                        overflow: hidden;
                        .stores-left-menu{
                            width: 100%;
                            position: absolute;
                            top: 50%;
                            left:50%;
                            -webkit-transform: translateX(-50%) translateY(-50%);
                            -webkit-transform: translateX(-50%) translateY(-50%);
                            -moz-transform: translateX(-50%) translateY(-50%);
                            -ms-transform: translateX(-50%) translateY(-50%);
                            transform: translateX(-50%) translateY(-50%);
                            .menu-img{
                                margin: 0 20%;
                                
                                img{
                                    width: 100%;
                                    height: 100%;
                                }
                            }
                            
                            p{
                                height:18px;
                                font-size:12px;
                                font-weight:400;
                                color:#4A4A4A;
                                line-height:17px;
                                text-align: center;
                                margin-top: 8px;
                            }
                        }
                        &:before{
                            content: '';
                            width: 100%;
                            margin-top: 100%;
                            display: block;
                        }
                    }
                    
                    
                }
        }

    }

}
</style>
<style lang="less">
.layout{
	.swiper-pagination-bullets{
        bottom:0px;
    }
	.swiper-pagination-bullet{
		background-color: #DEE3FF;
        
	}
	.swiper-pagination-bullet-active{
		background-color: #fff;
	}
}
</style>





























</style>
