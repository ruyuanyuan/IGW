<template>
    <div class="Menu">
      <div>IGW简介</div>
      <div>宏观分析</div>
      <div>IGW商业模式</div>
      <div>全球游戏生态联盟</div>
      <div>IGW Basics</div>
      <div>技术优势</div>
      <div>基金会</div>
      <div>发展路线</div>
      <div>媒体</div>
      <div>合作机构</div>
      <div>联系我们</div>
      <div class="language">
        <span>English</span><span>日本語</span><span>한국어</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "Menu",
        created() {

        },
        mounted() {

        },
        components: {},
        methods: {}
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
