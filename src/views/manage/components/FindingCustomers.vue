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
        v-if="false"
      >
        <span>
          抱歉！没有找到相关结果，您可以重新输入其他问题
        </span>
      </div>
      <div class="bottom__list">
        <CustomerCard
          v-for="item in 20"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SelectSales from '@/components/common/selectSales/index.vue'
import CustomerCard from '@/components/common/customerCard/index.vue'


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
    padding-right: 20%;
    overflow-y: auto;
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
    .bottom__list {
      width: 100%;
      display: grid;
      grid-template-columns: repeat(3, 30%);
      grid-column-gap: 15px;
      grid-row-gap: 10px;
      .bottom-item-box {
        flex-shrink: 0;
        display: flex;
        flex-direction: column;
        height: 175px;
        background-color: white;
        border: 1px solid rgba(0, 0, 0, 0.05);
        margin-bottom: 10px;
        padding: 5px;
        .bottom-item__first-img-box {
          display: flex;
          align-items: center;
          .first-left-img-box {
            display: flex;
            width: 30px;
            height: 30px;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .first-middle-txt-box {
            display: flex;
            flex-direction: column;
            justify-content: center;
            flex: 1;
            margin-left: 8px;
            .name-box {
              display: flex;
              color: rgba(29, 33, 41, 1);
              font-size: 12px;
              .address-img-box {
                width: 10px;
                height: 10px;
                img {
                  width: 100%;
                  height: 100%;
                }
              }
              .address-txt {
                font-size: 10px;
                color: rgba(134, 144, 156, 1);
              }
            }
            .middle-subject {
              color: rgba(78, 89, 105, 1);
              font-size: 10px;
            }
          }
          .first-right-like-box {
            width: 20px;
            height: 20px;
            transform: translateY(-5px);
            cursor: pointer;
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
        .bottom-item__desc-box {
          font-size: 12px;
          color: rgba(78, 89, 105, 1);
          margin-top: 10px;
          width: 100%;
        }
        .bottom-item__reason-for-recommen {
          width: 100%;
          margin-top: 10px;
          font-size: 12px;
          color: rgba(125, 162, 249, 1);
        }
        .bottom-item__clue {
          width: 100%;
          margin-top: 10px;
          font-size: 12px;
          color: rgba(161, 165, 172, 1);
        }
        .bottom-item__assign {
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(57, 100, 245, 1);
          font-size: 10px;
          border-top: 1px solid rgba(0, 0, 0, 0.05);
          height: 25px;
          margin-top: 15px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>