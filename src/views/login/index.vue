<template>
   <div class="center">
<div >
    <div>客户资源</div>
    <div style="display: flex;justify-content: end;align-items: center;">
        <div class="balance">
            <span style="padding: 10px;">余额：1500商豆</span>
            <span style="color: #3964F5;padding: 10px;">充值</span>
        </div>
        <div class="phone" @click="openPhone">
            <icon-mobile style="padding: 10px;" :style="{fontSize:'22px'}" />
            <span style="padding-right: 5px;">手机版</span>
        </div>
        <div class="out"></div>
    </div>
   </div>

   <div class="body-center">
    <div>
        <img src="../../assets/iamge/PREVIEW.png"></img>
    </div>
    <div style="font-weight: 400;font-size: 32px; color:#1D2129 ;line-height:4">说要找什么客户，大模型就帮你找什么客户</div>
    <div class="search">
            <span style="padding: 5px;">我们公司是销售印控仪，哪些公司需要</span>
            <span><img src="../../assets/file.svg" alt="">
            <img src="../../assets/fly.svg" alt="">
        </span>
        </div>
        <div style="line-height: 4;position: relative; right: 300px;bottom: -18px;">给我产品手册/业务文件，我告诉你客户是谁～</div>
        <div class="file">
            <img style="padding: 5px;"  src="../../assets/iamge/pdf.png" alt="">
            <span style="padding: 5px;">印控仪产品手册.pdf</span>
            <span style="padding: 5px;">哪些公司需要印控仪产品？</span>

           
        </div>

        <div class="file">
            <img style="padding: 5px;" src="../../assets/iamge/P.png" alt="">
            <span style="padding: 5px;">国信数据服务有限公司业务PPT</span>
            <span style="padding: 5px;">请根据我的产品资料帮我推荐客户</span>
           
        </div>
   </div>
   <a-modal v-model:visible="visiblePhone"  class="modalPhone" >

    <template #title >
        商链手机端
    </template>
    <div>
      <div class="imgCover"><img style="width: 109px;height: 109px;" src="../../assets/iamge/ma.png"></img></div>  
        <span></span>
    </div>
    <template #footer>
        <div class="dialog-footer">
        
        </div>
      </template>
  </a-modal>
</div>

  </template>
<script setup>
import { ref } from 'vue';
  import { IconMobile } from '@arco-design/web-vue/es/icon'
  const visiblePhone = ref(false)
  function openPhone()  {
    visiblePhone.value = true
}
</script>
  <style  scoped>
.center{
padding: 20px;
}
.balance{
    width: 345px;
    height: 57px;
    background-color: #fff;
    border-radius: 17px;
    margin-right: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.phone{
    width: 100px;
    height: 57px;
    background-color: #fff;
    border-radius: 17px;  
    margin-right: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.out{
    width: 60px;
    height: 60px;
    background-color: #fff;
    border-radius: 50%;   
}
.body-center{
    display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;

}
.search{
    width: 918px;
    height: 84px;
    border-radius: 16px;
    background-color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 20px;
}
.file{
    width: 918px;
    height: 84px;
    border-radius: 16px;
    background-color: #fff;
    display: flex;
    align-items: center;
margin-top: 10px;
}

.ant-modal-title{
    text-align: center;
}

.imgCover{
width: 120px;
height: 120px;
background-color: #fff;
border: 1px solid #000;
display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
}
.modalPhone{
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>