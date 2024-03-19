<template>
    <div class="manage-box1">
      <div class="left-tabs-box1">
        <div class="button-top">
          <a-button @click="addSales"  :icon="h(PlusOutlined)">添加销售</a-button>
        </div>
        <div class="left-tabs-box__middle-list-box center-box">
            <div style="display: ruby;margin-bottom: 10px;">
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
        <div class="card-box" >
          <div class="card-right-top">员工</div>
         <div style="display: flex;margin-top: 10px;">
           <div style="width: 80px;margin: 10px 0 0 10px;"><img src="../../../assets/image/user.png" alt=""></div> 
            <div class="meng">
                <span style="font-size: 20px;font-weight: 400;">原大明</span><span style="margin-left: 10px;color: #F98981;font-size: 12px;">消耗30商豆</span>
            <div style="color:#86909C;font-size: 14px;line-height: 3px;">1818148072</div>
            </div>
        </div>

        </div>
        <div class="progress-with-values">
      <a-progress :show-info="false" :percent="60" :success="{ percent: 30 }" />
      <div class="progress-values">
      <span>已成交3</span>
      <span>已跟进6</span>
      <span>目标10</span>
    </div>
         </div>
     </div>

     <div>
        <div class="card-box" >
          <div class="card-right-top">兼职</div>
         <div style="display: flex;margin-top: 10px;">
           <div style="width: 80px;margin: 10px 0 0 10px;"><img src="../../../assets/image/user.png" alt=""></div> 
            <div class="meng">
                <span style="font-size: 20px;font-weight: 400;">余晓峰</span><span style="margin-left: 10px;color: #F98981;font-size: 12px;">消耗30商豆</span>
            <div style="color:#86909C;font-size: 14px;line-height: 3px;">1818148072</div>
            </div>
        </div>

        </div>
        <div class="progress-with-values">
      <a-progress :show-info="false" :percent="60" :success="{ percent: 30 }" />
      <div class="progress-values">
      <span>已成交2</span>
      <span>已跟进4</span>
      <span>目标10</span>
    </div>
         </div>
     </div>
     <div>
        <div class="card-box" >
          <div class="card-right-top">员工</div>
         <div style="display: flex;margin-top: 10px;">
           <div style="width: 80px;margin: 10px 0 0 10px;"><img src="../../../assets/image/user.png" alt=""></div> 
            <div class="meng">
                <span style="font-size: 20px;font-weight: 400;">莫树明</span><span style="margin-left: 10px;color: #F98981;font-size: 12px;">消耗30商豆</span>
            <div style="color:#86909C;font-size: 14px;line-height: 3px;">1818148072</div>
            </div>
        </div>

        </div>
        <div class="progress-with-values">
      <a-progress :show-info="false"  :success="{ percent: 30 }" />
      <div class="progress-values">
      <span>已跟进6</span>
      <span>目标10</span>
    </div>
         </div>
     </div>
     <div>
        <div class="card-box" >
          <div class="card-right-top">员工</div>
         <div style="display: flex;margin-top: 10px;">
           <div style="width: 80px;margin: 10px 0 0 10px;"><img src="../../../assets/image/user.png" alt=""></div> 
            <div class="meng">
                <span style="font-size: 20px;font-weight: 400;">赵振华</span><span style="margin-left: 10px;color: #F98981;font-size: 12px;">消耗30商豆</span>
            <div style="color:#86909C;font-size: 14px;line-height: 3px;">1818148072</div>
            </div>
        </div>

        </div>
        <div class="progress-with-values">
      <a-progress :show-info="false"  :success="{ percent: 40 }" />
      <div class="progress-values">
      <span>已成交3</span>
      <span>目标10</span>
    </div>
         </div>
     </div>
        </div>
     
      </div>
      
    </div>
    <a-modal  :width="500" v-model:open="visibleSale"  class="modalPhone" >
    <div style="display: flex;flex-direction: column;">
<div class="title">添加销售</div>
    <!-- <template #title >
        商链手机端
    </template> -->
    <div style="text-align: center;margin: 20px 0 0 0 ;">
      <a-input style="width: 356px;height: 48px; border-radius: 64px;margin: 10px;"  placeholder="请输入姓名" />
      <a-input style="width: 356px;height: 48px; border-radius: 64px;margin: 10px;"  placeholder="请输入手机号" />
    </div>
    <div style="font-size: 16px;font-weight: 500;text-align: center;line-height: 3;">请选择办公类型</div>
    <div style="display: flex;justify-content: space-evenly;margin: 10px;">
    <div class="button-text" style="border: 1px solid #3964F5;">员工</div>
    <div  class="button-text" style="border: 1px solid #C9CDD4;">兼职</div>

  </div>
  <div class="button-modal">
  <a-button  type="primary">确认</a-button>
</div>
</div>
    <template #footer>
        <div class="dialog-footer">
        
        </div>
      </template>
  </a-modal>
  </template>
  
  <script setup>
  import { ref, reactive } from 'vue'
  import NavBar from '@/components/common/navbar/index.vue'
  import { h } from 'vue';
  import { PlusOutlined } from '@ant-design/icons-vue';
const currentTwo= ref(0)
  const current = ref(0)
  const visibleSale = ref(false)
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

   function  customFormat(percentage) {
      // 假设你想要显示三个不同的值
      const part1 = `已完成：${percentage}% `;
      const part2 = `总进度：100% `;
      const part3 = `剩余：${100 - percentage}% `;
      
      // 将三个部分合并成一个字符串返回
      return part1 + part2 + part3;
    }
     function addSales(){
      visibleSale.value= true
    }
  </script>
  
  <style lang="less" scoped>
  .manage-box {
    width: 100%;
    min-width: 1200px;
    height: 100%;
    display: flex;
    .left-tabs-box {
      flex-shrink: 0;
      // width: 25%;
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
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    padding: 10px;
position: relative;
overflow: hidden;
  }

  .meng{
    width: 200px;
    // margin-top: 25px;
  }

  .progress-with-values {
    padding: 0 10px ;
  position: relative;
  top: -40px;
}
.progress-values {
  position: absolute;
  top: -15px; /* 根据需要调整位置 */
  left: 0;
  right: 0;
  text-align: center;
  z-index: 1;
  display: flex;
    justify-content: space-around;
}
.card-right-top{
 width:78px;
height:25px;
background-color: rgba(212, 212, 212, 1);
font-size: 14px;
text-align: center;
transform: rotate(45deg);
position: absolute;
    right: -16px;
    z-index: 0;
line-height: 2;
}

.button-top{
    line-height: 7;
button{
  width: 440px;
    height: 64px;
    border-radius: 8px;
    color:rgba(57, 100, 245, 1) ;
}
}

.center-box{
  line-height: 3;
  
}
.button-text{
  width:96px;
  height: 48px;
   border-radius: 64px;
   text-align: center;
   line-height: 3;
}
.button-modal{
  text-align: center;
  margin-top: 10px;
  button{
    width: 356px;
    height: 48px;
    border-radius: 64px;
    background-color: #3964F5;
  }

}
  </style>