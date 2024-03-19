<template>
  <div class="credit-report-box">
    <div class="report-item" v-for="(item, index) in 2">
      <div class="report-item__left-img-box">
        <img
          src="@/assets/img/png/company-file-pdf.png"
        />
      </div>
      <div class="report-item__middle-info-box">
        <div class="report-item__middle-info-box__top">
          <div class="report-item__middle-info__title">
            企业信用报告-简版
          </div>
          <div class="report-item__middle-info__desc" style="margin-top: 5px;">
            快速了解企业信用基本情况
          </div>
        </div>
        <div class="report-item__middle-info__price">
          6商豆
        </div>
      </div>
      <div class="report-item__right-btn-box">
        <div class="report-item__right-btn" :class="{ disabled: index === 0 }">
          立即下载
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.credit-report-box  {
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 40%);
  row-gap: 20px;
  justify-content: space-between;
  padding-top: 20px;
  .report-item {
    flex-shrink: 0;
    display: flex;
    justify-content: space-between;
    .report-item__left-img-box {
      width: 74px;
      height: 108px;
      flex-shrink: 0;
    }
    .report-item__middle-info-box {
      display: flex;
      flex-direction: column;
      height: 100%;
      justify-content: space-between;
      flex: 1;
      padding-left: 10px;
      .report-item__middle-info__title {
        font-weight: 500;
        font-size: 14px;
        color: #1D2129;
      }
      .report-item__middle-info__desc {
        font-size: 14px;
        color: #858585;
      }
      .report-item__middle-info__price {
        color: rgba(241, 131, 96, 1);
        font-size: 14px;
      }
    }
    .report-item__right-btn-box {
      height: 100%;
      display: flex;
      align-items: flex-end;
      .report-item__right-btn {
        color: rgba(57, 100, 245, 1);
        border: 1px solid rgba(57, 100, 245, 1);
        padding: 5px 10px;
        border-radius: 50px;
        font-size: 14px;
        flex-shrink: 0;
        width: 78px;
        cursor: pointer;
        &.disabled {
          color: rgba(201, 205, 212, 1);
          border: 1px solid rgba(201, 205, 212, 1);
          background-color: white;
          cursor: not-allowed;
        }
      }
    }
  }
}
</style>