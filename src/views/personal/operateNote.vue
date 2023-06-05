<template>
  <div class="app-container op-note-wrapper">
    <div class="op-note-con">
      <div class="title">操作日志</div>
      <div class="note-list-con">
        <div class="note-item" v-for="item in noteList" :key="item.id">
          <div>操作：{{item.type}}</div>
          <div>时间：{{handleDate(item.createdAt,'yyyy-MM-dd hh:mm:ss')}}</div>
        </div>
        <div style="text-align: right">
          <el-pagination :current-page="pageNum" :page-size="pageSize" :page-sizes="[5, 10, 20]" :total="total" layout="total, sizes, prev, pager, next, jumper"
                         @current-change="handleCurrentChange" @size-change="handleSizeChange"></el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { formatDate } from '../../utils/index'
export default {
  computed: {
    ...mapGetters(['userInfo'])
  },
  data() {
    return {
      noteList: [],
      total: 0,
      pageSize: 5,
      pageNum: 1
    }
  },
  created() {
    this.handleLoadData()
  },
  methods: {
    handleLoadData() {
      config.http({
        method: 'get',
        url: '/getUserNote',
        data: {
          id: this.userInfo.id,
          page: this.pageNum,
          pageSize: this.pageSize
        },
        success: (res) => {
          this.noteList = res.rows
          this.total = res.total
        },
        error: (err) => {
          console.log(err);
        }
      })
    },
    handleDate(date, type) {
      return formatDate(date, type)
    },
    // 页码变化
    handleCurrentChange(value) {
      this.pageNum = value;
      this.handleLoadData();
    },
    // 每页数量变化
    handleSizeChange(value) {
      this.pageNum = 1;
      this.pageSize = value;
      this.handleLoadData();
    },
  }
}
</script>

<style lang="scss" scoped>
.op-note-wrapper {
  .op-note-con {
    width: 100%;
    .title {
      font-size: 20px;
      font-weight: 800;
      margin-bottom: 20px;
    }
    .note-list-con {
      width: 1000px;
      .note-item {
        margin-bottom: 10px;
        border: 1px black solid;
        padding: 10px;
      }
    }
  }
}
</style>