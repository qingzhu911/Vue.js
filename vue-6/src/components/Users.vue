<template>
  <div id="users">
    <ul>
      <li v-for="user in users" @click="user.show = !user.show"> 
        <h2>
          {{user.name}}
        </h2>
        <h3 v-show="user.show" >
          {{user.position}}
        </h3>
      </li>
    </ul>
    <button v-on:click="deleteUser">删除用户</button>
  </div>
</template>

<script>
export default{
  // app.vue中绑定的自动义属性是什么,这就写什么,传多个逗号隔开,第一种方法,不论里面数据是什么,都是[属性,属性...]
  // props:["users"],
  // 下面这个方法更严谨
  props:{
    users:{
      type:Array,
      require:true
    }
  },
  data(){
    return {
      
    }
  },
  methods:{
    deleteUser:function(){
      this.users.pop();
    }
  }
}
/*
  属性传值:从父组件传值到子组件
  1 属性绑定<v-bind> 2 自定义属性 <users>名字随便起的 3 props
  
  传值和传引用:
  传值:String,Number,Bolean ...
  传引用:

  事件传值:从子组件传值到父组件
  1.注册事件:<$emit>2.绑定事件<v-on:自定义事件>3.实现方法及逻辑

*/
</script>

<style scoped>
  #users{
    width: 100%;
    max-width:1200px;
    margin:40px auto;
    padding:0 20px;
    box-sizing: border-box;
  }
  ul{
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    padding:0;
  }
  
  li{
    flex-grow:1;
    /*flex-grow:也是个响应式*/
    flex-basis:100px;
    text-align: center;
    padding:20px;
    border:1px solid red;
    margin:10px;
  }
</style>