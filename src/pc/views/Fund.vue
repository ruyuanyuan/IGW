<template>
  <div class='fund_template'>
    <div class='gwi-row'>
      <div class='topnav'>
        <img src="@/assets/img/top_nav.png" alt="">
        <div class='topnav-title'>IGW基金会</div>
      </div>
    </div>
    <div class='gwi-row fund-row'>
        <div class='gwi-row-content'>
          <div class='gwi-row-h'>Invincible Game World Foundation</div>
          <div class='fund-row-content'>
            <div class='fund-row-left'>
              IGWF注册于英属群岛直布罗陀，是全球游戏生态联盟体系的发起者。我们致力于聚合全球各地区（大洲、国家或地区）有共同志向的游戏平台、游戏开发者、运营者打造未来游戏联盟经济体，共同创建一个为游戏行业参与者走向全球市场的渠道，通过区块链技术手段及完善的解决方案实现联盟成员的相互信任、流量共享、平等共赢。
            </div>
            <div class='fund-row-right'>
              <img src="@/assets/img/map.png" alt="">
            </div>
          </div>
        </div>
    </div>
    <div class='gwi-row team-row'>
        <div class='gwi-row-content'>
          <div class='gwi-row-h'>团队</div>
          <div class='team-content'>
            <div class='team-group'>
              <div class='team-item'>
                <div class='team-item-img'>
                  <img src="@/assets/img/man1.png" alt="">
                </div>
                <div class='team-item-title'>
                  <div class='team-item-h'>Abel Yang</div>
                  <div class='team-item-p'>创始人</div>
                </div>
                <div class='tem-item-doc'>15年互联⽹行业从业经验，主要从事区块链应用，游戏等领域。从事项⽬运营⼯作12年，熟悉互联⽹业务的产品开发、市场运营等⼯作。 曾任知名公司COO，负责区块链项⽬、⼿机游戏开发、发⾏和运营。</div>
              </div>
              <div class='team-item'>
                <div class='team-item-img'>
                  <img src="@/assets/img/man2.png" alt="">
                </div>
                <div class='team-item-title'>
                  <div class='team-item-h'>Scott Lee</div>
                  <div class='team-item-p'>联合创始⼈</div>
                </div>
                <div class='tem-item-doc'>资本合伙⼈、首席运营官，负责旗下整体游戏业务。具有市场、运营、产品 多维度从业经验。在游戏、AR/VR、智能硬件等多个领域具有丰富的⾏业经验。 致⼒于区块链技术的落地应⽤及未来游戏市场商业模式⾰命。</div>
              </div>
              <div class='team-item'>
                <div class='team-item-img'>
                  <img src="@/assets/img/man3.png" alt="">
                </div>
                <div class='team-item-title'>
                  <div class='team-item-h'>Chuanbei Chioa</div>
                  <div class='team-item-p'>首席开发</div>
                </div>
                <div class='tem-item-doc'>互联⽹和数据网络⾏业资深从业者，擅⻓算法开发、分布式技术。精通Java语言，熟悉区块链原理及相关技术，对BTC、Ethereum等开源区块链算法有深入研究与项⽬实现。 曾被维塔利克邀请共同开发以太坊，受到广⼤以太坊⽤户的好评。</div>
              </div>
            </div>
          </div>
        </div>
    </div>
    <div class='gwi-row adviser-row'>
        <div class='gwi-row-content'>
          <div class='gwi-row-h'>顾问</div>
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
  name:'fund'
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