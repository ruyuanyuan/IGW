<template>
  <div class='media_template'>
    <Area text="媒体"/>
    <div class='mb-row'>
      <div class='mb-item'>
        <img src="@/assets/mbImg/bstar1.png" alt="">
        <div class='mb-item-doc'>
          <p>英国项目熊市布局，IGW游戏社交平台即将发布</p>
        </div>
        <div class='mb-item-time'>2019-10-11</div>
      </div>
       <div class='mb-item'>
        <img src="@/assets/mbImg/bstar1.png" alt="">
        <div class='mb-item-doc'>
          <p>英国项目熊市布局，IGW游戏社交平台即将发布</p>
        </div>
        <div class='mb-item-time'>2019-10-11</div>
      </div>
       <div class='mb-item'>
        <img src="@/assets/mbImg/bstar1.png" alt="">
        <div class='mb-item-doc'>
          <p>英国项目熊市布局，IGW游戏社交平台即将发布</p>
        </div>
        <div class='mb-item-time'>2019-10-11</div>
      </div>
       <div class='mb-item'>
        <img src="@/assets/mbImg/bstar1.png" alt="">
        <div class='mb-item-doc'>
          <p>英国项目熊市布局，IGW游戏社交平台即将发布</p>
        </div>
        <div class='mb-item-time'>2019-10-11</div>
      </div>
       <div class='mb-item'>
        <img src="@/assets/mbImg/bstar1.png" alt="">
        <div class='mb-item-doc'>
          <p>英国项目熊市布局，IGW游戏社交平台即将发布</p>
        </div>
        <div class='mb-item-time'>2019-10-11</div>
      </div>
       <div class='mb-item'>
        <img src="@/assets/mbImg/bstar1.png" alt="">
        <div class='mb-item-doc'>
          <p>英国项目熊市布局，IGW游戏社交平台即将发布</p>
        </div>
        <div class='mb-item-time'>2019-10-11</div>
      </div>
      
    </div>
  </div>
</template>
<script>
import Area from "../components/Area"
export default {
  name:'media',
  components:{
    Area,
  }
}
</script>
<style lang="scss">
  .media_template{
    .mb-row{
      padding: 0 10px 20px;
      box-sizing: border-box;
      .mb-item{
        width:100%;
        padding:15px;
        box-shadow:0px 0px 20px 0px rgba(219,219,219,0.93);
        box-sizing: border-box;
        margin-top:15px;
        img{
          width:100%;
        }
        .mb-item-doc{
          color:#333333;
          font-size:14px;
          margin-top:20px;
          text-align: center;
        }
        .mb-item-time{
          color:#9A9A9A;
          font-size:12px;
          margin-top:30px;
        }
      }
    }
  }
</style>