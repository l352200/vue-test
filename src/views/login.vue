<template>
  <div class="login-wrapper">
    <div class="login-container">
      <div class="login-head">
        <el-alert class="tips" type="warning" show-icon description="一台电脑同一时刻只能登录一个帐号，如果登录多个帐号，之前的登录会被退出。 如果一直无法成功登录，请换一台电脑或浏览器重试。"></el-alert>
      </div>
      <div class="login-inner">
        <div class="login-title">
          <div class="login-title-text">登录 / 注册</div>
        </div>
        <div class="login-form">
          <el-form :model="formData">
            <el-form-item class="login-item" label="用户名" prop="username" label-width="80px">
              <el-input class="inp" placeholder="请输入用户名" v-model="formData.username"></el-input>
            </el-form-item>
            <el-form-item class="login-item" style="padding-top:0px" label="密码" prop="password" label-width="80px">
              <el-input class="inp" placeholder="请输入密码" type="password" v-model="formData.password"></el-input>
            </el-form-item>
            <div class="btn-con">
              <el-button class="btn" type="primary" size="small" @click="handlelogin(1)">登录</el-button>
              <el-button class="btn" size="small" @click="handlelogin(2)">注册</el-button>
            </div>
            <div class="forget">
              <el-button type="text" @click="handleForget">忘记密码</el-button>
            </div>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

  data() {
    return {
      formData: {},
      rules: {
        username: [{
          required: true,
          message: "请输入用户名",
          trigger: "blur"
        }],
        password: [{
          required: true,
          message: "请输入密码",
          trigger: "blur"
        }],
      }
    }
  },
  methods: {
    //登录、注册
    async handlelogin(type) {
      var that = this
      if(type == 1) {
        await this.$store.dispatch('user/login',{...this.formData}).then(res=>{
          if(res.token){
            this.$router.push('/personal/management/index')
          }else{
            this.$alert(res.msg)
          }
        })
      } else if(type == 2) {
        config.http({
          method:'post',
          data:{...this.formData},
          url:'/register',
        success: (res) => {
          if(res.msg=='操作成功'){
            that.$alert("注册成功，可以直接登录")
          }
        },
        error: (res) => {
          that.$alert(res, "res");
        },
        })
      }

    },
    //忘记密码 跳转
    handleForget() {
      this.$alert('暂不支持')
    },
  }
}
</script>

<style lang="scss" scoped>
.login-wrapper {
  width: 100%;
  .login-container {
    .login-head {
      width: 800px;
      margin: 50px auto 0;
      // .tips{
      // }
    }
    .login-inner {
      width: 420px;
      margin: 100px auto;
      .login-title {
        width: 420px;
        margin: 0 auto;
        height: 50px;
        background: #409eff;
        display: flex;
        align-items: center;
        justify-content: center;
        .login-title-text {
          color: #fff;
          font-size: 20px;
        }
      }
      .login-form {
        height: 260px;
        border: 1px rgba(163, 160, 160, 0.5) solid;
        border-top: none;
        .login-item {
          padding-top: 50px;
          .inp {
            width: 300px;
          }
        }
        .btn-con {
          width: 420px;
          display: flex;
          align-items: center;
          justify-content: center;
          .btn {
            width: 100px;
          }
        }
        .forget {
          color: #409eff;
          margin-left: 330px;
          font-size: 14px;
        }
      }
    }
  }
}
</style>