<template>
  <div class='business_template'>
    <div class='gwi-row'>
      <div class='topnav'>
        <img src="@/assets/img/top_nav.png" alt="">
        <div class='topnav-title'>{{business.Title}}</div>
      </div>
    </div>
    <div class='gwi-row framework-row business_row'>
      <div class='gwi-row-content'>
        <div class='gwi-row-h'>{{business.businessTitle}}</div>
        
        <div class='framework-doc'>
           {{business.businessDoc}} 
        </div>
        <div class='framework-img'>
          <img src="@/assets/img/flowPath2.png" alt="">
        </div>
      </div>
    </div>
    <div class='gwi-row framework-row ecology-row'>
      <div class='gwi-row-content'>
        <div class='gwi-row-h'>{{business.modelTitle}}</div>
        
        <div class='framework-doc'>
         {{business.modelDoc}} 
        </div>
        <div class='framework-img'>
          <img src="@/assets/img/flowPath3.png" alt="">
        </div>
      </div>
    </div>
    <div class='gwi-row framework-row map-row'>
      <div class='gwi-row-content'>
        <div class='gwi-row-h font-while'>{{business.ecologyTitle}}</div>
        
        <div class='framework-doc'>
           {{business.ecologyDoc}} 
        </div>
        <div class='framework-img'>
          <img src="@/assets/img/bgmap.png" alt="">
        </div>
      </div>
    </div>
  </div>
  
</template>
<script>
export default {
  name:'business',
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
    width:100%;
    .framework-row{
      .framework-img{
        width:100%;
        margin-top:20px;
        img{
          width:100%;
        }
      }
      .framework-doc{
        margin-top:20px;
        color:#333;
        line-height: 30px;
      }
    }
    
    .ecology-row{
      background:#EDEFF2;
    }
    .business_row{
      background:#fff;
    }
    .map-row{
      background:#1B1349;
      .framework-doc{
        color:#fff;
      }
    }
  }
</style>