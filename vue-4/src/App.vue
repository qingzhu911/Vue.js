<!-- template:是用到的模板,模板中,有且只能有一个根标签 -->
<template>
  <div id="app">
    <!-- 4 -->
   <app-header></app-header>
   <app-users></app-users>
   <app-footer></app-footer>
  </div>
</template>

<!-- 行为:
  script:标签中,囊括的是所有的属性和方法
  export default{} :对外公开当前文件可被其他文件引入
  name:给当前组件起名,此名字可以在其他组件中以标签的形式调用
  components:承载所有当前组件需要依赖的其他组件
  
 -->

<script>
// 2
  import Header from './components/Header'
  import Users from './components/Users'
  import Footer from './components/Footer'
  
  export default {
    name: 'app',
    // 3.注册
    components:{
      "app-header":Header,
      "app-users":Users,
      "app-footer":Footer
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

</style>





