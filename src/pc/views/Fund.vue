<template>
  <div class='fund_template'>
    <div class='gwi-row'>
      <div class='topnav'>
        <img src="@/assets/img/top_nav.png" alt="">
        <div class='topnav-title'>{{fund.Title}}</div>
      </div>
    </div>
    <div class='gwi-row fund-row'>
        <div class='gwi-row-content'>
          <div class='gwi-row-h'>Invincible Game World Foundation</div>
          <div class='fund-row-content'>
            <div class='fund-row-left'>
             {{fund.fundDoc}}
            </div>
            <div class='fund-row-right'>
              <img src="@/assets/img/map.png" alt="">
            </div>
          </div>
        </div>
    </div>
    <div class='gwi-row team-row'>
        <div class='gwi-row-content'>
          <div class='gwi-row-h'>{{fund.teamTitle}}</div>
          <div class='team-content'>
            <div class='team-group'>
              <div class='team-item'>
                <div class='team-item-img'>
                  <img src="@/assets/img/man1.png" alt="">
                </div>
                <div class='team-item-title'>
                  <div class='team-item-h'>Abel Yang</div>
                  <div class='team-item-p'>{{fund.teamItem1}}</div>
                </div>
                <div class='tem-item-doc'>{{fund.teamItem1Doc}}</div>
              </div>
              <div class='team-item'>
                <div class='team-item-img'>
                  <img src="@/assets/img/man2.png" alt="">
                </div>
                <div class='team-item-title'>
                  <div class='team-item-h'>Scott Lee</div>
                  <div class='team-item-p'>{{fund.teamItem2}}</div>
                </div>
                <div class='tem-item-doc'>{{fund.teamItem2Doc}}</div>
              </div>
              <div class='team-item'>
                <div class='team-item-img'>
                  <img src="@/assets/img/man3.png" alt="">
                </div>
                <div class='team-item-title'>
                  <div class='team-item-h'>Chuanbei Chioa</div>
                  <div class='team-item-p'>{{fund.teamItem3}}</div>
                </div>
                <div class='tem-item-doc'>{{fund.teamItem3Doc}}</div>
              </div>
            </div>
          </div>
        </div>
    </div>
    <div class='gwi-row adviser-row'>
        <div class='gwi-row-content'>
          <div class='gwi-row-h'>{{fund.guwen}}</div>
          <div class='adviser-group'>
              <div class='adviser-item'>
                <div class='adviser-item-img'>
                  <img src="@/assets/img/man_icon2.png" alt="">
                </div>
                <div class='adviser-item-title'>
                  <p>中国</p>
                  <p>李大伟</p>
                </div>
                <div class='adviser-item-doc'>
                  <p>ZB联合创始⼈</p>
                </div>
              </div>
              <div class='adviser-item'>
                <div class='adviser-item-img'>
                  <img src="@/assets/img/man_icon1.png" alt="">
                </div>
                <div class='adviser-item-title'>
                  <p>日本</p>
                  <p>Masaki Uno</p>
                </div>
                <div class='adviser-item-doc'>
                  <p>株式会社</p>
                  <p> Global Systems CEO</p>
                </div>
              </div>
              <div class='adviser-item'>
                <div class='adviser-item-img'>
                  <img src="@/assets/img/man_icon3.png" alt="">
                </div>
                <div class='adviser-item-title'>
                  <p>英国</p>
                  <p>Carl Dalio</p>
                </div>
                <div class='adviser-item-doc'>
                  <p>LCSH CFO</p>
                </div>
              </div>
              <div class='adviser-item'>
                <div class='adviser-item-img'>
                  <img src="@/assets/img/man_icon4.png" alt="">
                </div>
                <div class='adviser-item-title'>
                  <p>英国</p>
                  <p>Konnie Brown</p>
                </div>
                <div class='adviser-item-doc'>
                  <p>奥美英国创意总监</p>
                </div>
              </div>
              <div class='adviser-item'>
                <div class='adviser-item-img'>
                  <img src="@/assets/img/man_icon5.png" alt="">
                </div>
                <div class='adviser-item-title'>
                  <p>美国</p>
                  <p>Elon Simons</p>
                </div>
                <div class='adviser-item-doc'>
                  <p>游戏发⾏与商业专家</p>
                </div>
              </div>
          </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'fund',
  data(){
    return {
      fund:this.$language[this.$store.state.language].fund
    }
  },
  watch:{
    languagetype() {
      this.fund=this.$language[this.languagetype].fund
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
  .fund_template{
    .fund-row{
      background:#fff;
      .fund-row-content{
        margin-top:30px;
        display: flex;
        justify-content: space-between;
        .fund-row-left{
          line-height:30px;
          width:50%;
        }
        .fund-row-right{
          text-align: center;
          img{
            width:80%;
          }
        }
      }
    }
    .team-row{
      background: #EDEFF2;
      .team-content{
        margin-top:30px;
        .team-group{
          display: flex;
          justify-content: space-between;
          .team-item{
            padding:15px;
            width:30%;
            box-sizing: border-box;
            background: #fff;
            &:hover{
              box-shadow:0px 13px 31px 3px rgba(0, 0, 0, 0.2);
            }
            .team-item-img{
              width:100%;
              img{
                width:100%;
              }
            }
            .team-item-title{
              position: relative;
              top:-20px;
              .team-item-h{
                font-size:24px;
                color:#1862E9;
                font-weight: bold;
              }
              .team-item-p{
                font-size: 14px;
                color:#07070D;
                margin-top:5px;
              }
            }
            .tem-item-doc{
              font-size: 12px;
              color:#07070D;
              line-height:24px;
            }
          }
        }
      }
    }
    .adviser-row{
      background:#fff;
      .adviser-group{
        margin-top:40px;
        display: flex;
        .adviser-item{
          width:20%;
          text-align: center;
          transition: all 0.2s linear;
          &:hover{
            transform: scale(1.1);
          }
          .adviser-item-img{
            img{
              width:100px;
            }
          }
          .adviser-item-title{
            margin-top:15px;
            p{
              color:#07070D;
              line-height: 24px;
            }
          }
          .adviser-item-doc{
            margin-top:20px;
            p{
              color:#07070D;
              line-height: 24px;
              font-weight: bold;
            }
          }
        }
      }
    }
  }
</style>