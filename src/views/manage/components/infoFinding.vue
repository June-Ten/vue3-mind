<template>
    <div>
        <a-tabs v-model:activeKey="activeKey">
        <a-tab-pane key="1" tab="路径1" style="background-color: #fff;">
            <div style="display: inline-grid;width: 100%;">
                <div class="step">
                <div style="display: flex; align-items: center">
                <img src="../../../assets/image/user.png" alt="" />
                <span style="margin-left: 10px">我</span>
              </div>
              <div class="dash"></div>
              </div>
              <div class="step">
                <div style="display: flex; align-items: center">
                <img src="../../../assets/image/what.png" alt="" />
                <span style="margin-left: 10px">我</span>
              </div>
              <div class="dash"></div>

              </div>
              <div class="step">
                <div @click="openApp" class="sync" style="display: flex;justify-content: center;  align-items: center">
                    <a-button type="primary">同步商恋APP人脉资源</a-button>
              </div>
              <div style="margin: 0 auto;"  class="dash"></div>
              </div>
              <div class="step">
                <div style="display: flex; align-items: center">
                <img src="../../../assets/image/user.png" alt="" />
                <span style="margin-left: 10px">周渊</span>
              </div>
              </div>
            </div>
            </a-tab-pane>
        <a-tab-pane key="2" tab="路径2" style="background-color: #fff;">
</a-tab-pane>
<a-tab-pane key="3" tab="路径3" style="background-color: #fff;">
</a-tab-pane>
<a-tab-pane key="4" tab="路径4" style="background-color: #fff;">
</a-tab-pane>
<a-tab-pane key="5" tab="路径5" style="background-color: #fff;">
</a-tab-pane>
<a-tab-pane key="6" tab="路径6" style="background-color: #fff;">
</a-tab-pane>
            </a-tabs>
    </div>
    <a-modal
      v-model:open="open"
      :footer="null"
      :width="240"
      wrapClassName="nav-modle-wrap"
      centered
      :bodyStyle="{ padding: 0 }"
    >
      <div
        class="nav-modle-body"
      >
        <div class="nav-modle-body__top-title">商链手机端</div>
        <div class="nav-modle-body__img-box">
          <img
            src="@/assets/img/png/QRcode.png"
            alt="QRcode-img"
          />
        </div>
        <div class="nav-modle-body__bottom-txt">
          <div class="nav-modle-body__bottom-txt__title">扫码下载</div>
          <div class="nav-modle-body__bottom-txt__desc">商链APP</div>
        </div>
      </div>
    </a-modal>
    <a-modal
      v-model:open="openInvest"
      :footer="null"
      :width="500"
      wrapClassName="nav-modle-wrap"
      centered
      :bodyStyle="{ padding: 0 }"
    >
      <div
        class="invest-body"
      >
        <div class="invest-body__top-title">商豆充值提醒</div>
        <div></div>
        <div class="invest-body__bottom-txt">
          <div class="invest-body__bottom-txt__title">扫码下载</div>
          <div class="invest-body__bottom-txt__desc">商豆余额：0</div>
          <div>您的商豆余额不足，请及时充值</div>
        </div>
      </div>
    </a-modal>
</template>
<script setup>
  import { ref, reactive } from 'vue'
const open = ref(false)
const openInvest = ref(false)
function openApp(){
    // open.value=true
    openInvest.value=true
}
</script>
<style lang="less" scoped>
.step {
  padding: 10px;
  position: relative;
  margin: 0 auto;
  img{
    width: 60px;
    height: 60px;
  }
  .sync{
    width: 204px;
    height: 204px;
    border-radius: 1px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    button{
        border-radius: 100px;
        height: 36px;
        background-color:rgba(57, 100, 245, 1) ;
    }
  }
}
.dash {
  flex-grow: 1;
  height: 7cqh;
  width: 1px;
  border: 1px dashed #ccc;
  margin: 2px 30px;
}
.nav-modle-body {
  width: 200px;
  height: 200px;
  border-radius: 8px;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  .nav-modle-body__top-title {
    margin-top: 20px;
    font-size: 20px;
    color: rgba(29, 33, 41, 1);
  }
  .nav-modle-body__img-box {
    width: 100px;
    height: 100px;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .nav-modle-body__bottom-txt {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: rgba(94, 103, 114, 1);
    font-size: 14px;
  }
}

.invest-body{
    .invest-body__top-title{
        text-align: center;
        font-size: 16px;
        
    }
}
</style>