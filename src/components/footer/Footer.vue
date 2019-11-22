<template>
  <div class='footer_template'>
    <div class='footer_content'>
        <div class='gw-row'>
          <div class='gw-row-left'>
            <div class='gw-row-title'>{{footer.cooperate}}</div>
            <div class='gw-school-group'>
              <div class='gw-school-item'>
                <img src="@/assets/img/school1.png" alt="">
              </div>
              <div class='gw-school-item'>
                <img src="@/assets/img/school2.png" alt="">
              </div>
              <div class='gw-school-item'>
                <img src="@/assets/img/school3.png" alt="">
              </div>
            </div>
          </div>
          <div class='gw-row-right'>
            <div class='gw-row-title'>
              {{$language[this.languagetype].footer.adviser}}
            </div>
            <div class='gw-school-group'>
              <div class='gw-school-item'>
                <img src="@/assets/img/school4.png" alt="">
              </div>
              <div class='gw-school-item'>
                <img src="@/assets/img/school5.png" alt="">
              </div>
              <div class='gw-school-item'>
                <img src="@/assets/img/school6.png" alt="">
              </div>
              <div class='gw-school-item' style='margin-right:0'>
                <img src="@/assets/img/school7.png" alt="">
              </div>
              <div class='gw-school-item'>
                <img src="@/assets/img/school8.png" alt="">
              </div>
              <div class='gw-school-item' style='margin-right:0'>
                <img src="@/assets/img/school9.png" alt="">
              </div>
            </div>
          </div>
        </div>
        <div class='gw-row-me'>
          <div class='gw-row-me-title'>{{footer.joinme}}</div>
          <div class='gw-row'>
            <div class='gw-row-left'>
              <div class='gw-icon-group'>
                <div class='gw-icon-item'>
                  <img src="@/assets/img/icon5.png" alt="">
                </div>
                <div class='gw-icon-item'>
                  <img src="@/assets/img/icon6.png" alt="">
                </div>
                <div class='gw-icon-item'>
                  <img src="@/assets/img/icon7.png" alt="">
                </div>
                <div class='gw-icon-item' >
                  <img src="@/assets/img/icon8.png" alt="">
                </div>
                <div class='gw-icon-item'>
                  <img src="@/assets/img/icon9.png" alt="">
                </div>
                <div class='gw-icon-item'>
                  <img src="@/assets/img/icon10.png" alt="">
                </div>
                <div class='gw-icon-item'>
                  <img src="@/assets/img/icon11.png" alt="">
                </div>
                <div class='gw-icon-item'>
                  <img src="@/assets/img/icon12.png" alt="">
                </div>
              </div>
            </div>
            <div class='gw-row-right'>
              <div class='gw-write-group'>
                <div class='gw-write-item'>
                  <div class='gw-write-item-title'>{{footer.about}}</div>
                  <div class='gw-write-item-p'>IGWF</div>
                  <div class='gw-write-item-p'>{{footer.book}}</div>
                </div>
                <div class='gw-write-item'>
                  <div class='gw-write-item-title'>{{footer.ecology}}</div>
                  <div class='gw-write-item-p'>{{footer.ecology1}}</div>
                  <div class='gw-write-item-p'>{{footer.ecology2}}</div>
                  <div class='gw-write-item-p'>{{footer.ecology3}}</div>
                </div>
                <div class='gw-write-item'>
                  <div class='gw-write-item-title'>{{footer.develop}}</div>
                  <div class='gw-write-item-p'>{{footer.develop1}}</div>
                </div>
                <div class='gw-write-item'>
                  <div class='gw-write-item-title'>{{footer.dynamic}}</div>
                  <div class='gw-write-item-p'>{{footer.dynamic1}}</div>
                </div>
              </div>
            </div>
          </div>
          <div class='gw-row-me-footer'>
              <div class='gw-write-item'>
                  <div class='gw-write-item-title'>{{$language[this.languagetype].footer.ecology}}</div>
                  <div class='gw-write-item-p'>Invincible Game World Foundation</div>
                  <div class='gw-write-item-p'>marketing_igwgame@hotmail.com</div>
                </div>
          </div>
        </div>
        
    </div>
    <div class='gw-line'></div>
    <div class='gw-copyright'>Copyright © 2019.Invincible Game World Foundation.All rights reserved.</div>
  </div>
</template>
<script>
export default {
  data(){
    return {
      footer:{
        cooperate:'合作机构',
        adviser:'投资者与财务顾问',
        joinme:'加入我们',
        about:'关于',
        book:'白皮书',
        ecology:'生态',
        ecology1:'生态游戏联盟',
        ecology2:'核心平台',
        ecology3:'通证经济',
        develop:'发展',
        develop1:'路线图',
        dynamic:'动态',
        dynamic1:'新闻'
      },
    }
  },
  computed: {
    languagetype: function() {
      return this.$store.state.language;
    }
  },
  watch:{
    languagetype(){
      this.footer = this.$language[this.languagetype].footer
      console.log(this.footer)
    }
  }
}
</script>
<style lang="scss">
  .footer_template{
    background:#1E1C1C;
    .footer_content{
      width:1000px;
      margin:0 auto;
      .gw-row{
        width:100%;
        display: flex;
        justify-content: space-between;
        .gw-row-title{
          color:#fff;
          margin:25px 0;
        }
        .gw-school-group{
          width:100%;
          display: flex;
          flex-wrap: wrap;
          .gw-school-item{
            margin-right:20px;
            margin-bottom:35px;
            width:110px;
            height:40px;
            img{
              width:100%;
            }
          }
        }
        .gw-row-left{
          width:40%;
        }
        .gw-row-right{
          width:50%;
          .gw-school-group{
            justify-content: flex-end;
          }
        }
      }
      .gw-row-me{
        width:100%;
        .gw-row-me-title{
          width:100%;
          color:#727272;
          margin-bottom: 30px;
        }
        .gw-row-left{
          width:32%;
        }
        .gw-icon-group{
          width:100%;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          .gw-icon-item{
            width:40px;
            height:40px;
            margin-right:40px;
            margin-bottom:40px;
            // &:nth-child(4n){
            //   margin-right:0;
            // }
            img{
              height:100%;
            }
          }
        }
        .gw-write-group{
          display: flex;
          justify-content: space-between;
          .gw-write-item{
            .gw-write-item-title{
              font-size:14px;
              color:#727272;
              line-height: 30px;
              font-weight: 600;
            }
            .gw-write-item-p{
              color:#727272;
              line-height: 24px;
            }
          }
        }
        .gw-row-me-footer{
          display: flex;
          justify-content: flex-end;
          .gw-write-item{
            padding-bottom:10px;
            .gw-write-item-title{
              text-align: right;
              font-size:14px;
              color:#727272;
              line-height: 30px;
              font-weight: 600;
            }
            .gw-write-item-p{
              color:#727272;
              line-height: 24px;
            }
          }
        }
      }
    }
    .gw-line{
      width:100%;
      height:1px;
      background:#000;
      box-shadow: 1px 1px 1px #727272;;
    }
    .gw-copyright{
      text-align: center;
      line-height: 40px;
      color:#727272;
    }
  }
</style>