<template>
  <div class="Development">
    <Area text="发展路线"/>
    <div class="developmentLine">
      <div class="content">
        <div class="every current">
          <div class="left">
            <div>
              2018年8月
            </div>
            <p>
              种子轮融资1000万IGW项目启动
            </p>
          </div>
          <div class="right">
            <img src="@/assets/img/star1.png" alt="">
          </div>
        </div>
        <div class="every">
          <div class="left">
            <div>

              2018年11月

            </div>
            <p>

              IGW Basics 研发完善商业模式

            </p>
          </div>
          <div class="right">
            <img src="@/assets/img/star2.png" alt="">
          </div>
        </div>
        <div class="every">
          <div class="left">
            <div>

              2019年1月

            </div>
            <p>

              发布白皮书

            </p>
          </div>
          <div class="right">
            <img src="@/assets/img/star3.png" alt="">
          </div>
        </div>
        <div class="every">
          <div class="left">
            <div>

              2019年3月

            </div>
            <p>

              开始通证互换官方网站上线

            </p>
          </div>
          <div class="right">
            <img src="@/assets/img/star4.png" alt="">
          </div>
        </div>
        <div class="every">
          <div class="left">
            <div>

              2019年6月

            </div>
            <p>
              通证上线交易所
            </p>
          </div>
          <div class="right">
            <img src="@/assets/img/star5.png" alt="">
          </div>
        </div>
        <div class="every">
          <div class="left">
            <div>

              2019年9月

            </div>
            <p>

              IGW Basics 韩国区域上线

            </p>
          </div>
          <div class="right">
            <img src="@/assets/img/star6.png" alt="">
          </div>
        </div>
        <div class="every">
          <div class="left">
            <div>

              2019年11月

            </div>
            <p>

              IGW Protocol 测试网上线
            </p>
          </div>
          <div class="right">
            <img src="@/assets/img/star7.png" alt="">
          </div>
        </div>
        <div class="every">
          <div class="left">
            <div>

              2020

            </div>
            <p>
              IGW全球节点上线
            </p>
            <p>
              IGW携百款游戏进行全球发行
            </p>
            <p>
              IGW联盟链正式上线，100家开发者加入
            </p>
            <p>
              IGW游戏生态联盟预计收入过3000千万
            </p>
          </div>
          <div class="right">
            <img src="@/assets/img/star8.png" alt="">
          </div>
        </div>
        <div class="every">
          <div class="left">
            <div>
              2021
            </div>
            <p>
              IGW全球节点上线
            </p>
            <p> IGW生态联盟预计帮助中国50家</p>
            <p> 游戏开发者进行链改</p>
            <p> IGW游戏生态联盟预计收入过亿元</p>
          </div>
          <div class="right">
            <img src="@/assets/img/star9.png" alt="">
          </div>
        </div>
        <div class="every">
          <div class="left">
            <div>
              2022
            </div>
            <p>
              IGW全球游戏公链上线，
            </p>
            <p> 全球预计有300+以上的游戏开发者加入</p>
            <p>
              IGW游戏生态联盟预计收入过上十亿</p>
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
    created() {

    },
    mounted() {

    },
    components: {
      Area
    },
    methods: {}
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
          height: 2.4rem;
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
            z-index: 999;
            transform: rotate(45deg);
          }

          &.current:before {
            background: #1862E9;
          }

          .left {
            text-align: right;
            width: 5.4rem;
            padding-top: 0.2rem;

            div {
              color: #252525;
              font-size: 0.32rem;
              font-weight: bold;
            }

            p {
              color: #5A5A5A;
              font-size: 0.24rem;
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
