<template>
    <div class="MacroAnalysis">
      <Area text="区块链行业宏观分析"/>
      <div class="market">
        <Underline text="市场分析"></Underline>
        <div class="graph">
          <img src="@/assets/mobileImage/analysis_03.png" alt="">
        </div>
        <div class="four">
          <div class="every">
            <div class="left">
              <img src="@/assets/mobileImage/money_03.png" alt="">
            </div>
            <div class="right">
              <div>
                (SMART)PHONE GAMES &nbsp;&nbsp; +11.6% YoY
              </div>
              <div class="money c-1">$54.8Bn</div>
            </div>
          </div>
          <div class="every">
            <div class="left">
              <img src="@/assets/mobileImage/money_05.png" alt="">
            </div>
            <div class="right">
              <div>
                TABLET GAMES +5.0% YoY
              </div>
              <div class="money c-2">$13.6Bn</div>
            </div>
          </div>
          <div class="every">
            <div class="left">
              <img src="@/assets/mobileImage/money_09.png" alt="">
            </div>
            <div class="right">
              <div>
                BOXED/DOWNLOADED
                PC GAMES
                +5.0% YoY
              </div>
              <div class="money c-3">$32.2Bn</div>
            </div>
          </div>
          <div class="every">
            <div class="left">
              <img src="@/assets/mobileImage/money_11.png" alt="">
            </div>
            <div class="right">
              <div>
                BROWSER PC GAMES
                -15.1% YoY
              </div>
              <div class="money c-4">$3.5Bn</div>
            </div>
          </div>
        </div>
        <div class="word">
          <div class="name">
            <div class="blue-square"></div>
            游戏发展简史
          </div>
          <div class="desc">
            自20世纪90年代以来，随着互联网的迅速发展，全球游戏市场日益发展壮大，渐趋成熟，现已形成移动端游戏、PC端游戏、家庭游戏机游戏等多个细分市场。
          </div>
        </div>
        <div class="word">
          <div class="name">
            <div class="blue-square"></div>
            游戏市场前景
          </div>
          <div class="desc">
            据《2019 GLOBAL GAMES MARKET》数据显示，预计到2019年末，全球游戏市场总规模可达1521亿美金，年同比增长9.6%，预计2022年末，全球游戏市场规模可达1960亿美金,全球游戏市场前景非常广阔。
          </div>
        </div>
      </div>
      <div class="blockchain">
        <Underline text="痛点分析" color="#fff"></Underline>
        <p class="text1">
          传统游戏市场日趋成熟的同时
        </p>
        <p class="text2">
          也出现了诸多问题
        </p>
        <div class="four">
          <img src="@/assets/mobileImage/blockchain_05.jpg" alt="">
          <img src="@/assets/mobileImage/blockchain_07.jpg" alt="">
          <img src="@/assets/mobileImage/blockchain_14.jpg" alt="">
          <img src="@/assets/mobileImage/blockchain_17.png" alt="">
        </div>
      </div>
      <!--链游现状-->
      <div class="status">
        <Underline text="链游现状"></Underline>
        <div>
          2017年11月，第一款区块链游戏加密猫（Cryptokitties）诞生，仅上线几个小时就占据了以太坊15%的网络，贡献了ETH30%的交易量，一度导致以太坊网络拥堵，受欢迎程度可见一斑。自此以后，国内外区块链游戏迅速爆发，链游市场初步形成，链游市场主要有三大类项目：
        </div>
        <div>
          <div>
            <span>A</span>
            区块链游戏：如养成类、经营类、收藏类、博彩类、旁氏类、卡牌类；
          </div>
          <div>
            <span>B</span>
            链游基础链：如游戏公链、字母链、联盟链；
          </div>
          <div>
            <span>C</span>
            链游服务商：如链游虚拟资产交易平台、链游服化平台。
          </div>
        </div>
        <div>
          但从游戏的本质角度来看，以上所谓的区块链游戏不能算是真正意义的游戏，只是蹭了区块链概念的伪链游，大都无法运营与链端，仅实现了游戏内虚拟资产交易，依然无法进行跨平台交易，没有给开发者提供配套开发工具，并未降低运营、开发成本，也没有把区块链的特性赋能实际应用，真正的商用价值极低。
        </div>
      </div>
      <!--白皮书-->
      <div class="whitePaper">
        <Underline text="白皮书"></Underline>
        <div class="btn">
          <div>
            <p>在线阅读</p>
            <p>中文版</p>
          </div>
          <div>
            <p>
              read online
            </p>
            <p>
              English
            </p>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    import Area from "../components/Area"
    import Underline from "../components/Underline"
    export default {
        name: "MacroAnalysis",
        created() {

        },
        mounted() {

        },
        components: {
          Area,
          Underline
        },
        methods: {}
    }
</script>

<style scoped lang="scss">
    .MacroAnalysis {
      .market{
        background: #EDEFF2;
        padding: 0 0.187rem;
        padding-bottom: 0.533rem;
      }
      .graph{
        width: 9.64rem;
        height: 8.72rem;
        margin-bottom: 0.533rem;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .four{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .c-1{
          color:#482D9B;
        }
        .c-2{
          color: #364AC7;
        }
        .c-3{
          color: #4299D9;
        }
        .c-4{
          color: #D5799A;
        }
        .every{
          width:4.373rem;
          height:1.693rem;
          background:rgba(255,255,255,1);
          margin-bottom: 0.533rem;
          padding: 0 0.16rem;
          display: flex;
          .left{
            img{
              width: 1.093rem;
              height: 1.093rem;
              margin-top: -0.2rem;
            }
          }
          .right{
            font-size: 0.24rem;
            color: #595959;
            margin-left: 0.187rem;
            padding-top: 0.16rem;
            .money{
              margin-top: 0.267rem;
              font-size:0.507rem;
              font-family:Source Han Sans CN;
              font-weight:800;
            }
          }
        }
      }
      .word{
        margin-bottom: 20px;
        padding: 0 10px;
        &:last-child{
          margin-bottom: 0!important;
        }
        .name{
          display: flex;
          font-size: 14px;
          align-items: center;
          color: #000;
          margin-bottom: 10px;
          .blue-square{
            width:10px;
            height:10px;
            background:rgba(24,98,233,1);
            margin-right: 10px;
          }
        }
        .desc{
          font-size: 12px;
          color: #595959;
          line-height: 1.8;
        }
      }
      .blockchain{
        display: block;
        background: #1B1349;
        padding: 0 0.187rem;
        padding-bottom: 0.8rem;
        .four{
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          img{
            width: 4.56rem;
            height: 4.987rem;
            margin-top: 0.56rem;
          }
        }
        .text1{
          color: #fff;
          font-size: 16px;
        }
        .text2{
          color: #fff;
          font-size: 16px;
          font-weight: bold;
        }
      }
      .status{
        padding: 0 10px;
        color: #595959;
        font-size: 12px;
        > div{
          margin-bottom: 20px;
          line-height: 24px;
        }
        span{
          width:15px;
          height:15px;
          background:rgba(24,98,233,1);
          color: #fff;
          display: inline-block;
          text-align: center;
          line-height: 14px;
          margin-right: 10px;
        }
      }
      .whitePaper{
        border-top: 0.013rem solid #EBEBEB;
        .btn{
          padding: 0 0.88rem;
          display: flex;
          justify-content: space-between;
          margin-bottom: 0.987rem;
          padding-top: 0.267rem;
          >div{
            width:3.493rem;
            height:1.36rem;
            background:rgba(24,98,233,1);
            border-radius:0.667rem;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            color: #fff;
            p:nth-child(1){
              font-size: 0.48rem;
            }
            p:nth-child(2){
              font-size: 0.267rem;
            }
          }
        }
      }
    }
</style>
