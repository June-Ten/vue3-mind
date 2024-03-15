<template>
  <div class="sales-management-box">
    <div class="left">
      <div class="list">
        <div style="display: flex">
          <span class="list-bg"></span>
          <div style="line-height: 30px; margin-top: 5px">
            <span class="name">周原</span>
            <span style="color: #86909c"
              ><img
                src="../../../assets/img/svg/address.svg"
                alt=""
              />北京</span
            >
            <div>航天信息·工程师</div>
          </div>
        </div>
        
        <div class="title-pi">简介：工业软件开发、大型系统集成服务商</div>
        <div class="title-anson">
          推荐理由：根据周渊所在公司产品和服务分析，能够为您提供可靠的发票供应和技术支持。
        </div>
        <div class="title-footer">跟进汇总：已成交</div>
      </div>
      <div class="list">
        <div style="display: flex">
          <span class="list-bg"></span>
          <div style="line-height: 30px; margin-top: 5px">
            <span class="name">周原</span>
            <span style="color: #86909c"
              ><img
                src="../../../assets/img/svg/address.svg"
                alt=""
              />北京</span
            >
            <div>航天信息·工程师</div>
          </div>
        </div>
        
        <div class="title-pi">简介：工业软件开发、大型系统集成服务商</div>
        <div class="title-anson">
          推荐理由：根据周渊所在公司产品和服务分析，能够为您提供可靠的发票供应和技术支持。
        </div>
        <div class="title-footer" style="color:#F77234 ;">跟进汇总：添加吕大一直没有通过，正在寻找其他路径</div>
      </div>
      <div class="list">
        <div style="display: flex">
          <span class="list-bg"></span>
          <div style="line-height: 30px; margin-top: 5px">
            <span class="name">周原</span>
            <span style="color: #86909c"
              ><img
                src="../../../assets/img/svg/address.svg"
                alt=""
              />北京</span
            >
            <div>航天信息·工程师</div>
          </div>
        </div>
        
        <div class="title-pi">简介：工业软件开发、大型系统集成服务商</div>
        <div class="title-anson">
          推荐理由：根据周渊所在公司产品和服务分析，能够为您提供可靠的发票供应和技术支持。
        </div>
        <div class="title-footer" style="color: #F53F3F;">跟进汇总：尚未跟进</div>
      </div>
     
      <div class="list">
        <div style="display: flex">
          <span class="list-bg"></span>
          <div style="line-height: 30px; margin-top: 5px">
            <span class="name">周原</span>
            <span style="color: #86909c"
              ><img
                src="../../../assets/img/svg/address.svg"
                alt=""
              />北京</span
            >
            <div>航天信息·工程师</div>
          </div>
        </div>
        
        <div class="title-pi">简介：工业软件开发、大型系统集成服务商</div>
        <div class="title-anson">
          推荐理由：根据周渊所在公司产品和服务分析，能够为您提供可靠的发票供应和技术支持。
        </div>
        <div class="title-footer" style="color:#F53F3F ;">跟进汇总：尚未跟进</div>
      </div>
    </div>
    <div class="right">
      <a-tabs v-model:activeKey="activeKey">
        <a-tab-pane key="1" tab="路径1" style="background-color: #fff;">
          <div class="vertical-steps">
            <div class="step-top">汇总记录：添加吕大一直没有通过，正在寻找其他路径</div>
            <div class="step">
              <div style="display: flex; align-items: center">
                <img src="../../../assets/image/user.png" alt="" />
                <span style="margin-left: 10px">余晓峰</span>
              </div>

              <div class="step-current">同事</div>
              <div class="dash"></div>
            </div>

            <div class="step">
              <div style="display: flex; align-items: center">
                <img src="../../../assets/image/user.png" alt="" />
                <span style="margin-left: 10px"
                  >余晓峰
                  <span style="color: #86909c; margin-left: 40px"
                    >跟进记录：已添加原旭义微信：ffffhu3456</span
                  ></span
                >
              </div>

              <div class="step-current">前同事</div>

              <div class="dash"></div>
            </div>
            <div class="step">
              <div style="display: flex; align-items: center">
                <img src="../../../assets/image/user.png" alt="" />
                <span style="margin-left: 10px"
                  >余晓峰
                  <span style="color: #86909c; margin-left: 40px"
                    >跟进记录：已添加赵二微信：fiona3345</span
                  ></span
                >
              </div>

              <div class="step-current">通讯录好友</div>
              <div class="dash"></div>
            </div>
            <div class="step">
              <div style="display: flex; align-items: center">
                <img src="../../../assets/image/user.png" alt="" />
                <span style="margin-left: 10px"
                  >余晓峰
                  <span style="color: #86909c; margin-left: 40px"
                    >跟进记录：添加吕大一直没有通过</span
                  ></span
                >
              </div>

              <div class="step-current">校友</div>
              <div class="dash"></div>
            </div>
            <div class="step">
              <div style="display: flex; align-items: center">
                <img src="../../../assets/image/user.png" alt="" />
                <span style="margin-left: 10px">余晓峰</span>
              </div>

              <div class="step-current">通讯录好友</div>
              <div class="dash"></div>
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
import { EnvironmentOutlined } from "@ant-design/icons-vue";
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
  width: 70%;
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
</style>
