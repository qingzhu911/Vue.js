
<template>
  <div id="app">
    <header>
      <div class="container">
      <div class="row bg-dark p-3">
        <div class="text-secondary mx-5" v-for="item of nav">{{item}}</div>
      </div>
      <div class="row bg-light my-3">
        <nav class="navbar navbar-light">
          <h3 class="navbar-text">{{title}}</h3>
        </nav>
      </div>
      <div class="row border" v-for="(item,index) in arr">
        <div class="col-md-3">{{item.user}} </div>
        <div class="col-md-3">{{item.msg}} </div>
        <div class="col-md-3">{{item.tel}} </div>
        <div class="col-md-3" v-on:click="del(index)">{{item.ks}} </div>
      </div>
      
      <div class="row bg-light my-3">
        <nav class="navbar navbar-light">
          <h3 class="navbar-text">{{title2}}</h3>
        </nav>
      </div>
      <div class="row bg-light p-4">
        <label for="inputPassword5">姓名</label>
        <input type="text" id="inputPassword5" class="form-control">
      </div>
      <div class="row bg-light p-4">
        <label for="inputPassword5">邮件</label>
        <input type="email" id="inputPassword5" class="form-control">
      </div>
      <div class="row bg-light p-4">
        <label for="inputPassword5">电话</label>
        <input type="number" id="inputPassword5" class="form-control">
      </div>
      <div class="row">
        <button class="btn btn-info" v-on:click="check()">提交</button>
      </div>
    </div>
    </header>
  </div>
</template>

<script>
  
  export default {
    name: 'app',

    components:{
      
    },
    data(){
      return{
        nav:[
          "用户管理","Home","Test"
        ],
        title:"展示数据",
        title2:"添加数据",
        arr:[
          {user:"姓名",msg:"邮件",tel:"电话"},
          {user:"张三",msg:"111@qq.com",tel:"123",ks:"X"},
          {user:"李四",msg:"111@qq.com",tel:"123",ks:"X"},
          {user:"王五",msg:"111@qq.com",tel:"123",ks:"X"},
          {user:"赵六",msg:"111@qq.com",tel:"123",ks:"X"}
        ]
      }
    },
    methods:{
     check:function(){
      var obj = new Object();
      var arr1 = document.getElementsByTagName("input")[0].value;
      var arr2 = document.getElementsByTagName("input")[1].value;
      var arr3 = document.getElementsByTagName("input")[2].value;
      obj.user = arr1;
      obj.msg = arr2;
      obj.tel = arr3;
      obj.ks = "X";
      this.arr.push(obj);      
     },
     del:function(index){
       return this.arr.splice(index,1);
     }
    },
    computed:{

    }
  }

</script>

<style scoped>
  
</style>





