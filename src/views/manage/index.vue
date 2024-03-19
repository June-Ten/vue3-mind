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
      <div class="left-tabs-box__middle-list-box" v-if="current === 2">
<salesLeft/>
</div>
      <div class="left-tabs-box__middle-list-box" v-else>
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
              class="left-tabs-box__middle-list__item-box__file"
              v-if="item.type === 'file'"
            >
              <div
                class="left-tabs-box__middle-list__item-box__file__left-img-box"
              >
                <img
                  src="@/assets/img/svg/pdf.svg"
                  alt="file-icon"
                />
              </div>
              <div class="left-tabs-box__middle-list__item-box__file__right-txt-box line-1">
                印控仪产品手册.pdf
              </div>
            </div>
            <div
              class="left-tabs-box__middle-list__item__title line-1"
            >
              {{ item.title }}
            </div>
            <div
              class="left-tabs-box__middle-list__item__content line-1"
              v-if="item.hasResult"
            >
              {{ item.content }}
            </div>
            <div
              class="left-tabs-box__middle-list__item__content-not-found"
              v-if="!item.hasResult"
            >
              没有找到相关结果
            </div>
          </div>
        </template>
      </div>
    
      <div class="left-tabs-box__search-area-box" v-if="current!= 2">
        <div
          class="left-tabs-box__search-area-box__top-file-box"
          v-if="true"
        >
          <div
            class="left-tabs-box__search-area-box__top-file-box__self-box"
          >
            <div class="left-tabs-box__search-area-box__top-file-box__self-box__left-img-box">
              <img
                :src="fileImgSrc"
                alt="file-icon"
              />
            </div>
            <div class="left-tabs-box__search-area-box__top-file-box__self-box__right-txt-box">
              <div
                class="left-tabs-box__search-area-box__top-file-box__self-box__right-txt-box__title line-1"
              >
                印控仪产品手册.pdf01234567890123456789
              </div>
              <div class="left-tabs-box__search-area-box__top-file-box__self-box__right-txt-box__desc">
                {{ status }}
              </div>
            </div>
            <div class="left-tabs-box__search-area-box__top-file-box__cancel-img-box">
              <img
                src="@/assets/img/svg/cancel.svg"
                alt="cancel-icon"
              />
            </div>
          </div>
        </div>
        <div class="left-tabs-box__search-area-box__bottom-box">
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
    </div>
    
    <div class="right-content-box">
      <div class="right-content-box__navbar-box" style="height: 65px;">
        <nav-bar />
      </div>
      <div class="right-content-box_content-self">
        <FindingCustomers v-if="current === 0"/>
        <CustomerManagement v-if="current === 1"/>
        <SalesManagement v-if="current === 2"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import NavBar from '@/components/common/navbar/index.vue'
import FindingCustomers from './components/FindingCustomers.vue'
import CustomerManagement from './components/CustomerManagement.vue'
import SalesManagement from './components/SalesManagement.vue'
import uploadingImg from '@/assets/img/svg/uploading.svg'
import pdfImg from '@/assets/img/svg/pdf.svg'
import salesLeft from './components/salesLeft.vue'
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
    content: '推荐xxxx个资源，采纳xxx个',
    hasResult: true,
    type: 'msg'
  },
  {
    id: 1,
    title: '能提供发票供应的有哪些企业',
    content: '没有找到相关结果',
    hasResult: false,
    type: 'msg'
  },
  {
    id: 2,
    title: '能提供发票供应的有哪些企业',
    content: '推荐xxxx个资源，采纳xxx个',
    hasResult: true,
    type: 'file'
  }
])

const inputValue = ref('')

const file = ref(null)

const tempFileList = reactive([
  {
    src: uploadingImg,
    size: '上传中...'
  },
  {
    src: uploadingImg,
    size: '解析中...'
  },
  {
    src: pdfImg,
    size: '1.64MB'
  }
])

const fileImgSrc = ref(uploadingImg)

const status = ref('上传中')

let tempInx = 0

// setInterval(() => {
//   if (tempInx === 3) {
//     tempInx = 0
//   }
//   fileImgSrc.value = tempFileList[tempInx].src
//   status.value = tempFileList[tempInx].size
//   tempInx++
// }, 2000);
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
        .left-tabs-box__middle-list__item-box__file {
          width: 100%;
          display: flex;
          align-items: center;
          font-size: 12px;
          color: rgba(29, 33, 41, 1);
          padding-bottom: 10px;
          .left-tabs-box__middle-list__item-box__file__left-img-box {
            width: 15px;
            height: 15px;
            margin-right: 10px;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .left-tabs-box__middle-list__item-box__file__right-txt-box {
            color: #1D2129;
            font-size: 14px;
            width: 100%;
          }
        }
        &.active-history {
          border: none;
          background-color: #e8f1ff;
        }
        cursor: pointer;
        margin-top: 15px;
        min-height: 60px;
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
        .left-tabs-box__middle-list__item__content-not-found {
          color: rgba(245, 63, 63, 0.5);
          font-size: 14px;
          width: 100%
        }
      }
    }
    .left-tabs-box__search-area-box {
      width: 100%;
      min-height: 60px;
      border: 1px solid rgba(0, 0, 0, 0.05);
      display: flex;
      flex-direction: column;
      justify-content: center;
      box-shadow: 0px 8px 20px 0px rgba(0, 0, 0, 0.05);
      border-radius: 12px;
      .left-tabs-box__search-area-box__top-file-box {
        background-color: rgb(243, 245, 251);
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100px;
        border-radius: 12px 12px 0 0;
        .left-tabs-box__search-area-box__top-file-box__self-box {
          background-color: white;
          display: flex;
          align-items: center;
          width: 70%;
          height: 60px;
          border-radius: 10px;
          position: relative;
          padding-left: 10px;
          .left-tabs-box__search-area-box__top-file-box__cancel-img-box {
            position: absolute;
            right: -10px;
            top: -10px;
            width: 20px;
            height: 20px;
            cursor: pointer;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .left-tabs-box__search-area-box__top-file-box__self-box__left-img-box {
            width: 30px;
            height: 30px;
            flex-shrink: 0;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .left-tabs-box__search-area-box__top-file-box__self-box__right-txt-box {
            width: calc(100% - 40px);
            padding-left: 10px;
            .left-tabs-box__search-area-box__top-file-box__self-box__right-txt-box__title {
              color: #1D2129;
              font-size: 14px;
              width: 100%;
            }
            .left-tabs-box__search-area-box__top-file-box__self-box__right-txt-box__desc {
              color: #86909C;
              font-size: 12px;
            }
          }
        }
      }
      .left-tabs-box__search-area-box__bottom-box {
        display: flex;
        align-items: flex-start;
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
            width: 30px;
            height: 30px;
            img {
              width: 100%;
              height: 100%;
            }
          }
          .textarea-after-box__aircraft-img-box {
            cursor: pointer;
            width: 30px;
            height: 30px;
            img {
              width: 100%;
              height: 100%;
            }
          }
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
</style>