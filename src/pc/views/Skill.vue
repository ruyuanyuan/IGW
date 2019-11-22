<template>
  <div class='skill_template'>
    <div class='gwi-row'>
      <div class='topnav'>
        <img src="@/assets/img/top_nav.png" alt="">
        <div class='topnav-title'>{{skill.Title}}</div>
      </div>
    </div>
    <div class='gwi-row framework-row'>
      <div class='gwi-row-content'>
        <div class='gwi-row-h'>{{skill.frameworkTitle}}</div>
        <div class='framework-img'>
          <img src="@/assets/img/flowPath1.png" alt="">
        </div>
        <div class='framework-doc'>
          {{skill.frameworkDoc}}
        </div>
        
      </div>
    </div>
    <div class='gwi-row spot-row'>
      <div class='gwi-row-content'>
        <div class='gwi-row-h'>{{skill.spotTitle}}</div>
        <div class='chart_doc_item'>
            <div class='chart_doc_title'><span class='blue_block'></span> {{skill.spotItem1}}</div>
            <div class='chart_doc_p'>{{skill.spotItem1Doc}}。</div>
          </div>
        <div class='chart_doc_item'>
          <div class='chart_doc_title'><span class='blue_block'></span> {{skill.spotItem2}}</div>
          <div class='chart_doc_p'>{{skill.spotItem2Doc}}</div>
        </div>
        <div class='chart_doc_item'>
          <div class='chart_doc_title'><span class='blue_block'></span> {{skill.spotItem3}}</div>
          <div class='chart_doc_p'>{{skill.spotItem3Doc}}</div>
        </div>
      </div>
    </div>
 
  </div>
  
</template>
<script>
export default {
  name:'skill',
  data(){
    return {
      skill:this.$language.zh.skill
    }
  },
  watch:{
    languagetype() {
      this.skill=this.$language[this.languagetype].skill
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
  .skill_template{
    width:100%;
    .spot-row{
      background:#EDEFF2;
      .chart_doc_item{
        margin-top:30px;
        .chart_doc_title{
          font-size:15px;
          color:#000;
          .blue_block{
            width:15px;
            height: 15px;
            display: inline-block;
            margin-right:15px;
            background: #1862E9;
            letter-spacing: 2px;
             position: relative;
             top:3px;
          }
        }
        .chart_doc_p{
          font-size:14px;
          color:#595959;
          margin-top:15px;
          line-height: 30px;
        }
      }
    }
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
  }
</style>