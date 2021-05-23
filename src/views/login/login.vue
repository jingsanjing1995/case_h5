<template>
  <div class="login">
    <!-- 顶部 -->
    <!-- 中间 有两个输入框 -->
    <div class="content">
      <van-form @submit="onSubmit">
        <van-field v-model="loginInfo.mobilePhone"
                   name="mobilePhone"
                   label="用户名"
                   placeholder="用户名"
                   :rules="[{ required: true, message: '请填写用户名' }]" />
        <van-field v-model="loginInfo.password"
                   type="password"
                   name="password"
                   label="密码"
                   placeholder="密码"
                   :rules="[{ required: true, message: '请填写密码' }]" />
        <div style="margin: 16px;height:44px">
          <van-button round
                      block
                      type="info"
                      native-type="submit">登录</van-button>
        </div>
      </van-form>
    </div>
    <!-- 底部 -->
  </div>
</template>

<script>
import { Toast } from 'vant'
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      loginInfo: {
        mobilePhone: '',
        password: '',
      },
    }
  },
  mounted() {},
  methods: {
    ...mapActions({
      login: 'user/login',
      loginCode: 'user/loginCode',
      loginWorkNumber: 'user/loginWorkNumber',
    }),
    onSubmit(values) {
      let state = values.password ? (values.mobilePhone ? true : false) : false
      if (state) {
        let data = {
          loginInfo: this.loginInfo,
          $router: this.$router,
          $route: this.$route,
        }
        this.login(data)
      } else {
        Toast.fail('请确保账户密码输入正确')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.content {
  height: auto;
  padding: 20px;
  background-color: #fff;
  margin-top: 300px;
}
.login {
  height: 100vh;
  background-color: rgba(255, 255, 255, 1);
  overflow: hidden;
}
</style>
