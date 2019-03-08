<template>
<div>
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
            <div class="menu-right">
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
        <div class="serve-menu">
            <div class="menu-left">
                <img src="/img/content/icon-capacity.png" alt="">
            </div>
            <div class="menu-right">
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
            color: white;
            font-size: 54px;
            font-weight: 400;
            text-shadow:3px 3px 6px rgba(0,0,0,0.68);
            position: absolute;
        }
        .t1{
            top: 25%;
            left: 30px;
        }
        .t2{
            top: 50%;
            left: 320px;
        }
        .t3{
            position: absolute;
            top: 35%;
            right: 10%;
            p{
                font-size: 20px;
                color: white;
            }
            .modal-button{
                margin-top: 20px;
                display: inline-block;
                padding: 0 40px;
                font-size: 18px;
                height: 40px;
                line-height: 40px;
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

.car-serve{
    width: 100%;
    height: 100%;
    background: #F8F8F8;
    .serve-head{
        width: 100%;
        margin-bottom:20px;
        position: relative;
        h1{
            width: 100%;
            height: 130px;
            line-height: 130px;
            text-align: center;
            font-size: 36px;
            color: #333;
            font-weight:600;

        }
        span{
            width: 60px;
            height: 4px;
            background:rgba(88,125,226,1);
            border-radius:2px;
            position: absolute;
            top:100px;
            left: 50%;
            display: block;
            margin-left: -30px;
        }
    }
}

.serve-menu{
    width: 100%;
    overflow: hidden;
    padding-top: 15px;
    .menu-left{
        width: 118px;
        height: 118px;
        border: 1px dashed #000;
        margin-left: 30px;
        float: left;
        img{
            width:100%;
            height:100%;
        }
    }
    .menu-right{
        float: left;
        margin-left: 16px;
        border-bottom: 1px solid #eee;
        padding-bottom: 30px;
        h1{
            width:100%;
            height:41px;
            font-size:30px;
            font-weight:500;
            color:rgba(51,51,51,1);
            line-height:41px;
        }
        p{
            width:550px;
            font-size:26px;
            font-weight:400;
            color:rgba(102,102,102,1);
            line-height:48px;
        }
    }
}























</style>
