<template>
  <div class="app-container home-wrapper">
    <div class="home-container">
      <div class="home-inner">
        <!-- 左半边布局 -->
        <div class="left-inner">
          <list title="最新咨讯" :list="list1" :count="count1"></list>
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
  },
  data(){
    return{
      list1:[],
      count1:0
    }
  },
  created(){
    this.getNews()
  },
  methods:{
    getNews(){
      config.http({
        method: "get",
        url: "/info/getNews",
        data: {
        },
        success: (res) => {
          console.log(res, "res");
          this.list1=res.list
          this.count1=res.count
        },
        error: (res) => {
          this.$alert(res, "res");
        },
      });
    }
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
        border-top: 2px double rgba(212, 210, 210, 0.699);
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