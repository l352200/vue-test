<template>
  <div class="app-container info-search-wrapper">
    <div class="info-search-con">
      <div class="info-search-head">
        <div class="inp">
          <el-radio-group style="width: 300px" v-model="searchType">
            <el-radio :label="1">资讯</el-radio>
            <el-radio :label="2">事项</el-radio>
          </el-radio-group>
          <el-input
            placeholder="请输入搜索关键词"
            v-model="keyword"
            clearable
          ></el-input>
          <el-button
            style="margin-left: 20px"
            size="small"
            type="primary"
            @click="handleSearch"
            icon="el-icon-search"
            >搜索</el-button
          >
        </div>
      </div>
      <div v-if="list.length" class="info-search-list">
        <el-card
          class="card"
          v-for="item in list"
          :key="item.id"
          @click.native="
            item.type == 1 ? handleJumpNews(item.id) : handleJump(item.content)
          "
        >
          <div>
            {{ item.title }}
          </div>
        </el-card>
      </div>
      <div class="nodata-con" v-else>
        <img class="nodata-img" :src="nodata" alt="" />
      </div>
      <div style="text-align: right">
        <el-pagination
          :current-page="pageNum"
          :page-size="pageSize"
          :page-sizes="[5, 10, 20]"
          :total="total"
          layout="total, sizes, prev, pager, next, jumper"
          @current-change="handleCurrentChange"
          @size-change="handleSizeChange"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import nodata from "@/assets/images/nodata.png";
export default {
  data() {
    return {
      keyword: "",
      list: [],
      total: 0,
      pageNum: 1,
      pageSize: 5,
      searchType: 1,
      nodata,
    };
  },
  created() {
    console.log(this.$route.query);
    if (this.$route.query.keyword) {
      this.keyword = this.$route.query.keyword;
    }
    this.handleSearch();
  },
  methods: {
    //搜索
    handleSearch() {
      this.pageNum = 1;
      this.handleLoadData();
    },
    handleLoadData() {
      if (this.searchType == 1) {
        this.getNews();
      } else if (this.searchType == 2) {
        this.getMatters();
      }
    },
    getNews() {
      config.http({
        method: "get",
        url: "/info/getNewsList",
        data: {
          keyword: this.keyword,
          pageNum: this.pageNum,
          pageSize: this.pageSize,
        },
        success: (res) => {
          this.list = res.rows;
          this.total = res.count;
        },
        error: (res) => {
          this.$alert(res, "res");
        },
      });
    },
    getMatters() {
      config.http({
        method: "get",
        url: "/info/getMattersList",
        data: {
          keyword: this.keyword,
          pageNum: this.pageNum,
          pageSize: this.pageSize,
        },
        success: (res) => {
          this.list = res.rows;
          this.total = res.count;
        },
        error: (res) => {
          this.$alert(res, "res");
        },
      });
    },
    //跳转单条咨询页
    handleJumpNews(id) {
      console.log(123);
      window.open(location.origin + "/#/page/info/" + id + "/1");
    },
    handleJump(url) {
      if (url.indexOf("https") == -1) {
        url = "https://" + url;
      }
      window.open(url);
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
  },
};
</script>

<style lang="scss" scoped>
.info-search-wrapper {
  width: 100%;
  .info-search-con {
    width: 100%;
    .info-search-head {
      height: 60px;
      width: 100%;
      .inp {
        width: 600px;
        margin: 0 auto;
        display: flex;
        align-items: center;
      }
    }
    .info-search-list {
      .card {
        margin-bottom: 20px;
        padding: 5px;
        cursor: pointer;
      }
    }
    .nodata-con {
      width: 100%;
      height: 300px;
      text-align: center;
      .nodata-img {
        width: 400px;
        height:300px;
        margin: 0 auto;
      }
    }
  }
}
</style>
