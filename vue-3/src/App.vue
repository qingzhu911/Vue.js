<!-- template:是用到的模板,模板中,有且只能有一个根标签 -->
<template>
  <div id="app">
    <h1>hello app</h1>
   <users></users>

  </div>
</template>

<!-- 行为:
  script:标签中,囊括的是所有的属性和方法
  export default{} :对外公开当前文件可被其他文件引入
  name:给当前组件起名,此名字可以在其他组件中以标签的形式调用
  components:承载所有当前组件需要依赖的其他组件
  
 -->

<script>
// 引入users组件
import Users from './components/Users'
  export default {
    name: 'app',
    components:{
      "users":Users
      // Users
    },
    data(){
      return{
       
      }
    },
    methods:{
     
    },
    computed:{

    }
  }
</script>

<style scoped>
  h1{
    color: hotpink;
  }
</style>
<!-- 
组件嵌套: 至少有两个组件(包括跟组件)
全局组件注册: 需要在main.js中注册,注册后可以在任何有关联的组件中使用
局部组件: 在哪个组件中引入,就在那个组件中使用

嵌套流程: 
  1.设计组件内容
  2.在引入组件中<app.vue>,script里import上方组件
  3.在引入组件<app.vue>,export里components进行注册
  4.在引入组件template中<app.vue>,进行使用<users></users>













 -->
