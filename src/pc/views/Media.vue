<template>
  <div class='media_template'>
    <div class='gwi-row'>
      <div class='topnav'>
        <img src="@/assets/img/top_nav.png" alt="">
        <div class='topnav-title'>{{media.Title}}</div>
      </div>
    </div>
    <div class='gwi-row'>
      <div class='gwi-row-content'>
        <div class='gwi-media-group'>
          <div class='gwi-media-item' v-for='(item,index) in media.medialist' :key='index'>
            <div class='media-img'>
              <img :src="item.imgUrl" alt="">
            </div>
            <div class='media-title'>{{item.title}}</div>
            <div class='media-time'>{{item.time}}</div>
          </div>
        </div>
        <div class='pagination-box'>
          <el-pagination
            background
            layout="prev, pager, next"
            :total="8">
          </el-pagination>
        </div>
        
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name:'media',
  data(){
    return {
      media:this.$language[this.$store.state.language].media
    }
  },
  watch:{
    languagetype() {
      this.media=this.$language[this.languagetype].media
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
  .media_template{
    .gwi-media-group{
      display: flex;
      flex-wrap: wrap;
      .gwi-media-item{
        width:24%;
        margin:0 4px 20px;
        padding:12px;
        box-sizing: border-box;
        background:#fff;
        &:hover{
          box-shadow:0px 6px 11px 0px rgba(0, 0, 0, 0.2);
        }
        .media-img{
          height:156px;
          overflow: hidden;
           img{
              width:100%;
            }
        }
        .media-title{
          text-align: center;
          line-height: 30px;
          color:#333;
          margin-top:10px;
        }
        .media-time{
          margin-top:30px;
          text-align: left;
          color:#9A9A9A;
          font-size:12px;
        }
      }
    }
    .pagination-box{
      display: flex;
      justify-content: flex-end;
    }
  }
</style>