<template>
<div class="hxx-head">
	<div class="center">
		<router-link tag="img" to="/" src="/img/home/hoxiuxiu-logo.png"></router-link>
		<ul class="right">
			<li :class="{on: blockName=='block1'}" @click="rollTo('block1')">门店赋能</li>
			<li :class="{on: blockName=='block2'}" @click="rollTo('block2')">车主服务</li>
			<li :class="{on: blockName=='block3'}" @click="rollTo('block3')">关于我们</li>
			<li :class="{on: blockName=='block4'}" @click="rollTo('block4')">联系我们</li>
		</ul>
	</div>
</div>
</template>

<script>
export default {
	name: "hxx-head",
	props: ['blockHeight', 'scrollTop'],
	data(){
		return{
			blockName: '',
			rollName: ''
		}
	},
	computed:{
		isIndex(){
			return this.$route.name=='home'
		},
		hasHeight(){
			return this.blockHeight.finish
		}
	},
	watch:{
		scrollTop(val){
			this.calcPlace(val)
		}
	},
	mounted(){
		let params= this.$route.params
		console.log(this.$route)
		if(params && params.roll){
			setTimeout(()=>{
				this.rollTo(params.roll)
			}, 500)

		}
	},
	methods:{
		calcPlace(scrollTop){
			let centerHeight= window.innerHeight/1.5 + scrollTop
			let match= false
			for(let key in this.blockHeight){
				let item= this.blockHeight[key]
				if(item instanceof Object){
					if(centerHeight>= item.start && centerHeight< item.end){
						this.blockName= key
						match= true
						break
					}
				}
			}
			if(!match){
				this.blockName=''
			}
		},
		rollTo(name){
			if(this.blockHeight && this.blockHeight[name]){
				this.rollName= name
				this.toScroll()
				setTimeout(()=>{
					this.blockName= name
				},300)
			}else{
				this.$router.push({name: 'home', params:{roll: name}})
			}

		},
		toScroll(){
			// console.log('toScroll')
			let top= this.blockHeight[this.rollName].start
			let currentScroll = document.documentElement.scrollTop || document.body.scrollTop;
			let calc= top- currentScroll
			if (Math.abs(calc) >20 && currentScroll<= (document.body.scrollHeight-window.innerHeight)) {
				window.requestAnimationFrame(this.toScroll);
				window.scrollTo (0, currentScroll+ calc/5);
			}else{
				window.scrollTo (0, top);
			}
		},
	}
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
			width: 100px;
			vertical-align: middle;
			position: absolute;
			top: 0;
			bottom: 0;
			margin: auto;
			cursor: pointer;
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
				border-bottom: 2px solid white;
			}
			.on{
				color: #1890FF;
				border-bottom: 2px solid #1890FF;
			}
		}
	}
}
</style>
