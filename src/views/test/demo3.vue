<template>
  <!-- 测试请求数据后判断加载css文件并渲染 -->
  <!-- 1、请求
       2、使用$nextTick引入css文件
       3、用v-if重新渲染对应元素
       4、同时避免样式丢失的元素提前显示，可以使用v-loading
       5、并将!loading作为条件绑给元素的v-if -->
  <div style="height:500px">
    <div v-if="flag&&!loading" class="colorchange" v-loading="loading">
      测试动态加载css文件,该文本初始为黑色，第一层css样式为红色，请求后应为蓝色
    </div>
  </div>
</template>

<script>

export default {
  components: {},
  data() {
    return {
      total: 0,
      list: [],
      loadComponent: null,
      flag: true,
      loading: false
    };
  },
  async created() {
    console.log(new Date().getTime());
    this.loading = true
    await this.getNews()
    console.log(new Date().getTime());
    // this.$nextTick(() => {
    //   if(this.total > 6) {
    //     import('./blue.css')
    //   } else {
    //     import('./red.css')
    //   }
    // })
  },
  methods: {
    async getNews() {
      config.http({
        method: "get",
        url: "/info/getNewsList",
        data: {
          keyword: this.keyword,
          pageNum: this.pageNum,
          pageSize: this.pageSize,
        },
        success: (res) => {
          console.log(res, 'res');
          this.flag = false
          this.list = res.rows;
          this.total = res.count;
          this.$nextTick(() => {
            if(this.total > 6) {
              import('./style/blue.css')
            } else {
              import('./style/red.css')
            }
          })
          this.flag = true
          this.loading = false
        },
        error: (res) => {
          this.$alert(res, "res");
        },
      });
    },
  },
};
</script>

<style scoped>
</style>