<template>
  <div id="users">
    <h1>hello Users</h1>
   <ul>
     <li v-for="user in users">{{user}}</li>
   </ul>
  </div>
</template>

<script>
  export default {
    data(){
      return{
       users:["zhangsan","lisi","wangwu"]
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
    color: red;
  }
</style>
