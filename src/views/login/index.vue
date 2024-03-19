<template>
   <div class="center">
<div >
    <div style="display: flex;justify-content: end;align-items: center;background: #fff;">
        <!-- <div class="balance">
            <span style="padding: 10px;">余额：1500商豆</span>
            <span style="color: #3964F5;padding: 10px;">充值</span>
        </div> -->
        <div class="phone" @click="openPhone">
            <tablet-outlined style="padding: 10px;"/>
            <span style="padding-right: 5px;">手机版</span>
        </div>
        <div class="out" @click="userOut">
            <!-- <img src="../../assets/image/user.png"></img> -->
            <span style="color: #3964F5;" class="userImg1">登录</span>
        </div>
      
    </div>
   </div>
   <div class="out-body" v-if="showOut">
    <div style="width: 100%;"><span style="color: #3964F5;" class="userImg"></span></div>
    <span style="display: block;"><edit-outlined/></span>
    <div>13456789076</div>
    <div style="border-top: 1px solid #eee;">
       <span><edit-outlined style="padding: 10px;"/>
    退出登录
    </span> 
    </div>
</div>
   <div class="body-center">
    <div>
        <img src="../../assets/image/PREVIEW.png"></img>
    </div>
    <div style="font-weight: 400;font-size: 32px; color:#1D2129 ;line-height:4">说要找什么客户，大模型就帮你找什么客户</div>
    <div class="search">
        <a-input
        style="min-height: 84px;border: none;"
      placeholder="请输入您的问题或需求"
      auto-size
    >
    <template #suffix>
        <img src="../../assets/file.svg" alt="">
        <img src="../../assets/fly.svg" alt="">
      </template>
</a-input>
            <!-- <span style="padding: 5px;">我们公司是销售印控仪，哪些公司需要</span> -->
            <!-- <span><img src="../../assets/file.svg" alt="">
            <img src="../../assets/fly.svg" alt="">
        </span> -->
        </div>
        <div style="line-height: 4;position: relative; right: 300px;bottom: -18px;">给我产品手册/业务文件，我告诉你客户是谁～</div>
        <div class="file">
            <img style="padding: 5px;"  src="../../assets/image/pdf.png" alt="">
            <span style="padding: 5px;">印控仪产品手册.pdf</span>
            <span style="padding: 5px;">哪些公司需要印控仪产品？</span>

           
        </div>

        <div class="file">
            <img style="padding: 5px;" src="../../assets/image/P.png" alt="">
            <span style="padding: 5px;">国信数据服务有限公司业务PPT</span>
            <span style="padding: 5px;">请根据我的产品资料帮我推荐客户</span>
           
        </div>
   </div>
   <a-modal  :width="240" v-model:open="visiblePhone"  class="modalPhone" >
    <div style="display: flex;flex-direction: column;">
<div class="title">商链手机端</div>
    <!-- <template #title >
        商链手机端
    </template> -->
    <div style="text-align: center;margin: 0 auto;">
      <div class="imgCover"><img style="width: 109px;height: 109px;" src="../../assets/image/ma.png"></img></div>  
        <div style="color: #5E6772;line-height: 3;">扫码下载</div>
        <div style="color: #5E6772;">商链APP</div>

    </div>
</div>
    <template #footer>
        <div class="dialog-footer">
        
        </div>
      </template>
  </a-modal>

  <a-modal  :width="500" v-model:open="visibleLogin"  class="modalPhone" >
    <div style="display: flex;flex-direction: column;">
    <div style="text-align: center;margin: 0 auto;">
        <div class="login-body">
            <a-input></a-input>
            <a-input-search
     
      placeholder="输入验证码"
      
    >
      <template #enterButton>
        <a-button>获取验证码</a-button>
      </template>
    </a-input-search>
        </div>
        <div class="login-button">
        <a-button>登录</a-button>
        </div>
        <div style="color: #5E6772; font-size: 14px;"><span class="rice">

        </span>首次注册会自动创建新账号，且代表您已同意<span style="color: #3964F5;">
            《用户协议》</span>和<span style="color: #3964F5;">《隐私政策》</span></div>

    </div>
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
import { TabletOutlined, EditOutlined} from '@ant-design/icons-vue';
const visiblePhone = ref(false)
const showOut  = ref(false)
const visibleLogin = ref(false)
  function openPhone()  {
    visiblePhone.value = true
}

function userOut(){
    // showOut.value=!showOut.value
    visibleLogin.value=true

}
</script>
  <style  scoped>
.center{
/* padding: 20px; */
background: #f3f5fb;

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
    justify-content: space-between;
    display: flex;
    align-items: center;
    background-color: #ffffff;
    border: 1px solid #e5e5e5;
    border-radius: 8px;
    padding: 10px;
    margin-left: 20px;
    cursor: pointer;
}
.out{
    width: 100px;
    height: 100px;
    padding: 14px;
}
.body-center{
    display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin-top: 20px;

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
.userImg{
    background: url('../../assets/image/user.png')no-repeat;
    width: 60px;
    height: 60px;
    display: block;
    margin: 0 auto;
}

.userImg1{
    /* background: url('../../assets/image/user.png')no-repeat; */
    width: 60px;
    height: 60px;
    display: block;
    margin: 0 auto;
    border-radius:50%;
    border: 1px solid #E8F1FF;
    background-color: #E8F1FF;
    text-align: center;
    line-height: 3.5;
}

.out-body{      
    width: 260px;
    height: 235px;
    border-radius: 8px;
    background-color: #fff;
    border: 2px solid rgba(0, 0, 0, 0.05);
    text-align: center;
    line-height: 3;
    padding-top: 15px;
    position: absolute;
    right: 15px;
}
.title{
    text-align: center;
    font-size: 24px;
    line-height: 2;
}

.login-body{
    margin-top: 30px;
    .ant-input{
        width: 356px;
    height: 48px;
    border-radius: 45px;
    margin-top: 20px;
    }
  .ant-input-group-wrapper{
        width: 356px;
    height: 48px;
    border-radius: 45px;
    margin-top: 20px;


    }
}
:deep(.ant-input-group-addon){
    border-bottom-right-radius: 45px!important;
    border-top-right-radius: 45px!important;
}
:deep(.ant-input-search-button){
    height: 48px;
    border-bottom-right-radius: 45px!important;
    border-top-right-radius: 45px!important;
}
    :deep(.ant-input){
        height: 48px;
        border-bottom-left-radius: 45px;
        border-top-left-radius: 45px;

    }
    .login-button{
        button{
            width: 356px;
            height: 48px;
            background-color:rgba(57, 100, 245, 0.5) ;
            color: #fff;
            border-radius: 45px;
            margin-top: 30px;
        }
    }

    .rice{
        width: 10px;
    height: 10px;
    display: inline-block;
    border: 1px solid;
    border-radius: 50%;
    }
</style>