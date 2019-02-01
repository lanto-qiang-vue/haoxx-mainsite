<template>
<div class="hxx-head">
	<div class="center">
		<img src="/img/home/hoxiuxiu-logo.png"/>
		<ul class="right">
			<li class="on">门店赋能</li>
			<li>车主服务</li>
			<li>关于我们</li>
			<li>联系我们</li>
		</ul>
	</div>
</div>
</template>

<script>
export default {
	name: "hxx-head"
}
</script>

<style scoped lang="less">
.hxx-head{
	position: fixed;
	padding: 0 20px;
	left: 0;
	top: 0;
	width: 100%;
	height: 60px;
	text-align: center;
	box-shadow:0 2px 3px 0 rgba(0,0,0,0.17);
	z-index: 10;
	background-color: white;
	-webkit-transform: translateZ(0);
	.center{
		text-align: left;
		width: 100%;
		max-width: 1200px;
		height: 60px;
		display: inline-block;
		position: relative;
		img{
			width: 80px;
			vertical-align: middle;
			position: absolute;
			top: 0;
			bottom: 0;
			margin: auto;
		}
		.right{
			float: right;
			li{
				display: inline-block;
				font-size: 14px;
				line-height: 58px;
				padding: 0 4px;
				margin: 0 10px;
				cursor: pointer;
			}
			.on{
				color: #1890FF;
				border-bottom: 2px solid #1890FF;
			}
		}
	}
}
</style>
