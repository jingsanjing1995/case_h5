<template>
  <div class="home">
    <!-- 顶部导航栏 -->
    <!-- 顶部导航栏 -->
    <van-nav-bar title="案件详情"
                 left-arrow
                 @click-left="onClickLeft" />
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
             class="case-item" @click="go_to_info(item)">

          <!-- 1 -->
          <!-- <div class="significance"
               v-if="caseInfo.type=='1'">
            <div class="companyName">申请执行人:{{item.applicant}}</div>
          </div>
          <div class="significance"
               v-if="caseInfo.type=='1'">
            <div class="companyName">被执行人:{{item.executedPerson}}</div>
          </div>
          <div class="significance"
               v-if="caseInfo.type=='1'">
            <div class="companyName">生效法律依据文号:{{item.lawNumber}}</div>
          </div>
          <div class="significance"
               v-if="caseInfo.type=='1'">
            <div class="companyName">执行法院:{{item.enforcementCourt}}</div>
          </div> -->
          <div class="significance"
               v-if="caseInfo.type=='1'">
            <div class="companyName">案件号:{{item.executionBumber}}</div>
          </div>
          <!-- <div class="significance"
               v-if="caseInfo.type=='1'">
            <div class="companyName">起诉或被诉本金:{{item.money}}</div>
          </div> -->

          <!-- 2 -->
          <!-- <div class="significance"
               v-if="caseInfo.type=='2'">
            <div class="companyName">本单位涉案企业名称:{{item.companyName}}</div>
          </div>
          <div class="significance"
               v-if="caseInfo.type=='2'">
            <div class="companyName">对方当事人全称:{{item.peopleName}}</div>
          </div>
          <div class="significance"
               v-if="caseInfo.type=='2'">
            <div class="companyName">办案法院/仲裁委:{{item.thecourtName}}</div>
          </div> -->
          <div class="significance"
               v-if="caseInfo.type=='2'">
            <div class="companyName">案件号:{{item.eventNum}}</div>
          </div>
          <!-- <div class="significance"
               v-if="caseInfo.type=='2'">
            <div class="companyName">起诉或被诉本金:{{item.money}}</div>
          </div>
          <div class="significance"
               v-if="caseInfo.type=='2'">
            <div class="companyName">起诉或被诉利息:{{item.interest}}</div>
          </div> -->

          <!-- 按钮 -->
    

        </div>
      </van-list>
    </van-pull-refresh>

  </div>
</template>

<script>
import { Toast } from 'vant'
import { dateToString } from '@/utils/index.js'
import {
  outstandingCase_list_path,
  executionCase_list_path,
} from '../../api/api.js'
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
      caseInfo: store.getters['case/case_info'],
    }
  },
  mounted() {},
  methods: {
    ...mapActions({
      set_case_content_info: 'case/set_case_content_info',
    }),
    /**
     * 返回上一级按钮
     */
    onClickLeft() {
      this.$router.go(-1)
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
      let param = {
        currentPage: currentPage,
        numPerPage: pageSize,

        reportID: this.caseInfo.id,
      }
      var res
      if (this.caseInfo.type == '1') {
        res = await executionCase_list_path(param)
      } else if (this.caseInfo.type == '2') {
        res = await outstandingCase_list_path(param)
      }
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
      this.set_case_content_info(e)
      this.$router.push({ path: '/caseContentInfo' })
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
    padding: 20px;
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
      width: 100%;
      background-color: #07c160;
      line-height: 80px;
      border-radius: 0 0 20px 20px;
    }
  }
}
</style>
