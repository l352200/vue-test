<template>
  <div class="app-container home-wrapper">
    <div class="home-container">
      <div class="home-inner">
        <!-- 左半边布局 -->
        <div class="left-inner">
          左
          <list></list>
        </div>
        <!-- 右半边布局 -->
        <div class="right-inner">
          右
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import list from './components/list.vue'
export default {
  components:{
    list
  }
}
</script>

<style lang="scss" scoped>
.home-wrapper {
  width: 100%;
  .home-container {
    width: 1400px;
    margin: 0 auto;
    .home-inner{
      display: flex;
      justify-content: space-around;
      .left-inner{
        width: 700px;
        border: 1px solid black;
        padding: 10px;
      }
      .right-inner{
        width:500px;
        border: 1px solid black;
        padding: 10px;
      }
    }
  }
}
</style>