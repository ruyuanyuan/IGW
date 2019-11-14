<template>
    <div class="Menu">
      <div @click='selectedMenu("/m/intro")'>IGW简介</div>
      <div @click='selectedMenu("/m/macroAnalysis")'>宏观分析</div>
      <div @click='selectedMenu("/m/business")'>IGW商业模式</div>
      <div @click='selectedMenu("/m/ecology")'>全球游戏生态联盟</div>
      <div @click='selectedMenu("/m/platform")'>IGW Basics</div>
      <div @click='selectedMenu("/m/technology")'>技术优势</div>
      <div @click='selectedMenu("/m/foundation")'>基金会</div>
      <div @click='selectedMenu("/m/economy")'>通证经济</div>
      <div @click='selectedMenu("/m/development")'>发展路线</div>
      <div @click='selectedMenu("/m/media")'>媒体</div>
      <div @click='selectedMenu("/m/team")'>合作机构</div>
      <div @click='selectedMenu("/m/contact")'>联系我们</div>
    </div>
</template>

<script>
    export default {
        name: "Menu",
        components: {},
        methods: {
          selectedMenu(path){
            this.$emit('menuClickEvent',path)
          }
        }
    }
</script>

<style scoped lang="scss">
    .Menu {
      position: fixed;
      top: 1rem;
      right: 0;
      left: 0;
      bottom: 0;
      background:rgba(0,0,0,0.8);
      z-index: 999;
      padding-top: 0.8rem;
      div{
        color: #fff;
        text-align: center;
        font-size:0.32rem;
        line-height: 1rem;
      }
      .language{
        span{
          padding: 0 0.267rem;
        }
      }
    }
</style>
