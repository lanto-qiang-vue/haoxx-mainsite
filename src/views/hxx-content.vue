<template>
<div class="layout">
    <div class="banner-block">
        <img src="/img/content/banner-1.png" style="width: 100%;height: 100%"/>
        <div class="text">
            <h1 class="t1">赋能万千门店</h1>
            <h1 class="t2">服务亿万车主</h1>
            <div class="t3">
                <p>好修修门店系统</p>
                <div class="modal-button">立即下载</div>
            </div>
        </div>
    </div>
    <div class="car-serve">
        <div class="serve-head">
            <h1>让车主都能享受美好的汽车生活</h1>
            <span></span>
        </div>
        <div class="serve-menu">
            <div class="menu-left">
                <img src="/img/content/icon-capacity.png" alt="">
            </div>
            <div class="menu-right menu-right-border">
                <h1>智能服务</h1>
                <p>智能识别汽车的显性和隐性需求，主动、高效、安全、绿色地为您的汽车生活服务。</p>
            </div>
            
        </div>
        <div class="serve-menu">
            <div class="menu-left">
                <img src="/img/content/icon-capacity.png" alt="">
            </div>
            <div class="menu-right menu-right-border">
                <h1>智能服务</h1>
                <p>智能识别汽车的显性和隐性需求，主动、高效、安全、绿色地为您的汽车生活服务。</p>
            </div>
            
        </div>
        <div class="serve-menu">
            <div class="menu-left">
                <img src="/img/content/icon-capacity.png" alt="">
            </div>
            <div class="menu-right menu-right-border">
                <h1>智能服务</h1>
                <p>智能识别汽车的显性和隐性需求，主动、高效、安全、绿色地为您的汽车生活服务。</p>
            </div>
            
        </div>
        <div class="serve-menu">
            <div class="menu-left">
                <img src="/img/content/icon-capacity.png" alt="">
            </div>
            <div class="menu-right">
                <h1>智能服务</h1>
                <p>智能识别汽车的显性和隐性需求，主动、高效、安全、绿色地为您的汽车生活服务。</p>
            </div>
            
        </div>
    </div>
    <div class="car-serve car-common">
        <div class="serve-head">
            <h1>门店赋能</h1>
            <span></span>
        </div>
        <div class="stores-menu">
            <div class="stores-left">
                <div class="stores-left-menu">
                    <div class="menu-img">
                        <img src="/img/content/keyed-car.png" alt="">
                    </div>
                    <h1>一键接车</h1>
                    <p>手机App扫车牌／智能识别／自动开单</p>

                </div>
                
            </div>
            <div class="stores-right">
                <div class="stores-left-menu">
                    <div class="menu-img">
                        <img src="/img/content/keyed-car.png" alt="">
                    </div>
                    <h1>一键接车</h1>
                    <p>手机App扫车牌／智能识别／自动开单</p>

                </div>
                
            </div>
            <div class="stores-left">
                <div class="stores-left-menu">
                    <div class="menu-img">
                        <img src="/img/content/keyed-car.png" alt="">
                    </div>
                    <h1>一键接车</h1>
                    <p>手机App扫车牌／智能识别／自动开单</p>

                </div>
                
            </div>
            <div class="stores-right">
                <div class="stores-left-menu">
                    <div class="menu-img">
                        <img src="/img/content/keyed-car.png" alt="">
                    </div>
                    <h1>一键接车</h1>
                    <p>手机App扫车牌／智能识别／自动开单</p>

                </div>
                
            </div>
            <div class="stores-left">
                <div class="stores-left-menu">
                    <div class="menu-img">
                        <img src="/img/content/keyed-car.png" alt="">
                    </div>
                    <h1>一键接车</h1>
                    <p>手机App扫车牌／智能识别／自动开单</p>

                </div>
                
            </div>
            <div class="stores-right">
                <div class="stores-left-menu">
                    <div class="menu-img">
                        <img src="/img/content/keyed-car.png" alt="">
                    </div>
                    <h1>一键接车</h1>
                    <p>手机App扫车牌／智能识别／自动开单</p>

                </div>
                
            </div>
            
        </div>


        

    </div>

</div>
</template>

<script>

export default {
	name: "hxx-content",
	components: {},
	data(){
		
		return{
			
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
        height: 100%;
        position: relative;
        .text{
            width: 100%;
            height: 100%;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            h1{
                width:138px;
                height:32px;
                font-size:23px;
                font-weight:400;
                color:rgba(255,255,255,1);
                line-height:32px;
                text-shadow:3px 3px 6px rgba(0,0,0,0.68);
                position: absolute;
            }
            .t1{
                top: 25%;
                left: 28px;
            }
            .t2{
                top: 50%;
                left: 76px;
            }
            .t3{
                position: absolute;
                top: 35%;
                right: 23px;;
                p{
                    width:84px;
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
    }

    /*---------------------内容部分---------------*/
    div.car-common{
        background: #FFFFFF;
    }
    .car-serve{
        width: 100%;
        height: 100%;
        background: #F8F8F8;
        .serve-head{
            width: 100%;
            position: relative;
            margin-bottom:20px;
            padding-top:20px;
            h1{
                width:100%;
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
                top:50px;
                left: 50%;
                display: block;
                margin-left: -15px;
            }
        }
        .serve-menu{
            width: 100%;
            overflow: hidden;
            padding-top:15px; 
            .menu-left{
                width: 59px;
                height: 59px;
                border: 1px dashed #000;
                margin-left: 13px;
                float: left;
                img{
                    width:100%;
                    height:100%;
                }
            }
            .menu-right{
                width: calc(100% - 88px);
                float: left;
                margin-left: 16px;
                
                padding-bottom: 15px;
                h1{
                    width:100%;
                    height:20px;
                    font-size:15px;
                    font-weight:500;
                    color:rgba(51,51,51,1);
                    line-height:20px;
                }
                p{  
                    width: 95%;
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
        .stores-menu{
            width: 100%;
            /*display: flex;
            display: -webkit-flex;
            align-content: space-between;*/
            overflow: hidden;
            padding-top: 20px;
            .stores-left{
                margin-left: 25px;
                margin-bottom:20px;
                width:calc(50% - 38px);
                height: 100%;
                /*float: left;*/
                display:inline-block;
                box-shadow:0px 1px 4px 1px rgba(0,0,0,0.1);
                border-radius:5px;
                border:1px solid rgba(255,255,255,0.6);
                position: relative;
                overflow: hidden;
                
                .stores-left-menu{
                    width: 100%;
                    height: 100%;
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
                        margin-top: 20px;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                    h1{
                        padding: 6px 0;
                        width:56px;
                        height:32px;
                        font-size:14px;
                        font-weight:500;
                        color:rgba(51,51,51,1);
                        line-height:20px;
                        text-align: center;
                        margin: 0 auto;
                    }
                    p{
                        width:120px;
                        height:34px;
                        font-size:12px;
                        font-weight:400;
                        color:rgba(102,102,102,1);
                        line-height:17px;
                        text-align: center;
                        margin: 0 auto;
                    }
                }
                &:before{
                    content: '';
                    width: 100%;
                    margin-top: 100%;
                    display: block;
                }
                
            }
            .stores-right{
                margin: 0 25px;
                margin-bottom:20px;
                width:calc(50% - 38px);
                height: 100%;
                /*float: left;*/
                display:inline-block;
                position: relative;
                overflow: hidden;
                box-shadow:0px 1px 4px 1px rgba(0,0,0,0.1);
                border-radius:5px;
                border:1px solid rgba(255,255,255,0.6);
                
                .stores-left-menu{
                    width: 100%;
                    height: 100%;
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
                        margin-top: 20px;
                        img{
                            width: 100%;
                            height: 100%;
                        }
                    }
                    h1{
                        padding: 6px 0;
                        width:56px;
                        height:32px;
                        font-size:14px;
                        font-weight:500;
                        color:rgba(51,51,51,1);
                        line-height:20px;
                        text-align: center;
                        margin: 0 auto;
                    }
                    p{
                        width:120px;
                        height:34px;
                        font-size:12px;
                        font-weight:400;
                        color:rgba(102,102,102,1);
                        line-height:17px;
                        text-align: center;
                        margin: 0 auto;
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





























</style>
