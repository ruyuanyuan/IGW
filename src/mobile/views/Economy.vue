<template>
  <div class='mb_economy_template'>
    <Area :text="economy.Title"/>
    <div class='top-row'>
      <img src="@/assets/mbImg/e1.png" alt="">
    </div>
    <div class='mb-row model-row'>
      <Underline :text="economy.Exchange"></Underline>
      <div class='mb-img'>
        <img src="@/assets/mbImg/e2.png" alt="">
      </div>
    </div>
  </div>
</template>
<script>
import Area from "../components/Area"
import Underline from "../components/Underline"
export default {
  name:'mb_economy',
  components:{
    Area,
    Underline,
  },
  data(){
    return {
        economy:this.$language[this.$store.state.language].economy
    }
  },
  watch:{
    languagetype() {
      this.economy=this.$language[this.languagetype].economy
    }
  },
  computed: {
    languagetype: function() {
      return this.$store.state.language;
    }
  }
}
</script>
<style lang="scss">
  .mb_economy_template{
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