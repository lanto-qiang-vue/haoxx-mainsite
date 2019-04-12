<template>
<div class="home">
<hxx-head :blockHeight="blockHeight" :scrollTop="scrollTop" ref="header" @blockName="inBlock"></hxx-head>
	<div class="blocks">
	<div class="banner">
		<div class='dummy'></div>
		<swiper :options="swiperOption" ref="banner" class="banner-swiper">
			<!-- slides -->
			<swiper-slide>
				<div class="banner-block">
					<a href="https://mp.weixin.qq.com/s/1McKiLoFtBq9v66rMbjzcA" target="_blank">
					<img src="/img/home/banner-2.png" style="width: 100%;height: 100%"/>
					</a>
				</div>

			</swiper-slide>
			<swiper-slide>
				<div class="banner-block">
					<img src="/img/home/banner-1.png" style="width: 100%;height: 100%"/>
					<div class="text">
						<h1 class="t1">赋能万千门店</h1>
						<h1 class="t2">服务亿万车主</h1>
						<div class="t3" style="right: 22%">
							<p>好修修门店系统</p>
							<div class="modal-button store">立即下载</div>
						</div>
						<div class="t3">
							<p>好修修-运营版</p>
							<div class="modal-button operate">立即下载</div>
						</div>
					</div>
				</div>

			</swiper-slide>


			<!-- Optional controls -->
			<div class="swiper-pagination"  slot="pagination"></div>
			<div class="swiper-button-prev" slot="button-prev"></div>
			<div class="swiper-button-next" slot="button-next"></div>
			<!--<div class="swiper-scrollbar"   slot="scrollbar"></div>-->
		</swiper>
		<img src="/img/home/banner-shade.png" class="shade" />
	</div>
	</div>
	<div class="blocks block0">
		<div class="center">
			<h2>让车主都能享受美好的汽车生活</h2>
			<div class="body">
				<img class="main-pic on" src="/img/home/big-data.png"/>
				<div class="tab tab1 on">
					<img src="/img/home/tab1.png"/>
					<h3>智能服务</h3>
					<p>智能识别汽车的显性和隐性需求，主动、高效、安全、绿色地为您的汽车生活服务。</p>
				</div>
				<div class="tab tab2 on">
					<img src="/img/home/tab2.png"/>
					<h3>SaaS门店</h3>
					<p>针对维修门店的痛点，提供涵盖PC端和移动端的、使用便捷的智能化SaaS经营管理工具。</p>
				</div>
				<div class="tab tab3 on">
					<img src="/img/home/tab3.png"/>
					<h3>车辆价值评估</h3>
					<p>通过大数据和云计算，提供汽车使用过程的稳定性分析与价值评估。</p>
				</div>
				<div class="tab tab4 on">
					<img src="/img/home/tab4.png"/>
					<h3>高效供应链</h3>
					<p>整合供应链，通过配件商城，实现渠道扁平化和动态进销存，为门店提供低成本、高效的智能化服务。</p>
				</div>
			</div>

		</div>

	</div>
	<div class="blocks block1">
		<img class="to-next" src="/img/home/to-next.png"/>
		<div class="center">
			<h2>门店赋能</h2>
			<div class="body">
				<div class="main-pic on">
					<img src="/img/home/energize.png"/>
					<div class="app-er-tag">
						<img src="/img/home/app-ercode.png"/>
						<p>扫我下载好修修门店App</p>
					</div>
				</div>

				<div class="icon on">
					<img src="/img/home/icon1.png"/>
					<h3>一键接车</h3>
					<p>手机App扫车牌／智能识别／自动开单</p>
				</div>
				<div class="icon on">
					<img src="/img/home/icon2.png"/>
					<h3>智能维修</h3>
					<p>全系车型保养规则／整车结构图/在线商城精准选购配件</p>
				</div>
				<div class="icon on">
					<img src="/img/home/icon3.png"/>
					<h3>客户关系</h3>
					<p>智能画像／精准服务</p>
				</div>
				<div class="icon on">
					<img src="/img/home/icon4.png"/>
					<h3>进销存</h3>
					<p>动态库存管理／智能下单补货</p>
				</div>
				<div class="icon on">
					<img src="/img/home/icon5.png"/>
					<h3>车险服务</h3>
					<p>手机APP智能报价／保险到期提醒</p>
				</div>
			</div>
		</div>
	</div>
	<div class="blocks block2">
		<img class="to-next" src="/img/home/to-next.png"/>
		<img class="driver-side" src="/img/home/driver-side.png"/>
		<div class="center">
			<h2>车主服务</h2>
			<div class="body">
				<img class="main-pic on" src="/img/home/factory-bg.png"/>

				<div class="tag tag1 on">
					<div>
						<p>紧急救援</p>
						<p>快捷、省心</p>
					</div>
					<h3>一键救援</h3>
				</div>
				<div class="tag tag2 on">
					<div>
						<p>车位查找</p>
						<p>错峰停车</p>
					</div>
					<h3>停车服务</h3>
				</div>
				<div class="tag tag3 on">
					<div>
						<p>查选正规门店</p>
						<p>远离黑汽修</p>
					</div>
					<h3>查选维修</h3>
				</div>
				<div class="tag tag4 on">
					<div>
						<p>车辆价值评估</p>
						<p>二手车增值</p>
					</div>
					<h3>二手车服务</h3>
				</div>
				<div class="tag tag5 on">
					<div>
						<p>点评服务</p>
						<p>口碑推荐</p>
					</div>
					<h3>维修点评</h3>
				</div>
				<div class="tag tag6 on">
					<div>
						<p>查选正规驾校</p>
						<p>满足个性学车需求</p>
					</div>
					<h3>学车找我</h3>
				</div>
			</div>
		</div>
	</div>
	<div class="blocks block3">
		<!--<img class="to-next" src="/img/home/to-next.png"/>-->
		<div class="center">
			<h2>关于我们</h2>
			<div class="body">
				<p><span>好修修</span>专注于汽车生活相关大数据的智能化应用，打造以云计算为基础的S2b2C的汽车后市场服务平台。</p>
				<p>提供汽车使用过程中的稳定性分析与价值评估，制定汽车及零部件的智能维护策略，聚合车主并智能匹配其个性化养车需求。</p>
				<p>提供SaaS化工具赋能门店，整合上游供应链，提供增值服务，帮助门店，共同服务车主，为车主提供高效、智能、便捷的创新型服务。</p>
				<p class="bold">让车主都能享受美好的汽车生活是我们的愿景！</p>
			</div>
		</div>
		<div class="advisory">
			<!--<img src="/img/home/message-bg.png"/>-->
			<div>
				<p>如果您想了解更多业务内容或洽谈合作请立即联系我们，我们将以最快的速度回复您!</p>
				<router-link tag="h3" to="/consult">在线业务咨询</router-link>
			</div>
		</div>
	</div>
	<div class="block4">
		<hxx-foot @toRoll="toRoll"></hxx-foot>
	</div>
	<quick-tag v-show="showTip"></quick-tag>
	<div class="modal" v-show="showModal=='store'">
		<div class="mask"></div>
		<div class="content">
			<div class="left">
				<p>扫我下载好修修门店App</p>
				<img src="/img/home/app-ercode.png"/>
			</div>
			<div class="right" @click="goHxx">
				<p>好修修门店系统<span>（电脑端）</span></p>
				<small>点击在线使用</small>
			</div>
			<i class="fa fa-times close" @click="showModal= ''"></i>
		</div>
	</div>

	<div class="modal" v-show="showModal=='operate'">
		<div class="mask"></div>
		<div class="content" style="text-align: center;">
			<div class="left" style="margin: 0;">
				<p>扫我下载好修修-运营版</p>
				<img src="/img/home/好修修运营app下载页二维码.png"/>
				<div style="color: #D0021B;font-size: 12px;margin-top: 15px">注：目前只支持Andirond版本下载</div>
			</div>
			<i class="fa fa-times close" @click="showModal= ''"></i>
		</div>
	</div>
</div>
</template>

<script>
import HxxHead from '@/components/Head.vue'
import HxxFoot from '@/components/Foot.vue'
import QuickTag from '@/components/QuickTag.vue'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
	name: 'home',
	components: {HxxHead, HxxFoot, QuickTag, swiper, swiperSlide},
	data(){
		return{
			swiperOption:{
				// slidesPerView : 3,
				centeredSlides : true,
				loop : true,
				// loopAdditionalSlides: 3,
				// loopedSlides: 3,
				// width: window.innerWidth*2.4,
				// watchOverflow: true,
				pagination: {
					el: '.swiper-pagination',
					clickable: true
				},
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				autoplay: {
					delay: 5000,
					disableOnInteraction: false,
				},
			},
			blockHeight: {
				finish: false,
			},
			showTip: false,
			showModal: '',
			timer: null,
			scrollTop: 0
		}
	},
	mounted(){
		document.querySelector('.banner').addEventListener('click', (e)=>{
			let target = e.target || e.srcElement;
			if (!!target ) {
				// console.log(target.className)
				if(target.className.indexOf('store')>=0) this.showModal= 'store'
				if(target.className.indexOf('operate')>=0) this.showModal= 'operate'
			}
		})

		setTimeout(()=>{
			this.calcHeight()
			this.inBlock('block0')
		},50)

		window.onresize = ()=>{
			if(this.timer){
				clearTimeout(this.timer)
				this.timer= null
			}
			this.timer= setTimeout(()=>{
				this.calcHeight()
			}, 500)
		}

		window.onscroll= ()=>{
			// console.log('window.onscroll')
			let  top = document.documentElement.scrollTop||document.body.scrollTop;
			this.showTip= top> 200?  true: false
			if(Math.abs(top - this.scrollTop)  >20){
				this.scrollTop= top
			}

		}

		document.querySelector('.banner').addEventListener('mouseover', ()=>{
			this.$refs.banner.swiper.autoplay.stop();
		})
		document.querySelector('.banner').addEventListener('mouseout', ()=>{
			this.$refs.banner.swiper.autoplay.start();
		})
	},
	methods:{
		calcHeight(){
			for(let i=0; i<=4; i++){
				// console.log('i=', i)
				let blickName= 'block'+i
				let dom= document.querySelector('.'+blickName)
				this.blockHeight[blickName]={
					start: dom.offsetTop,
					end: dom.offsetTop+ dom.offsetHeight
				}
			}
			this.blockHeight.finish= true
		},
		toRoll(name){
			this.$refs.header.rollTo(name)
		},
		goHxx(){
			window.open('https://hxx.hoxiuxiu.com/login', '_blank')
		},
		inBlock(name){
			console.log('inBlock:', '['+name+']')
			if(!name) return
			if(!document.querySelector('.'+name).classList.contains('on')){

				function timeout(dom) {
					return new Promise((resolve) => {
						setTimeout(()=>{
							dom.style.cssText= ''
							dom.classList.remove('on')
							resolve()
						}, 400);
					});
				}

				async function asyncPrint(domes, dom) {
					if(dom) await timeout(dom);
					for(let i in domes){
						if(parseInt(i)>=0) {
							await timeout(domes[i]);
						}
					}
				}

				switch (name){
					case 'block0':{
						asyncPrint(document.querySelectorAll('.block0 .tab'), document.querySelector('.block0 .main-pic'))
						break
					}
					case 'block1':{
						asyncPrint(document.querySelectorAll('.block1 .icon'),document.querySelector('.block1 .main-pic'))
						break
					}
					case 'block2':{
						asyncPrint(document.querySelectorAll('.block2 .tag'),document.querySelector('.block2 .main-pic'))
						break
					}
				}
				document.querySelector('.'+name).classList.add('on')
			}

		}
	}
}
</script>

<style scoped lang="less">
.home{
	*{
		transition: opacity .7s;
	}
	margin-top: 60px;
	.banner{
		position: relative;
		overflow: hidden;

		/*display: inline-block;*/
		/*text-align: left;*/
		/*width: 1200px;*/
		.dummy{
			margin-top: 30%;
		}
		.banner-swiper{
			position: absolute;
			left: 0;
			right: 0;
			top: 0;
			bottom: 0;
			.banner-block{
				width: 100%;
				height: 100%;
				position: relative;
				.text{
					width: 1200px;
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
						top: 20%;
						left: 30px;
					}
					.t2{
						top: 45%;
						left: 320px;
					}
					.t3{
						position: absolute;
						top: 30%;
						right: 5%;
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
		}
		.shade{
			position: absolute;
			width: 100%;
			left: 0;
			bottom: -4px;
			z-index: 2;
			pointer-events:none;
		}
	}
	.blocks{
		text-align: center;
		position: relative;
		.center{
			text-align: left;
			width: 100%;
			max-width: 1200px;
			display: inline-block;
			position: relative;
			padding: 0 20px;
			margin: 50px 0;
			h2{
				margin-top: 20px;
				font-size: 36px;
				text-align: center;
				font-weight: 400;
			}
		}
		.to-next{
			width: 130px;
			position: absolute;
			left: 50%;
			top: 0;
			transform: translate(-50%, -50%);
		}
	}
	.block0{
		.body{
			margin: 100px 0 ;
			position: relative;
			text-align: center;
			/*background-color: gray;*/
			.main-pic{
				width: 50%;
			}
			.main-pic.on{
				opacity: 0;
			}
			.tab{
				position: absolute;
				overflow: hidden;
				width: 330px;
				text-align: left;
				h3{
					margin: 15px 0;
					font-size: 22px;
					font-weight: 500;
					padding-left: 110px;
				}
				p{
					padding-left: 110px;
					color: #6B798E;
					font-size: 16px;
					word-wrap: break-word;
					word-break: break-all;
				}
				img{
					width: 110px;
					position: absolute;
					left: 0;
					top: 0;
				}
			}
			.tab1{
				top: -1%;
				left: 1%;
			}
			.tab2{
				top: 3%;
				right: 3%;
			}
			.tab3{
				bottom:1%;
				left: 3%;
			}
			.tab4{
				bottom:1%;
				right: 0%;
			}
			.tab.on{
				transform: translate(0, -50px);
				opacity: 0;
			}
		}
	}
	.block1{
		background-color: #F8F8F8;
		.body{
			margin: 100px 0 ;
			position: relative;
			min-height: 760px;
			.main-pic{
				width: 65%;
				position: absolute;
				top: 0;
				right: 0;
				>img{
					width: 100%;
				}
				.app-er-tag{
					margin: 20px auto 0 40%;
					padding: 10px;
					text-align: center;
					overflow: hidden;
					width: 170px;
					box-shadow:0px 1px 5px 1px rgba(0,0,0,0.11);
					border-radius:2px;
					img{
						width: 100%;
					}
					p{
						font-size: 12px;
						color: #4A4A4A;
						white-space: nowrap;
					}
				}
			}
			.main-pic.on{
				opacity: 0;
			}
			.icon{
				position: relative;
				margin-bottom: 6%;
				overflow: hidden;
				img{
					width: 80px;
					float: left;
				}
				h3{
					margin-bottom: 15px;
					padding-left: 10px;
					font-size: 22px;
					font-weight: 500;
					float: left;
				}
				p{
					color: #4A4A4A;
					font-size: 16px;
					white-space: nowrap;
					position: absolute;
					left: 90px;
					top: 40px;
				}

			}
			.icon.on{
				transform: translate(0, -50px);
				opacity: 0;
			}
		}
	}
	.block2{
		background: white url('/img/home/driver-bg.png') no-repeat center center;
		/*background-size: 100% 100%;*/
		background-size: cover;
		position: relative;
		/*min-height: 1100px;*/
		/*overflow: hidden;*/
		/*.dummy{*/
			/*margin-top: 65%;*/
		/*}*/
		.driver-side{
			width: 100%;
			position: absolute;
			left: 0;
			bottom: 0;
		}
		.center {
			/*position: absolute;*/
			/*top: 0;*/
			/*left: 50%;*/
			/*transform: translate(-50%, 0);*/
			/*margin: 0;*/
			h2{
				color: white;
			}
		}
		.body{
			margin-top: 100px;
			/*margin-bottom: 50px;*/
			padding-top: 50px;
			position: relative;
			overflow: visible;
			.main-pic{
				width: 100%;
			}
			.main-pic.on{
				opacity: 0;
			}
			.tag{
				text-align: center;
				position: absolute;
				transform: translateX(-50%);
				div{
					display: inline-block;
					padding-left: 15px;
					position: relative;
					text-align: left;
					font-size: 14px;
					color: white;
					&:after{
						content: '';
						width:6px;
						height:6px;
						border:2px solid #0DE791;
						border-radius: 100%;
						position: absolute;
						top: 7px;
						left: 0;
					}
				}
				h3{
					/*display: inline-block;*/
					margin-top: 10px;
					font-size: 18px;
					font-weight: 500;
					color: white;
					height: 40px;
					line-height: 40px;
					padding: 0 30px;
					background:#FAA536;
					box-shadow:0 2px 3px 0 #483002;
					border-radius:20px;
				}
			}
			.tag1{
				top: 10%;
				left: 10.55%;
			}
			.tag2{
				top: 2%;
				left: 23.55%;
			}
			.tag3{
				top: -7%;
				left: 38%;
			}
			.tag4{
				top: 2%;
				left: 51%;
			}
			.tag5{
				top: -7%;
				left: 64.55%;
			}
			.tag6{
				top: 2%;
				left: 83%;
			}
			.tag.on{
				transform: translate(-50%, -50px);
				opacity: 0;
			}
		}
	}
	.block3{
		.center{
			margin-top: 0;
			h2{
				margin-top: 70px;
			}
			.body{
				margin: 30px 0;
				p{
					font-size: 18px;
					line-height: 36px;
					span{
						color: #2D4996;
						font-weight: 500;
					}
				}
				.bold{
					font-weight: 500;
				}
			}
		}
		.advisory{
			position: relative;
			overflow: hidden;
			height: 180px;
			/*background-color: #373D41;*/
			background: #373D41 url('/img/home/message-bg.png') no-repeat center center;
			background-size: cover;
			img{
				width: 100%;
				height: 100%;
				min-height: 100%;
				min-width: 100%;
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
			}
			div{
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				text-align: center;
				p{
					font-size: 18px;
					color: white;
					white-space: nowrap;
				}
				h3{
					display: inline-block;
					margin-top: 30px;
					font-size: 18px;
					font-weight: 400;
					color: white;
					height: 40px;
					line-height: 40px;
					padding: 0 40px;
					background:#FAA536;
					box-shadow:0px 3px 6px 0px rgba(171,92,5,1);;
					border-radius:20px;
					cursor: pointer;
				}
			}
		}
	}
	.modal{
		position: fixed;
		width: 100%;
		height: 100vh;
		overflow: hidden;
		left: 0;
		top: 0;
		z-index: 30;
		.mask{
			width: 100%;
			height: 100%;
			background-color: #4A4A4A;
			opacity: .2;
		}
		.content{
			position: absolute;
			top: 30%;
			left: 50%;
			transform: translate(-50%, -50%);
			background-color: white;
			border-radius:2px;
			overflow: hidden;
			padding: 30px 30px 50px;
			white-space: nowrap;
			width: 500px;
		}
		.left{
			width: 200px;
			display: inline-block;
			margin-right: 40px;
			vertical-align: middle;
			p{
				font-weight: 600;
				font-size: 16px;
				color: #4A4A4A;
				text-align: center;
				padding-bottom: 10px;
			}
			img{
				width: 100%;
				border: 1px solid #C9C9C9;
			}

		}
		.right{
			display: inline-block;
			vertical-align: middle;
			background:linear-gradient(90deg,rgba(249,172,59,1) 0%,rgba(255,102,15,1) 100%);
			box-shadow:0px 3px 5px 0px rgba(171,92,5,0.39);
			border-radius:3px;
			color: white;
			text-align: center;
			padding: 10px;
			font-size: 14px;
			cursor: pointer;
			small, span{
				font-size: 12px;
			}
		}
		.close{
			font-size: 14px;
			color: #000000;
			padding: 10px;
			position: absolute;
			top: 0;
			right: 0;
			opacity: .4;
			cursor: pointer;
			pointer-events: auto;
		}
	}
}
</style>
<style lang="less">
.home{
	.swiper-button-prev, .swiper-button-next{
		/*background-size: 20px auto;*/
		/*background: none;*/
		background-color: rgba(0, 0, 0, 0.2);
		background-image: none;
		&:before{
			content: '';
			width: 20px;
			height: 20px;
			border-top: 2px solid rgba(255, 255, 255, 0.5);
			border-left: 2px solid rgba(255, 255, 255, 0.5);
			position: absolute;
			top: 12px;
			left: 10px;
			transform: rotate(-45deg);
		}
	}
	.swiper-button-next:before{
		transform: rotate(135deg);
		left: -2px;
	}
	.swiper-pagination-bullet{
		width: 20px;
		height: 2px;
		border-radius: 0;
	}
	.swiper-pagination-bullet-active{
		background-color: white;
	}
}
</style>
