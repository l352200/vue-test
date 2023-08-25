<template>
  <!-- 测试请求数据后判断加载css文件并渲染 -->
  <!-- 1、请求
       2、使用$nextTick引入css文件
       3、同时避免样式丢失的元素提前显示，可以使用v-loading
       4、要用v-if重新渲染对应元素
       5、将!loading作为条件绑给元素的v-if   -->
  <div style="height:500px">
    <div>请求数据结果：{{totalFLag}}</div>
    <div v-loading="loading">
      <div v-if="!loading" class="colorchange">
        测试动态加载css文件,该文本初始为黑色，组件内为绿色；请求结果为true，css样式为蓝色；为false，css样式为红色
      </div>
    </div>
  </div>
</template>

<script>

export default {
  components: {},
  computed: {
    totalFLag() {
      return this.total > 6
    }
  },
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
    this.loading = true
    await this.getNews()
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
          // this.flag = false
          this.list = res.rows;
          this.total = res.count;
          this.$nextTick(() => {
            if(this.totalFLag) {
              import('./style/blue.css')
            } else {
              import('./style/red.css')
            }
          })
          // this.flag = true
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

<style>
.colorchange {
  color: green;
}
</style>