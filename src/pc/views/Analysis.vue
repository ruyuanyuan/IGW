<template>
  <div class='analysis_template'>
    <div class='gwi-row'>
      <div class='topnav'>
        <img src="@/assets/img/top_nav.png" alt="">
        <div class='topnav-title'>{{analysis.Title}}</div>
      </div>
    </div>
    <div class='gwi-row chart-row'>
      <div class='gwi-row-content'>
        <div class='gwi-row-h'>{{analysis.marketTitle}}</div>
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
            <div class='chart_doc_title'><span class='blue_block'></span> {{analysis.gameHostry}}</div>
            <div class='chart_doc_p'>{{analysis.gameHostryDoc}}</div>
          </div>
        <div class='chart_doc_item'>
          <div class='chart_doc_title'><span class='blue_block'></span> {{analysis.prospectTitle}}</div>
          <div class='chart_doc_p'>{{analysis.prospectDoc}}</div>
        </div>
      </div>
    </div>
    <div class='gwi-row analysis-row'>
        <div class='gwi-row-content'>
          <div class='gwi-row-h font-while'>{{analysis.painTitle}}</div>
          <div class='analysis-title'>
            <div class='analysis-p'>{{analysis.painH1}}</div>
            <div class='analysis-p analysis-p-blod'>{{analysis.painH2}}</div>
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
          <div class='gwi-row-h'>{{analysis.chainTitle}}</div>
          <div class='status_doc'>
            {{analysis.chainDoc}}：
          </div>
          <div class='status_doc'>
            <p class='status_p'><span>A</span> {{analysis.chainA}}</p>
            <p class='status_p'><span>B</span> {{analysis.chainB}}</p>
            <p class='status_p'><span>C</span> {{analysis.chainC}}</p>
          </div>
          <div class='status_doc'>
            {{analysis.chainStatusDoc}}
          </div>
        </div>
    </div>
    <div class='gwi-row book-row'>
        <div class='gwi-row-content'>
            <div class='gwi-row-h'>{{analysis.book}}</div>
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
  name:'analysis',
  data(){
    return {
      analysis:this.$language.zh.analysis
    }
  },
  watch:{
    languagetype() {
      this.analysis=this.$language[this.languagetype].analysis
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
          &:hover{
            box-shadow:0px 10px 4px 1px rgba(0, 0, 0, 0.1);
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
          transition: all 0.2s linear;
          &:hover{
            transform: scale(1.1)
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
          font-size: 12px;
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