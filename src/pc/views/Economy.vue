<template>
  <div class="cooperate_template">
    <div class="gwi-row">
      <div class="topnav">
        <img src="@/assets/img/top_nav.png" alt="" />
        <div class="topnav-title">{{economy.Title}}</div>
      </div>
    </div>
    <div class="gwi-row table-row">
      <div class="gwi-row-content">
        <div class="table-content">
          <div class="table-title">
            <p>IGW通证分配</p>
            <p>总量：1,000,000,000 IGC</p>
          </div>
          <div class="table-box">
            <table class='table' cellspacing="0">
              <thead>
                <tr>
                  <th>分配</th>
                  <th>数量</th>
                  <th>说明</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>私募</td>
                  <td>40,000,000</td>
                  <td>用于项目前期研发、运营、推广、生态建设等 锁定期2个月，第3个月起每月释放10%</td>
                </tr>
                <tr>
                  <td>公募</td>
                  <td>30,000,000</td>
                  <td>用于项目全球商务拓展、社群生态建设等 无锁定，立即释放</td>
                </tr>
                <tr>
                  <td>创始团队</td>
                  <td>120,000,000</td>
                  <td>创始团队激励 锁定期6个月，第7个月起每个月释放2% </td>
                </tr>
                <tr>
                  <td>基金会</td>
                  <td>100,000,000</td>
                  <td>用于基金会及IGW基金实验室的推动和日常运营，20%不设锁定期 用于基金会前期建设管理，第4个月起每个月释放10% </td>
                </tr>
                <tr>
                  <td>项目发展</td>
                  <td>210,000,000</td>
                  <td>10%不设锁定期，用于项目前期生态发展 剩余部分自上交易所后每月解锁5%，用于项目后期发展</td>
                </tr>
                <tr>
                  <td>生态激励</td>
                  <td>500,000,000</td>
                  <td>社群激励 未来10年陆续释放</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class='chart-box'>
            <img src="@/assets/img/char2.png" alt="">
          </div>
        </div>
      </div>
    </div>
    <div class="gwi-row table-row  table2-row">
      <div class="gwi-row-content">
        <div class="table-content">
          <div class='gwi-row-h'>{{economy.Exchange}}</div>
          <div class="table-box">
            <table class='table' cellspacing="0">
              <thead>
                <tr>
                  <th>轮次</th>
                  <th>IGC发行量</th>
                  <th>总量占比</th>
                  <th>价值比率</th>
                  <th>起止日期</th>
                  <th>状态</th>
                  <th>锁定期</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>15,000,000</td>
                  <td>1.5%</td>
                  <td>1 USDT ≈ 19 IGC	</td>
                  <td>2019.03.01-2019.03.15	</td>
                  <td>结束</td>
                  <td> 交易所首发日期起锁定期2个月，第3个月起每月释放10% </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>25,000,000</td>
                  <td>2.5%</td>
                  <td>1 USDT ≈ 11 IGC</td>
                  <td>	2019.04.01-2019.04.30</td>
                  <td>结束</td>
                  <td> 交易所首发日期起锁定期2个月，
 第3个月起每月释放3%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "economy",
  data(){
    return {
      economy:this.$language[this.$store.state.language].economy
    }
  },
  watch:{
    languagetype() {
      this.economy=this.$language[this.languagetype].economy
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
.cooperate_template {
  .table-row {
    .table-content{
      width:100%;
      .table-title{
        font-size:24px;
        color:#000;
      }
      .table-box{
        margin-top:20px;
        .table{
          width:100%;
          thead{
            background:#fff;
            th{
              font-weight: bold;
              color:#363636;
              text-align: left;
            }
          }
          td,th{
            padding:20px;
            color:#797979;
          }
          td:nth-child(3){
            width:50%;
          }
          tr{
            background: #fff;
          }
          tbody{
             tr:nth-child(2n+1){
              background:#F9F9F9;
            }
          }
         
        }
      }
      .chart-box{
        text-align: right;
        margin-top:30px;
        img{
          width:60%;
        }
      }
    }
  }
  .table2-row{
    background:#EDF0F5;
    .table-content .table-box .table td:nth-child(3){
      width:60px;
    }
    .table-content .table-box .table td:nth-child(7){
      width:210px;
    }
  }
}
</style>
