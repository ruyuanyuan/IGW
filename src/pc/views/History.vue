<template>
  <div class='history_template'>
    <div class='gwi-row'>
      <div class='topnav'>
        <img src="@/assets/img/top_nav.png" alt="">
        <div class='topnav-title'>{{history.Title}}</div>
      </div>
    </div>
    <div class='gwi-row history-row'>
      <div class='gwi-row-content'>
        <div class='company-history'>
          <div class='history-line'>
            <div class='company-event' 
              v-for='(item,index) in history.timeEvent' :key='index' 
              :class='index % 2===0?"left-card":"right-card"'
              :style='"top:"+(index+1)*110+"px"'
              >
              <div class='time-node'>
                <img src="@/assets/img/node.png" alt="">
              </div>
              <div class='triangle'>
                <img src="@/assets/img/triangle.png" alt="">
              </div>
              <div class='event-img' :class='item.imgurl'>
               
              </div>
              <div class='event-doc'>
                <div class='event-time'>{{item.time}}</div>
                <p class='event-p' v-for='(doc,key) in item.titles' :key='key'>{{doc}}</p>
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
  data(){
    return {
      history:this.$language[this.$store.state.language].history
    }
  },
  watch:{
    languagetype() {
      this.history=this.$language[this.languagetype].history
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
  .history_template{
    .history-row{
      background:#f5f5f5;
    }
    .company-history{
      width:100%;
      .history-line{
        margin:0 auto;
        width:2px;
        height:1200px;
        padding-top:1px;
        padding-bottom: 120px;
        background:#BFBFBF;
        position: relative;
        
        .company-event{
          width:450px;
          height:110px;
          background:#fff;
          padding:8px;
          .triangle{
            position: absolute;
            top:50%;
            transform: translate(0,-50%);
          }
          .time-node{
            width:10px;
            height:10px;
            margin-top:37px;
            img{
              width:100%;
            }
            position: absolute;
          }
          .event-img{
            width:90px;
            height: 90px;
            background-size: 100% 100%;
             background-image: url('~@/assets/img/star1.png');
            &.satr_a{
              background-image: url('~@/assets/img/star1.png');
            }
            &.satr_b{
              background-image: url('~@/assets/img/star2.png')
            }
            &.satr_c{
              background-image: url('~@/assets/img/star3.png')
            }
            &.satr_d{
              background-image: url('~@/assets/img/star4.png')
            }
            &.satr_e{
              background-image: url('~@/assets/img/star5.png')
            }
            &.satr_f{
              background-image: url('~@/assets/img/star6.png')
            }
            &.satr_g{
              background-image: url('~@/assets/img/star7.png')
            }
            &.satr_h{
              background-image: url('~@/assets/img/star8.png')
            }
            &.satr_i{
              background-image: url('~@/assets/img/star9.png')
            }

          }
          .event-doc{
            .event-time{
              color:#252525;
              font-size: 14px;
            }
            .event-p{
              color:#5A5A5A;
              font-size: 12px;
              line-height: 18px;
            }
          }
          &.left-card{
            position: absolute;
            right:80px;
            text-align: right;
            .triangle{
              right:-20px;
              transform: rotate(180deg)  translate(0,50%);
            }
            .event-img{
              float: right;
            }
            .event-doc{
              float: right;
              margin-right:10px;
            }
            .time-node{
              right:-84px;
            }
          }
          &.right-card{
            position: absolute;
            left:80px;
            text-align: left;
            .triangle{
              left:-20px;
            }
             .event-img{
              float: left;
            }
            .event-doc{
              float: left;
              margin-left:10px;
            }
            .time-node{
              left:-84px;
            }
          }
        }
      }
      
    }
  }
</style>
