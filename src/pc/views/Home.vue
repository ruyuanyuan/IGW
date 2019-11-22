<template>
  <div class='home_template'>
    <div class='home-banner' id='WebGL-output'>
      <div class='home-banner-content' >
        <div class='home-banner-h1'>INVINCIBLE GAME WORLD</div>
        <div class='home-banner-title'>—{{home.bannerH1}}—</div>
        <div class='home-banner-doc'>{{home.bannerH2}}</div>
      </div>
    </div>
    <div class='gwi-row'>
        <div class='gwi-row-content'>
          <div class='gwi-row-title'>{{home.introduceTitle}}</div>
          <div class='gwi-doc'>
           {{home.introduceDoc}}
          </div>
          <div class='gwi-row-more'>
            <router-link to='/pc/introduce'>{{home.learnMore}}</router-link>
          </div>
        </div>
    </div>
    <div class='gwi-row analysis-row'>
        <div class='gwi-row-content'>
          <div class='gwi-row-title font-while'>{{home.analysisTitle}}</div>
          <div class='analysis-title'>
            <div class='analysis-p'>{{home.analysish1}}</div>
            <div class='analysis-p analysis-p-blod'>{{home.analysish2}}</div>
          </div>
          <div class='gwi-book-group'>
            <div class='gwi-book-item'>
              <img src="@/assets/img/book1.png" alt="">
            </div>
            <div class='gwi-book-item'>
              <img src="@/assets/img/book2.png" alt="">
            </div>
            <div class='gwi-book-item'>
              <img src="@/assets/img/book3.png" alt="">
            </div>
            <div class='gwi-book-item'>
              <img src="@/assets/img/book4.png" alt="">
            </div>
          </div>
          <div class='gwi-row-more btn-while'>
            <router-link to='/pc/analysis'>{{home.learnMore}}</router-link>
          </div>
        </div>
    </div>
    <div class='gwi-row union-row'>
        <div class='gwi-row-content'>
          <div class='gwi-row-title'>{{home.ecologyTitle}}</div>
          <div class='gwi-doc'>
            {{home.ecologyDoc}}
          </div>
          <div class='gwi-gw-group'>
            <div class='gwi-gw-item'>
              <img src="@/assets/img/gw1.png" alt="">
              <span>{{home.ecologyIcon1}}</span>
            </div>
            <div class='gwi-gw-item'>
              <img src="@/assets/img/gw2.png" alt="">
              <span>{{home.ecologyIcon2}}</span>
            </div>
            <div class='gwi-gw-item'>
              <img src="@/assets/img/gw3.png" alt="">
              <span>{{home.ecologyIcon3}}</span>
            </div>
            <div class='gwi-gw-item'>
              <img src="@/assets/img/gw4.png" alt="">
              <span>{{home.ecologyIcon4}}</span>
            </div>
          </div>
          <div class='gwi-row-more'>
            <router-link to='/pc/ecology'>{{home.learnMore}}</router-link>
          </div>
        </div>
    </div>
    <div class='gwi-row tv-row'>
        <div class='gwi-row-content'>
          <div class='igw_left'>
            <div class='igw_h'>IGW Basics</div>
            <div class='igw_p'>{{home.gameCreate}}</div>
            <div class='igw-software-group'>
              <div class='igw-software-item'>
                <img src="@/assets/img/icon1.png" alt="">
                <span>{{home.gameIcon1}}</span>
              </div>
              <div class='igw-software-item'>
                <img src="@/assets/img/icon2.png" alt="">
                <span>{{home.gameIcon2}}</span>
              </div>
              <div class='igw-software-item'>
                <img src="@/assets/img/icon3.png" alt="">
                <span>{{home.gameIcon3}}</span>
              </div>
              <div class='igw-software-item'>
                <img src="@/assets/img/icon4.png" alt="">
                <span>{{home.gameIcon4}}</span>
              </div>
            </div>
          </div>
          <div class='igw_right'>
            <img src="@/assets/img/icon_tv.png" alt="">
          </div>
        </div>
    </div>
    <div class='gwi-row powered-row'>
        <img src="@/assets/img/bg1.png" alt="">
        <div class='gwi-row-more btn-while'>
             <router-link to='/pc/skill'>{{home.learnMore}}</router-link>
          </div>
    </div>
    <div class='gwi-row fund-row'>
        <div class='gwi-row-content'>
          <div class='gwi-row-title'>{{home.fundTitle}}</div>
          <div class='fund-row-content'>
            <div class='fund-row-left'>
              {{home.fundDoc}}
            </div>
            <div class='fund-row-right'>
              <img src="@/assets/img/map.png" alt="">
            </div>
          </div>
          <div class='gwi-row-more'>
             <router-link to='/pc/fund'>{{home.learnMore}}</router-link>
          </div>
        </div>
    </div>
     <div class='gwi-row history-row'>
        <div class='gwi-row-title font-while'>{{home.roadMap}}</div>
        <img src="@/assets/img/bg2.png" alt="">
    </div>
    <div class='gwi-row callme-row'>
        <div class='gwi-row-content'>
          <div class='gwi-row-title'>{{home.callMe}}</div>
          <div class='form-content'>
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" >
              <el-form-item prop="user_name" class='form-item-input input-name'>
                <label >{{home.name}} | NAME</label>
                <el-input type="text" maxlength='8' v-model="ruleForm.user_name" ></el-input>
              </el-form-item>
               <el-form-item prop="user_phone" class='form-item-input input-phone'>
                <label >{{home.phone}} | PHONE</label>
                <el-input type="tel" maxlength="11"  v-model="ruleForm.user_phone"></el-input>
              </el-form-item>
              <el-form-item  prop="user_message" class='form-item-textarea' >
                <label >{{home.message}} | MESSAGE</label>
                <el-input type="textarea" maxlength="120" v-model="ruleForm.user_message" autocomplete="off"></el-input>
              </el-form-item>
            </el-form>
            <div class='form-btn-group'>
              <div class='form-btn' @click='addMessage'>{{home.seedMessage}}</div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>
<script>
import Axios from 'axios';
import * as THREE from 'three'
import $ from 'jquery'
export default {
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
  data(){
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
          if(!(/^1[3456789]\d{9}$/.test(value))){   
              callback(new Error('手机号格式不正确')); 
          }else{
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
      ruleForm:{
        user_name:'',
        user_phone:'',
        user_message:'',
      },
      rules: {
        user_name: [
          { validator: validatename, trigger: 'blur' }
        ],
        user_phone: [
          { validator: validatephone, trigger: 'blur' }
        ],
        user_message: [
          { validator: validatemessage, trigger: 'blur' }
        ]
      },
      home:this.$language.zh.home
    }
  },
  methods: {
    addMessage(){
      this.$refs['ruleForm'].validate((valid) => {
          if (valid) {
            this.setAddmessage()
          } else {
            return false;
          }
        });
    },
    setAddmessage(){
      const api_url = '/leaving-message/add'
      Axios.post(api_url,{
        user_name:this.ruleForm.user_name,
        phone:this.ruleForm.user_phone,
        message:this.ruleForm.user_message
      })
      .then(res=>{
        let data=res.data
        if(data.code===0){
          this.ruleForm.user_name=''
          this.ruleForm.user_phone=''
          this.ruleForm.user_message=''
          this.$message({
          message: data.message,
          type: 'success'
        });
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
  .home_template{
    .home-banner{
      width:100%;
      height:600px;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      .home-banner-content{
        text-align: center;
        color:#fff;
        position: absolute;
        .home-banner-h1{
          font-size:36px;
          font-family:DINBlackAlternate;
        }
        .home-banner-title{
          font-size:25px;
          margin-top:20px;
        }
        .home-banner-doc{
          font-size:13px;
          letter-spacing:2px;
          margin-top:40px;
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
    .gwi-doc{
      width:100%;
      font-size:14px;
      color:#595959;
      text-align: center;
      line-height: 30px;
      letter-spacing: 2px;
      margin-bottom:80px;
    }
    .analysis-row{
      background:#1B1349;
      .analysis-title{
        width:100%;
        .analysis-p{
          font-size:18px;
          color:#fff;
          line-height: 24px;
          &.analysis-p-blod{
            font-weight: bold;
          }
        }
      }
      .gwi-book-group{
        width:100%;
        margin-top:30px;
        margin-bottom: 45px;
        display: flex;
        justify-content: space-around;
        .gwi-book-item{
          width:25%;
          margin-right:30px;
          transition: all 0.2s linear;
          &:last-child{
            margin-right:0;
          }
          img{
            width:100%;
          }
          &:hover{
            transform: scale(1.1)
          }
        }
      }
    }
    .union-row{
      background:#EDEFF2;
      .gwi-doc{
        margin-bottom: 40px;
      }
      .gwi-gw-group{
        display: flex;
        justify-content: space-between;
        margin-bottom: 50px;
        .gwi-gw-item{
          width:96px;
          text-align: center;
          transition: all 0.2s linear;
          &:hover{
            transform: scale(1.1)
          }
          img{
            width:100%;
          }
          span{
            display: block;
            margin-top:30px;
            color:#07070D;
          }
           
        }
      }
    }
    .tv-row{
      .gwi-row-content{
        display: flex;
        height: 400px;
        justify-content:space-between;
        .igw_left{
          .igw_h{
            font-size: 36px;
            color:#07070D;
            font-weight: bold;
          }
          .igw_p{
            font-size: 24px;
            color:#07070D;
          }
          .igw-software-group{
            display: flex;
            justify-content: space-between;
            margin-top:10px;
            .igw-software-item{
              text-align: center;
              width:20%;
              span{
                display: block;
              }
              img{
                width:100%;
                border-radius:12px;
                &:hover{
                  box-shadow:0px 13px 31px 3px rgba(0, 0, 0, 0.2);
                }
              }
            }
          }
        }
        .igw_right{
          img{
            height:440px;
            position: relative;
            top:40px;
            z-index: 3;
          }
        }
      }
    }
    .powered-row{
      position: relative;
      background:#1B1349;
      img{
        width:1400px;
        display: block;
        margin:0 auto;
      }
      .gwi-row-more{
        position: absolute;
        bottom:50px;
        left:50%;
        transform: translate(-50%,0)
      }
    }
    .fund-row{
      background:#EDEFF2;
      .fund-row-content{
        display: flex;
        justify-content: space-between;
        margin-bottom: 40px;
        .fund-row-left{
          line-height:30px;
          width:50%;
        }
        .fund-row-right{
          text-align: center;
          img{
            width:80%;
          }
        }
      }
    }
    .history-row{
      position: relative;
      background:#1B1349;
      img{
        width:100%;
        display: block;
        margin:0 auto;
      }
      .gwi-row-title{
        position: absolute;
        top:50px;
        left:50%;
        transform: translate(-50%,0)
      }
    }
    .callme-row{
      background: #fff;
      .form-content{
        width:400px;
        margin:0 auto;
        .form-item-input{
          display: inline-block;
          width:50%;
          label{
            color:#595959;
            font-size:12px;
            display: block;
            margin-bottom: 10px;
          }
          input{
            display: inline-block;
            width:140px;
            height:29px;
            background:#F3F3F3;
            box-shadow:0px 1px 0px 0px rgba(255,255,255,1);
            border-radius:14px;
            outline: none;
            border:0;
            padding:4px 10px;
            box-sizing: border-box;
            &.input-phone{
              width:200px;
            }
          }
          &.input-name{
            width:140px;
            .el-form-item__content{
              width: 140px !important;;
            }
          }
          &.input-phone{
            width:200px;
            margin-left:60px;
            .el-form-item__content{
              width: 200px !important;
              .el-input__inner{
                width:200px!important;
              }
            }
          }
        }
        .form-item-textarea{
          width:50%;
          margin-top:20px;
          label{
            color:#595959;
            font-size:12px;
            display: block;
            margin-bottom: 10px;
          }
          textarea{
            display: inline-block;
            width:400px;
            height:103px;
            background:#F3F3F3;
            box-shadow:0px 1px 0px 0px rgba(255,255,255,1);
            border-radius:14px;
            outline: none;
            border:0;
            padding:10px;
            box-sizing: border-box;
          }
        }
        .form-btn-group{
          width:100%;
          margin:35px 0 0;
          .form-btn{
            width:131px;
            height:38px;
            background:#1862E9;
            box-shadow:0px 6px 11px 0px rgba(0, 0, 0, 0.2);
            border-radius:19px;
            text-align: center;
            line-height: 38px;
            text-align: center;
            font-size:16px;
            color:#fff;
            margin:0 auto;
            cursor: pointer;
          }
        }
      }
    }
  }
</style>