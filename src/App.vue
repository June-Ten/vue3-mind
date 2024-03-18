<template>
  <router-view />
</template>

<style lang="less">
@import './assets/styles/global.less';

* {
  margin: 0;
  padding: 0;
}

div {
  box-sizing: border-box;

  &::-webkit-scrollbar {
    width: 7px;
  }

  &::-webkit-scrollbar-thumb {
    /*滚动条里面小方块*/
    border-radius: 10px;
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    background: rgba(134, 144, 156, 1);
  }

  ::-webkit-scrollbar-track {
    /*滚动条里面轨道*/
    -webkit-box-shadow: inset 0 0 5px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background: #EDEDED;
  }
}
</style>
