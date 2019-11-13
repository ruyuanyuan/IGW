<template>
  <div class='skill_template'>
    <div class='gwi-row'>
      <div class='topnav'>
        <img src="@/assets/img/top_nav.png" alt="">
        <div class='topnav-title'>技术优势</div>
      </div>
    </div>
    <div class='gwi-row framework-row'>
      <div class='gwi-row-content'>
        <div class='gwi-row-h'>技术架构</div>
        <div class='framework-img'>
          <img src="@/assets/img/flowPath1.png" alt="">
        </div>
        <div class='framework-doc'>
           IGW采用分层式技术架构。最底层为实现P2P分布式网络的网络层；第二层为存储区块数据和K-V数据的数据层，采用LEVELDB作为结构化数据的主要支撑；第三层为共识层，实现共识算法，处理节点识别和数据同步，主要同步区块数据和智能合约状态数据；最顶层为合约层，提供智能合约虚拟机和API接口，提供认证模块用于节点的顶层认证识别。 
        </div>
        
      </div>
    </div>
    <div class='gwi-row spot-row'>
      <div class='gwi-row-content'>
        <div class='gwi-row-h'>技术亮点</div>
        <div class='chart_doc_item'>
            <div class='chart_doc_title'><span class='blue_block'></span> 可插拔式共识机制</div>
            <div class='chart_doc_p'>IGW采用可插拔共识机制，只要51%节点达成一致，支持RAFT、IBFT与DPOS三种机制自由切换，保证交易快速确认和系统稳定运行。</div>
          </div>
        <div class='chart_doc_item'>
          <div class='chart_doc_title'><span class='blue_block'></span> 高兼容性智能合约</div>
          <div class='chart_doc_p'>IGW采用基于高兼容性IGC-WHAS-1221协议，双向SSL证书认证和可形式化验证的智能合约虚拟机，可实现跨合约承兑。</div>
        </div>
        <div class='chart_doc_item'>
          <div class='chart_doc_title'><span class='blue_block'></span> 高效稳定的开发工具</div>
          <div class='chart_doc_p'>IGW提供IGW Storm开发工具，可为开发者提供一键自建网络和一键链接测试网络功能，可帮助开发者快速搭建开发环境。同时将全面支持jetbrain系列的开发工具，开发者无需支付类似gas、ram等手续费用。</div>
        </div>
      </div>
    </div>
 
  </div>
  
</template>
<script>
export default {
  name:'skill'
}
</script>
<style lang="scss">
  .skill_template{
    width:100%;
    .spot-row{
      background:#EDEFF2;
      .chart_doc_item{
        margin-top:30px;
        .chart_doc_title{
          font-size:15px;
          color:#000;
          .blue_block{
            width:15px;
            height: 15px;
            display: inline-block;
            margin-right:15px;
            background: #1862E9;
            letter-spacing: 2px;
             position: relative;
             top:3px;
          }
        }
        .chart_doc_p{
          font-size:14px;
          color:#595959;
          margin-top:15px;
          line-height: 30px;
        }
      }
    }
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
  }
</style>