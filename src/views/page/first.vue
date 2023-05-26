<template>
  <div>
    first
    <el-button @click="alert">提示</el-button>
    <el-button @click="request">请求</el-button>
  </div>
</template>

<script>
import { getUser } from "~/api/user";
export default {
  data() {
    return {};
  },
  methods: {
    alert() {
      this.$alert("测试输出");
    },
    request() {
      console.log(window, "window");
      // window.config.http({
      //   method: "get",
      //   url: "getUser",
      //   data: {
      //     id: "1",
      //   },
      //   success: (res) => {
      //     this.$alert(res, "res");
      //     console.log(res, "res");
      //   },
      //   error: (res) => {
      //     this.$alert(res, "res");
      //   },
      // });
      let params={
        id:'1'
      }
      getUser(params).then(res=>{
        console.log(res,'res');
      })
    },
  },
};
</script>

<style></style>
