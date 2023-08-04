<template>
  <div class="print-sign-wrapper">
    <div class="block">
      <el-cascader ref="cascader" class="cascader" v-model="value" :options="options" :props="props" collapse-tags clearable @change="handleChange">
      </el-cascader>
      <div v-if="value.length" class="area" @click="handleCascaderClick">
        {{areaName}}
      </div>
      <div class="num" :style="areaNum>0?'':'background-color:white'" @click="handleCascaderClick">
        <template v-if="areaNum>0">
          +{{areaNum}}
        </template>
      </div>
    </div>
    <div>
      <el-cascader class="cascader" v-model="value" :options="options" :props="props" collapse-tags clearable @change="handleChange">
      </el-cascader>
    </div>
    {{value}}
  </div>
</template>

<script>
export default {
  components: {},
  computed: {
    areaNum() {
      let flag3 = -1
      if(this.value.length) {
        let flag1 = 0
        let flag2 = 0
        this.value.map(item => {
          if(item[0] == 1) {
            flag1++
          } else if(item[0] == 2) {
            flag2++
          }
        })
        console.log(flag1);
        console.log(flag2);
        if(flag1 == 9) flag3++
        if(flag2 == 4) flag3++
      } else {
        return 0
      }
      console.log(flag3);
      return flag3
    },
    areaName() {

      return this.value[0][0] == 1 ? '东南' : '西北'
    }
  },
  data() {
    return {
      props: {
        multiple: true,
        // emitPath:false
        // checkStrictly: true
      },
      options: [{
        value: 1,
        label: '东南',
        children: [{
          value: 11,
          label: '上海',
          children: [
            { value: 111, label: '普陀' },
            { value: 222, label: '黄埔' },
            { value: 333, label: '徐汇' }
          ]
        }, {
          value: 22,
          label: '江苏',
          children: [
            { value: 444, label: '南京' },
            { value: 555, label: '苏州' },
            { value: 666, label: '无锡' }
          ]
        }, {
          value: 33,
          label: '浙江',
          children: [
            { value: 777, label: '杭州' },
            { value: 888, label: '宁波' },
            { value: 999, label: '嘉兴' }
          ]
        }]
      }, {
        value: 2,
        label: '西北',
        children: [{
          value: 44,
          label: '陕西',
          children: [
            { value: 101010, label: '西安' },
            { value: 111111, label: '延安' }
          ]
        }, {
          value: 55,
          label: '新疆维吾尔族自治区',
          children: [
            { value: 121212, label: '乌鲁木齐' },
            { value: 131313, label: '克拉玛依' }
          ]
        }]
      }],
      value: '',
      dropDownFlag:true
    };
  },
  created() {
  },
  mounted() { },
  methods: {
    handleChange(value) {
      console.log(value, 'val');
    },
    //级联选择器展开收起
    handleCascaderClick(){
      this.dropDownFlag=!this.dropDownFlag
      if(this.dropDownFlag){
        this.$refs.cascader.$el.click()
      }else{
        this.$refs.cascader.dropDownVisible = false
      }
    }
  },
};
</script>

<style lang="scss" scoped>
.print-sign-wrapper {
  padding: 20px;
  .block {
    position: relative;
    // .cascader{
    //   width: 100%;
    // }
    .area {
      font-size: 12px;
      position: absolute;
      width: 100px;
      height: 24px;
      background: rgb(240, 242, 245);
      border-radius: 4px;
      top: 8px;
      left: 8px;
      text-align: center;
      line-height: 22px;
      color: rgb(156, 147, 143);
    }
    .num {
      font-size: 12px;
      position: absolute;
      width: 42px;
      height: 24px;
      background: rgb(240, 242, 245);
      border-radius: 4px;
      top: 8px;
      left: 138px;
      text-align: center;
      line-height: 22px;
      color: rgb(156, 147, 143);
    }
  }
}
</style>
