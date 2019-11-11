<template>
    <div class="Home">
      <!--IGW简介-->
      <div class="introduce">
        <Title text="IGW基金会"></Title>
        <div class="text">
          IGW全球游戏生态联盟致力打造一个基于区块链原生的泛社区化游戏平台，聚合游戏玩家、游戏内容生产者、开发者、数字资产交易者等多种泛社区成员，为游戏玩家提供优质的游戏内容，为开发者提供完善的游戏开发模块、数据服务及流量支持，且无中间费用，用户可使用平台通证IGC进行游戏数字资产的自由交易和跨链流通，社区内容完全由社区成员推动而实现自治管理和规范运作。
        </div>
        <Raduis bg="#1862E9"></Raduis>
      </div>
      <!--IGW全球游戏生态联盟-->
      <div class="alliance">
        <Title text="IGW全球游戏生态联盟"></Title>
        <div class="text">
          为了打造一个泛社区化的去中心化信任、流量共享、资产自由流通、一键全球发行、多方共赢的全球游戏生态，IGW开启全球游戏生态联盟计划。IGW率先在中国建立联盟链超级节点，然后通过节点竞选和准入机制，面向全球建立一个分布式的超级节点联盟。届时，IGW的游戏交易所将成为全球最大的游戏资产交易平台，IGC将成为游戏交易中心的通兑货币。
        </div>
        <div class="img-box">
          <div>
            <img src="@/assets/img/gw1.png" alt="">
            <div>流量共享</div>
          </div>
          <div>
            <img src="@/assets/img/gw2.png" alt="">
            <div>一键全球发行</div>
          </div>
          <div>
            <img src="@/assets/img/gw3.png" alt="">
            <div>去中介化</div>
          </div>
          <div>
            <img src="@/assets/img/gw4.png" alt="">
            <div>资产流通</div>
          </div>
        </div>
        <Raduis color="#000"></Raduis>
      </div>
    </div>
</template>

<script>
    import Title from "../components/Title"
    import Raduis from "../components/Radius"
    export default {
        name: "Home",
        created() {

        },
        mounted() {

        },
        components: {
          Title,
          Raduis
        },
        methods: {}
    }
</script>

<style scoped lang="scss">
    .Home {
      .text{
        font-size: 0.24rem;
        color: #595959;
        line-height: 1.8;
      }
      .introduce{
        padding: 0 0.187rem;
      }
      .alliance{
        padding: 0 0.187rem;
        .img-box{
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          padding: 0 1.6rem;
          padding-top: 0.6rem;
          >div{
            display: flex;
            align-items: center;
            flex-direction: column;
            font-size: 0.32rem;
            color: #07070D;
            &:nth-child(1){
              margin-bottom: 0.933rem;
            }
            &:nth-child(2){
              margin-bottom: 0.933rem;
            }
          }
          img{
            width: 2.213rem;
            height: 2.213rem;
            margin-bottom: 0.4rem;
          }
        }
      }
    }
</style>
