<template>
  <div class="Home">
    <!--banner-->
    <!-- <div class="banner"><img src="@/assets/mobileImage/banner.png" alt="" /></div> -->
    <div class='home-banner' id='WebGL-output'>
      <div class='home-banner-content' >
        <div class='home-banner-h1'>INVINCIBLE GAME WORLD</div>
        <div class='home-banner-title'>—{{home.bannerH1}}—</div>
        <div class='home-banner-doc'>{{home.bannerH2}}</div>
      </div>
    </div>
    <!--IGW简介-->
    <div class="introduce">
      <Title :text="home.introduceTitle"></Title>
      <div class="text">
        {{home.introduceDoc}}
      </div>
      <router-link to='/m/intro'>
        <Raduis :text='home.learnMore' bg="#1862E9"></Raduis>
      </router-link>
    </div>
    <!--区块链宏观分析-->
    <div class="blockchain">
      <Title :text="home.analysisTitle" color="#fff"></Title>
      <p class="text1">
        {{home.analysish1}}
      </p>
      <p class="text2">
        {{home.analysish2}}
      </p>
      <div class="four">
        <img src="@/assets/mobileImage/blockchain_05.jpg" alt="" />
        <img src="@/assets/mobileImage/blockchain_07.jpg" alt="" />
        <img src="@/assets/mobileImage/blockchain_14.jpg" alt="" />
        <img src="@/assets/mobileImage/blockchain_17.png" alt="" />
      </div>
      <router-link to='/m/macroAnalysis'>
        <Raduis :text='home.learnMore'></Raduis>
      </router-link>
    </div>
    <!--IGW全球游戏生态联盟-->
    <div class="alliance">
      <Title :text="home.ecologyTitle"></Title>
      <div class="text">
        {{home.ecologyDoc}}
      </div>
      <div class="img-box">
        <div>
          <img src="@/assets/img/gw1.png" alt="" />
          <div>{{home.ecologyIcon1}}</div>
        </div>
        <div>
          <img src="@/assets/img/gw2.png" alt="" />
          <div>{{home.ecologyIcon2}}</div>
        </div>
        <div>
          <img src="@/assets/img/gw3.png" alt="" />
          <div>{{home.ecologyIcon3}}</div>
        </div>
        <div>
          <img src="@/assets/img/gw4.png" alt="" />
          <div>{{home.ecologyIcon4}}</div>
        </div>
      </div>
      <router-link to='/m/ecology'>
        <Raduis :text='home.learnMore' color="#000"></Raduis>
      </router-link>
    </div>
    <!--IGW BASICS-->
    <div class="basics">
      <p>
        IGW Basics
      </p>
      <p>
        {{home.gameCreate}}
      </p>
      <div class="texture">
        <div>
          <img src="@/assets/img/icon1.png" alt="" />
          {{home.gameIcon1}}
        </div>
        <div>
          <img src="@/assets/img/icon2.png" alt="" />
           {{home.gameIcon2}}
        </div>
      </div>
      <div class="texture">
        <div>
          <img src="@/assets/img/icon3.png" alt="" />
          {{home.gameIcon3}}
        </div>
        <div>
          <img src="@/assets/img/icon4.png" alt="" />
           {{home.gameIcon4}}
        </div>
      </div>
    </div>
    <!--powered-->
    <div class="powered">
      <img src="@/assets/mobileImage/powerd_03.png" alt="" />
      
       <router-link to='/m/technology'>
          <Raduis :text='home.learnMore'></Raduis>
        </router-link>
    </div>
    <!--IGW基金会-->
    <div class="fund">
      <Title :text="home.fundTitle"></Title>
      <div class="text">
        {{home.fundDoc}}
      </div>
      <img src="@/assets/img/map.png" alt="" />
      
      <router-link to='/m/foundation'>
          <Raduis :text='home.learnMore' color="#000"></Raduis>
      </router-link>
    </div>
    <!--路线图-->
    <div class="route">
      <img src="@/assets/mobileImage/time_line_02.png" alt="" />
    </div>
    <!--联系我们-->
    <div class="contact">
      <Title :text="home.callMe"></Title>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
        <el-form-item prop="user_name" class="form-item-input input-name">
          <label>{{home.name}} | NAME</label>
          <el-input type="text" maxlength="8" v-model="ruleForm.user_name"></el-input>
        </el-form-item>
        <el-form-item prop="user_phone" class="form-item-input input-phone">
          <label>{{home.phone}} | PHONE</label>
          <el-input type="tel" maxlength="11" v-model="ruleForm.user_phone"></el-input>
        </el-form-item>
        <el-form-item prop="user_message" class="form-item-textarea">
          <label>{{home.message}} | MESSAGE</label>
          <el-input
            type="textarea"
            maxlength="120"
            v-model="ruleForm.user_message"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
      <div class="gwi-row-more" @click='addMessage'>{{home.seedMessage}}</div>
    </div>
  </div>
</template>

<script>
import Title from '../components/Title'
import Raduis from '../components/Radius'
import Axios from 'axios'
import * as THREE from 'three'
import $ from 'jquery'
export default {
  name: 'Home',
  created() {},
   mounted(){
       // create a scene, that will hold all our elements such as objects, cameras and lights.
        var scene = new THREE.Scene();

        // create a camera, which defines where we're looking at.
        var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

        // create a render and set the size
        var webGLRenderer = new THREE.WebGLRenderer();
        webGLRenderer.setClearColor(new THREE.Color(0x000000, 0.0));
        webGLRenderer.setSize(window.innerWidth, window.innerHeight);
        webGLRenderer.shadowMapEnabled = true;

        // position and point the camera to the center of the scene
        camera.position.x = -30;
        camera.position.y = 40;
        camera.position.z = 50;
        camera.lookAt(new THREE.Vector3(10, 0, 0));

        // add the output of the renderer to the html element
        $("#WebGL-output").append(webGLRenderer.domElement);

        // call the render function
        var step = 0;

        var knot;

        // setup the control gui
        var controls = new function () {
            // we need the first child, since it's a multimaterial
            this.radius = 40;
            this.tube = 28.2;
            this.radialSegments = 600;
            this.tubularSegments = 12;
            this.p = 5;
            this.q = 4;
            this.heightScale = 4;
            this.asParticles = true;
            this.rotate = true;

            this.redraw = function () {
                // remove the old plane
                if (knot) scene.remove(knot);
                // create a new one
                var geom = new THREE.TorusKnotGeometry(controls.radius, controls.tube, Math.round(controls.radialSegments), 
                Math.round(controls.tubularSegments), Math.round(controls.p), Math.round(controls.q), controls.heightScale);

                if (controls.asParticles) {
                    knot = createParticleSystem(geom);
                } else {
                    knot = createMesh(geom);
                }

                // add it to the scene.
                scene.add(knot);
            };

        }

        controls.redraw();

        render();

        // from THREE.js examples
        function generateSprite() {

            var canvas = document.createElement('canvas');
            canvas.width = 16;
            canvas.height = 16;

            var context = canvas.getContext('2d');
            var gradient = context.createRadialGradient(canvas.width / 2, canvas.height / 2, 0, canvas.width / 2, canvas.height / 2, canvas.width / 2);
            gradient.addColorStop(0, 'rgba(255,255,255,1)');
            gradient.addColorStop(0.2, 'rgba(0,255,255,1)');
            gradient.addColorStop(0.4, 'rgba(0,0,64,1)');
            gradient.addColorStop(1, 'rgba(0,0,0,1)');

            context.fillStyle = gradient;
            context.fillRect(0, 0, canvas.width, canvas.height);

            var texture = new THREE.Texture(canvas);
            texture.needsUpdate = true;
            return texture;

        }

        function createParticleSystem(geom) {
            var material = new THREE.ParticleBasicMaterial({
                color: 0xffffff,
                size: 3,
                transparent: true,
                blending: THREE.AdditiveBlending,
                map: generateSprite()
            });

            var system = new THREE.ParticleSystem(geom, material);
            system.sortParticles = true;
            return system;
        }

        function createMesh(geom) {

            // assign two materials
            var meshMaterial = new THREE.MeshNormalMaterial({});
            meshMaterial.side = THREE.DoubleSide;

            // create a multimaterial
            var mesh = THREE.SceneUtils.createMultiMaterialObject(geom, [meshMaterial]);

            return mesh;
        }

        function render() {
           
            if (controls.rotate) {
                knot.rotation.y = step += 0.01;
            }

            // render using requestAnimationFrame
            requestAnimationFrame(render);
            webGLRenderer.render(scene, camera);
        }

  },
  components: {
    Title,
    Raduis
  },
  data() {
    var validatename = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入姓名'))
      } else {
        callback()
      }
    }
    var validatephone = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入手机号'))
      } else {
        if (!/^1[3456789]\d{9}$/.test(value)) {
          callback(new Error('手机号格式不正确'))
        } else {
          callback()
        }
      }
    }
    var validatemessage = (rule, value, callback) => {
      if (value === '') {
        callback(new Error('请输入留言信息'))
      } else {
        callback()
      }
    }
    return {
      ruleForm: {
        user_name: '',
        user_phone: '',
        user_message: ''
      },

      rules: {
        user_name: [{ validator: validatename, trigger: 'blur' }],
        user_phone: [{ validator: validatephone, trigger: 'blur' }],
        user_message: [{ validator: validatemessage, trigger: 'blur' }]
      },
      home:this.$language[this.$store.state.language].home
    }
  },
  methods: {
    addMessage() {
      this.$refs['ruleForm'].validate(valid => {
        if (valid) {
          this.setAddmessage()
        } else {
          return false
        }
      })
    },
    setAddmessage() {
      const api_url = '/leaving-message/add'
      Axios.post(api_url, {
        user_name: this.ruleForm.user_name,
        phone: this.ruleForm.user_phone,
        message: this.ruleForm.user_message
      }).then(res => {
        let data = res.data
        if (data.code === 0) {
          this.ruleForm.user_name = ''
          this.ruleForm.user_phone = ''
          this.ruleForm.user_message = ''
          this.$message({
            message: data.message,
            type: 'success'
          })
        }
      })
    }
  },
  watch:{
    languagetype() {
      this.home=this.$language[this.languagetype].home
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
      font-size: 12px;
    }

    input {
      background: rgba(243, 243, 243, 1);
      box-shadow: 0rem 0.013rem 0rem 0rem rgba(255, 255, 255, 1);
      border-radius: 0.587rem;
    }
  }
  .gwi-row-more{
    margin: 15px auto;
    display: flex;
    justify-content: center;
    align-items: center;
    width:3.493rem;
    height:1.173rem;
    box-shadow:0rem 0.187rem 0.4rem 0.027rem rgba(0, 0, 0, 0.2);
    border-radius:0.587rem;
    font-size:0.32rem;
    color: #000;
    border: 1px solid #000;
  }
}
</style>
<style scoped lang="scss">
.Home {
  .home-banner{
      width:100%;
      height:300px;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      .home-banner-content{
        text-align: center;
        color:#fff;
        position: absolute;
        .home-banner-h1{
          font-size:20px;
          font-family:DINBlackAlternate;
        }
        .home-banner-title{
          font-size:16px;
          margin-top:10px;
        }
        .home-banner-doc{
          font-size:12px;
          letter-spacing:1px;
          margin-top:20px;
          width:100%;
          text-align: justify;
          &::after {
              display: inline-block;
              width: 100%;
              content: '';
              height: 0;
          }
        }
      }
    }
  // .banner {
  //   img {
  //     width: 100%;
  //     height: auto;
  //   }
  // }

  .text {
    font-size: 12px;
    color: #595959;
    line-height: 24px;
  }

  .introduce {
    padding: 0 10px;
  }

  .alliance {
    padding: 0 10px;
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
        font-size: 14px;
        color: #07070d;
        width: 50%;
        text-align: center;
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
      height: auto;
    }
  }

  .blockchain {
    display: block;
    background: #1b1349;
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
      background: url('../../assets/img/icon_tv.png') no-repeat;
      background-size: cover;
    }

    p:nth-child(1) {
      font-size: 0.88rem;
      color: #07070d;
      font-weight: bold;
    }

    p:nth-child(2) {
      font-size: 0.587rem;
      color: #07070d;
      margin-bottom: 0.933rem;
    }

    .texture {
      display: flex;

      > div {
        margin-right: 0.5rem;
        margin-bottom: 0.4rem;
        font-size: 12px;
        color: #07070d;
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
    background: #1b1349;
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
