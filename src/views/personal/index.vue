<template>
  <div class="app-container personal-center-wrapper">
    <div class="personal-center-con">
      <div class="personal-center-inner">
        <div class="face-img"></div>
        <div class="info-con">
          <div class="info-item">用户名 ： {{userInfo.username}}</div>
          <div class="info-item">性别 ： {{userInfo.sex==0?'未填写':(userInfo.sex==1?'男':'女')}}</div>
          <div class="info-item">年龄 ： {{userInfo.age?userInfo.age+'岁':'未填写'}}</div>
          <div class="info-item">兴趣 ： {{userInfo.hobit?userInfo.age:'未填写'}}</div>
          <div class="info-item">网站年龄 ： {{handleDate(new Date(),'yyyy')-handleDate(userInfo.createdAt,'yyyy')}}年</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { formatDate } from '../../utils'
export default {
  computed:{
    ...mapGetters(['userInfo'])
  },
  data(){
    return{

    }
  },
  methods:{
    handleDate(date,type){
      return formatDate(date,type)
    }
  }
}
</script>

<style lang="scss" scoped>
.personal-center-wrapper {
  width: 100%;
  .personal-center-con {
    width: 100%;
    .personal-center-inner{
      width: 100%;
      display: flex;
      .face-img{
        width: 140px;
        height: 140px;
        background-image: url('../../assets/images/avatar.png');
      }
      .info-con{
        margin-left: 30px;
        .info-item{
          width: 100%;
          font-size: 14px;
          margin-bottom: 10px;
        }
      }
    }
  }
}
</style>