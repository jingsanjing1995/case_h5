<!-- 顶部导航 -->
<template>
  <div>
    <van-nav-bar
      class="van-nav-custom"
      :left-arrow="leftArrowShow"
      :title="title"
      fixed
      placeholder
      @click-left="onClickLeft"
    >
      <template #right>
        <slot></slot>
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    leftArrowShow: {
      type: Boolean,
      default: false,
    },
  },
  //   components: {},

  //   computed: {},

  //   mounted: {},

  methods: {
    onClickLeft() {
      this.$router.go(-1);
    },
  },
};
</script>
<style lang='scss'>
.van-nav-bar {
  height: 100px;
  z-index: 100;
  .van-nav-bar__title {
    font-size: 32px;
    font-family: PingFang-SC-Bold, PingFang-SC;
    font-weight: bold;
    color: #333333;
    line-height: 45px;
  }
}
.van-nav-bar__left {
  .van-icon-arrow-left {
    font-size: 40px;
    color: rgba(51, 51, 51, 1);
  }
}
</style>