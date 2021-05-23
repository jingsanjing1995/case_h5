<template>
  <div class="home">
    <!-- 顶部导航栏 -->
    <van-nav-bar title="案件审核"
                 left-arrow
                 @click-left="onClickLeft" />
    <!-- 内容区域 -->
    <div class="content">
      <van-form @submit="onSubmit">

        <!-- 可选状态 -->
        <van-field readonly
                   clickable
                   v-if="str2=='1' || str2=='2'  || str2=='3'"
                   name="picker"
                   :value="eugitForm.statusStr"
                   label="选择器"
                   placeholder="点击选择城市"
                   @click="showPicker = true"
                   :rules="[{ required: true, message: '请选择审核状态' }]" />
        <!-- 审核意见 -->
        <van-field v-model.trim="eugitForm.extra1"
                   v-if="str2=='1'"
                   name="extra1"
                   label="预审意见"
                   type="textarea"
                   placeholder="请输入预审意见" />
        <van-field v-model.trim="eugitForm.extra2"
                   v-if="str2=='2'"
                   name="extra2"
                   label="审批意见"
                   type="textarea"
                   placeholder="请输入会签意见" />
        <van-field v-model.trim="eugitForm.extra3"
                   v-if="str2=='3'"
                   name="extra3"
                   label="会签意见"
                   type="textarea"
                   placeholder="请输入会签意见" />

        <!-- 签字 -->
        <van-field name="switch"
                   label="签字"
                   v-if="str2=='4'"
                   :rules="[{ required: true, message: '请选择签字状态' }]">
          <template #input>
            <van-switch v-model="eugitForm.status"
                        @change="select_status"
                        size="20" />
          </template>
        </van-field>
        <div style="margin: 16px;">
          <van-button round
                      block
                      type="info"
                      native-type="submit">保存</van-button>
        </div>
      </van-form>
    </div>
    <!-- 弹窗 -->
    <van-popup v-model="showPicker"
               position="bottom">
      <van-picker show-toolbar
                  :columns="status"
                  @confirm="onConfirm"
                  @cancel="showPicker = false">
        <template #option="item">
          {{item.lable}}
        </template>
      </van-picker>
    </van-popup>
  </div>
</template>

<script>
import { Toast } from 'vant'
// import { dateToString } from '@/utils/index.js'
import { update_path } from '../../api/api.js'
import store from '@/store'
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      str2: store.getters.userData.str2, // 1 合同预审   2 合同审批  3 集团招标办  4 合同签字
      caseInfo: store.getters['case/case_info'],
      status: [],
      eugitForm: {
        statusStr: '',
        extra1: '',
        extra2: '',
        extra3: '',
      },

      value: '',
      showPicker: false,
    }
  },
  mounted() {
    this.on_load()
    console.log(this.caseInfo)
  },
  methods: {
    ...mapActions({
      set_case_info: 'case/set_case_info',
    }),
    /**
     * 返回上一级按钮
     */
    onClickLeft() {
      this.$router.go(-1)
    },
    /**
     * 进入此页面进行加载
     */
    on_load() {
      if (this.str2 == '1') {
        this.status = [
          {
            value: 4,
            lable: '预审通过',
          },
          {
            value: 2,
            lable: '合同退回',
          },
        ]
      } else if (this.str2 == '2') {
        this.status = [
          {
            value: 5,
            lable: '预审通过',
          },
          {
            value: 2,
            lable: '合同退回',
          },
        ]
      } else if (this.str2 == '3') {
        this.status = [
          {
            value: 6,
            lable: '预审通过',
          },
          {
            value: 2,
            lable: '合同退回',
          },
        ]
      } else if (this.str2 == '4') {
        this.status = [
          {
            value: 7,
            lable: '预审通过',
          },
          {
            value: 2,
            lable: '合同退回',
          },
        ]
      }
    },
    /**
     * 状态选择器
     */
    onConfirm(value) {
      this.eugitForm.statusStr = value.lable
      this.eugitForm.status = value.value
      this.showPicker = false
    },

    /**
     * select_status
     */
    select_status(e) {
      if (e) {
        this.eugitForm.status = 7
      } else if (!e) {
        this.eugitForm.status = ''
      }
    },
    /**
     * 提交按钮
     */
    onSubmit() {
      this.update_data()
    },

    /**
     * 修改状态接口调用
     */
    async update_data() {
      debugger
      let param = {
        id: this.caseInfo.id,
        extra1: this.eugitForm.extra1,
        extra2: this.eugitForm.extra2,
        extra3: this.eugitForm.extra3,
        status: this.eugitForm.status,
      }
      let res = await update_path(param)
      debugger
      if (res.code == 300000) {
        Toast.success({
          message: res.message,
          duration: 1.5 * 1000,
        })
        this.$router.go(-1)
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.van-field__control--custom {
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  align-items: center;
  min-height: 24px;
}
.van-cell {
  line-height: 55px;
}
</style>
