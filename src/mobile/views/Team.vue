<template>
    <div class="Team">
      <Area text="合作机构"/>
      <div class="box">
        <img class="img1" src="@/assets/img/school1.png" alt="">
        <p>清华大学数字金融资产研究院</p>
        <p>清华大学金融发展研究中心</p>
        <p>清华大学经管学院创业者加速器区块链应用实验室</p>
      </div>
      <div class="box">
        <img class="img2" src="@/assets/img/school2.png" alt="">
        <p>清华大学数字金融资产研究院</p>
        <p>清华大学金融发展研究中心</p>
        <p>清华大学经管学院创业者加速器区块链应用实验室</p>
      </div>
      <div class="box">
        <img class="img3" src="@/assets/img/school3.png" alt="">
        <p>清华大学数字金融资产研究院</p>
        <p>清华大学金融发展研究中心</p>
        <p>清华大学经管学院创业者加速器区块链应用实验室</p>
      </div>
    </div>
</template>

<script>
  import Area from "../components/Area"
    export default {
        name: "Team",
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
    .Team {
      background: #fff;
      .box{
        width: 7rem;
        border-bottom: 0.027rem solid #BFBFBF;
        margin: 0 auto;
        text-align: center;
        img{
          margin: 10px 0;
        }
        p{
          font-size: 12px;
          line-height: 24px;
          color: #555;
          &:last-child{
            margin-bottom: 30px;
          }
        }
      }
    }
</style>
