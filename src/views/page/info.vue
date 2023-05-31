<template>
  <div class="app-container info-wrapper">
    <div class="back-btn">
      <el-button @click="handleBackHome">返回首页</el-button>
    </div>
    <div class="info-container">
      <div class="info-head">
        <div v-if="newsData.title" class="info-title">
          {{newsData.title}}
        </div>
        <div class="info-subtitle">
          <span v-if="newsData.createdAt" class="sub-text">
            发表日期：{{handleDate(newsData.createdAt,'yyyy-MM-dd')}}
          </span>
          <span v-if="newsData.author" class="sub-text">
            发表作者：{{newsData.author}}
          </span>
        </div>
      </div>
      <div class="info-content">
        <div v-html="newsData.content"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from "@/utils/index";
export default {
  data() {
    return {
      id: '',
      type:0,
      newsData:{}
    }
  },
  created() {
    this.type=this.$route.params.type
      this.id = this.$route.params.id
    if(this.type==1){
      this.getNews()
    }else if(this.type==2){
      this.getMatters()
    }
  },
  methods: {
    getNews() {
      config.http({
        method: "get",
        url: "/info/getNews",
        data: {
          id:this.id
        },
        success: (res) => {
          console.log(res,'res');
          this.newsData=res.data
        },
        error: (res) => {
          this.$alert(res, "res");
        },
      });
    },
    getMatters(){
      config.http({
        method: "get",
        url: "/info/getMatters",
        data: {
          id:this.id
        },
        success: (res) => {
          console.log(res,'res');
          this.newsData=res.data
        },
        error: (res) => {
          this.$alert(res, "res");
        },
      });
    },
    handleBackHome(){
      this.$router.push('/home')
    },
        // 格式日期
    handleDate(date, type) {
      return formatDate(date, type);
    },
  }

}
</script>

<style lang="scss" scoped>
.info-wrapper {
  width: 100%;
  position: relative;
  .back-btn {
    position: fixed;
    right: 15px;
    top: 5px;
  }
  .info-container {
    width: 1200px;
    margin: 0 auto;
    .info-head {
      height: 135px;
      text-align: center;
      .info-title {
        font-size: 36px;
        font-weight: 600;
      }
      .info-subtitle {
        font-size: 18px;
        margin-top: 5px;
        color: rgba(66, 59, 59, 0.377);
        .sub-text {
          margin: 0 20px;
        }
      }
    }
  }
}
</style>