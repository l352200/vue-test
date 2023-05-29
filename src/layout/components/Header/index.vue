<template>
  <div class="app-header-wrapper">
    <div class="header-container">
      <div class="header-inner">
        <img class="logo-item" :src="logo" alt="测试项目">
        <div class="text-item">富强 · 民主 · 文明 · 河蟹 · 自由 · 平等 · 公正 · 法制 · 爱国 · 敬业 · 诚信 · 友善</div>
        <div class="search-item">
          <el-input class="" v-model="searchItem" placeholder="请输入搜索关键词" @click="handleSearch"></el-input>
        </div>
        头部
      </div>
    </div>
  </div>
</template>

<script>
import logo from '../../../assets/images/logo.jpg'
export default {
  data() {
    return {
      searchItem: "",
      logo,
    };
  },
  methods:{
    handleSearch(){

    }
  }
};
</script>

<style lang="scss">
.app-header-wrapper {
  width: 100%;
  background-color: #fff;
  .header-container {
    width: 100%;
    height: 175px;
    background-image: url('../../../assets/images/header-bg.jpg');
    .header-inner {
      width: 1400px;
      height: 175px;
      margin: 0 auto;
      display: flex;
      position: relative;
      align-items: center;
      .logo-item{
        width:40px;
        height: 40px;
        margin-right:200px;
      }
      .text-item{
        font-size: 18px;
        color: rgb(243, 252, 252);
      }
      .search-item {
        width: 300px;
        margin-left: auto;
        // position: absolute;
        // right: -200px;
        // top:80px;
      }
    }
  }
}
</style>
