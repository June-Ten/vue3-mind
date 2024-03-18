<template>
  <div
    class="shareholder-information"
    :style="{ borderLeft: `3px solid ${leftBorderColor}` }"
  >
    <div class="info-left">
      <div class="info-left__inx">{{ inx }}</div>
      <div class="info-left__name">{{ name }}</div>
    </div>
    <div class="info-right">
      <a-divider
        type="vertical"
        style="height: 20px;margin: 5px 8px;background-color: rgba(0, 0, 0, 0.05);"
      />
      <div class="info-right-txt-box">
        <div class="info-right__percent">
          {{ percent }}%
        </div>
        <div class="info-right__money">
          {{ money }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'


const props = defineProps({
  leftBorderColor: {
    type: String,
    default: 'rgba(252, 139, 1, 1)'
  },
  inx: {
    type: Number,
    required: true
  },
  name: {
    type: String,
    default: ''
  },
  percent: {
    type: Number,
    default: 0
  },
  money: {
    type: String,
    default: '100万元'
  }
})
</script>

<style lang="less" scoped>
.shareholder-information {
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 2px;
  .info-left {
    display: flex;
    position: relative;
    height: 100%;
    .info-left__inx {
      position: absolute;
      left: 0;
      top: 0;
      width: fit-content;
      min-width: 12px;
      height: 12px;
      background-color: rgba(238, 238, 238, 1);
      color: rgba(201, 205, 212, 1);
      font-size: 12px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .info-left__name {
      display: flex;
      padding-left: 12px;
      font-size: 14px;
      font-weight: 500;
      margin-top: 5px;
    }
  }
  .info-right {
    min-width: fit-content;
    display: flex;
    align-items: center;
    font-size: 12px;
    .info-right-txt-box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
      .info-right__percent {
        display: flex;
        font-weight: 500;
        color: rgba(247, 114, 52, 1);
      }
      .info-right__money {
        color: rgba(134, 144, 156, 1);
      }
    }
  }
}
</style>