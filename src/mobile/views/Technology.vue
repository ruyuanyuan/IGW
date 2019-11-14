<template>
    <div class="Technology">
      <Area text="技术优势" />
      <!--技术架构-->
      <div class="architecture">
        <Underline text="技术架构"></Underline>
        <img src="@/assets/mobileImage/technology_03.png" alt="">
        <div class="text">
          IGW采用分层式技术架构。最底层为实现P2P分布式网络的网络层；第二层为存储区块数据和K-V数据的数据层，采用LEVELDB作为结构化数据的主要支撑；第三层为共识层，实现共识算法，处理节点识别和数据同步，主要同步区块数据和智能合约状态数据；最顶层为合约层，提供智能合约虚拟机和API接口，提供认证模块用于节点的顶层认证识别。
        </div>
      </div>
      <!--技术亮点-->
      <div class="highlight">
        <Underline text="技术亮点"></Underline>
        <div class="word">
          <div class="name">
            <div class="blue-square"></div>
            可插拔式共识机制
          </div>
          <div class="desc">
            IGW采用可插拔共识机制，只要51%节点达成一致，支持RAFT、IBFT与DPOS三种机制自由切换，保证交易快速确认和系统稳定运行。
          </div>
        </div>
        <div class="word">
          <div class="name">
            <div class="blue-square"></div>
            高兼容性智能合约
          </div>
          <div class="desc">
            IGW采用基于高兼容性IGC-WHAS-1221协议，双向SSL证书认证和可形式化验证的智能合约虚拟机，可实现跨合约承兑。
          </div>
        </div>
        <div class="word">
          <div class="name">
            <div class="blue-square"></div>
            高效稳定的开发工具
          </div>
          <div class="desc">
            IGW提供IGW Storm开发工具，可为开发者提供一键自建网络和一键链接测试网络功能，可帮助开发者快速搭建开发环境。同时将全面支持jetbrain系列的开发工具，开发者无需支付类似gas、ram等手续费用。
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    import Underline from "../components/Underline"
    import Area from "../components/Area"
    export default {
        name: "Technology",
        created() {

        },
        mounted() {

        },
        components: {
          Underline,
          Area
        },
        methods: {}
    }
</script>

<style scoped lang="scss">
    .Technology {
      .banner{
        height: 1.467rem;
        background: url("../../assets/img/top_nav.png") no-repeat;
        background-size: cover;
        font-size:0.4rem;
        color: #fff;
        font-weight: bold;
        display: flex;
        align-items: center;
        padding-left: 0.213rem;
      }
      .architecture{
        background: #fff;
        padding: 0 0.213rem;
        img{
          width: 100%;
          height: auto;
          display: block;
          margin-bottom: 20px;
        }
        .text{
          font-size: 12px;
          color: #595959;
          line-height: 24px;
          margin-bottom: 20px;
        }
      }
      .highlight{
        background: #EDEFF2;
        padding-bottom: 20px;
      }
      .word{
        margin-bottom: 0.6rem;
        padding: 0 0.213rem;
        &:last-child{
          margin-bottom: 0!important;
        }
        .name{
          display: flex;
          font-size: 14px;
          align-items: center;
          color: #000;
          margin-bottom: 10px;
          .blue-square{
            width:15px;
            height:15px;
            background:rgba(24,98,233,1);
            margin-right: 10px;
          }
        }
        .desc{
          font-size: 12px;
          color: #595959;
          line-height: 24px;
        }
      }
    }
</style>
