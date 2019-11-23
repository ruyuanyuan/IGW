<template>
  <div class='media_template'>
    <Area :text="media.Title"/>
    <div class='mb-row'>
      <div class='mb-item' v-for="(item,index) in media.medialist" :key='index'>
        <img src="@/assets/mbImg/bstar1.png" alt="">
        <div class='mb-item-doc'>
          <p>{{item.title}}</p>
        </div>
        <div class='mb-item-time'>{{item.time}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import Area from "../components/Area"
export default {
  name:'mb_media',
  components:{
    Area,
  },
  data(){
      return {
        media:this.$language[this.$store.state.language].media
    }
  },
  watch:{
    languagetype() {
      this.media=this.$language[this.languagetype].media
    }
  },
  computed: {
    languagetype: function() {
      return this.$store.state.language;
    }
  },
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