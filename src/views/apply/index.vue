<template>
    <div class="bill">
      <div class="bill-container">
        <div class="bill-container-top">
          <div class="top-left">
            <span class="name">日常业务</span>
            <span class="num">NO.RS20220727000013</span>
          </div>
          <div class="top-right">
            <van-button hairline type="primary" size="small" class="bill-status">待交财务</van-button>
          </div>
        </div>
        <van-divider dashed/>
        <div v-for="item in fakeData" :key="item.name" class="bill-main-content">
          <div class="content">
            <span class="name">{{ item.name }}：</span>
            <span class="desc">{{ item.desc }}</span>
          </div>
          <van-divider/>
        </div>
        <div class="more-btn">
          查看更多详情
          <van-icon name="arrow-down" style="padding-left:10px" />
        </div>
      </div>
      <!-- <div class="bill-container">
        <van-collapse v-model="activeNames">
          <van-collapse-item name="1">
            <template #title>
              <div>
                <span class="collapse-item">流转信息</span>
                <span class="collapse-item-status">财务处理中</span>
              </div>
            </template>
            <van-steps direction="vertical" :active="0" class="steps">
              <van-step v-for="item,index in stepData" :key="index">
                <div style="display: flex;justify-content: space-between;">
                  <div>
                    <h3 class="step-item1">{{item.name}}</h3>
                    <p class="step-item2">{{item.desc}}</p>
                  </div>
                  <div style="text-align:right">
                    <h3 class="step-rigth-item">{{item.operator}}</h3>
                    <p class="step-rigth-item">{{item.time}}</p>
                  </div>
                </div>
              </van-step>
            </van-steps>
          </van-collapse-item>
          <van-collapse-item name="2">
            <template #title>
              <div>
                <span class="collapse-item">审批流程</span>
                <span class="collapse-item-status">校领导审批中</span>
              </div>
            </template>
            代码是写出来给人看的，附带能在机器上运行。
          </van-collapse-item>
          <van-collapse-item name="3">
            <template #title>
              <div>
                <span class="collapse-item">费用明细</span>
                <span class="collapse-item-status">3项费用</span>
              </div>
            </template>
            <div v-for="item,index in costDetail" :key="item.name" class="detail">
              <div class="cost-detail">
                <span class="left">{{item.name}}</span>
                <span class="right">￥{{item.amount}}.00</span>
              </div>
              <div class="detail-item">
                <div v-for="i in item.detail" :key="i.name">
                  <span class="name">{{ i.name }}：</span>
                  <span>{{ i.desc }}</span>
                </div>
              </div>
              <van-divider v-if="index!=2" />
            </div>
          </van-collapse-item>
        </van-collapse>
      </div> -->
      <div class="bill-container pd-10">
        <van-button type="primary" block plain>撤回</van-button>
      </div>
    </div>
  </template>
  <script  lang="ts">
  import { ref } from 'vue'
  export default {
    setup() {
      const activeNames = ref(['3'])
      let fakeData = [
        {
          name: '事由',
          desc: '​申请去北京参加会议，会议主题为南极冰川融化对广州市候鸟飞行路线的影响，参与人有陈教授刘教授黄教授何教授等，参与费用由参与人自备需要申请报销'
        },
        {
          name: '经办人',
          desc: '吴三'
        },
        {
          name: '制单人',
          desc: '吴三'
        },
        {
          name: '提交时间',
          desc: '2022-07-27'
        },
        {
          name: '报销金额',
          desc: '￥5,000.00'
        }
      ]
      let stepData = [
        { name: '财务处理中', desc: '您的网报单存在错误,审核员已进行修改', operator: '管理员', time: '2021-4-15 15:16' },
        { name: '财务处理中', desc: '您的网报单存在错误,审核员已进行修改', operator: '管理员', time: '2021-4-15 15:16' },
        { name: '财务处理中', desc: '您的网报单存在错误,审核员已进行修改', operator: '管理员', time: '2021-4-15 15:16' }
      ]
      let costDetail = [
        {
          name: '快递费',
          amount: 200.0,
          detail: [
            { name: '关联项目', desc: '采购项目' },
            { name: '关联项目', desc: '2022-08-24' },
            { name: '部门', desc: '学生工作处' },
            { name: '关联项目', desc: '张一、陈二、吴三' }
          ]
        },
        {
          name: '快递费',
          amount: 200.0,
          detail: [
            { name: '关联项目', desc: '采购项目' },
            { name: '关联项目', desc: '2022-08-24' },
            { name: '部门', desc: '学生工作处' },
            { name: '关联项目', desc: '张一、陈二、吴三' }
          ]
        },
        {
          name: '快递费',
          amount: 200.0,
          detail: [
            { name: '关联项目', desc: '采购项目' },
            { name: '关联项目', desc: '2022-08-24' },
            { name: '部门', desc: '学生工作处' },
            { name: '关联项目', desc: '张一、陈二、吴三' }
          ]
        }]
      return { activeNames, fakeData, costDetail, stepData }
    }
  }
  </script>
  <style lang="scss">
  .bill {
    font-weight: 400;
    .bill-container {
      padding: 30px;
      background: #ffffff;
      box-shadow: 0 0 10px 0 rgba(60, 92, 175, 0.2);
      margin-bottom: 40px;
      .bill-container-top {
        display: flex;
        justify-content: space-between;
        height: 100%;
        .top-left {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          .name {
            font-size: 36px;
            color: #333333;
            width: 100%;
          }
          .num {
            padding-top: 14px;
            font-size: 24px;
            color: #777777;
          }
        }
        .top-right {
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
      }
      .van-divider {
        margin: 30px 0;
        border-color: #d8d8d8;
      }
      .bill-main-content {
        .content {
          display: flex;
          font-size: 30px;
          min-height: 36px;
          align-items: center;
          justify-content: center;
        }
        .name {
          width: 150px;
          color: #777777;
          white-space: nowrap;
        }
        .desc {
          flex: 1;
          color: #333333;
          line-height: 50px;
        }
      }
      .more-btn {
        font-size: 26px;
        color: #496fe5;
        text-align: center;
      }
      .van-collapse-item {
        .van-cell {
          padding: 60px 0;
        }
      }
      .collapse-item {
        margin-right: 100px;
        color: #333333;
        display: inline-block;
        font-size: 48px;
        width: 240px;
      }
      .collapse-item-status {
        height: 46px;
        font-size: 48px;
        color: #555555;
      }
      .van-collapse-item__content {
        padding: 60px 0;
      }
      .van-steps {
        .step-item1 {
          font-size: 48px;
          color: #333333;
        }
        .step-item2 {
          font-size: 48px;
          color: #777777;
          padding-top: 20px;
          text-overflow: ellipsis;
          overflow: hidden;
          white-space: nowrap;
        }
      }
      .step-rigth-item {
        font-size: 40px;
        color: #333333;
      }
    }
  }
  .cost-detail {
    display: flex;
    justify-content: space-between;
    .left {
      font-size: 48px;
      color: #333333;
    }
    .right {
      font-size: 48px;
      color: #fe9d2a;
    }
  }
  .detail-item {
    padding-top: 40px;
    > div {
      font-size: 48px;
      color: #777777;
    }
    .name {
      width: 120px;
    }
  }
  .bill {
    height: 100%;
    background: #f8f8f8;
  }
  .pd-10 {
    padding: 40px 30px !important;
  }

  .bill-status {
    background: #fff4ee;
    border: 1px solid #ffb993;
    .van-button__content {
      .van-button__text {
        font-size: 24px;
        color: #ed7d31;
      }
    }
  }
  </style>
