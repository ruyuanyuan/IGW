<template>
    <div class="Home">
      <!--<div class="header">-->
        <!--<div class="left"><img src="@/assets/img/logo.png" alt=""></div>-->
        <!--<div class="right"><i class="el-icon-s-operation"></i></div>-->
      <!--</div>-->
      <Header></Header>
      <div class="footer">
        <div class="title">合作机构</div>
        <div class="img-box">
          <img src="@/assets/img/school1.png" alt="">
          <img src="@/assets/img/school2.png" alt="">
          <img src="@/assets/img/school3.png" alt="">
        </div>
        <div class="title">投资者与财务顾问</div>
        <div class="img-box">
          <img src="@/assets/img/school4.png" alt="">
          <img src="@/assets/img/school7.png" alt="">
          <img src="@/assets/img/school6.png" alt="">
          <img src="@/assets/img/school8.png" alt="">
          <img src="@/assets/img/school9.png" alt="">
          <img src="@/assets/img/school5.png" alt="">
        </div>
        <div class="join-us">
          <div class="title">加入我们</div>
          <div class="box">
            <img src="@/assets/img/icon5.png" alt="">
            <img src="@/assets/img/icon6.png" alt="">
            <img src="@/assets/img/icon7.png" alt="">
            <img src="@/assets/img/icon8.png" alt="">
            <img src="@/assets/img/icon9.png" alt="">
            <img src="@/assets/img/icon10.png" alt="">
            <img src="@/assets/img/icon11.png" alt="">
            <img src="@/assets/img/icon12.png" alt="">
          </div>
        </div>
        <div class="des">
          <div class="box">
            <div class="word">关于</div>
            <div>IGWF</div>
            <div>白皮书</div>
          </div>
          <div class="box">
            <div class="word">生态</div>
            <div>生态游戏联盟</div>
            <div>核心平台</div>
            <div>通证经济</div>
          </div>
          <div class="box">
            <div class="word">
              发展
            </div>
            <div>
              路线图
            </div>
          </div>
          <div class="box">
            <div class="word">
              动态
            </div>
            <div>
              新闻
            </div>
          </div>
        </div>
        <div class="tag">
          <div>生态</div>
          <div>Invincible Game World Foundation</div>
          <div>marketing_igwgame@hotmail.com</div>
        </div>
        <div class="copyright">
          Copyright © 2019.Invincible Game World Foundation.All rights reserved.
        </div>
      </div>
    </div>
</template>

<script>
   import Header from "../components/Header"
    export default {
        name: "Home",
        created() {

        },
        mounted() {

        },
        components: {
          Header
        },
        methods: {}
    }
</script>

<style scoped lang="scss">
    .Home {
      .header{
        height:1rem;
        padding: 0 0.213rem;
        background:rgba(0,0,0,1);
        display: flex;
        align-items: center;
        justify-content: space-between;
        .left{
          width: 0.667rem;
          height: 0.667rem;
          img{
            width: 100%;
            height: 100%;
          }
        }
        .right{
          color: #fff;
        }
      }
      .footer{
        background:rgba(30,28,28,1);
        .title{
          padding-top: 0.8rem;
          padding-bottom: 0.533rem;
          padding-left: 0.213rem;
          font-size:0.32rem;
          color: #fff;
        }
        .img-box{
          padding: 0 0.213rem;
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          img{
            width: 2.933rem;
            height: 1.253rem;
            margin-bottom: 0.267rem;
          }
        }
        .join-us{
          .title{
            color: #727272;
          }
          .box{
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            padding: 0 0.8rem;
            img{
              width:1.293rem;
              height:1.307rem;
              margin: 0.4rem 0.267rem;
            }
          }
        }
        .des{
          display: flex;
          justify-content: space-around;
          margin-top: 0.6rem;
          .box{
            div{
              font-size: 0.267rem;
              margin-bottom: 0.4rem;
              color: #727272!important;
            }
            .word{
              font-size: 0.32rem;
              font-weight: bold;
            }
          }
        }
        .tag{
          text-align: right;
          padding: 0.8rem 0.213rem;
          font-size: 0.267rem;
          color: #727272;
        }
        .copyright{
          height: 1.067rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #727272;
          font-size: 0.187rem;
          border-top: 1px solid #000;
        }
      }
    }
</style>
