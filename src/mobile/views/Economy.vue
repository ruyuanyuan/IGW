<template>
  <div class='economy_template'>
    <Area text="通证经济"/>
    <div class='top-row'>
      <img src="@/assets/mbImg/e1.png" alt="">
    </div>
    <div class='mb-row model-row'>
      <Underline text="通证互换"></Underline>
      <div class='mb-img'>
        <img src="@/assets/mbImg/e2.png" alt="">
      </div>
    </div>
  </div>
</template>
<script>
import Area from "../components/Area"
import Underline from "../components/Underline"
import Title from "../components/Title"
export default {
  name:'economy',
  components:{
    Area,
    Underline,
    Title
  }
}
</script>
<style lang="scss">
  .economy_template{
    .top-row{
      width:100%;
      img{
        width:100%;
      }
    }
    .mb-row{
      padding: 0 10px 30px;
      box-sizing: border-box;
      .mb-img{
        width:100%;
        margin-top:20px;
        img{
          width:100%;
        }
      }
      &.model-row{
        background:#EDEFF2;
      }
    }
  }
</style>