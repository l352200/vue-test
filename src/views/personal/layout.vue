<template>
  <div class="app-container perosnal-layout-wrapper">
    <div class="personal-layout-container">
      <div class="personal-layout-inner">
        <div class="title">
          <div class="text">
            个人中心
          </div>
        </div>
        <div class="menu-con">
          <el-menu :default-active="$route.path" class="el-menu" :router="true" :unique-opened="false">
            <el-menu-item index="/personal/management/index">
              <template #title>
                <div class="layout-menu-title">
                  <span class="txt">个人主页</span>
                </div>
              </template>
            </el-menu-item>
            <el-menu-item index="/personal/management/userInfo">
              <template #title>
                <div class="layout-menu-title">
                  <span class="txt">用户信息</span>
                </div>
              </template>
            </el-menu-item>
            <el-menu-item index="/personal/management/imgUpload">
              <template #title>
                <div class="layout-menu-title">
                  <span class="txt">照片上传</span>
                </div>
              </template>
            </el-menu-item>
            <el-menu-item index="/personal/management/operateNote">
              <template #title>
                <div class="layout-menu-title">
                  <span class="txt">操作日志</span>
                </div>
              </template>
            </el-menu-item>
          </el-menu>
        </div>
      </div>
      <div class="layout-con">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  created() {
  }
}
</script>

<style lang="scss" scoped>
.perosnal-layout-wrapper {
  width: 100%;
  padding: 30px 0;
  background: #fff;
  .personal-layout-container {
    margin: 0 auto;
    width: 1400px;
    display: flex;
    // align-items: center;
    justify-content: space-around;
    .personal-layout-inner {
      width: 260px;
      // text-align: center;
      .title {
        height: 80px;
        width: 100%;
        background: rgb(120, 47, 255);
        font-size: 24px;
        color: #fff;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .menu-con {
        width: 100%;
        border: 1px solid #eee;
        .el-menu {
          .layout-menu-title {
            padding-left: 20px;
            .txt {
              font-size: 15px;
            }
          }
        }
      }
    }
    .layout-con {
      // margin-top:-145px;
      margin-left: 10px;
      width: 1200px;
      border: 1px solid #eee;
    }
  }
}
</style>