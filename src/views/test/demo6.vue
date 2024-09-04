<template>
  <!-- 测试ofd文件预览 -->
  <div style="width: 90%;margin:0 auto">
    <!-- <div v-if="parsedXML" style="width:90%;height:70%;overflow:auto;border:3px solid #ccc;padding:10px;margin:10px;">
      <pre style="width:100%;height: 70vh;"><code>{{ parsedXML }}</code></pre>
    </div> -->
    <el-button @click="handleclick">test</el-button>
    <el-button @click="handleclick2">test23</el-button>
    <a href="https://rsjxjy.dev.59iedu.com:9443/mfs/电子证照/mock6.2.4.ofd?mp.wexin.qq.com" target="_blank">test333</a>
    <el-button @click="handleclick3">test23</el-button>
    <!-- <div v-html="htmlContent"></div> -->
  </div>
</template>

<script>
import axios from 'axios';
import { ref } from 'vue';
// import dhtml from '@/assets/download.html';
export default {
  // setup() {
  //   const htmlContent = ref(dhtml);
  //   return { htmlContent };
  // },
  components: {},
  computed: {
    totalFLag() {
      return ''
    }
  },
  data() {
    return {
      parsedXML: '',
      url: '',
      fileName: '',
      header: ''
    };
  },
  async created() {


    axios.get('https://rsjxjy.dev.59iedu.com:9443/mfs/更新类文件/郑州大学/能力服务/old/tomcat_ddfw/tomcat_ddfw/conf/web.xml', { responseType: 'text' })
      .then(response => {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(response.data, 'text/xml');
        this.parsedXML = new XMLSerializer().serializeToString(xmlDoc.documentElement);
      })

  },
  methods: {
    handleclick2() {
      let fileUrl = 'https://rsjxjy.dev.59iedu.com:9443/mfs/更新类文件/郑州大学/能力服务/old/tomcat_ddfw/tomcat_ddfw/conf/web.xml'
      let fileName = 'mock6.2.4.pdf'
      const downloadDom = document.createElement('a')
        ; (downloadDom.download = fileName), (downloadDom.href = fileUrl)
      document.body.appendChild(downloadDom)
      downloadDom.click()
      document.body.removeChild(downloadDom)
    },
    async handleclick() {
      // window.open('https://rsjxjy.dev.59iedu.com:9443/mfs/电子证照/mock6.2.4.ofd')
      // this.url = 'https://rsjxjy.dev.59iedu.com:9443/mfs/更新类文件/郑州大学/能力服务/old/tomcat_ddfw/tomcat_ddfw/conf/web.xml'
      this.url = 'https://rsjxjy.dev.59iedu.com:9443/mfs/电子证照/mock6.2.4.ofd'
      this.fileName = 'test123.ofd'
      this.header = ''
      const request = await axios({
        method: 'get',
        url: this.url,
        headers: this.header,
        responseType: 'blob'
      })
      if(!request.data) {
        // 下载文件失败，不存在文件
        return false
      }
      const type = this.getMimeType('pdf' || this.url)
      const blob = new Blob([request.data], {
        type: type
      })
      console.log(blob, 'blob');
      const downloadElement = document.createElement('a')
      let href = window.URL.createObjectURL(blob)
      console.log(href, 'hrefhrefhref');
      downloadElement.style.display = 'none'
      console.log(href, 'href');
      downloadElement.href = href
      downloadElement.download = this.fileName //下载后文件名
      document.body.appendChild(downloadElement)
      downloadElement.click() //点击下载
      document.body.removeChild(downloadElement) //下载完成移除元素

      window.URL.revokeObjectURL(href) //释放掉blob对象
    },
    handleclick3() {
      // window.open('http://192.168.11.103:9988/api/info/getfile')
      window.open('')
    },
    getMimeType(filename) {
      const ext = filename
        .split('.')
        .pop()
        .toLowerCase()
      switch(ext) {
        case 'doc':
        case 'docx':
          return 'application/vnd.openxmlformats-officedocument.wordprocessingml.document;charset=utf-8'
        case 'xlsx':
        case 'xls':
          return 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8'
        case 'pdf':
          return 'application/pdf;charset=utf-8'
        default:
          return 'application/octet-stream;charset=utf-8'
      }
    }
  }
};
</script>

<style>
.colorchange {
  color: green;
}
.OfdButton {
  padding: 10px 20px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
}
</style>