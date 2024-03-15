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
            <div style="display: ruby;">
                <template
            v-for="tab in tabsTwo"
            :key="tab.id"
          >
            <div
              class="tabs-item-box"
              :class="{ 'active': currentTwo === tab.id }"
              @click="currentTwo = tab.id"
            >
              {{ tab.label }}
            </div>
          </template>
            </div>
     <div>
        <div class="card-box">
         <div style="display: flex;align-items: center;">
            <img src="../../../assets/image/user.png" alt="">
            <div class="meng">
                <span>原大明</span><span style="color: #F98981;">消耗30商豆</span>
            </div>
            
        </div>
        <div style="text-align: center;">1818148072</div>
            <div>
                <a-tooltip title="3 done / 3 in progress / 4 to do">
      <a-progress :percent="60" :success="{ percent: 30 }" />
    </a-tooltip>
         </div>
        </div>
     </div>
        </div>
        <div class="left-tabs-box__search-area-box">
          <a-textarea
            placeholder="请输入您的问题或需求"
            style="width: 75%;"
            :bordered="false"
            :auto-size="{
              maxRows: 6
            }"
            v-model:value="inputValue"
          />
          <div class="textarea-after-box">
            <a-tooltip>
              <template #title>
                支持上传文件 (最多 50 个，每个 100 MB) 接受 pdf、doc、xlsx、ppt、txt、图片等
              </template>
              <div class="textarea-after-box__upload-img-box">
                <img
                  src="@/assets/img/svg/upload.svg"
                  alt="upload-icon"
                />
              </div>
            </a-tooltip>
            <a-tooltip v-if="inputValue?.length === 0">
              <template #title>
                请输入你的问题
              </template>
              <div class="textarea-after-box__aircraft-img-box">
                <img
                  src="@/assets/img/svg/aircraft.svg"
                  alt="aircraft-icon"
                />
              </div>
            </a-tooltip>
            <div
              class="textarea-after-box__aircraft-img-box"
              v-if="inputValue?.length > 0"
            >
              <img
                src="@/assets/img/svg/aircraftActive.svg"
                alt="aircraft-icon"
              />
            </div>
          </div>
        </div>
      </div>
      <div class="right-content-box">
        <div class="right-content-box__navbar-box" style="height: 65px;">
          <nav-bar />
        </div>
        <div class="right-content-box_content-self">
         
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, reactive } from 'vue'
  import NavBar from '@/components/common/navbar/index.vue'
const currentTwo= ref(0)
  const current = ref(0)
  const tabsTwo = reactive([
    {
      id: 0,
      label: '全部'
    },
    {
      id: 1,
      label: '员工'
    },
    {
      id: 2,
      label: '兼职'
    }
  ])
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
  
  const inputValue = ref('')
  </script>
  
  <style lang="less" scoped>
  .manage-box {
    width: 100%;
    min-width: 1200px;
    height: 100%;
    display: flex;
    .left-tabs-box {
      flex-shrink: 0;
      width: 25%;
      height: 100%;
      background-color: #FFFFFF;
      display: flex;
      flex-direction: column;
      padding-left: 20px;
      padding-right: 20px;
      padding-bottom: 20px;
      .left-tabs-box__top-tabs-box {
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .home-svg-box {
          width: 32px;
          height: 32px;
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
        .left-tabs-box__middle-list__item-box {
          &.active-history {
            border: none;
            background-color: #e8f1ff;
          }
          cursor: pointer;
          margin-top: 15px;
          height: 60px;
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
            color: #1D2129;
            font-weight:600;
          }
        }
      }
      .left-tabs-box__search-area-box {
        width: 100%;
        min-height: 60px;
        border: 1px solid rgba(0, 0, 0, 0.05);
        display: flex;
        justify-content: center;
        align-items: flex-start;
        box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.05);
        border-radius: 12px;
        padding: 10px;
        :deep(input::placeholder) {
          color: rgba(134, 144, 156, 1); /* 设置placeholder的颜色 */
        }
        .textarea-after-box {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 25%;
          .textarea-after-box__upload-img-box {
            cursor: pointer;
          }
          .textarea-after-box__aircraft-img-box {
            cursor: pointer;
          }
        }
      }
    }
    .right-content-box {
      width: 75%;
      height: 100%;
      background-color: #f3f5fb;
      .right-content-box__navbar-box {
        width: 100%;
        display: flex;
        justify-content: flex-end;
        align-items: center;
      }
      .right-content-box_content-self {
        width: 100%;
        height: calc(100% - 65px); 
      }
    }
  }

  .card-box{
    width: 440px;
    height: 169px;
    background-color: #fff;
    border: 1px solid #000;
  }
  </style>