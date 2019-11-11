<template>
  <div class='cooperate_template'>
    <div class='gwi-row'>
      <div class='topnav'>
        <img src="@/assets/img/top_nav.png" alt="">
        <div class='topnav-title'>合作机构</div>
      </div>
    </div>
    <div class='gwi-row'>
      <div class='gwi-row-content'>
        <div class='gw-cooperate-group'>
          <div class='gw-cooperate-item'>
            <img src="@/assets/img/school1.png" alt="">
            <div class='item-content'>
              <p>清华大学数字金融资产研究院</p>
              <p>清华大学金融发展研究中心</p>
              <p>清华大学经管学院创业者加速器区块链应用实验室</p>
            </div>
          </div>
          <div class='gw-cooperate-item-line'></div>
          <div class='gw-cooperate-item'>
            <img src="@/assets/img/school2.png" alt="">
            <div class='item-content only-one'>
              <p>株式会社 Global Systems</p>
            </div>
          </div>
          <div class='gw-cooperate-item-line'></div>
          <div class='gw-cooperate-item'>
            <img src="@/assets/img/school3.png" alt="">
            <div class='item-content  only-one'>
              <p>株式会社ROSE ONLINE</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'cooperate'
}
</script>
<style lang="scss">
  .cooperate_template{
    .gw-cooperate-group{
      width:100%;
      display: flex;
      align-items: center;
      padding:80px 0;
      .gw-cooperate-item{
        width: 33%;
        text-align: center;
        img{
          width:160px;
        }
        .item-content{
          margin-top:10px;
          height:90px;
          &.only-one{
            p{
               line-height: 90px;
            }
          }
          p{
            color:#555555;
            font-size:12px;
            line-height: 30px;
          }
        }
      }
      .gw-cooperate-item-line{
        width:2px;
        height:100px;
        background:#BFBFBF;
      }
    }
  }
</style>