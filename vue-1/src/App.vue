<!-- template:是用到的模板,模板中,有且只能有一个根标签 -->
<template>
  <div id="app">
    <h1>{{title}}</h1>
    <p>{{greeting()}}</p>
  </div>
</template>

<!-- 行为:
  script:标签中,囊括的是所有的属性和方法
  export default{} :对外公开当前文件可被其他文件引入
  name:给当前组件起名,此名字可以在其他组件中以标签的形式调用
  components:承载所有当前组件需要依赖的其他组件
  
 -->

<script>
  export default {
    name: 'app',
    data(){
      return{
        title:"这是我的第一个cli项目"
      }
    },
    methods:{
      greeting:function(){
        return "你好vue.js"
      }
    },
    computed:{
      
    }
  }
</script>

<style>

</style>
