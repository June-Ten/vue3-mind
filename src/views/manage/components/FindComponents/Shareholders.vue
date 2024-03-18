<template>
  <div class="shareholders-box">
    <a-row>
      <a-col
        :span="24"
        style="display: flex;align-items: center;"
      >
        <template
          v-for="tab in tabs"
          :key="tab.id"
        >
          <div
            class="tabs-item"
            :class="{ active: current === tab.id }"
          >
            {{ tab.title }}
          </div>
        </template>
      </a-col>
    </a-row>
    <a-row class="mt-10 top-title-box" style="margin-bottom: 20px;">
      <a-col :span="24">
        <span class="actual-controller">常亮</span>
        <span class="actual-tag">实际控制人</span>
        <span class="stock-percent">受益股份：35%</span>
      </a-col>
    </a-row>
    <ShareholderInformation
      v-for="(item, index) in shareholdersList"
      :key="item.name"
      :inx="index + 1"
      :name="item.name"
      :percent="item.percent"
      :money="item.money"
      :leftBorderColor="item.leftBorderColor"
    />
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import ShareholderInformation from './ShareholdersComponents/ShareholderInformation.vue'

const tabs = reactive([
  {
    title: '股东信息',
    id: 0
  },
  {
    title: '历史股东信息',
    id: 1
  }
])

const current = ref(0)

const shareholdersList = reactive([])

const tempList = [
  {
    name: '詹春涛',
    percent: 3.1063,
    money: '100万元'
  },
  {
    name: '吴宝发',
    percent: 3,
    money: '60万元'
  },
  {
    name: '董建敏',
    percent: 2.8403,
    money: '56.8069万元'
  },
  {
    name: '上海正同德石投资合伙企业(有限合伙)',
    percent: 3.1063,
    money: '100万元',
    leftBorderColor: 'rgba(57, 100, 245, 1)'
  },
  {
    name: '周淑玲',
    percent: 3,
    money: '60万元'
  },
  {
    name: '杨乐钧',
    percent: 2.8403,
    money: '56.8069万元'
  },
  {
    name: '涂乔升',
    percent: 2.8403,
    money: '2.8403%'
  },
  {
    name: '詹进',
    percent: 2.8403,
    money: '56.8069万元'
  },
  {
    name: '詹进',
    percent: 2.8403,
    money: '56.8069万元'
  },
  {
    name: '刘勇',
    percent: 2.8403,
    money: '56.8069万元'
  }
]

shareholdersList.push(...tempList)
</script>

<style lang="less" scoped>
.mt-10 {
  margin-top: 10px;
}
.shareholders-box {
  width: 100%;
  .tabs-item {
    font-size: 12px;
    color: rgba(134, 144, 156, 1);
    cursor: pointer;
    margin-right: 3%;
    &.active {
      color: rgba(29, 33, 41, 1);
      font-weight: 500;
    }
  }
  .top-title-box {
    .actual-controller {
      font-size: 12px;
      color: rgba(29, 33, 41, 1);
    }
    .actual-tag {
      color: rgba(255, 125, 0, 1);
      font-size: 10px;
      padding: 2px 5px;
      border: 1px solid rgba(29, 33, 41, 0.05);
      background-color: #fff8f6;
      margin-left: 5px;
    }
    .stock-percent {
      font-size: 12px;
      color: rgba(134, 144, 156, 1);
      margin-left: 5px;
    }
  }
}
</style>