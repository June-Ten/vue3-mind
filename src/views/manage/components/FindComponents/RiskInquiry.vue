<template>
  <div class="risk-inquiry-box">
    <div class="risk-count-item">
      <div class="num" style="color: rgba(183, 183, 183, 1);">0</div>
      <div class="label" style="color: rgba(183, 183, 183, 1);">失信被执行人</div>
    </div>
    <div class="risk-count-item">
      <div class="num" style="color: rgba(245, 63, 63, 1);">1</div>
      <div class="label">被执行人</div>
    </div>
    <div class="risk-count-item">
      <div class="num" style="color: rgba(245, 174, 66, 1);">2</div>
      <div class="label">限制高消费</div>
    </div>
    <div class="risk-count-item">
      <div class="num" style="color: rgba(255, 128, 75, 1);">1</div>
      <div class="label">终本案件</div>
    </div>
    <div class="risk-count-item">
      <div class="num" style="color: rgba(245, 63, 63, 1);">3</div>
      <div class="label">验证违法</div>
    </div>
    <div class="risk-count-item">
      <div class="num" style="color: rgba(245, 174, 66, 1);">7</div>
      <div class="label">行政处罚</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.risk-inquiry-box {
  width: 100%;
  padding: 10px;
  background-color: rgba(248, 251, 255, 1);
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
  .risk-count-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: white;
    height: 70px;
    .num {
      font-size: 24px;
    }
    .label {
      font-size: 14px;
      color: rgba(29, 33, 41, 1);
    }
  }
}
</style>