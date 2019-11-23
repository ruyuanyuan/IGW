<template>
  <div class='mb_ecology_template'>
    <Area :text="ecology.Title"/>
    <div class='mb-row'>
      <Underline text="Invincible Game world"></Underline>
      <div class='mb-text'>
        {{ecology.ecologyDoc}}
      </div>
      <div class='mb-img'>
        <img src="@/assets/mbImg/flowPath4.png" alt="">
      </div>
      <div class='mb-item-group'>
        <div class='mb-item-item'>
          <img src="@/assets/mbImg/gw1.png" alt="">
          <p class='mb-item-title'>{{ecology.ecologyIcon1}}</p>
          <p class='mb-item-doc'>{{ecology.ecologyIcon1Doc}}</p>
        </div>
        <div class='mb-item-item'>
          <img src="@/assets/mbImg/gw2.png" alt="">
          <p class='mb-item-title'>{{ecology.ecologyIcon2}}</p>
          <p class='mb-item-doc'>{{ecology.ecologyIcon2Doc}}</p>
        </div>
        <div class='mb-item-item'>
          <img src="@/assets/mbImg/gw3.png" alt="">
          <p class='mb-item-title'>{{ecology.ecologyIcon3}}</p>
          <p class='mb-item-doc'>{{ecology.ecologyIcon3Doc}}</p>
        </div>
        <div class='mb-item-item'>
          <img src="@/assets/mbImg/gw4.png" alt="">
          <p class='mb-item-title'>{{ecology.ecologyIcon4}}</p>
          <p class='mb-item-doc'>{{ecology.ecologyIcon4Doc}}</p>
        </div>
      </div>
    </div>
    <div class='mb-row model-row'>
      <Underline :text="ecology.ecologyDevelopTitle"></Underline>
      <div class='mb-img'>
        <img src="@/assets/mbImg/gw_lian.png" alt="">
      </div>
      <div class='mb-text'>
        {{ecology.ecologyDevelopDoc}}
      </div>
      <div class='mb-item-group'>
        <div class='mb-item-item'>
          <img src="@/assets/mbImg/gw5.png" alt="">
          <p class='mb-item-title'>{{ecology.ecologyNode1}}</p>
          <p class='mb-item-doc'>{{ecology.ecologyNode1Doc}}</p>
        </div>
        <div class='mb-item-item'>
          <img src="@/assets/mbImg/gw6.png" alt="">
          <p class='mb-item-title'>{{ecology.ecologyNode2}}</p>
          <p class='mb-item-doc'>{{ecology.ecologyNode2Doc}}</p>
        </div>
        <div class='mb-item-item'>
          <img src="@/assets/mbImg/gw7.png" alt="">
          <p class='mb-item-title'>{{ecology.ecologyNode3}}</p>
          <p class='mb-item-doc'>{{ecology.ecologyNode3Doc}}</p>
        </div>
      </div>
    </div>
    <div class='mb-row'>
      <Underline :text="ecology.gameDevelopTitle"></Underline>
      <div class='mb-title'>
        {{ecology.gameDevelop}}
      </div>
      <div class='mb-img'>
        <img src="@/assets/mbImg/product1.png" style='width:80%' alt="">
      </div>
      <div class='mb-doc-item'>
        <div class='mb-doc-h'>{{ecology.gameDevelop1}}</div>
        <div class='mb-doc-p'>{{ecology.gameDevelop1Doc}}</div>
      </div>
      <div class='mb-doc-item'>
        <div class='mb-doc-h'>{{ecology.gameDevelop2}}</div>
        <div class='mb-doc-p'>{{ecology.gameDevelop2Doc}}</div>
      </div>
      <div class='mb-doc-item'>
        <div class='mb-doc-h'>{{ecology.gameDevelop3}}</div>
        <div class='mb-doc-p'>{{ecology.gameDevelop3Doc}}</div>
      </div>
    </div>
     <div class='mb-row model-row'>
      <Underline :text="ecology.gamePlayTitle"></Underline>
      <div class='mb-title'>
        {{ecology.gamePlay}}
      </div>
      <div class='mb-img'>
        <img src="@/assets/mbImg/product2.png" style='width:80%' alt="">
      </div>
      <div class='mb-doc-item'>
        <div class='mb-doc-h'>{{ecology.gamePlay1}}</div>
        <div class='mb-doc-p'>{{ecology.gamePlay1Doc}}</div>
      </div>
      <div class='mb-doc-item'>
        <div class='mb-doc-h'>{{ecology.gamePlay2}}</div>
        <div class='mb-doc-p'>{{ecology.gamePlay2Doc}}</div>
      </div>
      <div class='mb-doc-item'>
        <div class='mb-doc-h'>{{ecology.gamePlay3}}</div>
        <div class='mb-doc-p'>{{ecology.gamePlay3Doc}}</div>
      </div>
      <div class='mb-doc-item'>
        <div class='mb-doc-h'>{{ecology.gamePlay4}}</div>
        <div class='mb-doc-p'>{{ecology.gamePlay4Doc}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import Area from "../components/Area"
import Underline from "../components/Underline"
export default {
  name:'mb_ecology',
  components:{
    Area,
    Underline
  },
  data(){
          return {
             ecology:this.$language[this.$store.state.language].ecology
          }
        },
        watch:{
          languagetype() {
            this.ecology=this.$language[this.languagetype].ecology
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
  .mb_ecology_template{
    .mb-row{
      padding: 0 10px 30px;
      box-sizing: border-box;
      .mb-text{
        color:#595959;
        font-size:12px;
        line-height:24px;
      }
      .mb-img{
        width:100%;
        margin-top:20px;
        text-align: center;
        img{
          width:100%;
        }
      }
      &.model-row{
        background:#EDEFF2;
      }
      .mb-item-group{
        width:100%;
        display: flex;
        flex-wrap: wrap;
        .mb-item-item{
          width:50%;
          text-align: center;
          box-sizing: border-box;
          padding:0 10px;
          margin-top:20px;
          img{
            width:80%;
          }
          .mb-item-title{
            color:#07070D;
            font-size: 16px;
            text-align: center;
            margin-top:15px;
            font-weight: bold;
          }
          .mb-item-doc{
            color:#595959;
            font-size: 12px;
            text-align: left;
            margin-top:15px;
            line-height: 24px;
          }
          
        }
      }
      .mb-doc-item{
            margin-top:20px;
            .mb-doc-h{
              color:#000;
              font-weight: bold;
              font-size:14px;
            }
            .mb-doc-p{
              line-height: 24px;
              color:#595959;
              font-size:12px;
              margin-top:20px;
            }
          }
    }
  }
</style>