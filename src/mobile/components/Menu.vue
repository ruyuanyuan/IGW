<template>
    <div class="Menu">
      <div @click='selectedMenu("/m/intro")'>IGW简介</div>
      <div @click='selectedMenu()'>宏观分析</div>
      <div @click='selectedMenu()'>IGW商业模式</div>
      <div @click='selectedMenu()'>全球游戏生态联盟</div>
      <div @click='selectedMenu()'>IGW Basics</div>
      <div @click='selectedMenu()'>技术优势</div>
      <div @click='selectedMenu()'>基金会</div>
      <div @click='selectedMenu()'>发展路线</div>
      <div @click='selectedMenu()'>媒体</div>
      <div @click='selectedMenu()'>合作机构</div>
      <div @click='selectedMenu()'>联系我们</div>
    </div>
</template>

<script>
    export default {
        name: "Menu",
        components: {},
        methods: {
          selectedMenu(path){

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
