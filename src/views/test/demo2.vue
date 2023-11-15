<template>
  <div class="print-sign-wrapper">
    <div style="text-align:center">

      <div style="margin-bottom:50px">测试预览</div>
      <el-button @click="uploadFile">选取文件</el-button>
      <el-button @click="goPreview">预览一下</el-button>
      <div ref="file" id="message"></div>
      <img :src="testUrl" alt="">
      <div>{{testUrl}}</div>
      <div style="margin-bottom:500px">
        <a href="https://fjjsjxjy.test1.59iedu.com:9443/mfs/resource/public/2023/06/28/2ca4e7148894aff40188ffbbbbe40326.xls">
          <el-button>
            附件下载
          </el-button>
        </a>
      </div>
      <el-upload action="" :limit="1" :on-change="handleChange" :auto-upload="false" :file-list="fileList" :show-file-list="false">
        <el-button v-loading="loading" :disabled="loading">上传</el-button>
      </el-upload>
    </div>
  </div>
</template>

<script>
// let docx = require("docx-preview");
import mammoth from 'mammoth'
export default {
  components: {},
  computed: {

  },
  data() {
    return {
      testBlobUrl: '',
      testUrl: '',
      purl: ''

    }
  },
  // created() {
  //   console.log("使用插件的renderAsync方法来渲染", docx);
  // },
  mounted() { },
  methods: {
    goPreview() {
      //将文件转成arrayBuffer格式
      let arrayBuffer = this.testUrl
      let blob = this.bufToBlob(arrayBuffer)

      mammoth.convertToHtml({ arrayBuffer: arrayBuffer })
        .then((res) => {
          document.getElementById('message').innerHTML = res.value
          let obj = document.getElementById('message').children
          //动态修改样式
          for(let i = 0; i < obj.length; i++) {
            obj[i].style.color = "#333"
            obj[i].style.fontSize = "0.7rem"
          }
        }).done();

      console.log(this.purl);
      // window.open('http://www.pfile.com.cn/api/profile/onlinePreview?url=' + encodeURIComponent(this.purl));

      // docx.renderAsync(blob, this.$refs.file);
    },
    async uploadFile() {
      const input = document.createElement('input')
      input.setAttribute('type', 'file')
      input.setAttribute('style', 'display:none')
      // 将文件选择元素添加到文档中
      document.body.appendChild(input)
      // 触发文件选择元素的点击事件
      input.click()
      // 等待文件选择元素的change事件
      const files = await new Promise((resolve, reject) => {
        input.addEventListener('change', (e) => {
          const files = Object.values(e.target.files) || []
          // 从文档中移除文件选择元素
          document.body.removeChild(input)
          resolve(files)
        })
      })
      const params = new FormData()
      params.append('file', files[0], files[0].name)

      const reader = new FileReader()
      // result属性中保存的是被读取文件的ArrayBuffer数据对象
      // reader.readAsArrayBuffer(files[0])

      // result属性中将包含所读取文件的原始二进制数据
      // reader.readAsBinaryString(files[0])

      // result属性中将包含一个字符串以表示所读取的文件内容
      // reader.readAsText(files[0])

      // result属性中将包含一个data:URL格式的Base64字符串以表示所读取文件的内容 获取到的字符串可以直接预览
      reader.readAsDataURL(files[0])
      reader.onload = () => {
        this.testUrl = reader.result
        // window.open(this.testUrl)
        // window.open(this.testUrl)
        console.log(reader.result, 'reader');
        this.testUrl = URL.createObjectURL(files[0])
        window.open(this.testUrl)
        var oA = document.createElement("a");
        oA.download = '下载文件'; // 设置下载的文件名
        oA.href = this.testUrl; //直接把后台返回的链接放进去下载
        document.body.appendChild(oA);
        oA.click();
        oA.remove();
        console.log(this.testUrl, 'new');
      }
      console.log(files[0]);
      // reader.onload = () => {
      //   this.testUrl = reader.result
      //   console.log(reader, 'reader');
      //   this.testBlobUrl = path
      //   // console.log(path, 'p')
      //   const blob = this.base64ImgtoFile()
      //   console.log(blob, 'bbb');
      //   const blobUrl = window.URL.createObjectURL(blob)
      //   this.purl = blobUrl

      //   // 这里的文件名根据实际情况从响应头或者url里获取
      //   // const filename = blob.name
      //   // const a = document.createElement('a')
      //   // a.href = blobUrl
      //   // a.download = filename
      //   // a.click()
      //   // window.URL.revokeObjectURL(blobUrl)

      //   // window.open(blobUrl)
      // }
    },
    // arrayBuffer格式转Blob格式
    bufToBlob(buf, mimeType = "") {
      return new Blob([buf], { type: mimeType });
    },

    base64ImgtoFile(filename = 'file') {
      const dataurl = this.testUrl
      //将base64格式分割：['data:image/png;base64','XXXX']
      const arr = dataurl.split(',')
      // .*？ 表示匹配任意字符到下一个符合条件的字符 刚好匹配到：
      // image/png
      const mime = arr[0].match(/:(.*?);/)[1] //image/png
      //[image,png] 获取图片类型后缀
      const suffix = mime.split('/')[1] //png
      const bstr = atob(arr[1]) //atob() 方法用于解码使用 base-64 编码的字符串
      let n = bstr.length
      const u8arr = new Uint8Array(n)
      while(n--) {
        u8arr[n] = bstr.charCodeAt(n)
      }
      return new File([u8arr], `${filename}.${suffix}`, {
        type: mime
      })
    },
    handleChange(file) {
      this.fileList = []
      console.log(file, 'formdata file');
      let suffix = file.name.substring(file.name.length - 3, file.name.length)
      if(suffix != 'xml') {
        this.$message.error('请上传xml格式文件！')
        return
      }
      let isLt = file.size / 1024 / 1024 < this.fileSize;
      console.log(file.size / 1024 / 1024);
      if(!isLt) {
        this.$message.error(`上传文件大小不能超过 ${this.fileSize} MB!`);
        return false;
      }
      this.loading = true
      // console.log(fileLists);
      // 本地服务器路径
      // console.log(URL.createObjectURL(file.raw));
      // 本地电脑路径
      const params = new FormData()
      params.append('file', file.raw, file.name)
      importBankCodeByFile(params).then(res => {
        if(res.code == 200) {
          this.$message.success(res.msg)
          this.loading = false
        }
        console.log(res);
      }).catch((e) => {
        this.loading = false
      })
    },
  },
};
</script>

<style lang="scss" scoped>
.print-sign-wrapper {
  width: 100%;
}
</style>
