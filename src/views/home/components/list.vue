<template>
  <div class="list-container">
    <div class="title">·{{title}}</div>
    <div class="info-item" v-for="item in list" :key="item.id">
      <div class="date-item">
        <div class="day">{{handleDate(item.createdAt,'dd')}}</div>
        <div>{{handleDate(item.createdAt,'yyyy-MM')}}</div>
      </div>
      <div class="text-item">
        <span @click="item.type==1?handleJumpNews(item.id):handleJump(item.content)" class="text">
          {{item.title}}
        </span>
      </div>
    </div>
    <div @click="handleTips" class="tip">总共{{count}}条信息，点击查看更多</div>
  </div>
</template>

<script>
import { formatDate } from '../../../utils/index'
export default {
  props: {
    title: {
      type: [Number, String],
      default: () => '最新咨讯'
    },
    list: {
      type: Array,
      default: () => {
        return []
      }
    },
    count: {
      type: [Number],
      default: () => 0
    },
    // tips跳转地址
    url: {

    },
  },
  created() {
  },
  data() {
    return {

    }
  },
  methods: {
    // 格式日期
    handleDate(date, type) {
      return formatDate(date, type);
    },
    handleTips() {
      this.$router.push('/info/search')
    },
    //跳转单条咨询页
    handleJumpNews(id) {
      window.open(location.origin + '/#/page/info/' + id + '/1')
    },
    handleJump(url) {
      if(url.indexOf('https') == -1) {
        url = 'https://' + url
      }
      window.open(url)
    },
  }
}
</script>

<style lang="scss" scoped>
.list-container {
  border-top: 2px double rgba(212, 210, 210, 0.699);
  width: 100%;
  height: 320px;
  margin-bottom: 40px;
  position: relative;
  .title {
    font-size: 28px;
    font-weight: 600;
    margin: 10px;
  }
  .info-item {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    .date-item {
      width: 100px;
      height: 40px;
      background: #cbdae9;
      text-align: center;
      align-items: center;
      color: #409eff;
      font-size: 14px;
      .day {
        font-size: 18px;
        color: #49409e;
        font-weight: 600;
        margin-top: 2px;
      }
    }
    .text-item {
      padding: 10px;
      font-size: 16px;
      margin-left: 20px;
      border-bottom: 1px solid rgba(165, 164, 164, 0.753);
      width: 100%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
      .text {
        cursor: pointer;
      }
    }
  }
  .tip {
    cursor: pointer;
    font-size: 14px;
    color: #74a7da;
    position: absolute;
    right: 0;
    bottom: -20px;
  }
}
</style>