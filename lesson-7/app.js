new Vue({
	el:"#vue-app",
	data:{
		colors:["hotpink","red","lightgreen"],
		users:[
			{"name":"zhangsan","age":18},
			{"name":"lisi","age":15},
			{"name":"wangwu","age":23}
		]
	},
	methods:{
		
	},
	computed:{

	}
});
/*
	v-for:用于遍历数组和对象
	in:变量和属性的分割线
	变量:随便起的名字
	属性:一定来自于data对象中
	数组:遍历数组时,默认传递的是数组元素,第二个为下标
	对象:遍历对象时,第一个值是value,第二个值是key
*/

















