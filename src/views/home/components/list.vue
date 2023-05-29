<template>
  <div class="list-container">
    <div class="title">{{title}}</div>
    <div class="info-item">
      <div class="date-item">
        <div class="day">28</div>
        <div>2023-05</div>
      </div>
      <div class="text-item">
        有关于这是一条废话的说明介绍
      </div>
    </div>  
  </div>
</template>

<script>
export default {
  props:{
    title:{
      type:[Number,String],
      default:()=>'最新咨讯'
    }
  },
  data(){
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.list-container{
  width: 100%;
  .title{
    font-size: 32px;
    font-weight: 600;
    margin: 20px;
  }
  .info-item{
    display: flex;
    align-items: center;
    .date-item{
      width: 100px;
      height: 50px;
      background: #cbdae9;
      text-align: center;
      align-items: center;
      color:#409eff;
      .day{
        margin-top:5px;
        font-size: 20px;
        color: #49409e;
        font-weight: 600;
      }
    }
    .text-item{
      padding: 10px;
      font-size: 18px;
      margin-left:20px;
      border-bottom: 1px solid rgba(165, 164, 164, 0.753);
      width: 100%;
    }
  }
}
</style>