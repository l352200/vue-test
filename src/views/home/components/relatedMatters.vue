<template>
  <div class="matters-wrapper">
    <div class="matters-container">
      <div class="matters-head-inner">
        <div class="matters-title">
          {{title}}
        </div>
        <div @click="handleJump(url)" class="more">
          更多+
        </div>
      </div>
      <div class="matters-info" v-for="item in list" :key="item.id">
        ● {{item.title}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: [Number, String],
      default: () => '相关事项'
    },
    list: {
      type: Array,
      default: () => {
        return []
      }
    },
    url: {
      type: String,
      default: () => ''
    }
  },
  data() {
    return {

    }
  },
  methods: {
    handleJump(url) {

    },
  }
}
</script>

<style lang="scss" scoped>
.matters-wrapper {
  width: 100%;
  margin-bottom: 10px;
  .matters-container {
    width: 480px;
    .matters-head-inner {
      display: flex;
      align-items: center;
      margin-bottom: 20px;
      .matters-title {
        font-size: 24px;
        position: relative;
        // margin-left: 19px;
        line-height: 30px;
        // color: #409eff;
        padding-left: 20px;
        margin-top: 20px;
        &::after {
          content: '';
          width: 5px;
          height: 30px;
          background: #4340ff;
          position: absolute;
          left: 0;
          top: 0;
        }
      }
      .more {
        margin-left: auto;
        cursor: pointer;
        font-size: 18px;
      }
    }
  }
  .matters-info {
    font-size: 16px;
    margin-bottom: 10px;
    padding: 5px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
}
</style>