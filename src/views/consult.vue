<template>
<div class="to-consult">
<hxx-head ref="header"></hxx-head>
<div class="body">
	<div class="center" v-show="!success">
		<div class="middle">
			<h1>在线业务咨询</h1>
			<small>申请与好修修客服联系以便及时解决您的问题</small>
			<Form :model="form" label-position="top" class="consult-form" :rules="ruleValidate" ref="form">
				<FormItem label="姓名" prop="name">
					<Input v-model="form.name" size="large"></Input>
				</FormItem>
				<FormItem label="公司" prop="company">
					<Input v-model="form.company" size="large"></Input>
				</FormItem>
				<FormItem label="手机号" prop="tel">
					<Input v-model="form.tel" size="large" :maxlength="11"></Input>
				</FormItem>
				<FormItem label="电子邮箱地址" prop="email">
					<Input v-model="form.email" size="large"></Input>
				</FormItem>
				<FormItem label="请在此输入您的问题" prop="note">
					<Input v-model="form.note" type="textarea" :rows="8" size="large"></Input>
				</FormItem>
			</Form>
			<small>提交后我们将尽快与您取得联系</small>
			<div class="submit" @click="submit">提交</div>
		</div>

	</div>
	<div class="success" v-show="success">
		<img src="/svg/right.svg">
		<h2>提交成功</h2>
		<small>感谢您提出的业务问题，为进一步合作我们会尽快与您取得联系。</small>
		<router-link tag="div" to="/" class="submit back">返回首页</router-link>
		<span>{{second}}秒后自动返回到首页</span>
	</div>
</div>
<hxx-foot @toRoll="toRoll"></hxx-foot>
</div>
</template>

<script>
import HxxHead from '@/components/Head.vue'
import HxxFoot from '@/components/Foot.vue'
export default {
	name: "to-consult",
	components: {HxxHead, HxxFoot},
	data(){
		let rule= [{ required: true, message:'必填项不能为空'}]
		let validate = (rule, value, callback) => {
			let p = /^1[3456789]\d{9}$/;
			if (p.test(value)||!value) {
				callback();
			}else{
				callback(new Error('请输入正确的号码'));
			}
		};
		return{
			form: {
				name: '',
				company: '',
				tel: '',
				email: '',
				note: '',
			},
			ruleValidate : {
				name: rule,
				company: rule,
				tel: [...rule,
					{ len:11, validator: validate, message: '请输入正确的号码'}
				],
				email: rule,
				note: rule,
			},
			success: false,
			second: 3
		}
	},
	methods:{
		submit(){
			this.$refs.form.validate((valid) => {
				if (valid) {
					this.$axios({
						baseURL: '/proxy-hxx/',
						url: '/saveConsulting.do',
						method: 'post',
						data: this.form
					}).then( (res) => {
						if(res.data.success){
							this.toSuccess()
						}
					})
				} else {}
			})
		},
		toSuccess(){
			this.success= true
			let timer=setInterval(()=>{
				if(this.second<=0){
					clearInterval(timer)
					this.$router.push('/')
				}else{
					this.second--
				}
			},1000)
		},
		toRoll(name){
			this.$refs.header.rollTo(name)
		}
	}
}
</script>

<style scoped lang="less">
.to-consult{
	.body{
		margin-top: 60px;
		background-color: #F6F6F6;
		padding: 20px 20px 50px;
		text-align: center;
		min-height: 60vh;
		position: relative;
		.center{
			width: 100%;
			max-width: 750px;
			display: inline-block;
			position: relative;
			background:white;
			box-shadow:0px 2px 3px 0px rgba(0,0,0,0.13);
			border-radius:5px;
			padding: 30px 30px 50px;
			overflow: hidden;
			.middle{
				text-align: left;
				display: inline-block;
				position: relative;
				width: 500px;
				overflow: hidden;
				h1{
					font-size: 20px;
					margin-bottom: 20px;
				}
				small{
					color: #555556;
					font-size: 12px;
				}
				.consult-form{
					margin-top: 30px;
				}
			}
		}
		.success{
			position: absolute;
			top: 30%;
			left: 50%;
			transform: translate(-50%, -50%);
			h2{
				margin: 30px 0;
			}
			.back{
				display: inline-block;
				margin-top: 50px;
			}
			span{
				margin-top: 10px;
				display: block;
				font-size: 12px;
				color: #1890FF;
			}
		}
		.submit{
			text-align: center;
			margin-top: 30px;
			width:300px;
			height:40px;
			line-height: 40px;
			color: white;
			font-size: 18px;
			background: #1890FF;
			border-radius:3px;
			cursor: pointer;
		}
	}

}
</style>
