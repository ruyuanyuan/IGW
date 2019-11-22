<template>
  <div class="header_template">
    <div class="header_content">
      <div class="logo_img">
        <router-link to="/pc"><img src="@/assets/img/logo.png" alt=""/></router-link>
      </div>
      <div class="gwi-menu">
        <div v-for="(item, index) in menu" :key="index">
          <div class="gwi-menu-item" v-if="!item.children">
            <router-link :to="item.router">{{ item.lable }}</router-link>
            <div class="gwi-line" :class="routePath === item.router ? 'active' : ''"></div>
          </div>
          <div class="gwi-menu-group" v-if="item.children">
            <div class="gwi-menu-group-title">
              <router-link :to="item.router">{{ item.lable }}</router-link>
            </div>
            <div class="gwi-menu-group-content">
              <div class="gwi-menu-item" v-for="(child, key) in item.children" :key="key">
                <router-link :to="child.router">{{ child.lable }}</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <el-select
        v-model="language"
        class="languageSelect"
        placeholder="请选择"
        @change="changeLanguage"
      >
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      language: "zh",
      options: [
        {
          label: "中文",
          value: "zh"
        },
        {
          label: "English",
          value: "en"
        },
        {
          label: "日本語",
          value: "rn"
        },
        {
          label: "한국어",
          value: "hn"
        }
      ],
      menu: [],
      routePath: "/"
    };
  },
  methods: {
    changeLanguage() {
      console.log(1);
      this.$store.commit("languageChuang", { language: this.language });
    }
  },
  mounted() {
    this.menu = [
      {
        lable: this.$language[this.languagetype].header.introduce,
        router: "/pc/introduce"
      },
      {
        lable: this.$language[this.languagetype].header.analysis,
        router: "/pc/analysis"
      },
      {
        lable: this.$language[this.languagetype].header.business,
        router: "/pc/business",
        children: [
          {
            lable: this.$language[this.languagetype].header.ecology,
            router: "/pc/ecology"
          },
          {
            lable: this.$language[this.languagetype].header.platform,
            router: "/pc/platform"
          }
        ]
      },
      {
        lable: this.$language[this.languagetype].header.skill,
        router: "/pc/skill"
      },
      {
        lable: this.$language[this.languagetype].header.fund,
        router: "/pc/fund"
      },
      {
        lable: this.$language[this.languagetype].header.economy,
        router: "/pc/economy"
      },
      {
        lable: this.$language[this.languagetype].header.history,
        router: "/pc/history"
      },
      {
        lable: this.$language[this.languagetype].header.media,
        router: "/pc/media"
      },
      {
        lable: this.$language[this.languagetype].header.cooperate,
        router: "/pc/cooperate"
      },
      {
        lable: this.$language[this.languagetype].header.contact,
        router: "/pc/contact"
      }
    ];
  },
  watch: {
    $route(to) {
      this.routePath = to.path;
    },
    languagetype() {
      this.menu = [
        {
          lable: this.$language[this.languagetype].header.introduce,
          router: "/pc/introduce"
        },
        {
          lable: this.$language[this.languagetype].header.analysis,
          router: "/pc/analysis"
        },
        {
          lable: this.$language[this.languagetype].header.business,
          router: "/pc/business",
          children: [
            {
              lable: this.$language[this.languagetype].header.ecology,
              router: "/pc/ecology"
            },
            {
              lable: this.$language[this.languagetype].header.platform,
              router: "/pc/platform"
            }
          ]
        },
        {
          lable: this.$language[this.languagetype].header.skill,
          router: "/pc/skill"
        },
        {
          lable: this.$language[this.languagetype].header.fund,
          router: "/pc/fund"
        },
        {
          lable: this.$language[this.languagetype].header.economy,
          router: "/pc/economy"
        },
        {
          lable: this.$language[this.languagetype].header.history,
          router: "/pc/history"
        },
        {
          lable: this.$language[this.languagetype].header.media,
          router: "/pc/media"
        },
        {
          lable: this.$language[this.languagetype].header.cooperate,
          router: "/pc/cooperate"
        },
        {
          lable: this.$language[this.languagetype].header.contact,
          router: "/pc/contact"
        }
      ];
    }
  },
  computed: {
    languagetype: function() {
      return this.$store.state.language;
    }
  }
};
</script>
<style lang="scss">
.header_template {
  width: 100%;
  height: 56px;
  background: #0a1032;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  .header_content {
    display: flex;
    width: 1100px;
    height: 100%;
    margin: 0 auto;
    .logo_img {
      width: 50px;
      height: 100%;
      text-align: center;
      color: #fff;
      display: flex;
      align-items: center;
      img {
        height: 32px;
      }
    }
    .gwi-menu {
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex: 1;
      .gwi-menu-item {
        text-align: center;
        line-height: 56px;
        cursor: pointer;
        position: relative;
        width: 70px;
        a {
          color: #fff;
          font-weight: 400;
        }
        .gwi-line {
          position: relative;
          top: -8px;
          height: 2px;
          background: #1862e9;
          width: 0;
          transition: all 0.2s linear;
          &.active {
            width: 100%;
          }
        }

        &:hover {
          .gwi-line {
            width: 100%;
          }
        }
      }
      .gwi-menu-group {
        height: 42px;
        line-height: 42px;
        position: relative;
        width: 110px;
        .gwi-menu-group-title {
          color: #fff;
          cursor: pointer;
          width: 100%;
          text-align: center;
          a {
            color: #fff;
          }
        }
        &:hover .gwi-menu-group-content {
          height: 80px;
        }
        .gwi-menu-group-content {
          height: 0;
          transition: all 0.2s linear;
          overflow: hidden;
          width: 100%;
          position: absolute;
          top: 42px;
          z-index: 100;
          .gwi-menu-item {
            background: #0a1032;
            width: 100%;
            height: 40px;
            line-height: 40px;
            text-align: center;
            border-bottom: 1px solid #313131;
            a {
              font-weight: 400;
              color: #fff;
            }
          }
        }
      }
    }
    .languageSelect {
      width: 100px;
      margin-left: 20px;
      display: flex;
      align-items: center;
      color: #fff;
      .el-input__inner {
        height: 30px;
        line-height: 30px;
        background: transparent;
        color: #fff;
      }
      .el-input__prefix,
      .el-input__suffix {
        .el-input__icon {
          line-height: 30px;
        }
      }
    }
  }
}
</style>
