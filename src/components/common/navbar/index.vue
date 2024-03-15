<template>
  <div class="navbar-box">
    <div class="balance-box">
      <div class="balance-box__label">商豆余额：</div>
      <div class="balance-box__value">1200</div>
    </div>
    <div class="recharge-box">充值</div>
    <div class="phone-txt-box" @click="open = true">
      <div class="phone-txt-box__img-box">
        <img src="@/assets/img/svg/phone.svg" alt="phone-icon" />
      </div>
      <div class="phone-txt-box__txt">手机版</div>
    </div>
    <div class="avatar-box">
      <img src="@/assets/img/png/avatar-woman.png" alt="avatar" />
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
  </div>
</template>

<script setup>
import { ref } from 'vue'


const open = ref(false)
</script>

<style lang="less" scoped>
.navbar-box {
  display: flex;
  align-items: center;
  padding: 10px 20px;
  height: 100%;
  background-color: transparent;
  .balance-box {
    display: flex;
    align-items: center;
    color: #ff6e4a;
  }
  .recharge-box {
    margin-left: 10px;
    color: rgba(57, 100, 245, 1);
  }
  .phone-txt-box {
    display: flex;
    align-items: center;
    background-color: rgba(255, 255, 255, 1);
    border: 1px solid rgba(229, 229, 229, 1);
    border-radius: 8px;
    padding: 10px;
    margin-left: 20px;
    cursor: pointer;
    .phone-txt-box__img-box {
      margin-right: 5px;
      width: 22px;
      height: 22px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .phone-txt-box__txt {
      font-size: 14px;
      color: rgba(29, 33, 41, 1);
      font-weight: 500;
    }
  }
  .avatar-box {
    margin-left: 15px;
    cursor: pointer;
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
    }
  }
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
</style>
