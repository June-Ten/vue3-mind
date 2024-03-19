<template>
    <div class="sales-management-box">
      
      <div class="right">
        <a-tabs v-model:activeKey="activeKey">
          <a-tab-pane key="1" tab="路径1" style="background-color: #fff;">
            <div class="vertical-steps">
              <div class="step-top">汇总记录</div>
              <div class="step">
                <div style="display: flex; align-items: center">
                  <img src="@/assets/image/user.png" alt="" />
                  <span style="margin-left: 10px">我</span>
                </div>
  
                <div class="step-current">同事</div>
                <div class="dash"></div>
              </div>
  
              <div class="step">
                <div class="edit-img"><img src="@/assets/img/svg/edit.svg" alt=""></div>
                <div style="display: flex; align-items: center">
                  <img src="@/assets/image/user.png" alt="" />
                  <span style="margin-left: 10px"
                    >李琴（国信数据）
                   </span
                  >
                </div>
  
                <div class="step-current">前同事</div>
  
                <div class="dash"></div>
              </div>
              <div class="step">
                <div class="edit-img"><img src="@/assets/img/svg/edit.svg" alt=""></div>

                <div style="display: flex; align-items: center">
                  <img src="@/assets/image/user.png" alt="" />
                  <span style="margin-left: 10px"
                    >王明（腾讯）
                  </span
                  >
                </div>
  
                <div class="step-current">通讯录好友</div>
                <div class="dash"></div>
              </div>
              <div class="step">
                <div class="edit-img"><img src="@/assets/img/svg/edit.svg" alt=""></div>

                <div style="display: flex; align-items: center">
                  <img src="@/assets/image/user.png" alt="" />
                  <span style="margin-left: 10px"
                    >赵丽（OPPO）
                   </span
                  >
                </div>
  
                <div class="step-current">校友</div>
                <div class="dash"></div>
              </div>
              <div class="step">
                <div class="edit-img"><img src="@/assets/img/svg/edit.svg" alt=""></div>

                <div style="display: flex; align-items: center">
                  <img src="@/assets/image/user.png" alt="" />
                  <span style="margin-left: 10px">龚琳(炊烟小厨)</span>
                </div>
  
                <div class="step-current">通讯录好友</div>
                <div class="dash"></div>
              </div>  
               <div class="step">
                <div class="edit-img"><img src="@/assets/img/svg/edit.svg" alt=""></div>
                <div style="display: flex; align-items: center">
                  <img src="@/assets/image/user.png" alt="" />
                  <span style="margin-left: 10px">周渊</span>
                </div>
  
                
              </div>
            </div>
          </a-tab-pane>
          <a-tab-pane key="2" tab="路径2" force-render
            >Content of Tab Pane 2</a-tab-pane
          >
          <a-tab-pane key="3" tab="路径3">Content of Tab Pane 3</a-tab-pane>
          <template #renderTabBar="{ DefaultTabBar, ...props }">
            <component
              :is="DefaultTabBar"
              v-bind="props"
              :style="{ opacity: 0.5 }"
            />
          </template>
        </a-tabs>
      </div>
    </div>
  </template>
  <script>
  import { EditOutlined,HomeOutlined } from "@ant-design/icons-vue";
  const description = "This is a description.";
  </script>
  <style lang="less" scoped>
  .sales-management-box {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-around;
  }
  .left {
    // width: 30%;
    // height: 600px;
  }
  .list {
    width: 351px;
    border-radius: 4px;
    background-color: #fff;
    padding: 10px;
    margin: 10px;
  }
  .right {
    width: 100%;
    // height: 600px;
  }
  .list-bg {
    background: url("../../../assets/image/user.png") no-repeat;
  
    width: 40px;
    height: 40px;
    display: block;
    background-size: cover;
    margin: 10px;
  }
  
  .name {
    font-size: 14px;
    font-weight: 600;
    margin-right: 10px;
  }
  .title-pi {
    font-size: 14px;
    font-weight: 600;
    color: #4e5969;
    margin-top: 15px;
  }
  .title-anson {
    font-size: 14px;
    font-weight: 600;
    color: #7da2f9;
    margin-top: 15px;
  }
  .title-footer {
    font-size: 14px;
    font-weight: 600;
    color: #00b42a;
    margin-top: 15px;
  }
  
  .vertical-steps {
    position: relative;
    display: grid;
    flex-direction: column;
    justify-content:center
  }
  
  .step {
    padding: 10px;
    // background-color: #eee;
    position: relative;
  }
  // .step::after{
  // content: '';
  // position: absolute;
  //   top: 0;
  //   left: 50%;
  //   transform: translateX(-50%);
  //   width: 2px;
  //   height: 100%;
  //   background-color: #ccc;
  // }
  .dash {
    flex-grow: 1;
    height: 7cqh;
    width: 1px;
    border: 1px dashed #ccc;
    margin: 2px 30px;
  }
  
  .dash:last-child {
    // display: none;
  }
  
  .step.active {
    background-color: #007bff;
    color: #fff;
    padding: 0 10px 0 10px;
  }
  
  .step-current {
    position: absolute;
    left: 60px;
    top: 60%;
    color: #86909c;
  }
  .step-top{
    color: #F77234;
    font-size: 14px;
    font-weight: 400;
    line-height: 6;
  }
  
  :deep(.ant-tabs-nav){
    background-color: rgb(255, 255, 255,1);
      padding: 10px;
      margin: 0;
      opacity: 1!important;
  }
  .edit-img{
    position: absolute;
    top: 32px;
    left: -30px;
  }
  </style>
  