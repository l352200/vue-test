<template>
  <div class="app-footer">
    <div class="footer-container">
      <div class="statement">
        ☺仅开发学习使用☺
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.app-footer {
  width: 100%;
  display: flex;
  justify-content: center;
  background: #0d2033;
  .footer-container {
    width: 1200px;
    margin: 0 auto;
    height: 250px;
    // position: relative;
    text-align: center;
    .statement{
      color: #fff;
      margin-top: 100px;
      // position: absolute;
      // right: -200px;
      // bottom: 50px;
    }
  }
}
</style>
