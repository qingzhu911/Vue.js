new Vue({
	el:"#vue-app",
	data:{
		changecolor:false,
		changelength:false,
		gaibianyanse:false,
		gaibianchangdu:false
	},
	methods:{
		
	},
	computed:{
		compclass:function(){
			return {
				gaibianyanse:this.gaibianyanse,
				gaibianchangdu:this.gaibianchangdu
			}
		}
	}
});
/*
	动态css样式:
	v-bind:class用于绑定对应的样式对象(一定是对象{})
	class对象值:分别为true和false
	注意:在对象中,key值是样式,value值是属性
	经常改变样式,最好使用computed计算属性
*/

















