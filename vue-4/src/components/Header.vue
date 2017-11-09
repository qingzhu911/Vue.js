<template>
   <header>
      <!-- 1 -->
      <h1>{{title}}</h1>
   </header>
</template>

<script>
  export default {
    data(){
      return{
        // 2
        title:"vue demo"
      }
    },
    methods:{
     
    },
    computed:{

    }
  }
</script>

<style scoped>
header{
  background-color: hotpink;
  padding: 10px;
  text-align: center;
}
  h1{
    color: white;
  }
</style>
