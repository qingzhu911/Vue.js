new Vue({
	el:"#vue-app",
	data:{
		a:0,
		b:0,
		age:20
	},
	methods:{
		/*addtoa:function(){
			console.log(111);
			return this.age+this.a;
			
		},
		addtob:function(){
			console.log(222);
			return this.age+this.b;
			
		}*/
	},
	computed:{
		addtoa:function(){
			console.log(111);
			return this.age+this.a;
			
		},
		addtob:function(){
			console.log(222);
			return this.age+this.b;
			
		}
	}
});

/*
	运用computed属性的时候,{{}}里面不能加()调用函数
	computed:计算属性
	computed:计算属性和方法method使用极度相似
	使用场景:搜索的时候,建议使用计算属性
	计算属性在调用的时候不能加()调用
*/

















