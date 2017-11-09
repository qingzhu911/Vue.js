<template>
    <footer>
      <h1>{{title}}</h1>
    </footer>
</template>

<script>
  export default {
    props:{
      title:{
        type:String,
        required:true
      }
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
footer{
  background-color: green;
  padding: 10px;
  text-align: center;
}
  h1{
    color: red;
  }
</style>
