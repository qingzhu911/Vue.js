<!-- template:是用到的模板,模板中,有且只能有一个根标签 -->
<template>
  <div id="app">
    <!-- 4 -->
    <h1>观察路由的页面内容</h1>
    <ul>
      <!-- 代替a标签 -->
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/test">Test</router-link></li>
    </ul>
    <!-- 调到哪个路径,里面就展示哪个组件,展示只能展示一个组件 -->
    <router-view></router-view>
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
    // 3.注册
    components: {
     
    },
    data() {
      return {
       
       
      }
    },
    methods: {
     
      
    },
    computed: {}
  }
</script>

<style scoped>

</style>





