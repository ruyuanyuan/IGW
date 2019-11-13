<template>
  <div class="Home">
    <!--banner-->
    <div class="banner"><img src="@/assets/mobileImage/banner.png" alt=""></div>
    <!--IGW简介-->
    <div class="introduce">
      <Title text="IGW简介"></Title>
      <div class="text">
        IGW全球游戏生态联盟致力打造一个基于区块链原生的泛社区化游戏平台，聚合游戏玩家、游戏内容生产者、开发者、数字资产交易者等多种泛社区成员，为游戏玩家提供优质的游戏内容，为开发者提供完善的游戏开发模块、数据服务及流量支持，且无中间费用，用户可使用平台通证IGC进行游戏数字资产的自由交易和跨链流通，社区内容完全由社区成员推动而实现自治管理和规范运作。
      </div>
      <Raduis bg="#1862E9"></Raduis>
    </div>
    <!--区块链宏观分析-->
    <div class="blockchain">
      <Title text="区块链行业宏观分析" color="#fff"></Title>
      <p class="text1">
        传统游戏市场日趋成熟的同时
      </p>
      <p class="text2">
        也出现了诸多问题
      </p>
      <div class="four">
        <img src="@/assets/mobileImage/blockchain_05.jpg" alt="">
        <img src="@/assets/mobileImage/blockchain_07.jpg" alt="">
        <img src="@/assets/mobileImage/blockchain_14.jpg" alt="">
        <img src="@/assets/mobileImage/blockchain_17.png" alt="">
      </div>
      <Raduis></Raduis>
    </div>
    <!--IGW全球游戏生态联盟-->
    <div class="alliance">
      <Title text="IGW全球游戏生态联盟"></Title>
      <div class="text">
        为了打造一个泛社区化的去中心化信任、流量共享、资产自由流通、一键全球发行、多方共赢的全球游戏生态，IGW开启全球游戏生态联盟计划。IGW率先在中国建立联盟链超级节点，然后通过节点竞选和准入机制，面向全球建立一个分布式的超级节点联盟。届时，IGW的游戏交易所将成为全球最大的游戏资产交易平台，IGC将成为游戏交易中心的通兑货币。
      </div>
      <div class="img-box">
        <div>
          <img src="@/assets/img/gw1.png" alt="">
          <div>流量共享</div>
        </div>
        <div>
          <img src="@/assets/img/gw2.png" alt="">
          <div>一键全球发行</div>
        </div>
        <div>
          <img src="@/assets/img/gw3.png" alt="">
          <div>去中介化</div>
        </div>
        <div>
          <img src="@/assets/img/gw4.png" alt="">
          <div>资产流通</div>
        </div>
      </div>
      <Raduis color="#000"></Raduis>
    </div>
    <!--IGW BASICS-->
    <div class="basics">
      <p>
        IGW Basics
      </p>
      <p>
        为游戏而生！
      </p>
      <div class="texture">
        <div>
          <img src="@/assets/img/icon1.png" alt="">
          社区
        </div>
        <div>
          <img src="@/assets/img/icon2.png" alt="">
          商店
        </div>
      </div>
      <div class="texture">
        <div>
          <img src="@/assets/img/icon3.png" alt="">
          IM/群
        </div>
        <div>
          <img src="@/assets/img/icon4.png" alt="">
          钱包
        </div>
      </div>
    </div>
    <!--powered-->
    <div class="powered">
      <img src="@/assets/mobileImage/powerd_03.png" alt="">
      <Raduis></Raduis>
    </div>
    <!--IGW基金会-->
    <div class="fund">
      <Title text="IGW基金会"></Title>
      <div class="text">
        IGWF注册于英属群岛直布罗陀，是全球游戏生态联盟体系的发起者。我们致力于聚合全球各地区（大洲、国家或地区）有共同志向的游戏平台、游戏开发者、运营者打造未来游戏联盟经济体，共同创建一个为游戏行业参与者走向全球市场的渠道，通过区块链技术手段及完善的解决方案实现联盟成员的相互信任、流量共享、平等共赢。
      </div>
      <img src="@/assets/img/map.png" alt="">
      <Raduis color="#000"></Raduis>
    </div>
    <!--路线图-->
    <div class="route">
      <img src="@/assets/mobileImage/time_line_02.png" alt="">
    </div>
    <!--联系我们-->
    <div class="contact">
      <Title text="联系我们"></Title>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
        <el-form-item prop="user_name" class='form-item-input input-name'>
          <label>姓名 | NAME</label>
          <el-input type="text" maxlength='8' v-model="ruleForm.user_name"></el-input>
        </el-form-item>
        <el-form-item prop="user_phone" class='form-item-input input-phone'>
          <label>电话 | PHONE</label>
          <el-input type="tel" maxlength="11" v-model="ruleForm.user_phone"></el-input>
        </el-form-item>
        <el-form-item prop="user_message" class='form-item-textarea'>
          <label>留言 | MESSAGE</label>
          <el-input type="textarea" maxlength="120" v-model="ruleForm.user_message" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <Raduis color="#000"></Raduis>
    </div>
  </div>
</template>

<script>
  import Title from "../components/Title"
  import Raduis from "../components/Radius"

  export default {
    name: "Home",
    created() {

    },
    mounted() {

    },
    components: {
      Title,
      Raduis
    },
    methods: {},
    data() {
      var validatename = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入姓名'));
        } else {
          callback();
        }
      };
      var validatephone = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入手机号'));
        } else {
          if (!(/^1[3456789]\d{9}$/.test(value))) {
            callback(new Error('手机号格式不正确'));
          } else {
            callback();
          }

        }
      };
      var validatemessage = (rule, value, callback) => {
        if (value === '') {
          callback(new Error('请输入留言信息'));
        } else {
          callback();
        }
      };
      return {
        ruleForm: {
          user_name: '',
          user_phone: '',
          user_message: '',
        },

        rules: {
          user_name: [
            {validator: validatename, trigger: 'blur'}
          ],
          user_phone: [
            {validator: validatephone, trigger: 'blur'}
          ],
          user_message: [
            {validator: validatemessage, trigger: 'blur'}
          ]
        }
      }
    }
  }
</script>
<style lang="scss">
  .contact {

    .el-form {
      padding: 0 0.213rem;

      .input-name {
        input {
          width: 5rem;
          height: 1.173rem;
        }
      }

      .input-phone {
        input {
          width: 7.027rem;
          height: 1.173rem;
        }
      }

      .form-item-textarea {
        textarea {
          width: 9.653rem;
          height: 4.48rem;
          border-radius: 0.293rem;
          background: rgba(243, 243, 243, 1);
          box-shadow: 0rem 0.013rem 0rem 0rem rgba(255, 255, 255, 1);
        }
      }

      label {
        color: #595959;
        font-size: 0.267rem;
      }

      input {
        background: rgba(243, 243, 243, 1);
        box-shadow: 0rem 0.013rem 0rem 0rem rgba(255, 255, 255, 1);
        border-radius: 0.587rem;
      }
    }

  }
</style>
<style scoped lang="scss">
  .Home {
    .banner {
      img {
        width: 100%;
        height: auto;
      }
    }

    .text {
      font-size: 0.24rem;
      color: #595959;
      line-height: 1.8;
    }

    .introduce {
      padding: 0 0.187rem;
    }

    .alliance {
      padding: 0 0.187rem;
      background: rgba(237, 239, 242, 1);

      .img-box {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        padding: 0 1.6rem;
        padding-top: 0.6rem;

        > div {
          display: flex;
          align-items: center;
          flex-direction: column;
          font-size: 0.32rem;
          color: #07070D;

          &:nth-child(1) {
            margin-bottom: 0.933rem;
          }

          &:nth-child(2) {
            margin-bottom: 0.933rem;
          }
        }

        img {
          width: 2.213rem;
          height: 2.213rem;
          margin-bottom: 0.4rem;
        }
      }
    }

    .fund {
      padding: 0 0.187rem;

      img {
        width: 9.067rem;
        height: auto;
        display: block;
        margin: 0 auto;
        margin-top: 0.533rem;
      }
    }

    .route {
      img {
        width: 100%;
        height: auto
      }
    }

    .blockchain {
      display: block;
      background: #1B1349;
      padding: 0 0.187rem;

      .four {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;

        img {
          width: 4.56rem;
          height: 4.987rem;
          margin-top: 0.56rem;
        }
      }

      .text1 {
        color: #fff;
        font-size: 0.373rem;
      }

      .text2 {
        color: #fff;
        font-size: 0.373rem;
        font-weight: bold;
      }
    }

    .basics {
      padding-left: 0.4rem;
      padding-top: 1.013rem;
      padding-bottom: 0.8rem;
      position: relative;
      height: 10.533rem;

      &:after {
        content: '';
        display: block;
        position: absolute;
        bottom: -0.4rem;
        right: 0;
        width: 6.133rem;
        height: 7.253rem;
        /*background: url("../../assets/mobileImage/computer_23.png") no-repeat;*/
        background: url("../../assets/img/icon_tv.png") no-repeat;
        background-size: cover;
      }

      p:nth-child(1) {
        font-size: 0.88rem;
        color: #07070D;
        font-weight: bold;
      }

      p:nth-child(2) {
        font-size: 0.587rem;
        color: #07070D;
        margin-bottom: 0.933rem;
      }

      .texture {
        display: flex;

        > div {
          margin-right: 0.5rem;
          margin-bottom: 0.4rem;
          font-size: 0.24rem;
          color: #07070D;
          text-align: center;
        }

        img {
          width: 1.413rem;
          height: auto;
          display: block;
          margin-bottom: 0.267rem;
        }
      }
    }

    .powered {
      background: #1B1349;
      padding-top: 1.2rem;
      padding-bottom: 0.4rem;

      img {
        width: 9.6rem;
        height: auto;
        margin: 0 auto;
        display: block;
      }
    }
  }
</style>
