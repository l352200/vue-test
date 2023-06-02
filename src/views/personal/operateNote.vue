<template>
  <div class="app-container op-note-wrapper">
    <div class="op-note-con">
      <div class="title">操作日志</div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed:{
    ...mapGetters(['userInfo'])
  }
}
</script>

<style lang="scss" scoped>
  .op-note-wrapper{
    .op-note-con{
      width: 100%;
      .title{
        font-size: 20px;
        font-weight: 800;
      }
    }
  }
</style>