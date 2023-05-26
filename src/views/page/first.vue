<template>
  <div class="app-container first-container">
    first
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
    request() {
      console.log(window, "window");
      //type 1
      // config.http({
      //   method: "get",
      //   url: "/user/getUser",
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
      // type 2
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

<style lang="scss" scoped>
.first-container {
  border: 1px black;
}
</style>
