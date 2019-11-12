<template>
  <div class="cooperate_template">
    <div class="gwi-row">
      <div class="topnav">
        <img src="@/assets/img/top_nav.png" alt="" />
        <div class="topnav-title">通证经济</div>
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
            <table class='table'>
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
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "cooperate"
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
      
    }
  }
}
</style>
