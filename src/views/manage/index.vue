<template>
  <div class="manage-box">
    <div class="left-tabs-box">
      <div class="left-tabs-box__top-tabs-box">
        <div class="home-svg-box">
          <img
            src="@/assets/img/svg/home-blue.svg"
            alt="home-icon"
          />
        </div>
        <template
          v-for="tab in tabs"
          :key="tab.id"
        >
          <div
            class="tabs-item-box"
            :class="{ 'active': current === tab.id }"
            @click="current = tab.id"
          >
            {{ tab.label }}
          </div>
        </template>
      </div>
      <div class="left-tabs-box__middle-list-box">
        <template
          v-for="item in searchHistory"
          :key="item.id"
        >
          <div
            class="left-tabs-box__middle-list__item-box"
            :class="{ 'active-history': currentHistory === item.id }"
            @click="currentHistory = item.id"
          >
            <div
              class="left-tabs-box__middle-list__item__title line-1"
            >
              {{ item.title }}
            </div>
            <div
              class="left-tabs-box__middle-list__item__content line-1"
            >
              {{ item.content }}
            </div>
          </div>
        </template>
      </div>
      <div class="left-tabs-box__search-area-box">
        
      </div>
    </div>
    <div class="right-content-box"></div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'


const current = ref(0)

const tabs = reactive([
  {
    id: 0,
    label: '找客户'
  },
  {
    id: 1,
    label: '客户管理'
  },
  {
    id: 2,
    label: '销售管理'
  }
])

const currentHistory = ref(0)

const searchHistory = reactive([
  {
    id: 0,
    title: '能提供发票供应的有哪些企业',
    content: '推荐xxxx个资源，采纳xxx个'
  },
  {
    id: 1,
    title: '能提供发票供应的有哪些企业',
    content: '推荐xxxx个资源，采纳xxx个'
  },
  {
    id: 2,
    title: '能提供发票供应的有哪些企业',
    content: '推荐xxxx个资源，采纳xxx个'
  }
])
</script>

<style lang="less" scoped>
.manage-box {
  width: 100%;
  height: 100%;
  display: flex;
  .left-tabs-box {
    flex-shrink: 0;
    width: 300px;
    height: 100%;
    background-color: #FFFFFF;
    display: flex;
    flex-direction: column;
    padding-left: 20px;
    padding-right: 20px;
    .left-tabs-box__top-tabs-box {
      width: 100%;
      height: 50px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .home-svg-box {
        width: 28px;
        height: 28px;
        cursor: pointer;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .tabs-item-box {
        width: 65px;
        height: 30px;
        cursor: pointer;
        font-weight: 400;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #86909C;
        &.active {
          color: #3964F5;
          font-weight:600;
        }
      }
    }
    .left-tabs-box__middle-list-box {
      flex: 1;
      display: flex;
      flex-direction: column;
      width: 100%;
      padding-top: 20px;
      .left-tabs-box__middle-list__item-box {
        &.active-history {
          border: none;
          background-color: #e8f1ff;
        }
        cursor: pointer;
        margin-top: 15px;
        height: 50px;
        display: flex;
        flex-direction: column;
        border: 1px solid #0000001A;
        background-color: #fff;
        align-items: flex-start;
        border-radius: 8px;
        padding: 6px 10px;
        .left-tabs-box__middle-list__item__title {
          color: #1D2129;
          height: 25px;
          width: 100%;
        }
        .left-tabs-box__middle-list__item__content {
          color: #86909C;
          font-size: 14px;
          width: 100%;
        }
      }
    }
  }
  .right-content-box {
    flex: 1;
    height: 100%;
    background-color: #f3f5fb;
  }
}
</style>