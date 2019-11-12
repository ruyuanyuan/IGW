<template>
    <div class="Intro">
      <Area text="IGW简介" />
      <div class="text">
        IGW全球游戏生态联盟致力打造一个基于区块链原生的泛社区化游戏平台，聚合游戏玩家、游戏内容生产者、开发者、数字资产交易者等多种泛社区成员，为游戏玩家提供优质的游戏内容，为开发者提供完善的游戏开发模块、数据服务及流量支持，且无中间费用，用户可使用平台通证IGC进行游戏数字资产的自由交易和跨链流通，社区内容完全由社区成员推动而实现自治管理和规范运作。
      </div>
    </div>
</template>

<script>
    import Area from "../components/Area"
    export default {
        name: "Intro",
        created() {

        },
        mounted() {

        },
        components: {Area},
        methods: {}
    }
</script>

<style scoped lang="scss">
    .Intro {
      .text{
        padding: 0 0.24rem;
        color: #595959;
        font-size: 0.24rem;
        line-height: 1.8;
        margin: 0.8rem 0;
      }
    }
</style>
