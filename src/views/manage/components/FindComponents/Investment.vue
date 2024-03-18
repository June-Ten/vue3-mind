<template>
  <div class="investment-box">
    <ShareholderInformation
      v-for="(item, index) in list"
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
import { reactive } from 'vue'
import ShareholderInformation from './ShareholdersComponents/ShareholderInformation.vue'


const list = reactive([])
const tempList = [
  {
    name: '江苏国数智联数据服务有限公司',
    percent: 100,
    money: '1000万元',
    leftBorderColor: 'rgba(57, 100, 245, 1)'
  },
  {
    name: '广东云之印科技有限公司',
    percent: 5,
    money: '255万元',
    leftBorderColor: 'rgba(57, 100, 245, 1)'
  },
  {
    name: '江西云之印科技发展有限公司',
    percent: 51,
    money: '102万元',
    leftBorderColor: 'rgba(57, 100, 245, 1)'
  },
  {
    name: '北京云之信科技有限公司',
    percent: 28,
    money: '56万元',
    leftBorderColor: 'rgba(57, 100, 245, 1)'
  },
  {
    name: '北京云之信科技有限公司',
    percent: 28,
    money: '56万元',
    leftBorderColor: 'rgba(57, 100, 245, 1)'
  },
  {
    name: '北京云之信科技有限公司',
    percent: 28,
    money: '56万元',
    leftBorderColor: 'rgba(57, 100, 245, 1)'
  }
]

list.push(...tempList)
</script>

<style lang="less" scoped>
.investment-box {
  width: 100%;
}
</style>