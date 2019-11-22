<template>
  <div class='cooperate_template'>
    <div class='gwi-row'>
      <div class='topnav'>
        <img src="@/assets/img/top_nav.png" alt="">
        <div class='topnav-title'>{{cooperate.Title}}</div>
      </div>
    </div>
    <div class='gwi-row'>
      <div class='gwi-row-content'>
        <div class='gw-cooperate-group'>
          <div class='gw-cooperate-item'>
            <img src="@/assets/img/school1.png" alt="">
            <div class='item-content'>
              <p>{{cooperate.cooperateh1}}</p>
              <p>{{cooperate.cooperateh2}}</p>
              <p>{{cooperate.cooperateh3}}</p>
            </div>
          </div>
          <div class='gw-cooperate-item-line'></div>
          <div class='gw-cooperate-item'>
            <img src="@/assets/img/school2.png" alt="">
            <div class='item-content only-one'>
              <p>{{cooperate.cooperateh4}} Global Systems</p>
            </div>
          </div>
          <div class='gw-cooperate-item-line'></div>
          <div class='gw-cooperate-item'>
            <img src="@/assets/img/school3.png" alt="">
            <div class='item-content  only-one'>
              <p>{{cooperate.cooperateh4}}ROSE ONLINE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'cooperate',
  data(){
    return {
      cooperate:this.$language.zh.cooperate
    }
  },
  watch:{
    languagetype() {
      this.cooperate=this.$language[this.languagetype].cooperate
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
  .cooperate_template{
    .gw-cooperate-group{
      width:100%;
      display: flex;
      align-items: center;
      padding:80px 0;
      .gw-cooperate-item{
        width: 33%;
        text-align: center;
        img{
          width:160px;
        }
        .item-content{
          margin-top:10px;
          height:90px;
          &.only-one{
            p{
               line-height: 90px;
            }
          }
          p{
            color:#555555;
            line-height: 30px;
          }
        }
      }
      .gw-cooperate-item-line{
        width:2px;
        height:100px;
        background:#BFBFBF;
      }
    }
  }
</style>