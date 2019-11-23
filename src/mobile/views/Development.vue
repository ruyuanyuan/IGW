<template>
  <div class="Development">
    <Area :text="history.Title"/>
    <div class="developmentLine">
      <div class="content">
        <div class="every current">
          <div class="left">
            <div>
              {{history.timeEvent[0].time}}
            </div>
            <p>
              {{history.timeEvent[0].titles[0]}}
            </p>
          </div>
          <div class="right">
            <img src="@/assets/img/star1.png" alt="">
          </div>
        </div>
        <div class="every">
          <div class="left">
            <div>

              {{history.timeEvent[1].time}}

            </div>
            <p>

             {{history.timeEvent[1].titles[0]}}

            </p>
          </div>
          <div class="right">
            <img src="@/assets/img/star2.png" alt="">
          </div>
        </div>
        <div class="every">
          <div class="left">
            <div>

              {{history.timeEvent[2].time}}

            </div>
            <p>

               {{history.timeEvent[2].titles[0]}}

            </p>
          </div>
          <div class="right">
            <img src="@/assets/img/star3.png" alt="">
          </div>
        </div>
        <div class="every">
          <div class="left">
            <div>

             {{history.timeEvent[3].time}}

            </div>
            <p>

               {{history.timeEvent[3].titles[0]}}

            </p>
          </div>
          <div class="right">
            <img src="@/assets/img/star4.png" alt="">
          </div>
        </div>
        <div class="every">
          <div class="left">
            <div>

              {{history.timeEvent[4].time}}

            </div>
            <p>
              {{history.timeEvent[4].titles[0]}}

            </p>
          </div>
          <div class="right">
            <img src="@/assets/img/star5.png" alt="">
          </div>
        </div>
        <div class="every">
          <div class="left">
            <div>

              {{history.timeEvent[5].time}}

            </div>
            <p>

              {{history.timeEvent[5].titles[0]}}


            </p>
          </div>
          <div class="right">
            <img src="@/assets/img/star6.png" alt="">
          </div>
        </div>
        <div class="every">
          <div class="left">
            <div>

              {{history.timeEvent[6].time}}

            </div>
            <p>

              {{history.timeEvent[6].titles[0]}}

            </p>
          </div>
          <div class="right">
            <img src="@/assets/img/star7.png" alt="">
          </div>
        </div>
        <div class="every">
          <div class="left">
            <div>

              {{history.timeEvent[7].time}}

            </div>
            <p>
              {{history.timeEvent[7].titles[0]}}

            </p>
            <p>
              {{history.timeEvent[7].titles[1]}}

            </p>
            <p>
              {{history.timeEvent[7].titles[2]}}
            </p>
            <p>
             {{history.timeEvent[7].titles[3]}}
            </p>
          </div>
          <div class="right">
            <img src="@/assets/img/star8.png" alt="">
          </div>
        </div>
        <div class="every">
          <div class="left">
            <div>
              {{history.timeEvent[8].time}}
            </div>
            <p>
               {{history.timeEvent[8].titles[0]}}
            </p>
            <p>  {{history.timeEvent[8].titles[1]}}</p>
            <p>  {{history.timeEvent[8].titles[2]}}</p>
            <p>  {{history.timeEvent[8].titles[3]}}</p>
          </div>
          <div class="right">
            <img src="@/assets/img/star9.png" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Area from "../components/Area"

  export default {
    name: "Development",
    data(){
      return {
          history:this.$language[this.$store.state.language].history
      }
    },
    mounted(){
      console.log(this.history.timeEvent[0].time)
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
    },
    components: {
      Area
    },
  }
</script>

<style scoped lang="scss">
  .Development {
    .developmentLine {
      padding: 0 0.8rem;
      padding-top: 0.6rem;
      margin-bottom: 0.6rem;

      .content {
        border-left: 0.027rem solid #BFBFBF;

        .every {
          width: 8rem;
          height: 3.4rem;
          margin-left: 0.4rem;
          position: relative;
          background: url("../../assets/mobileImage/shadow.png") no-repeat;
          background-size: 102% 102%;
          display: flex;
          justify-content: space-between;
          padding-bottom: 0.1rem;

          &:before {
            content: '';
            display: inline-block;
            width: 0.1rem;
            height: 0.1rem;
            border: 0.027rem solid #1862E9;
            background: #fff;
            position: absolute;
            top: 50%;
            margin-top: -0.28rem;
            left: -0.5rem;
            z-index: 99;
            transform: rotate(45deg);
          }

          &.current:before {
            background: #1862E9;
          }

          .left {
            text-align: right;
            width: 5.4rem;
            padding-top: 0.4rem;

            div {
              color: #252525;
              font-size: 12px;
              font-weight: bold;
            }

            p {
              color: #5A5A5A;
              font-size: 10px;
              line-height: 20px;
            }
          }

          .right {
            display: flex;
            align-items: center;
            margin-right: 0.267rem;

            img {
              width: 2rem;
              height: auto;
            }
          }
        }
      }
    }
  }
</style>
