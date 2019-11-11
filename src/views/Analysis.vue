<template>
  <div class='analysis_template'>
    <div class='gwi-row'>
      <div class='topnav'>
        <img src="@/assets/img/top_nav.png" alt="">
        <div class='topnav-title'>宏观分析</div>
      </div>
    </div>
    <div class='gwi-row chart-row'>
      <div class='gwi-row-content'>
        <div class='gwi-row-h'>市场分析</div>
        <div class='chart_box'>
          <img src="@/assets/img/ay.png" alt="">
        </div>
        <div class='ay_groups'>
          <div class='ay_item'>
            <img src="@/assets/img/ay1.png" alt="">
          </div>
          <div class='ay_item'>
            <img src="@/assets/img/ay2.png" alt="">
          </div>
          <div class='ay_item'>
            <img src="@/assets/img/ay3.png" alt="">
          </div>
          <div class='ay_item'>
            <img src="@/assets/img/ay4.png" alt="">
          </div>
        </div>
        <div class='chart_doc_item'>
            <div class='chart_doc_title'><span class='blue_block'></span> 游戏发展简史</div>
            <div class='chart_doc_p'>自20世纪90年代以来，随着互联网的迅速发展，全球游戏市场日益发展壮大，渐趋成熟，现已形成移动端游戏、PC端游戏、家庭游戏机游戏等多个细分市场</div>
          </div>
        <div class='chart_doc_item'>
          <div class='chart_doc_title'><span class='blue_block'></span> 游戏市场前景</div>
          <div class='chart_doc_p'>据《2019 GLOBAL GAMES MARKET》数据显示，预计到2019年末，全球游戏市场总规模可达1521亿美金，年同比增长9.6%，预计2022年末，全球游戏市场规模可达1960亿美金。全球游戏市场前景非常广阔。</div>
        </div>
      </div>
    </div>
    <div class='gwi-row analysis-row'>
        <div class='gwi-row-content'>
          <div class='gwi-row-h font-while'>痛点分析</div>
          <div class='analysis-title'>
            <div class='analysis-p'>传统游戏市场日趋成熟的同时</div>
            <div class='analysis-p analysis-p-blod'>也出现了诸多问题</div>
          </div>
          <div class='gwi-book-group'>
            <div class='gwi-book-item'>
              <img src="@/assets/img/book1.png" alt="">
            </div>
            <div class='gwi-book-item'>
              <img src="@/assets/img/book2.png" alt="">
            </div>
            <div class='gwi-book-item'>
              <img src="@/assets/img/book3.png" alt="">
            </div>
            <div class='gwi-book-item'>
              <img src="@/assets/img/book4.png" alt="">
            </div>
          </div>
        </div>
    </div>
    <div class='gwi-row status-row'>
        <div class='gwi-row-content'>
          <div class='gwi-row-h'>链游现状</div>
          <div class='status_doc'>
            2017年11月，第一款区块链游戏加密猫（Cryptokitties）诞生，仅上线几个小时就占据了以太坊15%的网络，贡献了ETH30%的交易量，一度导致以太坊网络拥堵，受欢迎程度可见一斑。自此以后，国内外区块链游戏迅速爆发，链游市场初步形成，链游市场主要有三大类项目：
          </div>
          <div class='status_doc'>
            <p class='status_p'><span>A</span> 区块链游戏：如养成类、经营类、收藏类、博彩类、旁氏类、卡牌类；</p>
            <p class='status_p'><span>B</span> 链游基础链：如游戏公链、字母链、联盟链；</p>
            <p class='status_p'><span>C</span> 链游服务商：如链游虚拟资产交易平台、链游服化平台。</p>
          </div>
          <div class='status_doc'>
            但从游戏的本质角度来看，以上所谓的区块链游戏不能算是真正意义的游戏，只是蹭了区块链概念的伪链游，大都无法运营与链端，仅实现了游戏内虚拟资产交易，依然无法进行跨平台交易，没有给开发者提供配套开发工具，并未降低运营、开发成本，也没有把区块链的特性赋能实际应用，真正的商用价值极低。
          </div>
        </div>
    </div>
    <div class='gwi-row book-row'>
        <div class='gwi-row-content'>
            <div class='gwi-row-h'>白皮书</div>
            <div class='book_content'>
              <div class='book_item'>
                <div class='book_title'>在线阅读</div>
                <div class='book_p'>中文版</div>
              </div>
              <div class='book_item' style='margin-left:200px'>
                <div class='book_title'>read online</div>
                <div class='book_p'>English</div>
              </div>
            </div>
        </div>
    </div>
  </div>
  
</template>
<script>
export default {
  name:'analysis'
}
</script>
<style lang="scss">
  .analysis_template{
    width:100%;
    .chart-row{
      background:#EDEFF2;
      .chart_box{
        width:100%;
        background:#fff;
        padding:20px;
        box-sizing: border-box;
        img{
          width:100%;
        }
      }
      .ay_groups{
        display: flex;
        justify-content: space-between;
        margin-top:30px;
        .ay_item{
          width:20%;
          img{
            width:100%;
          }
        }
      }
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
    .analysis-row{
      background:#1B1349;
      .analysis-title{
        width:100%;
        margin-top:10px;
        .analysis-p{
          font-size:18px;
          color:#fff;
          line-height: 24px;
          &.analysis-p-blod{
            font-weight: bold;
          }
        }
      }
      .gwi-book-group{
        width:100%;
        margin-top:30px;
        margin-bottom: 45px;
        display: flex;
        justify-content: space-around;
        .gwi-book-item{
          width:25%;
          margin-right:30px;
          &:last-child{
            margin-right:0;
          }
          img{
            width:100%;
          }
        }
      }
    }
    .status-row{
      .status_doc{
        color:#595959;
        line-height: 30px;
        margin-top:30px;
      }
      .status_p{
        span{
          width:15px;
          height: 15px;
          display: inline-block;
          margin-right:5px;
          background: #1862E9;
          font-size: 10px;
          color:#fff;
          line-height: 15px;
          text-align: center;
          position: relative;
          top:1px;
          font-weight: bold;
        }
      }
    }
    .book-row{
      border-top:1px solid #EBEBEB;
      .book_content{
        text-align: center;
        margin-top:40px;
        .book_item{
          display: inline-block;
          padding:10px 30px;
          color:#000;
          text-align: center;
          border:1px solid #000;
          border-radius:25px;
          background: #fff;
          width:160px;
          box-sizing: border-box;
          .book_title{
            font-size: 18px;
          }
          .book_p{
            font-size:12px;
          }
          &:hover{
            background: #1862E9;
            color:#fff;
            border:1px solid #1862E9;
            cursor: pointer;
          }
        }
      }
    }
  }
</style>