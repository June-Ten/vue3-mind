<template>
  <div class="finding-customers-box">
    <div class="top">
      <div class="tab-group">
        <template
          v-for="tab in tabs"
          :key="tab.id"
        >
          <div
            class="tab-item"
            :class="{ active: current === tab.id }"
            @click="current = tab.id"
          >
            {{ tab.title }}
          </div>
        </template>
      </div>
    </div>
    <div class="bottom">
      <div
        class="bottom-empty"
      >
        <span>
          抱歉！没有找到相关结果，您可以重新输入其他问题
        </span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'


const current = ref(0)

const tabs = [
  {
    title: '全部',
    key: 'all',
    id: 0
  },
  {
    title: '同城客户',
    key: 'local',
    id: 1
  },
  {
    title: '高匹配客户',
    key: 'highMatch',
    id: 2
  }
]
</script>

<style lang="less" scoped>
.finding-customers-box {
  width: 100%;
  height: 100%;
  padding-left: 20px;
  .top {
    width: 100%;
    height: 40px;
    .tab-group {
      width: 25%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      .tab-item {
        height: 100%;
        width: auto;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        color: rgba(134, 144, 156, 1);
        &.active {
          color: rgba(29, 33, 41, 1);
          font-weight: 500;
        }
      }
    }
  }
  .bottom {
    width: 100%;
    height: calc(100% - 40px);
    display: flex;
    justify-content: center;
    align-items: center;
    .bottom-empty {
      color: rgba(245, 63, 63, 1);
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      span {
        margin-top: 20%;
      }
    }
  }
}
</style>