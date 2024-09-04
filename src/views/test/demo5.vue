<template>
  <!-- 测试ofd文件预览 -->
  <div style="width: 90%;height:100%;margin:0 auto">
    <el-button style="width: 100%;margin-bottom: 10px;margin:0 auto">
      下载
    </el-button>
    <!-- width:100%;height:100%;margin:0 auto -->
    <div style="width:100%;height:100%;margin:0 auto" id="ofdTest">

    </div>
  </div>
</template>

<script>
import EasyOFD from "easyofd";
import axios from 'axios';
export default {
  components: {},
  computed: {
    totalFLag() {
      return ''
    }
  },
  data() {
    return {

    };
  },
  async created() {

    // axios.get('https://rsjxjy.dev.59iedu.com:9443/mfs/更新类文件/郑州大学/能力服务/old/tomcat_ddfw/conf/context.xml', { responseType: 'blob' })
    axios.get('https://rsjxjy.dev.59iedu.com:9443/mfs/电子证照/mock6.2.4.ofd', { responseType: 'blob' })
      .then(response => {
        const blob = new Blob([response.data], { type: 'application/octet-stream' });
        let yourElement = document.getElementById("ofdTest");
        let ofd = new EasyOFD('myofdID', yourElement);
        ofd.loadFromBlob(blob);
        console.log(ofd, 'ofd');
      })
      .catch(error => {
        console.error('获取文件失败:', error);
      });


  },
  methods: {
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