<template>
  <div class="app-container article-wrapper">
    <div class="article-con">
      <div class="title">
        文章管理
      </div>
      <div class="article-inner">
        <div>
          <el-button type="primary" size="small" @click="handleArticle">
            发表文章资讯
          </el-button>
        </div>
        <el-table :data="articleList">
          <el-table-column align="center" type="index" label="No.">
          </el-table-column>
          <el-table-column align="center" label="文章名称" prop="title"></el-table-column>
          <el-table-column align="center" label="作者" prop="author"></el-table-column>
          <el-table-column align="center" label="创建时间" prop="createdAt">
            <template slot-scope="{row}">
              <span>{{handleDate(row.createdAt,'yyyy-MM-dd hh:mm:ss')}}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="更新时间" prop="updatedAt">
            <template slot-scope="{row}">
              <span>{{handleDate(row.updatedAt,'yyyy-MM-dd hh:mm:ss')}}</span>
            </template>
          </el-table-column>
          <el-table-column align="center" label="操作">
            <template slot-scope="{row}">
              <el-button type="primary" size="small" @click="handleChange(row)">修改</el-button>
            </template>
          </el-table-column>
        </el-table>
        <div style="text-align: right">
          <el-pagination :current-page="pageNum" :page-size="pageSize" :page-sizes="[10, 20, 50]" :total="total"
                         layout="total, sizes, prev, pager, next, jumper" @current-change="handleCurrentChange" @size-change="handleSizeChange"></el-pagination>
        </div>
      </div>
    </div>
    <el-dialog :visible.sync="visible" v-if="visible" :title="title" :close-on-click-modal="false" @close="handleClose">
      <div>
        <el-form :model="formData" label-width="80px">
          <el-form-item label="发布方式" prop="subType">
            <el-radio-group v-model="formData.subType">
              <el-radio :label="1">自行编辑</el-radio>
              <el-radio :label="3">外部链接</el-radio>
            </el-radio-group>
          </el-form-item>
          <el-form-item label="文章标题" prop="title" :rules="rules['title']">
            <el-input placeholder="请输入文章标题" v-model="formData.title" :maxlength="30"></el-input>
          </el-form-item>
          <el-form-item v-if="formData.subType==1" label="文章内容" prop="content" :rules="rules['content']">
            <tinymce-editor v-model="formData.content" :height="500"></tinymce-editor>
          </el-form-item>
          <el-form-item v-if="formData.subType==3" label="外部链接" prop="url" :rules="rules['url']">
            <el-input placeholder="请输入外部链接" v-model="formData.url"></el-input>
          </el-form-item>
        </el-form>
        <div style="text-align:right">
          <el-button type="primary" size="small" @click="handleSub">确定发布</el-button>
          <el-button size="small" @click="handleClose">取消</el-button>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { formatDate } from '@/utils/index'
import TinymceEditor from "@/components/TinymceEditor/index.vue";
import { mapGetters } from 'vuex'
export default {
  components: {
    TinymceEditor
  },
  computed: {
    ...mapGetters(['userInfo'])
  },
  data() {
    return {
      authorId: '',
      visible: false,
      articleList: [],
      title: '创建文章资讯',
      formData: {
        subType: 1,
        title: '',
        content: ''
      },
      rules: {
        title: [{
          required: true,
          message: "请输入标题",
          trigger: "blur"
        }],
        content: [{
          required: true,
          message: "请输入文字内容",
          trigger: "blur"
        }],
        url: [{
          required: true,
          message: "请输入外部链接",
          trigger: "blur"
        }],
      },
      pageSize: 10,
      pageNum: 1,
      total: 0
    }
  },
  created() {
    this.authorId = this.userInfo.id
    this.handleLoadData()
  },
  methods: {
    //渲染表格
    handleLoadData() {
      config.http({
        method: 'get',
        url: '/info/getPeronalArticle',
        data: {
          authorId: this.authorId,
          pageSize: this.pageSize,
          page: this.pageNum
        },
        success: (res) => {
          this.articleList = res.rows
          this.total = res.count
        },
        error: (e) => {
          console.log(e);
        }
      })
    },
    //文章修改
    handleChange(row) {
      this.visible = true
      this.title = '修改文章资讯'
      this.formData = {
        ...row,
        subType: 1
      }
    },
    //文章创建
    handleArticle() {
      this.visible = true
      this.title = '创建文章资讯'
    },
    //发布
    handleSub() {
        if(this.title == '创建文章资讯') {
          config.http({
            method: 'post',
            url: '/info/addPersonalArticle',
            data: {
              authorId: this.userInfo.id,
              title: this.formData.title,
              content: this.formData.subType==1?this.formData.content:this.formData.url,
              type:this.formData.subType
            },
            success: (res => {
              if(res.code == 0) {
                this.$message.success('操作成功')
              }
              this.handleClose()
              this.handleLoadData()
            }),
            error: (e => {
              console.log(e);
              this.handleClose()
            })
          })
        } else if(this.title == '修改文章资讯') {
          config.http({
            method: 'post',
            url: '/info/updatePersonalArticle',
            data: {
              id: this.formData.id,
              title: this.formData.title,
              content: this.formData.content
            },
            success: (res => {
              if(res.code == 0) {
                this.$message.success('修改成功')
              }
              this.handleClose()
              this.handleLoadData()
            }),
            error: (e => {
              console.log(e);
              this.handleClose()
            })
          })
        }
    },
    //关闭弹窗
    handleClose() {
      this.visible = false
      this.formData = {
        subType: 1,
        title: '',
        content: ''
      }
    },
    //日期格式化
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
.article-wrapper {
  width: 100%;
  .article-con {
    width: 100%;
    min-height: 300px;
    .title {
      font-size: 20px;
      font-weight: 800;
      margin-bottom: 20px;
    }
  }
  .mb20 {
    margin-bottom: 20px;
  }
  .pd20 {
    padding-right: 20px;
  }
}
</style>