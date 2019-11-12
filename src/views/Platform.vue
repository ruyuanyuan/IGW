<template>
  <div class='platform_template'>
    <div class='gwi-row'>
      <div class='topnav'>
        <img src="@/assets/img/top_nav.png" alt="">
        <div class='topnav-title'>核心平台</div>
      </div>
    </div>
     <div class='gwi-row tv-row'>
      <div class='gwi-row-content'>
        <div class='tv-content'>
          <div class='tv-left'>
            <div class='tv-title'>即将上线</div>
            <div class='tv-doc'>
              <div class='tv-h'>IGW Basics</div>
              <div class='tv-p'>为游戏而生！</div>
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
         <div class='gwi-row-h'>可扩展的泛社区化游戏平台</div>
        <div class='interflow-group'>
          <div class="interflow-item">
            <div class='interflow-item-img'>
              <img src="@/assets/img/icon1.png" alt="">
            </div>
            <div class='interflow-item-doc'>
              <div class="interflow-item-h">自由社区</div>
              <div class='interflow-item-p'>
                游戏玩家不再受限于中心化游戏平台的监管和控制，拥有绝对的自由发言权，玩家可以发表对游戏的游戏心得、攻略、手绘图、实况视频等各种类型内容。同时，玩家也将成为自己数据的绝对拥有者，可以通过数据授权获得相应激励。
              </div>
            </div>
          </div>
          <div class="interflow-item">
            <div class='interflow-item-img'>
              <img src="@/assets/img/icon2.png" alt="">
            </div>
            <div class='interflow-item-doc'>
              <div class="interflow-item-h">游戏商店</div>
              <div class='interflow-item-p'>
                依托平台搭建的全球游戏价值网，玩家可以在游戏商店获取全球各种类型的最新游戏，通过通证实现跨维度的游戏购买，杜绝虚假流量，打造真实游戏社区，让游戏玩家推荐的精品游戏真实的进入大众视野。
              </div>
            </div>
          </div>
          <div class="interflow-item">
            <div class='interflow-item-img'>
              <img src="@/assets/img/icon4.png" alt="">
            </div>
            <div class='interflow-item-doc'>
              <div class="interflow-item-h">钱包</div>
              <div class='interflow-item-p'>
                IGW Wallet是一个多功能钱包，集成在IGW Basics平台中。它可以存储不同类型的加密货币以及IGC-WHAS-1221协议的游戏资产。就像其他加密钱包一样，用户可以轻松的发送和接收加密数字货币和游戏资产。
              </div>
            </div>
          </div>
          <div class="interflow-item">
            <div class='interflow-item-img'>
              <img src="@/assets/img/icon13.png" alt="">
            </div>
            <div class='interflow-item-doc'>
              <div class="interflow-item-h">兴趣社交</div>
              <div class='interflow-item-p'>
                玩家可以在IGW的游戏世界中找寻志同道合的朋友或组织，宣泄自己对游戏的真实情感，交流游戏心得，组织游戏活动，共同建设更加健全、健康、纯净的游戏世界。
              </div>
            </div>
          </div>
          <div class="interflow-item">
            <div class='interflow-item-img'>
              <img src="@/assets/img/icon3.png" alt="">
            </div>
            <div class='interflow-item-doc'>
              <div class="interflow-item-h">社群激励</div>
              <div class='interflow-item-p'>
                生态参与者可以通过社区共建行为获取相应价值，玩家可以在核心平台通过贡献有价值的内容获取价值。同时，还可以通过通证兑换游戏内容和流通游戏资产，游戏开发者通过平台获取创作收益及更多的流量、社群力量及生态支持
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class='gwi-row iphone-row'>
      <div class='gwi-row-content'>
        <div class='gwi-row-h'>跨终端支持</div>
        <div class='iphone-row-group'>
            <div class='iphone-row-item'>
              <div class='iphone-row-item-img'>
                <img src="@/assets/img/pc.png" alt="">
              </div>
              <div class='iphone-row-item-doc'>
                pc
              </div>
              <div class='iphone-row-item-btn'>
                即将到来
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
                即将到来
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
                即将到来
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'platform',
  data(){
    return {
      
    }
  }
}
</script>
<style lang="scss">
  .platform_template{
    .tv-row{
      background:#fff;
      .gwi-row-content{
        padding:0;
      }
      .tv-content{
        display: flex;
        justify-content: space-between;
        .tv-left{
          padding-top:88px;
          box-sizing: border-box;
          .tv-title{
            font-size: 24px;
            color:#000;
          }
          .tv-doc{
            margin-top:45px;
            .tv-h{
              font-size: 36px;
              color:#000;
              font-weight: bold;
            }
            .tv-p{
              font-size: 24px;
              color:#000;
            }
          }
        }
        .tv-right{
          height:350px;
          img{
            height:350px;
            position: relative;
            top:30px;
          }
        }
      }
    }
    .interflow-row{
      background:#EDF1F7;
      .interflow-group{
        width:800px;
        margin:0 auto;
        .interflow-item{
          width:100%;
          margin-top:40px;
          display: flex;
          padding:40px;
          box-sizing: border-box;
          background:#fff;
          justify-content: space-between;
          box-shadow:0px 3px 12px 0px rgba(163,164,166,0.2);
          .interflow-item-img{
            width:90px;
            margin:0 45px;
            display: flex;
            align-items: center;
            img{
              width:100%;
              display: block;
            }
          }
          .interflow-item-doc{
            width:500px;
            .interflow-item-h{
              color:#000;
              font-weight: bold;
              font-size:24px;
            }
            .interflow-item-p{
              margin-top:10px;
              color:#595959;
              line-height: 30px;
            }
          }
        }
      }
    }
    .iphone-row{
      .iphone-row-group{
        display: flex;
        .iphone-row-item{
          width:33.33%;
          text-align: center;
          .iphone-row-item-img{
            width:100%;
            img{
              width:100px;
            }
          }
          .iphone-row-item-doc{
            color:#000;
            margin-top:20px;
          }
          .iphone-row-item-btn{
            display: inline-block;
            text-align: center;
            width:95px;
            height:30px;
            line-height: 30px;
            border:1px solid rgba(3,0,0,1);
            border-radius:15px;
            margin-top:40px;
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