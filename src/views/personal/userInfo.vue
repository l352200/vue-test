<template>
  <div class="app-container user-info-wrapper">
    <div class="user-info-con">
      <div class="user-info-inner">
        <div class="tips">提示：请慎重填写，同时不要泄露信息。</div>
        <el-form :model="formData" inline label-width="100px">
          <el-row>
            <el-col :span="12">
              <el-form-item label="用户名" prop="username">
                <el-input placeholder="请输入新用户名" v-model="formData.username" :disabled="!isEdit"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="性别" prop="sex">
                <el-select v-model="formData.sex" :disabled="!isEdit">
                  <el-option label="男" :key="1" :value="1"></el-option>
                  <el-option label="女" :key="2" :value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="年龄" prop="age">
                  <el-input-number v-model="formData.age" :min="1" :max="200" label="描述文字" :disabled="!isEdit"></el-input-number>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="兴趣" prop="hobit">
                <el-input placeholder="可以输入兴趣爱好" v-model="formData.hobit" :disabled="!isEdit"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <div class="btn-con">
          <el-button @click="handleEdit" type="success" size="small">{{isEdit?'取消编辑':'编辑'}}</el-button>
          <el-button @click="handleSave" type="primary" size="small" :disabled="!isEdit">保存</el-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed:{
    ...mapGetters(['userInfo'])
  },
  data() {
    return {
      formData: {

      },
      isEdit:false
    }
  },
  created(){
    this.formData={...this.userInfo}
  },
  methods: {
    handleEdit(){
      this.isEdit=!this.isEdit
    },
    handleSave(){
      config.http({
        method:'post',
        url:'/updateUserInfo',
        data:{
          userInfo:this.formData,
          id:this.userInfo.id
        },
        success:(res)=>{
          this.$message.success('修改成功！')
          this.isEdit=!this.isEdit
        },
        error:(e)=>{
          this.$message.success(e)
        }
      })
    },
  }
}
</script>

<style lang="scss" scoped>
.user-info-wrapper {
  .user-info-con {
    width: 100%;
    .user-info-inner {
      width: 100%;
      .tips{
        color: #F56C6C;
        font-size: 15px;
        font-weight: 700;
        margin-bottom: 30px;
      }
      .btn-con{
        width: 200px;
        margin: 0 auto;
        text-align: center;
      }
    }
  }
}
</style>