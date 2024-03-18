<template>
  <div class="card-detail-box">
    <a-row>
      <a-col :flex="1" style="display: flex;justify-content: space-between;">
        <div class="top-left-box">
          <div class="top-left-box__img-box">
            <img
              src="@/assets/img/png/avatar-man.png"
            />
          </div>
          <div class="top-left-box__info-box">
            <div class="top-left-box__info-box__top">
              <div class="top-left-box__info-box__top__name-box">
                <span>周渊</span>
                <div class="top-left-box__info-box__top__address-img-box">
                  <img
                    src="@/assets/img/svg/address.svg"
                    alt="address-icon"
                  />
                </div>
                <span class="top-left-box__info-box__top__address-txt">北京</span>
              </div>
            </div>
            <div class="top-left-box__info-box__bottom">
              <span>航天信息·工程师</span>
            </div>
          </div>
        </div>
        <div class="top-right-box">
          <div class="top-right-like-img-box">
            <img
              src="@/assets/img/svg/like.svg"
              alt="like-icon"
            />
          </div>
          <div class="top-right__calc-box">
            关系计算
          </div>
          <div class="top-right__assign-box">
            指派
          </div>
        </div>
      </a-col>
    </a-row>
    <a-row class="mgn-top">
      <a-col :sapn="24">
        <span class="reason-for-recommen">
          推荐理由：根据周渊所在公司产品和服务分析，能够为您提供可靠的发票供应和技术支持。
        </span>
      </a-col>
    </a-row>
    <a-row class="mgn-top">
      <a-col :span="24">
        <span class="key-clues">
          关系线索：TA是你校友的前同事
        </span>
      </a-col>
    </a-row>
    <a-divider style="margin: 10px 0;" />
    <a-row class="mgn-top">
      <a-col :span="24">
        <div class="company-box">
          <div class="company-left-img-box">
            <img
              src="@/assets/img/png/company-plan.png"
            />
          </div>
          <div class="company-right-info-box">
            <div class="company-right-info-box__name">
              <span>北京航天信息有限公司</span>
            </div>
            <div class="company-right-info-box__status">
              <span>存续</span>
            </div>
          </div>
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<style lang="less" scoped>
.mgn-top {
  margin-top: 10px;
}
.card-detail-box {
  width: 100%;
  display: flex;
  flex-direction: column;
  .top-left-box {
    display: flex;
    align-items: center;
    .top-left-box__img-box {
      width: 40px;
      height: 40px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .top-left-box__info-box {
      margin-left: 10px;
      display: flex;
      flex-direction: column;
      .top-left-box__info-box__top__name-box {
        display: flex;
        align-items: center;
        .top-left-box__info-box__top__name-box {
          font-size: 600;
          font-size: 14px;
        }
        .top-left-box__info-box__top__address-img-box {
          width: 12px;
          height: 12px;
          margin-left: 10px;
          transform: translateY(-4px);
          img {
            width: 100%;
            height: 100%;
          }
        }
        .top-left-box__info-box__top__address-txt {
          font-size: 10px;
          color: rgba(134, 144, 156, 1);
        }
      }
      .top-left-box__info-box__bottom {
        margin-top: 6px;
        font-size: 10px;
        color: rgba(78, 89, 105, 1);
      }
    }
  }
  .top-right-box {
    display: flex;
    align-items: center;
    width: 200px;
    justify-content: space-between;
    .top-right-like-img-box {
      width: 30px;
      height: 30px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .top-right__calc-box {
      border: 1px solid rgba(57, 100, 245, 1);
      padding: 5px 10px;
      color: rgba(57, 100, 245, 1);
      border-radius: 20px;
    }
    .top-right__assign-box {
      border: 1px solid rgba(57, 100, 245, 1);
      padding: 5px 10px;
      color: rgba(57, 100, 245, 1);
      border-radius: 20px;
    }
  }
  .reason-for-recommen {
    font-size: 12px;
    color: rgba(125, 162, 249, 1);
  }
  .key-clues {
    font-size: 12px;
    color: rgba(161, 165, 172, 1);
  }
  .company-box {
    width: 100%;
    display: flex;
    align-items: center;
    .company-left-img-box {
      display: flex;
      width: 40px;
      height: 40px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .company-right-info-box {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      margin-left: 10px;
      height: 40px;
      .company-right-info-box__name {
        font-size: 14px;
        font-weight: 500;
        color: rgba(29, 33, 41, 1);
      }
      .company-right-info-box__status {
        width: fit-content;
        background-color: rgba(0, 180, 42, 0.05);
        color: rgba(0, 180, 42, 1);
        font-size: 10px;
        padding: 2px 5px;
      }
    }
  }
}
</style>