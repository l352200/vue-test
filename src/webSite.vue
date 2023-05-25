<template>
  <div>
    <h1>首页</h1>
    <el-button @click="handleJump('/page/first')">first</el-button>
  </div>
</template>

<script>
export default {
  data(){
    return{

    }
  },
  methods:{
    handleJump(page){
      this.$router.push(page)
    }
  }
};

  </script>

<style></style>
