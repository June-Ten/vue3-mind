<template>
  <div
    class="bottom-item-box"
    style="width: 100%;"
  >
    <div class="bottom-item__first-img-box">
      <div class="first-left-img-box">
        <img
          src="@/assets/img/png/avatar-man.png"
          alt="first-left-img"
        />
      </div>
      <div class="first-middle-txt-box">
        <div class="name-box">
          <span>张三</span>
          <div class="address-img-box">
            <img
              src="@/assets/img/svg/address.svg"
              alt="address-icon"
            />
          </div>
          <span class="address-txt">北京</span>
        </div>
        <div class="middle-subject">
          <span>航天信息·工程师</span>
        </div>
      </div>
      <div class="first-right-like-box">
        <img
          src="@/assets/img/svg/like.svg"
          alt="like-icon"
        />
      </div>
    </div>
    <div class="bottom-item__desc-box line-1">
      <span>简介：工业软件开发、大型系统集成服务商</span>
    </div>
    <div class="bottom-item__reason-for-recommen line-2">
      推荐理由：根据周渊所在公司产品和服务分析，能够为您提供可靠的发票供应和技术支持。
    </div>
    <div class="bottom-item__clue line-1">
      关系线索：TA是你的校友
    </div>
    <SelectSales>
      <div class="bottom-item__assign">
        指派
      </div>
    </SelectSales>
  </div>
</template>

<script setup>
import SelectSales from '@/components/common/selectSales/index.vue'
</script>

<style lang="less" scoped>
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
</style>