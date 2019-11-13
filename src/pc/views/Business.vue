<template>
  <div class='business_template'>
    <div class='gwi-row'>
      <div class='topnav'>
        <img src="@/assets/img/top_nav.png" alt="">
        <div class='topnav-title'>商业模式</div>
      </div>
    </div>
    <div class='gwi-row framework-row business_row'>
      <div class='gwi-row-content'>
        <div class='gwi-row-h'>核心商业模式</div>
        
        <div class='framework-doc'>
           IGW通过平台通证IGC链接游戏生态上下游产业链各个节点，支持玩家、厂商OTC一键入金，支持虚拟资产、数据服务等自由交易，跨平台通兑，奖励玩家行为，帮助游戏开发进行众筹，使整个生态形成完美闭环 
        </div>
        <div class='framework-img'>
          <img src="@/assets/img/flowPath2.png" alt="">
        </div>
      </div>
    </div>
    <div class='gwi-row framework-row ecology-row'>
      <div class='gwi-row-content'>
        <div class='gwi-row-h'>生态激励模型</div>
        
        <div class='framework-doc'>
         IGW通过IGW基金实验室，与区块链行业团体、区块链游戏平台、游戏开发者合作，进行区块链底层技术研发，使底层协议更好的支持游戏及平台；对高质量内容游戏团队进行投资，对平台生态建设者进行激励，增加更多优秀的游戏内容，扩大IGW产业生态。 
        </div>
        <div class='framework-img'>
          <img src="@/assets/img/flowPath3.png" alt="">
        </div>
      </div>
    </div>
    <div class='gwi-row framework-row map-row'>
      <div class='gwi-row-content'>
        <div class='gwi-row-h font-while'>全球游戏生态联盟</div>
        
        <div class='framework-doc'>
           为了打造一个泛社区化的去中心化信任、流量共享、资产自由流通、一键全球发行、多方共赢的全球游戏生态，IGW开启全球游戏生态联盟计划。IGW率先在中国建立联盟链超级节点，然后通过节点竞选和准入机制，面向全球建立一个分布式的超级节点联盟。届时，IGW的游戏交易所将成为全球最大的游戏资产交易平台，IGC将成为游戏交易中心的通兑货币。 
        </div>
        <div class='framework-img'>
          <img src="@/assets/img/bgmap.png" alt="">
        </div>
      </div>
    </div>
  </div>
  
</template>
<script>
export default {
  name:'business'
}
</script>
<style lang="scss">
  .business_template{
    width:100%;
    .framework-row{
      .framework-img{
        width:100%;
        margin-top:20px;
        img{
          width:100%;
        }
      }
      .framework-doc{
        margin-top:20px;
        color:#333;
        line-height: 30px;
      }
    }
    
    .ecology-row{
      background:#EDEFF2;
    }
    .business_row{
      background:#fff;
    }
    .map-row{
      background:#1B1349;
      .framework-doc{
        color:#fff;
      }
    }
  }
</style>