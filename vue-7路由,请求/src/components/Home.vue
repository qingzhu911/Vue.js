<!-- template:是用到的模板,模板中,有且只能有一个根标签 -->
<template>
  <div id="home">
    <!-- 4 -->
    <app-header v-on:titleChange="updateTitle($event)" v-bind:title="title"></app-header>
    <app-users v-bind:users="users"></app-users>
    <app-footer v-bind:title="title"></app-footer>
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
  import Header from './Header'
  import Users from './Users'
  import Footer from './Footer'

  export default {
    name: 'home',
    // 3.注册
    components: {
      "app-header": Header,
      "app-users": Users,
      "app-footer": Footer

    },
    data() {
      return {
        users: [],
        title: "AngularJS"
      }
    },
    methods: {
      updateTitle: function (str) {
        this.title = str;
      }
    },
    created(){
      this.$http.get("https://jsonplaceholder.typicode.com/users").then((res) => {
        // console.log(res);
        this.users = res.body;
      })
    },
    computed: {}
  }
</script>

<style scoped>

</style>





