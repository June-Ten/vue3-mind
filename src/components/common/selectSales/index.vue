<template>
  <a-dropdown
      placement="bottomLeft"
      :trigger="['click']"
      :getPopupContainer="(triggerNode) => triggerNode.parentNode"
    >
      <slot></slot>
      <template #overlay>
        <div class="dropdown-slot-box">
          <div class="slot-title">请选择销售</div>
          <div class="slot-avatar-list">
            <div class="slot-avatar-item" v-for="item in 14">
              <div class="slot-avatar-item__img-box">
                <img
                  src="@/assets/img/png/avatar-woman02.png"
                />
              </div>
              <div class="slot-avatar-item__name">张三</div>
            </div>
            <div class="slot-avatar-item-add-sales">
              <div class="slot-avatar-item__img-box">
                +
              </div>
              <div class="slot-avatar-item__name">添加销售</div>
            </div>
          </div>
        </div>
      </template>
    </a-dropdown>
</template>

<style lang="less" scoped>
.dropdown-slot-box {
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  background-color: white;
  width: 300px;
  height: 250px;
  padding: 10px 20px;
  .slot-title {
    width: 100%;
    font-size: 14px;
    color: black;
    display: flex;
    justify-content: center;
  }
  .slot-avatar-list {
    margin-top: 20px;
    display: grid;
    grid-template-columns: repeat(5, 17%);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    .slot-avatar-item {
      cursor: pointer;
      &:first-child {
        .slot-avatar-item__img-box {
          border: 1px solid rgba(57, 100, 245, 1);
          border-radius: 50%;
          padding: 2px;
          width: 32px;
          height: 32px;
        }
        .slot-avatar-item__name {
          color: rgba(57, 100, 245, 1);
        }
      }
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 50px;
      .slot-avatar-item__img-box {
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .slot-avatar-item__name {
        margin-top: 5px;
        font-size: 10px;
        color: rgba(134, 144, 156, 1);
      }
    }
    .slot-avatar-item-add-sales {
      display: flex;
      flex-direction: column;
      align-items: center;
      height: 50px;
      cursor: pointer;
      .slot-avatar-item__img-box {
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid rgba(57, 100, 245, 1);
        color: rgba(57, 100, 245, 1);
        border-radius: 50%;
      }
      .slot-avatar-item__name {
        margin-top: 5px;
        font-size: 10px;
        color: rgba(57, 100, 245, 1);
      }
    }
  }
}
</style>
