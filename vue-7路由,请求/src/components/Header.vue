<template>
   <header>
      <!-- 1 -->
      <h1 v-on:click="changeTitle">{{title}}</h1>
   </header>
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
        // 2
        
      }
    },
    methods:{
     changeTitle:function(){
      // this.title = "vue.js"

      //注册事件(第一个参数是事件名,第二个以及以后的参数都是数据)
      this.$emit("titleChange","WuChaoMin");
     }
    },
    // 生命周期钩子函数
    // beforeCreated(){
    //   alert("页面还没有创建之前");
    // },
    // created(){
    //   alert("开始创建页面,但是页面还没有显示");
    // },
    // beforeMount(){
    //   alert("页面创建完毕,但页面还未显示");
    // },
    // mounted(){
    //   alert("执行完此方法,页面显示");
    // },
    // beforeUpdate(){
    //   alert("页面更改之前");

    // },
    // updated(){
    //   alert("页面更改");
    //   // this.changeTitle();
    // },

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
