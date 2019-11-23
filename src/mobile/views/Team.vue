<template>
    <div class="Team">
      <Area :text="team.Title"/>
      <div class="box">
        <img class="img1" src="@/assets/img/school1.png" alt="">
        <p>{{team.cooperateh1}}</p>
        <p>{{team.cooperateh2}}</p>
        <p>{{team.cooperateh3}}</p>
      </div>
      <div class="box">
        <img class="img2" src="@/assets/img/school2.png" alt="">
        <p>{{team.cooperateh4}} Global Systems</p>
      </div>
      <div class="box">
        <img class="img3" src="@/assets/img/school3.png" alt="">
        <p>{{team.cooperateh4}} ROSE ONLINE</p>
      </div>
    </div>
</template>

<script>
  import Area from "../components/Area"
    export default {
        name: "Team",
        data(){
            return {
              team:this.$language[this.$store.state.language].cooperate
          }
        },
        watch:{
          languagetype() {
            this.team=this.$language[this.languagetype].cooperate
          }
        },
        computed: {
          languagetype: function() {
            return this.$store.state.language;
          }
        },
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
