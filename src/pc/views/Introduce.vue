<template>
  <div class='introduce_template'>
    <div class='gwi-row'>
      <div class='topnav'>
        <img src="@/assets/img/top_nav.png" alt="">
        <div class='topnav-title'>{{introduce.Title}}</div>
      </div>
    </div>
    <div class='gwi-row'>
      <div class='gwi-row-content'>
        <div class='introduce-content'>
          <div class='gwi-row-left'>
              <img src="@/assets/img/spread.png" alt=""> 
          </div>
          <div class='gwi-row-right'>
              <div>
                {{introduce.Doc}}
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      introduce:this.$language.zh.introduce
    }
  },
  watch:{
    languagetype() {
      this.introduce=this.$language[this.languagetype].introduce
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
  .introduce_template{
    .introduce-content{
      width:100%;
      display: flex;
      justify-content: space-between;
      .gwi-row-left{
        width:40%;
        img{
          width:100%;
        }
      }
      .gwi-row-right{
        width:50%;
        color:#333333;
        line-height: 30px;
        letter-spacing: 2px;
        display: flex;
        align-items: center;
      }
    }
  }
</style>
