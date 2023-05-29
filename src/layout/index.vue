<template>
  <div class="home-wrapper">
    <div class="home-inner">
      <app-header></app-header>
      <!-- <nav-bar v-if="showNav"></nav-bar> -->
      <!-- <div class="breadcrumb-container" v-if="showBread">
        <breadcrumb />
      </div> -->
      <div class="home-container">
        <div class="main-panel">
          <keep-alive :include="cachedViews">
            <router-view :key="$route.fullPath" />
          </keep-alive>
        </div>
      </div>
      <app-footer></app-footer>
    </div>
  </div>
</template>

<script>
import AppHeader from "@/layout/components/Header";
import AppFooter from "@/layout/components/Footer";
export default {
  components: {
    AppHeader,
    AppFooter
  },
  computed:{
    cachedViews(){
      //需要使用缓存的组件 需要用vuex存
      return ''
    }
  },
  methods:{
  }
};
</script>

<style lang="scss" scoped>
.home-wrapper {
  width: 100%;
  box-sizing: border-box;
  .breadcrumb-container {
    width: 1200px;
    height: 40px;
    margin: 0 auto;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    padding-left: 15px;
  }
  .home-container {
    display: flex;
    flex-flow: row nowrap;
    .main-panel {
      overflow: hidden;
      flex-grow: 1;
    }
  }
}
</style>
