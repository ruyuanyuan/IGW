<template>
  <div class="ecology_template">
    <div class="gwi-row">
      <div class="topnav">
        <img src="@/assets/img/top_nav.png" alt="" />
        <div class="topnav-title">{{ecology.Title}}</div>
      </div>
    </div>
    <div class="gwi-row invincible-row">
      <div class="gwi-row-content">
        <div class="gwi-row-h">Invincible Game world</div>
        <div class="invincible-content">
          <div class="invincible-doc">
            {{ecology.ecologyDoc}}
          </div>
          <div class="invincible-img">
            <img src="@/assets/img/flowPath4.png" alt="" />
          </div>
          <div class="gwi-gw-group">
            <div class="gwi-gw-item">
              <img src="@/assets/img/gw1.png" alt="" />
              <span>{{ecology.ecologyIcon1}}</span>
              <div class='item-doc'>
                {{ecology.ecologyIcon1Doc}}
              </div>
            </div>
            <div class="gwi-gw-item">
              <img src="@/assets/img/gw2.png" alt="" />
              <span>{{ecology.ecologyIcon2}}</span>
              <div class='item-doc'>
                {{ecology.ecologyIcon2Doc}}
              </div>
            </div>
            <div class="gwi-gw-item">
              <img src="@/assets/img/gw3.png" alt="" />
              <span>{{ecology.ecologyIcon3}}</span>
              <div class='item-doc'>
                {{ecology.ecologyIcon3Doc}}
              </div>
            </div>
            <div class="gwi-gw-item">
              <img src="@/assets/img/gw4.png" alt="" />
              <span>{{ecology.ecologyIcon4}}</span>
              <div class='item-doc'>
                {{ecology.ecologyIcon4Doc}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="gwi-row grow-row">
      <div class="gwi-row-content">
        <div class="gwi-row-h">{{ecology.ecologyDevelopTitle}}</div>
        <div class="grow-content">
          <div class="grow-img">
            <img src="@/assets/img/gw_lian.png" alt="" />
          </div>
          <div class="grow-doc">
            {{ecology.ecologyDevelopDoc}}
          </div>
          <div class="gwi-gw-group">
            <div class="gwi-gw-item">
              <img src="@/assets/img/gw5.png" alt="" />
              <span>{{ecology.ecologyNode1}}</span>
              <div class='item-doc'>
               {{ecology.ecologyNode1Doc}}
              </div>
            </div>
            <div class="gwi-gw-item">
              <img src="@/assets/img/gw6.png" alt="" />
              <span>{{ecology.ecologyNode2}}</span>
              <div class='item-doc'>
                {{ecology.ecologyNode2Doc}}
              </div>
            </div>
            <div class="gwi-gw-item">
              <img src="@/assets/img/gw7.png" alt="" />
              <span>{{ecology.ecologyNode3}}</span>
              <div class='item-doc'>
                {{ecology.ecologyNode3Doc}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="gwi-row game-row">
      <div class="gwi-row-content">
        <div class="gwi-row-h">{{ecology.gameDevelopTitle}}</div>
        <div class='game-content'>
          <div class='game-left'>
            <div class='game-item'>
              <div class='game-item-title'>{{ecology.gameDevelop1}}</div>
              <div class='game-item-doc'>
              {{ecology.gameDevelop1Doc}}
              </div>
            </div>
            <div class='game-item'>
              <div class='game-item-title'>{{ecology.gameDevelop2}}</div>
              <div class='game-item-doc'>
                {{ecology.gameDevelop2Doc}}
              </div>
            </div>
            <div class='game-item'>
              <div class='game-item-title'>{{ecology.gameDevelop3}}</div>
              <div class='game-item-doc'>
               {{ecology.gameDevelop3Doc}}
              </div>
            </div>
          </div>
          <div class='game-right'>
            <div class='game-title'>{{ecology.gameDevelop}}</div>
            <div class='game-img'>
              <img src="@/assets/img/product1.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="gwi-row game-row" style="background:#EDEFF2">
      <div class="gwi-row-content">
        <div class="gwi-row-h">{{ecology.gamePlayTitle}}</div>
        <div class='game-content'>
          <div class='game-left'>
            <div class='game-title'>{{ecology.gamePlay}}</div>
            <div class='game-img'>
              <img src="@/assets/img/product2.png" alt="">
            </div>
          </div>
          <div class='game-right'>
            <div class='game-item'>
              <div class='game-item-title'>{{ecology.gamePlay1}}</div>
              <div class='game-item-doc'>
                {{ecology.gamePlay1Doc}}
              </div>
            </div>
            <div class='game-item'>
              <div class='game-item-title'>{{ecology.gamePlay2}}</div>
              <div class='game-item-doc'>
                {{ecology.gamePlay2Doc}}
              </div>
            </div>
            <div class='game-item'>
              <div class='game-item-title'>{{ecology.gamePlay3}}</div>
              <div class='game-item-doc'>
                {{ecology.gamePlay3Doc}}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "ecology",
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
};
</script>
<style lang="scss">
.ecology_template {
  .invincible-row {
    .invincible-content{
      margin-top:30px;
      .invincible-doc{
        text-align: center;
        color:#484848;
        line-height: 30px;
      }
      .invincible-img{
        width:100%;
        text-align: center;
        margin-top:20px;
        img{
          width:80%;
        }
      }
      .gwi-gw-group{
        display: flex;
        justify-content: space-between;
        .gwi-gw-item{
          width:20%;
          text-align: center;
          margin-right:20px;
          padding:10px;
          &:hover{
            box-shadow:0px 13px 31px 3px rgba(0, 0, 0, 0.2);
          }
          &:last-child{
            margin-right:0;
          }
          img{
            width:100px;
          }
          span{
            display: block;
            margin-top:30px;
            font-size:14px;
            color:#07070D;
            font-weight: bold;
          }
          .item-doc{
            color:#484848;
            line-height: 30px;
            margin-top:20px;
          }
        }
      }
    }
  }
  .grow-row {
    background:#EDEFF2;
    .grow-content{
      margin-top:30px;
      .grow-doc{
        text-align: center;
        color:#484848;
        line-height: 30px;
      }
      .grow-img{
        width:100%;
        text-align: center;
        margin-top:20px;
        img{
          width:80%;
        }
      }
      .gwi-gw-group{
        display: flex;
        justify-content: space-between;
        margin-top:30px;
        .gwi-gw-item{
          width:25%;
          text-align: center;
          margin-right:20px;
          padding:10px;
          &:last-child{
            margin-right:0;
          }
          &:hover{
            box-shadow:0px 13px 31px 3px rgba(0, 0, 0, 0.2);
          }
          img{
            width:100px;
          }
          span{
            display: block;
            margin-top:30px;
            font-size:14px;
            color:#07070D;
            font-weight: bold;
          }
          .item-doc{
            color:#484848;
            line-height: 30px;
            margin-top:20px;
          }
        }
      }
    }
  }
  .game-row{
    .game-content{
      display: flex;
      justify-content: space-between;
      margin-top:30px;
      .game-left{
        width:50%;
        box-sizing: border-box;
        padding-right:20px;
        .game-img{
          display: flex;
          justify-content: flex-end;
        }
      }
      .game-right{
        width:50%;
        padding-left:20px;
        box-sizing: border-box;
        .game-img{
          display: flex;
          justify-content: flex-start;
        }
      }
      .game-item{
        width:100%;
        margin-bottom: 30px;
        .game-item-title{
          font-size: 14px;
          color:#000;
          font-weight: bold;
        }
        .game-item-doc{
          font-size:14px;
          color:#484848;
          margin-top:10px;
          line-height:30px;
        }
      }
      .game-title{
        font-size:24px;
        color:#000;
        text-align: center;
        font-weight: bold;
      }
      .game-img{
        width:100%;
        height:100%;
        text-align: center;
        display: flex;
        align-items: center;
        img{
          width:70%;
        }
      }
    }
  }
}
</style>
