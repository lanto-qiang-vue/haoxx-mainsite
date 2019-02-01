<template>
<div class="hxx-foot">
	<div class="center">
		<h2>联系我们</h2>
		<ul>
			<li>
				<p>全国客服热线</p>
				<h4><i class="fa fa-phone"></i>400-663-8210</h4>
				<p>总机：021-95779016</p>
				<p>邮箱：hoxiuxiu@lantoev.com</p>
			</li>
			<li class="long">
				<p>公司地址：上海市长宁区淞虹路207号明基商务广场C栋4楼B座</p>
				<p>官方QQ：3181682369</p>
				<p>官方微博：<a href="https://weibo.com/hoxiuxiu" target="_blank"><i class="fa fa-weibo"></i></a></p>
			</li>
			<li>
				<div class="ercode">
					<img src="/img/home/wechat-ercode.png"/>
					<p>好修修微信公众号</p>
				</div>
			</li>
			<li>
				<p>门店赋能</p>
				<p>车主服务</p>
				<p>关于我们</p>
				<p>联系我们</p>
			</li>
		</ul>
	</div>
	<hr/>
	<div class="center">
		<footer>Copyright© 2019 上海衡益网络技术有限公司.All Rights Reserved | 沪ICP备18016827号-1</footer>
	</div>
</div>
</template>

<script>
export default {
	name: "hxx-foot"
}
</script>

<style scoped lang="less">
.hxx-foot{
	background-color: #373D41;
	color: #989C9E;
	font-size: 12px;
	overflow: hidden;
	text-align: center;
	.center{
		text-align: left;
		margin: 20px 0;
		padding: 0 20px;
		width: 100%;
		max-width: 1200px;
		display: inline-block;
		position: relative;
		h2{
			font-size: 18px;
			font-weight: 400;
			margin-bottom: 20px;
			color: white;
		}
		ul{
			overflow: visible;
			li{
				width: 23%;
				display: inline-block;
				padding: 0 10px;
				vertical-align: top;
				h4{
					font-size: 18px;
					font-weight: 600;
					position: relative;
					margin-bottom: 15px;
					color: white;
					i{
						font-size: 26px;
						position: absolute;
						left: -26px;
						bottom: 0;
					}
				}
				p{
					line-height: 20px;
					margin-bottom: 5px;
				}
				.fa-weibo{
					font-size: 20px;
				}
				.ercode{
					width: 100%;
					max-width: 130px;
					img{
						width: 100%;
					}
					p{
						margin-top: 10px;
						text-align: center;
					}
				}
			}
			.long{
				width: 30%;
			}
		}
	}
	hr{
		border-top: 1px solid #3F464C;
	}
}
</style>
