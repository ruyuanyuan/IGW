<template>
  <div class='mb_platform_template'>
    <Area :text="platform.Title"/>
    <div class='gwi-row tv-row'>
      <div class='gwi-row-content'>
        <div class='tv-content'>
          <div class='tv-left'>
            <div class='tv-title'>{{platform.goOnline}}</div>
            <div class='tv-doc'>
              <div class='tv-h'>IGW Basics</div>
              <div class='tv-p'>{{platform.gameCreate}}</div>
            </div>
          </div>
          <div class='tv-right'>
            <img src="@/assets/img/icon_tv.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class='gwi-row interflow-row'>
      <div class='gwi-row-content'>
        <Underline :text="platform.platformTitle"></Underline>
        <div class='interflow-group'>
          <div class="interflow-item">
            <div class='interflow-item-img'>
              <img src="@/assets/img/icon1.png" alt="">
            </div>
            <div class='interflow-item-doc'>
              <div class="interflow-item-h">{{platform.platform1Title}}</div>
              <div class='interflow-item-p'>
                {{platform.platform1Doc}}
              </div>
            </div>
          </div>
          <div class="interflow-item">
            <div class='interflow-item-img'>
              <img src="@/assets/img/icon2.png" alt="">
            </div>
            <div class='interflow-item-doc'>
              <div class="interflow-item-h">{{platform.platform2Title}}</div>
              <div class='interflow-item-p'>
                {{platform.platform2Doc}}
              </div>
            </div>
          </div>
          <div class="interflow-item">
            <div class='interflow-item-img'>
              <img src="@/assets/img/icon4.png" alt="">
            </div>
            <div class='interflow-item-doc'>
              <div class="interflow-item-h">{{platform.platform3Title}}</div>
              <div class='interflow-item-p'>
                {{platform.platform3Doc}}
              </div>
            </div>
          </div>
          <div class="interflow-item">
            <div class='interflow-item-img'>
              <img src="@/assets/img/icon13.png" alt="">
            </div>
            <div class='interflow-item-doc'>
              <div class="interflow-item-h">{{platform.platform4Title}}</div>
              <div class='interflow-item-p'>
                {{platform.platform4Doc}}
              </div>
            </div>
          </div>
          <div class="interflow-item">
            <div class='interflow-item-img'>
              <img src="@/assets/img/icon3.png" alt="">
            </div>
            <div class='interflow-item-doc'>
              <div class="interflow-item-h">{{platform.platform5Title}}</div>
              <div class='interflow-item-p'>
                {{platform.platform5Doc}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class='gwi-row iphone-row'>
      <div class='gwi-row-content'>
        <Underline :text="platform.phonePad"></Underline>
        <div class='iphone-row-group'>
            <div class='iphone-row-item'>
              <div class='iphone-row-item-img'>
                <img src="@/assets/img/pc.png" alt="">
              </div>
              <div class='iphone-row-item-doc'>
                pc
              </div>
              <div class='iphone-row-item-btn'>
                {{platform.comeGo}}
              </div>
            </div>
            <div class='iphone-row-item'>
              <div class='iphone-row-item-img'>
                <img src="@/assets/img/pc2.png" alt="">
              </div>
              <div class='iphone-row-item-doc'>
                IOS
              </div>
              <div class='iphone-row-item-btn'>
                {{platform.comeGo}}
              </div>
            </div>
            <div class='iphone-row-item'>
              <div class='iphone-row-item-img'>
                <img src="@/assets/img/pc3.png" alt="">
              </div>
              <div class='iphone-row-item-doc'>
                Android
              </div>
              <div class='iphone-row-item-btn'>
                {{platform.comeGo}}
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Area from "../components/Area"
import Underline from "../components/Underline"
export default {
  name:'mb_platform',
  data(){
    return {
        platform:this.$language[this.$store.state.language].platform
    }
  },
  watch:{
    languagetype() {
      this.platform=this.$language[this.languagetype].platform
    }
  },
  computed: {
    languagetype: function() {
      return this.$store.state.language;
    }
  },
  components:{
    Area,
    Underline
  }
}
</script>
<style lang="scss">
  .mb_platform_template{
    width:100%;
    .gwi-row{
      width:100%;
      padding:0 10px;
      box-sizing: border-box;
      .gwi-row-content{
        width:100%;
        padding:15px 0;
      }
    }
    .tv-row{
      background:#fff;
      width:100%;
      .gwi-row-content{
        padding:0 10px;
        box-sizing: border-box;
      }
      .tv-content{
        display: flex;
        justify-content: space-between;
        .tv-left{
          padding-top:30px;
          box-sizing: border-box;
          .tv-title{
            font-size: 18px;
            color:#000;
          }
          .tv-doc{
            margin-top:20px;
            .tv-h{
              font-size: 24px;
              color:#000;
              font-weight: bold;
            }
            .tv-p{
              font-size: 16px;
              color:#000;
            }
          }
        }
        .tv-right{
          height:180px;
          img{
            height:180px;
            position: relative;
            top:20px;
          }
        }
      }
    }
    .interflow-row{
      background:#EDF1F7;
      .interflow-group{
        margin:0 auto;
        .interflow-item{
          width:100%;
          margin-top:20px;
          display: flex;
          padding:10px;
          box-sizing: border-box;
          background:#fff;
          justify-content: space-between;
          box-shadow:0px 3px 12px 0px rgba(163,164,166,0.2);
          .interflow-item-img{
            margin:0 10px;
            display: flex;
            align-items: center;
            img{
              width:60px;
              display: block;
            }
          }
          .interflow-item-doc{
            .interflow-item-h{
              color:#000;
              font-weight: bold;
              font-size:16px;
            }
            .interflow-item-p{
              margin-top:10px;
              color:#595959;
              line-height: 24px;
              font-size:12px;
            }
          }
        }
      }
    }
    .iphone-row{
      padding-bottom:20px;
      .iphone-row-group{
        display: flex;
        .iphone-row-item{
          width:33.33%;
          text-align: center;
          .iphone-row-item-img{
            width:100%;
            img{
              width:80px;
            }
          }
          .iphone-row-item-doc{
            color:#000;
            margin-top:20px;
            font-size:12px;
          }
          .iphone-row-item-btn{
            display: inline-block;
            text-align: center;
            width:95px;
            height:30px;
            line-height: 30px;
            border:1px solid rgba(3,0,0,1);
            border-radius:15px;
            margin-top:20px;
            font-size:12px;
            cursor: pointer;
            &:hover{
              background:#1862E9;
              color:#fff;
              border:1px solid #1862E9;

            }
          }
        }
      }
    }
    
  }
</style>