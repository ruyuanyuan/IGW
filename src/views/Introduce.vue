<template>
  <div class='introduce_template'>
    <div class='gwi-row'>
      <div class='topnav'>
        <img src="@/assets/img/top_nav.png" alt="">
        <div class='topnav-title'>IGW简介</div>
      </div>
    </div>
    <div class='gwi-row'>
      <div class='gwi-row-content'>
        <div class='introduce-content'>
          <div class='gwi-row-left'>
              <img src="@/assets/img/spread.png" alt=""> 
          </div>
          <div class='gwi-row-right'>
              <div>
                 IGW全球游戏生态联盟致力打造一个基于区块链原生的泛社区化游戏平台，聚合游戏玩家、游戏内容生产者、开发者、数字资产交易者等多种泛社区成员，为游戏玩家提供优质的游戏内容，为开发者提供完善的游戏开发模块、数据服务及流量支持，且无中间费用，用户可使用平台通证IGC进行游戏数字资产的自由交易和跨链流通，社区内容完全由社区成员推动而实现自治管理和规范运作。
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
  .introduce_template{
    .introduce-content{
      width:100%;
      display: flex;
      justify-content: space-between;
      .gwi-row-left{
        width:40%;
        img{
          width:100%;
        }
      }
      .gwi-row-right{
        width:50%;
        font-size:12px;
        color:#333333;
        line-height: 30px;
        letter-spacing: 2px;
        display: flex;
        align-items: center;
      }
    }
  }
</style>
