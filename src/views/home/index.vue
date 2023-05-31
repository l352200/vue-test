<template>
  <div class="app-container home-wrapper">
    <div class="home-container">
      <div class="home-inner">
        <!-- 左半边布局 -->
        <div class="left-inner">
          <list title="最新咨讯" :list="list1" :count="count1"></list>
          <list title="最新咨讯" :list="list1" :count="count1"></list>
          <list title="最新咨讯" :list="list1" :count="count1"></list>
        </div>
        <!-- 右半边布局 -->
        <div class="right-inner">
          <img class="head-bg" :src="headImg" alt="">
          <related-matters title="相关事项" :list="list2" :count="count2"></related-matters>
          <related-matters title="相关事项" :list="list2" :count="count2"></related-matters>
          <related-matters title="相关事项" :list="list2" :count="count2"></related-matters>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import list from './components/list.vue'
import relatedMatters from './components/relatedMatters.vue'
import headImg from '@assets/images/right-head.jpg'
export default {
  components: {
    list,
    relatedMatters
  },
  data() {
    return {
      list1: [],
      count1: 0,
            list2: [],
      count2: 0,
      headImg,
    }
  },
  created() {
    this.getNews();
    this.getMatters();
  },
  methods: {
    getNews() {
      config.http({
        method: "get",
        url: "/info/getNewsList",
        data: {
        },
        success: (res) => {
          this.list1 = res.rows
          this.count1 = res.count
        },
        error: (res) => {
          this.$alert(res, "res");
        },
      });
    },
    getMatters() {
      config.http({
        method: "get",
        url: "/info/getMattersList",
        data: {
        },
        success: (res) => {
          this.list2 = res.rows
          this.count2 = res.count
        },
        error: (res) => {
          this.$alert(res, "res");
        },
      });
    },
  }
}
</script>

<style lang="scss" scoped>
.home-wrapper {
  width: 100%;
  .home-container {
    width: 1400px;
    margin: 0 auto;
    .home-inner {
      display: flex;
      justify-content: space-around;
      .left-inner {
        width: 700px;
        padding: 10px;
      }
      .right-inner {
        width: 500px;
        padding: 10px;
        .head-bg {
          width: 480px;
        }
      }
    }
  }
}
</style>