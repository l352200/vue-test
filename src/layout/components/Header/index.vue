<template>
  <div class="app-header-wrapper">
    <div class="header-container">
      <div class="header-inner">
        <img @click="handleJump('/home')" class="logo-item" :src="logo" alt="测试项目" />
        <div class="text-item">
          心灵鸡汤可以护养心灵,是一种对心灵有帮助的东西。
        </div>
        <div class="search-item">
          <el-input class="" v-model="searchItem" placeholder="请输入搜索关键词">
            <el-button slot="append" icon="el-icon-search" @click="handleSearch"></el-button>
          </el-input>
        </div>
        <div v-if="userInfo.username" class="img-con">
          <img @click="handleJump('/personal/management/index')" class="user-img" :src="userImg" alt="" />
          <div>欢迎你，{{ userInfo.username }}</div>
          <div class="exit" @click="handleLogOut">退出</div>
        </div>
        <el-button v-if="!userInfo.username" class="login-btn" type="primary" round @click="handleJump('/login')">登录/注册</el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import logo from "../../../assets/images/logo.jpg";
import userImg from "../../../assets/images/user.png";
export default {
  computed: {
    ...mapGetters(["userInfo"]),
  },
  data() {
    return {
      searchItem: "",
      userImg,
      logo,
      isLogin: false,
    };
  },
  created() { },
  methods: {
    // 搜索
    handleSearch() {
      this.$router.push('/info/search?keyword=' + this.searchItem)
    },
    //跳转登录
    handleJump(url) {
      this.$router.push(url);
    },
    //退出登录
    handleLogOut() {
      localStorage.removeItem("loginUser");
      this.$store.dispatch("user/logOut");
      // this.$forceUpdate();
    },
  },
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
    position: relative;
    .header-inner {
      width: 1600px;
      height: 175px;
      margin: 0 auto;
      display: flex;
      position: relative;
      align-items: center;
      .logo-item {
        width: 40px;
        height: 40px;
        margin-right: 200px;
        margin-left: 100px;
        cursor: pointer;
      }
      .text-item {
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
    .img-con {
      // position: absolute;
      // right: 20px;
      // top: 20px;
      color: #fff;
      text-align: center;
      width: 100px;
      font-size: 14px;
      margin-left: 100px;
      .user-img {
        width: 40px;
        height: 40px;
        cursor: pointer;
      }
      .exit {
        color: #409eff;
        font-size: 14px;
        cursor: pointer;
      }
    }
    .login-btn {
      // display: block;
      margin-left: 100px;
    }
  }
}
</style>
