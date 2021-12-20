<template>
  <div class="footer" :class="{ 'fixed-footer': fixed }">
    <div class="copyright">
      <a href="">copyright 2020 NeverGiveUpT</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    fixed: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="less" scoped>
.footer {
  text-align: center;
  font-size: 0.3rem;
  margin: 30px 0;
  .copyright {
    a {
      color: #fff;
    }
  }
}
.fixed-footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1;
}
</style>
