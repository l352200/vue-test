<template>
  <div class="print-sign-wrapper">
    <div class="block">
      <el-cascader v-model="value" :options="options" :props="props" collapse-tags clearable @change="handleChange" ></el-cascader>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      props: {
        multiple: true,
        checkStrictly: true
      },
      options: [{
        value: 300000,
        label: '东南',
        children: [{
          value: 360000,
          label: '上海',
          children: [
            { value: 350100, label: '普陀' },
            { value: 4, label: '黄埔' },
            { value: 5, label: '徐汇' }
          ]
        }, {
          value: 7,
          label: '江苏',
          children: [
            { value: 8, label: '南京' },
            { value: 9, label: '苏州' },
            { value: 10, label: '无锡' }
          ]
        }, {
          value: 12,
          label: '浙江',
          children: [
            { value: 13, label: '杭州' },
            { value: 14, label: '宁波' },
            { value: 15, label: '嘉兴' }
          ]
        }]
      }, {
        value: 17,
        label: '西北',
        children: [{
          value: 18,
          label: '陕西',
          children: [
            { value: 19, label: '西安' },
            { value: 20, label: '延安' }
          ]
        }, {
          value: 21,
          label: '新疆维吾尔族自治区',
          children: [
            { value: 22, label: '乌鲁木齐' },
            { value: 23, label: '克拉玛依' }
          ]
        }]
      }],
      value: ''
    };
  },
  created() {
  },
  mounted() { },
  methods: {
    handleChange(value) {
      console.log(value, 'val');
    },
  },
};
</script>

<style lang="scss" scoped>
.print-sign-wrapper {
  padding: 20px;
}
</style>
