<template>
    <div class="Menu">
      <div @click='selectedMenu("/m/intro")'>{{menus.introduce}}</div>
      <div @click='selectedMenu("/m/macroAnalysis")'>{{menus.analysis}}</div>
      <div @click='selectedMenu("/m/business")'>{{menus.business}}</div>
      <div @click='selectedMenu("/m/ecology")'>{{menus.ecology}}</div>
      <div @click='selectedMenu("/m/platform")'>{{menus.platform}}</div>
      <div @click='selectedMenu("/m/technology")'>{{menus.skill}}</div>
      <div @click='selectedMenu("/m/foundation")'>{{menus.fund}}</div>
      <div @click='selectedMenu("/m/economy")'>{{menus.economy}}</div>
      <div @click='selectedMenu("/m/development")'>{{menus.history}}</div>
      <div @click='selectedMenu("/m/media")'>{{menus.media}}</div>
      <div @click='selectedMenu("/m/team")'>{{menus.cooperate}}</div>
      <div @click='selectedMenu("/m/contact")'>{{menus.contact}}</div>
      <div class="language">
        <span @click='changeLanguage("zh")'>中文</span>
        <span @click='changeLanguage("en")'>English</span>
        <span @click='changeLanguage("rn")'>日本語</span>
        <span @click='changeLanguage("hn")'>한국어</span>
      </div>
    </div>
</template>

<script>
    export default {
        name: "menus",
        data(){
          return {
            menus:this.$language[this.$store.state.language].header
          }
        },
        watch:{
          languagetype() {
            this.menus=this.$language[this.languagetype].header
          }
        },
        computed: {
          languagetype: function() {
            return this.$store.state.language;
          }
        },
        methods: {
          selectedMenu(path){
            this.$emit('menuClickEvent',path)
          },
          changeLanguage(language) {
            this.$store.commit("languageChuang", { language: language });
          }
        }
    }
</script>

<style scoped lang="scss">
    .Menu {
      position: fixed;
      top: 1rem;
      right: 0;
      left: 0;
      bottom: 0;
      background:rgba(0,0,0,0.8);
      z-index: 999;
      padding-top: 0.8rem;
      div{
        color: #fff;
        text-align: center;
        font-size:0.32rem;
        line-height: 1rem;
      }
      .language{
        span{
          padding: 0 0.267rem;
        }
      }
    }
</style>
