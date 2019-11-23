<template>
    <div class="Footer">
        <div class="title">{{footer.cooperate}}</div>
        <div class="img-box">
          <img src="@/assets/img/school1.png" alt="">
          <img src="@/assets/img/school2.png" alt="">
          <img src="@/assets/img/school3.png" alt="">
        </div>
        <div class="title">{{footer.adviser}}</div>
        <div class="img-box">
          <img src="@/assets/img/school4.png" alt="">
          <img src="@/assets/img/school7.png" alt="">
          <img src="@/assets/img/school6.png" alt="">
          <img src="@/assets/img/school8.png" alt="">
          <img src="@/assets/img/school9.png" alt="">
          <img src="@/assets/img/school5.png" alt="">
        </div>
        <div class="join-us">
          <div class="title">{{footer.joinme}}</div>
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
            <div class="word">{{footer.about}}</div>
            <div>IGWF</div>
            <div>{{footer.book}}</div>
          </div>
          <div class="box">
            <div class="word">{{footer.ecology}}</div>
            <div>{{footer.ecology1}}</div>
            <div>{{footer.ecology2}}</div>
            <div>{{footer.ecology3}}</div>
          </div>
          <div class="box">
            <div class="word">
              {{footer.develop}}
            </div>
            <div>
              {{footer.develop1}}
            </div>
          </div>
          <div class="box">
            <div class="word">
              {{footer.dynamic}}
            </div>
            <div>
              {{footer.dynamic1}}
            </div>
          </div>
        </div>
        <div class="tag">
          <div>{{footer.ecology}}</div>
          <div>Invincible Game World Foundation</div>
          <div>marketing_igwgame@hotmail.com</div>
        </div>
        <div class="copyright">
          Copyright © 2019.Invincible Game World Foundation.All rights reserved.
        </div>
    </div>
</template>

<script>
    export default {
        name: "Footer",
        data(){
          return {
            footer:this.$language[this.$store.state.language].footer
          }
        },
        watch:{
          languagetype() {
            this.footer=this.$language[this.languagetype].footer
          }
        },
        computed: {
          languagetype: function() {
            return this.$store.state.language;
          }
        }
    }
</script>

<style scoped lang="scss">
    .Footer {
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
          padding: 0 0.267rem;
          height: 1.067rem;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #727272;
          font-size: 0.187rem;
          border-top: 1px solid #000;
        }
    }
</style>
