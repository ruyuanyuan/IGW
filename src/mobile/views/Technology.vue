<template>
    <div class="Technology">
      <Area :text="skill.Title" />
      <!--技术架构-->
      <div class="architecture">
        <Underline :text="skill.frameworkTitle"></Underline>
        <img src="@/assets/mobileImage/technology_03.png" alt="">
        <div class="text">
          {{skill.frameworkDoc}}
        </div>
      </div>
      <!--技术亮点-->
      <div class="highlight">
        <Underline :text="skill.spotTitle"></Underline>
        <div class="word">
          <div class="name">
            <div class="blue-square"></div>
            {{skill.spotItem1}}
          </div>
          <div class="desc">
            {{skill.spotItem1Doc}}
          </div>
        </div>
        <div class="word">
          <div class="name">
            <div class="blue-square"></div>
            {{skill.spotItem2}}
          </div>
          <div class="desc">
            {{skill.spotItem2Doc}}
          </div>
        </div>
        <div class="word">
          <div class="name">
            <div class="blue-square"></div>
            {{skill.spotItem3}}
          </div>
          <div class="desc">
            {{skill.spotItem3Doc}}
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    import Underline from "../components/Underline"
    import Area from "../components/Area"
    export default {
        name: "Technology",
        data(){
          return {
              skill:this.$language[this.$store.state.language].skill
          }
        },
        watch:{
          languagetype() {
            this.skill=this.$language[this.languagetype].skill
          }
        },
        computed: {
          languagetype: function() {
            return this.$store.state.language;
          }
        },
        components: {
          Underline,
          Area
        },
        methods: {}
    }
</script>

<style scoped lang="scss">
    .Technology {
      .banner{
        height: 1.467rem;
        background: url("../../assets/img/top_nav.png") no-repeat;
        background-size: cover;
        font-size:0.4rem;
        color: #fff;
        font-weight: bold;
        display: flex;
        align-items: center;
        padding-left: 0.213rem;
      }
      .architecture{
        background: #fff;
        padding: 0 0.213rem;
        img{
          width: 100%;
          height: auto;
          display: block;
          margin-bottom: 20px;
        }
        .text{
          font-size: 12px;
          color: #595959;
          line-height: 24px;
          margin-bottom: 20px;
        }
      }
      .highlight{
        background: #EDEFF2;
        padding-bottom: 20px;
      }
      .word{
        margin-bottom: 0.6rem;
        padding: 0 0.213rem;
        &:last-child{
          margin-bottom: 0!important;
        }
        .name{
          display: flex;
          font-size: 14px;
          align-items: center;
          color: #000;
          margin-bottom: 10px;
          .blue-square{
            width:15px;
            height:15px;
            background:rgba(24,98,233,1);
            margin-right: 10px;
          }
        }
        .desc{
          font-size: 12px;
          color: #595959;
          line-height: 24px;
        }
      }
    }
</style>
