<template>
  <div class='business_template'>
    <Area :text="business.Title"/>
    <div class='mb-row'>
      <Underline :text="business.businessTitle"></Underline>
      <div class='mb-text'>
        {{ business.businessDoc}}
      </div>
      <div class='mb-img'>
        <img src="@/assets/mbImg/b1.png" alt="">
      </div>
    </div>
    <div class='mb-row model-row'>
      <Underline :text="business.modelTitle"></Underline>
      <div class='mb-text'>
         {{ business.modelDoc}}
      </div>
      <div class='mb-img'>
        <img src="@/assets/mbImg/b2.png" alt="">
      </div>
    </div>
    <div class='mb-row map-row'>
      <Underline :text="business.ecologyTitle" color='#fff'></Underline>
      <div class='mb-text'>
         {{ business.ecologyDoc}}
      </div>
      <div class='mb-img'>
        <img src="@/assets/mbImg/b3.png" alt="">
      </div>
    </div>
  </div>
</template>
<script>
import Area from "../components/Area"
import Underline from "../components/Underline"
export default {
  name:'business',
  components:{
    Area,
    Underline,
  },
  data(){
    return {
        business:this.$language[this.$store.state.language].business
    }
  },
  watch:{
    languagetype() {
      this.business=this.$language[this.languagetype].business
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
  .business_template{
    .mb-row{
      padding: 0 10px;
      box-sizing: border-box;
      .mb-text{
        color:#595959;
        font-size:12px;
        line-height:24px;
      }
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
      &.map-row{
        background:#1B1349;
        .mb-text{
          color:#fff;
        }
      }
    }
  }
</style>