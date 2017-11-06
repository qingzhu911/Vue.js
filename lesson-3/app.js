new Vue({
	el:"#vue-app",
	data:{
		age:18,
		name:"zhangsan"
	},
	methods:{
		logName:function(){
			// console.log(this.$refs.name.value);
			this.name = this.$refs.name.value;
		},
		logAge:function(){
			
		}
	}
});
/*
	双向数据绑定指令:
	v-model:应用于input,textarea,select其他的标签不用
	ref:用于标识元素唯一,相当于id,通过$refs获取属性值
*/
















