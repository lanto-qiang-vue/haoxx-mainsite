<template>
<div class="home">
<hxx-head></hxx-head>
	<div class="banner">
		<div class='dummy'></div>
		<swiper :options="swiperOption" ref="mySwiper" class="banner-swiper">
			<!-- slides -->
			<swiper-slide>
				<div class="banner-block">
					<img src="/img/home/banner-1.png" style="width: 100%;height: 100%"/>
					<h1 class="t1">赋能万千门店</h1>
					<h1 class="t2">服务亿万车主</h1>
					<div class="t3">
						<p>好修修门店系统</p>
						<div class="button">立即下载</div>
					</div>
				</div>

			</swiper-slide>

			<!-- Optional controls -->
			<div class="swiper-pagination"  slot="pagination"></div>
			<!--<div class="swiper-button-prev" slot="button-prev"></div>-->
			<!--<div class="swiper-button-next" slot="button-next"></div>-->
			<!--<div class="swiper-scrollbar"   slot="scrollbar"></div>-->
		</swiper>
		<img src="/img/home/banner-shade.png" class="shade" />
	</div>
	<div class="blocks block0">
		<div class="center">
			<h2>让车主都能享受美好的汽车生活</h2>
			<div class="body">
				<img class="main-pic" src="/img/home/big-data.png"/>
				<div class="tab tab1">
					<img src="/img/home/tab1.png"/>
					<h3>智能服务</h3>
					<p>智能识别汽车的显性和隐性需求，主动、高效、安全、绿色地为您的汽车生活服务。</p>
				</div>
				<div class="tab tab2">
					<img src="/img/home/tab2.png"/>
					<h3>SaaS门店</h3>
					<p>针对维修门店的痛点，提供涵盖PC端和移动端的、使用便捷的智能化SaaS经营管理工具。</p>
				</div>
				<div class="tab tab3">
					<img src="/img/home/tab3.png"/>
					<h3>车辆价值评估</h3>
					<p>通过大数据和云计算，提供汽车使用过程的稳定性分析与价值评估。</p>
				</div>
				<div class="tab tab4">
					<img src="/img/home/tab4.png"/>
					<h3>高效供应链</h3>
					<p>整合供应链，通过配件商城，实现渠道扁平化和动态进销存，为门店提供低成本、高效的智能化服务。</p>
				</div>
			</div>
			<img class="to-next" src="/img/home/to-next.png"/>
		</div>
	</div>
	<div class="blocks block1">
		<div class="center">
			<h2>门店赋能</h2>
		</div>
	</div>
</div>
</template>

<script>
import HxxHead from '@/components/Head.vue'
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
	name: 'home',
	components: {HxxHead, swiper, swiperSlide},
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
					// nextEl: '.swiper-button-next',
					// prevEl: '.swiper-button-prev',
				},
				autoplay: {
					delay: 8000,
					disableOnInteraction: false,
				},
			}
		}
	},
}
</script>

<style scoped lang="less">
.home{
	margin-top: 60px;
	.banner{
		position: relative;
		overflow: hidden;
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
				h1{
					color: white;
					font-size: 36px;
					font-weight: 400;
					text-shadow:3px 3px 6px rgba(0,0,0,0.68);
					position: absolute;
				}
				.t1{
					top: 20%;
					left: 10%;
				}
				.t2{
					top: 40%;
					left: 25%;
				}
				.t3{
					position: absolute;
					top: 30%;
					right: 20%;
					p{
						font-size: 18px;
						color: white;
					}
					.button{
						margin-top: 20px;
						display: inline-block;
						padding: 0 20px;
						font-size: 14px;
						height: 30px;
						line-height: 30px;
						color: white;
						text-align: center;
						background:linear-gradient(90deg,rgba(249,172,59,1) 0%,rgba(255,102,15,1) 100%);
						box-shadow:0 4px 9px 3px rgba(112,60,2,0.61);
						border-radius:24px;
						cursor: pointer;
					}
				}
			}
		}
		.shade{
			position: absolute;
			width: 100%;
			left: 0;
			bottom: -1px;
			z-index: 2;
		}
	}
	.block0{
		text-align: center;
		.center{
			text-align: left;
			width: 100%;
			max-width: 1200px;
			display: inline-block;
			position: relative;
			padding: 0 20px;
			margin-top: 50px;
			h2{
				font-size: 30px;
				text-align: center;
				font-weight: 400;
			}
			.body{
				margin: 100px 0 150px 0;
				position: relative;
				text-align: center;
				/*background-color: gray;*/
				.main-pic{
					width: 50%;
				}
				.tab{
					position: absolute;
					overflow: hidden;
					width: 280px;
					text-align: left;
					h3{
						margin: 15px 0;
						font-size: 18px;
						font-weight: 600;
						padding-left: 110px;
					}
					p{
						padding-left: 110px;
						color: #6B798E;
						font-size: 12px;
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
					left: 5%;
				}
				.tab2{
					top: 3%;
					right: 5%;
				}
				.tab3{
					bottom:1%;
					left: 7%;
				}
				.tab4{
					bottom:1%;
					right: 5%;
				}
			}
			.to-next{
				width: 130px;
				position: absolute;
				left: 50%;
				bottom: 0;
				transform: translate(-50%, 50%);
			}
		}
	}
	.block1{
		background-color: #F8F8F8;
	}
}
</style>
