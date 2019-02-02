<template>
<ul class="quick-tag">

	<li class="top" @click="toTop">
		<p class="triangle"></p>
		<div><i></i></div>
	</li>
	<li><i class="fa fa-phone"></i>
		<div class="hot-line">
			<span>客服热线</span>
			<p>400-663-8210</p>
		</div>
	</li>
	<li @click="toQQ"><i class="fa fa-qq" style="font-size: 20px"></i></li>
	<li @click="toConsult"><i class="fa fa-commenting-o nostroke" style="font-size: 23px"></i></li>
</ul>
</template>

<script>
export default {
	name: "quick-tag",
	methods:{
		toTop(){
			let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
			if (currentScroll > 0) {
				window.requestAnimationFrame(this.toTop);
				window.scrollTo (0,currentScroll - (currentScroll/5));
			}
		},
		toQQ(){
			window.open('tencent://message/?uin=3181682369')
		},
		toConsult(){
			window.open('/#/consult', '_blank')
		}
	}
}
</script>

<style scoped lang="less">
@bg:#7A899D;
@bgon:#1083D8;
.quick-tag{
	-webkit-transform: translateZ(0);
	position: fixed;
	width: 40px;
	right: 30px;
	bottom: 30%;
	z-index: 50;
	li{
		background-color: @bg;
		cursor: pointer;
		margin-bottom: 6px;
		height: 40px;
		position: relative;
		>i{
			font-size: 25px;
			color: transparent;
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			-webkit-text-stroke: 1.5px white;
			pointer-events:none;
		}
		.nostroke{
			color: white;
			-webkit-text-stroke: initial;
		}
		.hot-line{
			padding: 10px 20px 20px;
			background:rgba(255,255,255,1);
			box-shadow:0px 2px 4px 0px rgba(0,0,0,0.15);
			border-radius:2px;
			overflow: hidden;
			color: #555556;
			font-size: 14px;
			position: absolute;
			top: 50%;
			right: 45px;
			transform: translateY(-50%);
			display: none;
			cursor: default;
			p{
				color: #268CDA;
				font-size: 16px;
				margin-top: 10px;
				white-space: nowrap;
			}
		}
		&:hover{
			background-color: @bgon;
			.triangle{
				border-color:transparent transparent @bgon;
			}
			.hot-line{
				display: block;
			}
		}
	}
	.top{
		background: none;
		height: auto;
		.triangle{
			width:0;
			height:0;
			border-width:0 20px 10px;
			border-style:solid;
			border-color:transparent transparent @bg;
			position:relative;
		}
		div{
			height: 16px;
			background-color: @bg;
			position: relative;
			pointer-events:none;
			i{
				width:0;
				height:0;
				border-width:0 12px 8px;
				border-style:solid;
				border-color:transparent transparent white;
				position:absolute;
				top: 0;
				left: 50%;
				transform: translateX(-50%);
				&:before{
					content: '';
					width:0;
					height:0;
					border-width:0 12px 8px;
					border-style:solid;
					border-color:transparent transparent @bg;
					position:absolute;
					top: 2px;
					left: 50%;
					transform: translateX(-50%);
					transition: all .5s;
				}
			}
		}
		&:hover{
			background: none;
			.triangle{
				border-color:transparent transparent @bgon;
			}
			div{
				background-color: @bgon;
				i:before{
					border-color:transparent transparent @bgon;
				}
			}
		}

	}
}

</style>
