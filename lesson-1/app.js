new Vue({
	el:"#vue-app",
	data:{
		name:"zhangsan",
		job:"web工程师",
		website:"http://www.baidu.com",
		websiteTag:"<a href='http://www.baidu.com'>我是链接</a>"
	},
	methods:{
		greet:function(time){
			return time + this.name;
		}
		
	}
});
/*
	el:element需要控制的标签元素
	data对象:用于存储各个类型的数据array,object,string
	{{}}:字符串模板语法,只能拿到字符串的值
	methods:用于存储各种方法
	v-bind:用于绑定某个标签的属性,也可以省略(:是v-bind的语法糖,和v-bind相同的效果)
	v-html:用于给某个标签绑定值为标签(里面含有标签的字符串)的属性
*/