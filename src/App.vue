<template>
  <div id="app">
    <keep-alive v-if="$route.meta.keepAlive">
      <router-view class="router"></router-view>
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #48515a;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
// 导航栏
.van-nav-bar {
  line-height: 44px;
  z-index: 100;
  .van-nav-bar__content {
    height: 92px;
    .van-nav-bar__left {
      padding: 0 32px;
      font-size: 28px;
    }
    .van-nav-bar__title {
      font-size: 32px;
      font-family: PingFang-SC-Bold, PingFang-SC;
      font-weight: bold;
      color: #333333;
      line-height: 45px;
    }
    .van-nav-bar__text {
      font-size: 16px;
    }
  }
}

.van-nav-bar__left {
  .van-icon-arrow-left {
    font-size: 40px;
    color: rgba(51, 51, 51, 1);
  }
}
// 确认弹窗dialog
.van-dialog {
  width: 640px;
  font-size: 32px;
  border-radius: 32px;
  background-repeat: no-repeat;
  background-size: 100% 100%;
}
.van-dialog__content--isolated {
  min-height: 208px;
}
.van-dialog__header {
  font-size: 32px;
  font-family: PingFang-SC-Bold, PingFang SC;
  font-weight: 500;
  color: #333333;
  line-height: 45px;
}
.van-dialog__message {
  font-size: 24px;
  font-family: PingFang-SC-Medium, PingFang-SC;
  font-weight: 500;
  color: #666666;
  line-height: 33px;
  padding: 17px 48px 40px 48px;
  width: 70%;
  margin: 5px 15% 0;
}
.van-dialog__confirm,
.van-dialog__cancel {
  height: 96px;
}
.van-dialog__footer {
  .van-button__text {
    font-size: 32px;
    font-family: PingFang-SC-Medium, PingFang-SC;
    font-weight: 500;
    line-height: 45px;
  }
}
.van-form {
  margin-bottom: 50px;
}
.van-cell {
  font-size: 28px;
  line-height: 90px;
  width: 90%;
  background: none;
  margin: 0 5%;
}
// 因设计屏宽为750，vant样式屏宽为375，所以需要重置vant样式
//van-toast
.van-toast {
  width: 176px;
  padding: 32px;
  font-size: 28px;
  line-height: 40px;
  border-radius: 16px;
}

.van-toast--html,
.van-toast--text {
  min-width: 192px;
  padding: 16px 24px;
}

.van-toast__icon {
  font-size: 72px;
}

.van-toast__loading {
  padding: 8px;
}

.van-toast__text {
  margin-top: 16px;
}
#stats {
  display: none;
}
.home {
  // 进度条
  .step-list {
    padding: 0 50px;
    margin-top: 50px;
    margin-bottom: 70px;
    display: flex;
    justify-content: space-between;
    // 连接处横线
    .step-list-item-traverse {
      width: 100px;
      border-top: 1px solid #ccc;
      margin-top: 50px;
    }
    .step-list-items {
      display: flex;
      flex-direction: column;
      align-items: center;
      .step-list-item {
        width: 80px;
        height: 80px;
        border: 1px solid #ccc;
        border-radius: 50%;
        text-align: center;
        line-height: 80px;
        color: #ccc;
        font-size: 32px;
      }
      .selected {
        background-color: #1890ff;
        color: #fff;
      }
      .stepTrue {
        border: 1px solid #1890ff;
        color: #1890ff;
        background-color: '';
      }
      .step-list-item-title {
        margin-top: 20px;
        font-size: 30px;
      }
    }
  }
}
.van-button {
  height: 88px;
}
.content {
  margin: 20px;
  padding: 20px;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 0px 10px 50px 40px rgba(51, 51, 51, 0.01);
}
.van-picker__cancel,
.van-picker__confirm {
  font-size: 25px;
}
</style>
