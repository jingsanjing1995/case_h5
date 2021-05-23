<template>
  <div class="home">
    <!-- 顶部导航栏 -->
    <!-- 顶部导航栏 -->
    <van-nav-bar title="详情"
                 left-arrow
                 @click-left="onClickLeft" />
    <!-- 案件内容详情基本信息 -->
    <div v-if="caseInfo.type=='1'"
         class="case-item">

      <div class="case-item-content">
        <div class="content-lable">省属企业作为申请执行人:</div>
        <div class="content-value">{{caseContentInfo.applicant}}</div>
      </div>
      <div class="case-item-content">
        <div class="content-lable">被执行人:</div>
        <div class="content-value">{{caseContentInfo.executedPerson}}</div>
      </div>
      <div class="case-item-content">
        <div class="content-lable">生效法律依据文号:</div>
        <div class="content-value">{{caseContentInfo.lawNumber}}</div>
      </div>
      <div class="case-item-content">
        <div class="content-lable">执行案件号:</div>
        <div class="content-value">{{caseContentInfo.executionBumber}}</div>
      </div>
      <div class="case-item-content">
        <div class="content-lable">执行法院:</div>
        <div class="content-value">{{caseContentInfo.enforcementCourt}}</div>
      </div>
      <div class="case-item-content">
        <div class="content-lable">起诉或被诉本金:</div>
        <div class="content-value">{{caseContentInfo.money}}</div>
      </div>
      <div class="case-item-content">
        <div class="content-lable">起诉或被诉利息:</div>
        <div class="content-value">{{caseContentInfo.interest}}</div>
      </div>
      <div class="case-item-content">
        <div class="content-lable">终审判决生效时间:</div>
        <div class="content-value">{{ dateToString(Number(caseContentInfo.startTime),"yyyy-mm-dd hh:mm:ss")}}</div>
      </div>
      <div class="case-item-content">
        <div class="content-lable">立案日期:</div>
        <div class="content-value">{{ dateToString(Number(caseContentInfo.dateOfFiling),"yyyy-mm-dd hh:mm:ss")}}</div>
      </div>

      <div class="case-item-content">
        <div class="content-lable">结案日期:</div>
        <div class="content-value">{{ dateToString(Number(caseContentInfo.endTime),"yyyy-mm-dd hh:mm:ss")}}</div>
      </div>
      <div class="case-item-content">
        <div class="content-lable">申请执行标的:</div>
        <div class="content-value">{{caseContentInfo.subject}}</div>
      </div>
      <div class="case-item-content">
        <div class="content-lable">执行到位金额:</div>
        <div class="content-value">{{caseContentInfo.payNum}}</div>
      </div>
      <div class="case-item-content">
        <div class="content-lable">月回款:</div>
        <div class="content-value">{{caseContentInfo.monthlyPayment}}</div>
      </div>
      <div class="case-item-content">
        <div class="content-lable">案由:</div>
        <div class="content-value">{{caseContentInfo.caseText}}</div>
      </div>

      <div class="case-item-content">
        <div class="content-lable">查封标的财产:</div>
        <div class="content-value">{{caseContentInfo.seizedAssets}}</div>
      </div>
      <div class="case-item-content">
        <div class="content-lable">执行措施情况:</div>
        <div class="content-value">{{caseContentInfo.evaluation}}</div>
      </div>
      <div class="case-item-content">
        <div class="content-lable">推进计划:</div>
        <div class="content-value">{{caseContentInfo.nextStepPlan}}</div>
      </div>
    </div>
    <div v-else-if="caseInfo.type=='2'"
         class="case-item">
      <div class="case-item-content">
        <div class="content-lable">申请人类别:</div>
        <div class="content-value">{{caseContentInfo.type==1?"作为原告/申请人的案件":"作为被告/被申请人的案件"}}</div>
      </div>
      <div class="case-item-content">
        <div class="content-lable">本单位涉案企业名称:</div>
        <div class="content-value">{{caseContentInfo.companyName}}</div>
      </div>
      <div class="case-item-content">
        <div class="content-lable">对方当事人全称:</div>
        <div class="content-value">{{caseContentInfo.peopleName}}</div>
      </div>
      <div class="case-item-content">
        <div class="content-lable">办案法院/仲裁委:</div>
        <div class="content-value">{{caseContentInfo.thecourtName}}</div>
      </div>
      <div class="case-item-content">
        <div class="content-lable">对应阶段及案号:</div>
        <div class="content-value">{{caseContentInfo.eventNum}}</div>
      </div>
      <div class="case-item-content">
        <div class="content-lable">案由:</div>
        <div class="content-value">{{caseContentInfo.whyText}}</div>
      </div>
      <div class="case-item-content">
        <div class="content-lable">起诉或被诉本金:</div>
        <div class="content-value">{{caseContentInfo.money+"万元"}}</div>
      </div>
      <div class="case-item-content">
        <div class="content-lable">起诉或被诉利息:</div>
        <div class="content-value">{{caseContentInfo.interest+"万元"}}</div>
      </div>
      <div class="case-item-content">
        <div class="content-lable">基本案情:</div>
        <div class="content-value">{{caseContentInfo.caseText}}</div>
      </div>
      <div class="case-item-content">
        <div class="content-lable">审理/仲裁情况:</div>
        <div class="content-value">{{caseContentInfo.happening}}</div>
      </div>
      <div class="case-item-content">
        <div class="content-lable">判决/裁决情况:</div>
        <div class="content-value">{{caseContentInfo.judgmentSituation}}</div>
      </div>
      <div class="case-item-content">
        <div class="content-lable">申请时间:</div>
        <div class="content-value">{{dateToString(Number(caseContentInfo.startTime))}}</div>
      </div>
      <div class="case-item-content">
        <div class="content-lable">裁决生效时间:</div>
        <div class="content-value">{{dateToString(Number(caseContentInfo.judgmentTime))}}</div>
      </div>
      <div class="case-item-content">
        <div class="content-lable">回款总金额:</div>
        <div class="content-value">{{caseContentInfo.judgmentTimejudgmentPayBack}}</div>
      </div>
      <div class="case-item-content">
        <div class="content-lable">被执行总金额:</div>
        <div class="content-value">{{caseContentInfo.executionAmount}}</div>
      </div>
    </div>
    <!-- 文件列表 -->
    <div class="case-item">

      <van-list v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad">

        <div v-for="(item ,index) in caseContentInfo.caseFileList"
             :key="index">

          <div class="file-item">
            <div class="file-name">{{item.fileName}}</div>
            <div class="file-btn"
                 @click="file_info(item)">查看</div>
          </div>

        </div>
      </van-list>
    </div>

    <!-- 列表 下拉事件 @refresh -->
    <!-- <van-pull-refresh v-model="refreshing"
                      @refresh="onRefresh"
                      class="case-list">
      <van-list v-model="loading"
                :finished="finished"
                finished-text="没有更多了"
                @load="onLoad">
 
        <div v-for="(item ,index) in list"
             :key="index"
             class="case-item">

          <div class="significance"
               v-if="caseInfo.type=='2'">
            <div class="companyName">起诉或被诉利息:{{item.interest}}</div>
          </div>

        </div>
      </van-list>
    </van-pull-refresh> -->

  </div>
</template>

<script>
// import { Toast } from 'vant'
import { dateToString } from '@/utils/index.js'
import {
  outstandingCase_info_path,
  executionCase_info_path,
} from '../../api/api.js'
import store from '@/store'
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
      caseContentInfo: store.getters['case/case_content_info'],
      filesList: [],
    }
  },
  mounted() {
    this.get_info_data()
  },
  methods: {
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
      this.loading = false // 将 loading 设置为 true，表示处于加载状态
      this.finished = true // 是否已加载完成，加载完成后不再触发load事件
      this.refreshing = false // 下拉刷新时会触发 refresh 事件，
    },
    /**
     * 详情接口
     */
    async get_info_data() {
      let param = {
        id: this.caseContentInfo.id,
      }
      var res = ''
      if (this.caseInfo.type == '1') {
        res = await executionCase_info_path(param)
      } else if (this.caseInfo.type == '2') {
        res = await outstandingCase_info_path(param)
      }
      this.caseContentInfo = res.data
      this.filesList = res.data.caseFileList
    },

    /**
     *  请求列表
     */
    get_list_data() {},

    /**
     * 下拉刷新
     */
    onRefresh() {
      this.list = []
      this.get_list_data(1, 10)
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
.case-item {
  padding: 20px;
  background-color: #fff;
  border-radius: 20px;
  box-shadow: 0px 10px 50px 40px rgba(51, 51, 51, 0.01);
  margin-top: 20px;
  .case-item-content {
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
    .content-lable {
      color: #000;
      font-size: 25px;
      font-weight: 500;
    }
    .content-value {
      color: #ccc;
      font-size: 20px;
    }
  }
  .file-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .file-name {
      color: rgb(6, 10, 238);
    }
    .file-btn {
      width: 100px;
      height: 50px;
      line-height: 50px;
      border-radius: 25px;
      background-color: #1989fa;
      color: #fff;
    }
  }
}
</style>
