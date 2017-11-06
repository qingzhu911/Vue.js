new Vue({
	el:"#vue-app",
	data:{
		age:18,
		x:0,
		y:0
	},
	methods:{
		addAge:function(num){
			this.age+=num;
		},
		subtractAge:function(num){
			this.age-=num;
		},
		moveXY:function(e){
			this.x=e.offsetX;
			this.y=e.offsetY;
		},
		stopPropagation:function(e){
			// e.stopPropagation();
		},
		alert:function(){
			alert("我是弹窗");
		},
		logName:function(){
			console.log(123);
		},
		logAge:function(){
			console.log(456);
		}
	}
});
/*
	事件:用于按钮触发时处理逻辑方法
	v-on:给某个事件click绑定到某个元素上,
	@称为语法糖,跟v-on效果一样
	事件值:可以是对应的方法,也可以是具体的属性
	优先级:首先找方法,如果没有方法,那么找属性

	事件修饰符:
	stop阻止冒泡事件
	once:事件只生效一次
	prevent:阻止默认事件
*/


/*
	键盘事件:
	enter当按下enter时候触发
	.alt.enter当按下alt和enter时候才会触发
*/















