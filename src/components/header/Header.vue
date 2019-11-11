<template>
  <div class="header_template">
    <div class='header_content'>
      <div class="logo_img"><img src="@/assets/img/logo.png" alt=""></div>
      <div class="gwi-menu">
        <div v-for="(item,index) in menu" :key="index">
          <div class="gwi-menu-item" v-if='!item.children'>
            <router-link :to='item.router'>{{item.lable}}</router-link>
            <div class='gwi-line'></div>
          </div>
          <div class="gwi-menu-group" v-if='item.children'>
            <div class='gwi-menu-group-title'>{{item.lable}}</div>
            <div class='gwi-menu-group-content'>
              <div class="gwi-menu-item" v-for='(child,key) in item.children' :key='key'>
                <router-link :to='child.router'>{{child.lable}}</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menu: [
        {
          lable: "IGW介绍",
          router: "/introduce"
        },
        {
          lable: "宏观分析",
          router: "/"
        },
        {
          lable: "IGW商业模式",
          router: "",
          children: [
            {
              lable: "全球游戏生态联盟",
              router: ""
            },
            {
              lable: "IGW Basics",
              router: ""
            }
          ]
        },
        {
          lable: "技术优势",
          router: ""
        },
        {
          lable: "基金会",
          router: ""
        },
        {
          lable: "发展路线",
          router: "/history"
        },
        {
          lable: "媒体",
          router: ""
        },
        {
          lable: "合作机构",
          router: ""
        },
        {
          lable: "联系我们",
          router: ""
        }
      ]
    };
  }
};
</script>
<style lang="scss">
  .header_template{
    width:100%;
    height:42px;
    background:#0A1032;
    .header_content{
      display: flex;
      width:1000px;
      height:100%;
      margin:0 auto;
      .logo_img{
        width:80px;
        height:100%;
        text-align: center;
        color:#fff;
        display: flex;
        align-items: center;
        img{
          height:32px;
        }
      }
      .gwi-menu{
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex:1;
        .gwi-menu-item{
          text-align: center;
          line-height: 42px;
          cursor: pointer;
          position: relative;
          width:90px;
          a{
            color: #fff;
            font-weight:400;
          }
          .gwi-line{
            position: relative;
            top:-8px;
            height:2px;
            background:#1862E9;
            width:0;
            transition: all 0.2s linear;
          }
          &:hover{
            .gwi-line{
              width:100%;
            }
          }
        }
        .gwi-menu-group{
          height:42px;
          line-height: 42px;
          position: relative;
          width:160px;
          .gwi-menu-group-title{
            color:#fff;
            cursor: pointer;
            width:100%;
            text-align: center;
          }
          &:hover .gwi-menu-group-content{
            height:80px;
          }
          .gwi-menu-group-content{
            height:0;
            transition:  all 0.2s linear;
            overflow: hidden;
            width:100%;
            position: absolute;
            top:42px;
            .gwi-menu-item{
              background: #0A1032;
              width:100%;
              height:40px;
              line-height: 40px;
              text-align: center;
              border-bottom:1px solid #313131;
              a{
                font-weight:400;
                color:#fff;
              }
            }
          }
        }
      }
    }
  }
</style>