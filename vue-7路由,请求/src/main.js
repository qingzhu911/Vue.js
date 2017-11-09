// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
//2.引入路由模块
import VueRouter from 'vue-router'
//引入请求模块
import VueResource from 'Vue-resource'
import App from './App'
import Routes from './routes'
// import Users from './components/Users'
Vue.config.productionTip = false
//3.使用路由模块
Vue.use(VueRouter)
//使用请求模块
Vue.use(VueResource)
//4.配置路由
const router = new VueRouter({
	routes:Routes,
	//干掉#
	mode:"history"
})

//注册全局组件
// Vue.component("users",Users)

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  template: '<App/>',
  components: { App }
})

/*	index.html : 整个项目的入口文件
	main.js : 整个项目的逻辑主文件
	Vue实例 : vue的实例化对象,包含el,template,components
	template: 模板中可以写html或者调用其他组件
	<App/> : 代表模板要执行的组织文件,跟App.vue中的name属性有关
	components: 组件组中要包含需要调用的组件名,例如上面模板调用了<App/>,那么组件组中就一定要包含App组件
	import:import用于导入需要依赖的文件,例如上方组件中,要想引入App组件,那么首先要使用import引入这个组件文件
	import .. from ...: import后面是自己起的名字,from后面是组件的名字
*/