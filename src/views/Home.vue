<template>
  <div class="home">
    <!-- 顶部导航栏 -->
    <van-nav-bar title="首页"
                 right-text="退出登录"
                 @click-right="onClickRight" />
    <!-- 列表 下拉事件 @refresh -->
    <van-pull-refresh v-model="refreshing"
                      @refresh="onRefresh"
                      class="case-list">
      <van-list v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad">
        <!-- 列表 -->
        <div v-for="(item ,index) in list"
             :key="index"
             class="case-item"
             @click.stop="go_to_info(item)">
          <!-- 企业名称 时间-->
          <div class="significance">
            <div class="companyName">{{item.companyName}}</div>
            <div class="type">{{item.type==1?"未终结案件":item.type==2?"执行案件":item.type==3?"空上报":"未知"}}</div>
          </div>
          <!-- 填报人信息 -->
          <div class="significance">
            <div class="peopleName">{{item.peopleName}}</div>
            <div class="mobilePhone">{{item.mobilePhone}}</div>
          </div>
          <!-- 状态 -->
          <div class="significance">
            <div class="status">{{status_judge(item.status)}}</div>
            <div class="dateTime">{{dateToString(item.dateTime,"yyyy-mm-dd hh:mm:ss")}}</div>
          </div>
          <!-- 按钮 -->
          <div class="significance-button">
            <div class="audit-button"
                 @click.stop="go_to_audit(item)">审核</div>
          </div>

        </div>
      </van-list>
    </van-pull-refresh>

  </div>
</template>

<script>
import { Toast } from 'vant'
import { dateToString } from '@/utils/index.js'
import { list_path } from '../api/api.js'
import store from '@/store'
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      dateToString,
      list: [],
      currentPage: 1,
      pageSize: 10,
      totalRows: 0,
      loading: false, // 将 loading 设置为 true，表示处于加载状态
      finished: false, // 是否已加载完成，加载完成后不再触发load事件
      refreshing: false, // 下拉刷新时会触发 refresh 事件，
    }
  },
  mounted() {},
  methods: {
    ...mapActions({
      set_case_info: 'case/set_case_info',
      login_out: 'user/LOGOUT',
    }),

    onClickRight() {
      this.login_out()
      this.$router.replace('/login')
    },
    /**
     * 列表加载方法
     */
    onLoad() {
      if (this.list.length <= this.totalRows) {
        this.get_list_data(this.currentPage++, 10)
      } else {
        Toast.fail('没有更多数据了')
      }
    },

    /**
     *  请求列表
     */
    async get_list_data(currentPage, pageSize) {
      let deptId = store.getters.userData.deptId
      let status = store.getters.userData.str2
      let param = {
        currentPage: currentPage,
        numPerPage: pageSize,
        status: status,
        organizationID: deptId !== '00000000' && deptId ? deptId : '',
      }
      let res = await list_path(param)
      debugger
      this.list = this.list.concat(res.data.resultList)
      this.currentPage = res.data.currentPage
      this.pageSize = res.data.pageSize
      this.totalRows = res.data.totalRows
      debugger
      if (this.list.length == res.data.totalRows) {
        this.loading = false // 将 loading 设置为 true，表示处于加载状态
        this.finished = true // 是否已加载完成，加载完成后不再触发load事件
        this.refreshing = false // 下拉刷新时会触发 refresh 事件，
      }
    },

    /**
     * 状态校验
     * 4 预审通过
     */
    status_judge(status) {
      if (status == '1') {
        return '已上报'
      } else if (status == '2') {
        return '已驳回'
      } else if (status == '3') {
        return '空上报'
      } else if (status == '4') {
        return '预审通过'
      } else if (status == '5') {
        return '审批通过'
      } else if (status == '6') {
        return '会签通过'
      } else if (status == '7') {
        return '已签字'
      }
    },
    /**
     * 下拉刷新
     */
    onRefresh() {
      this.list = []
      this.get_list_data(1, 10)
    },
    /**
     * 去往审核页
     */
    go_to_audit(e) {
      this.set_case_info(e)
      this.$router.push({ path: '/caseEudit' })
    },
    /**
     * 去往详情页
     */
    go_to_info(e) {
      this.set_case_info(e)
      this.$router.push({ path: '/caseInfo' })
    },
  },
}
</script>

<style lang="scss" scoped>
.home {
  background-color: rgb(248, 248, 248);
  width: 100%;
  // 顶部标题
  .top-title {
    padding-top: 80px;
    font-size: 25px;
    font-weight: 700;
  }
}
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
.case-list {
  padding: 20px;
  height: calc(100vh - 140px);
  .case-item {
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 0px 10px 50px 40px rgba(51, 51, 51, 0.01);
    margin-top: 20px;
  }
  .significance {
    display: flex;
    justify-content: space-between;
    padding: 20px 20px 0 20px;
    .companyName {
      font-size: 30px;
      font-weight: 500;
    }
    .dateTime {
      font-size: 20px;
      color: #ccc;
    }
    .type {
      font-size: 25px;
      font-weight: 500;
      color: #ccc;
    }
    .peopleName {
      font-size: 25px;
      font-weight: 500;
      color: #ccc;
    }
    .mobilePhone {
      font-size: 25px;
      font-weight: 500;
      color: #ccc;
    }
    .status {
      font-size: 25px;
      font-weight: 500;
      color: #ccc;
    }
  }
  .significance-button {
    display: flex;
    justify-content: space-between;
    height: 80px;
    font-size: 25px;
    margin-top: 20px;
    color: #fff;
    .info-button {
      width: 50%;
      background-color: #07c160;
      line-height: 80px;
      border-radius: 0 0 0 20px;
    }
    .audit-button {
      width: 100%;
      background-color: #1989fa;
      line-height: 80px;
      border-radius: 0 0 20px 20px;
    }
  }
}
</style>
