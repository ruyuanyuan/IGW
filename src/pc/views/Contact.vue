<template>
  <div class="contact_template">
    <div class="gwi-row">
      <div class="topnav">
        <img src="@/assets/img/top_nav.png" alt="" />
        <div class="topnav-title">{{contact.Title}}</div>
      </div>
    </div>
    <div class="gwi-row">
      <div class="gwi-row-content">
        <div class="contact_content">
          <div class="contact_left">
            <div class="contact_type">
              <p>{{contact.email}} | E-mail</p>
              <p>marketing_igwgame@hotmail.com</p>
            </div>
            <div class="contact_type">
              <p>{{contact.phone}} | phone</p>
              <p>+010-68686868</p>
            </div>
            <div class="contact_type">
              <p>{{contact.address}} | address</p>
              <p>{{contact.addressPostion}}</p>
            </div>
            <div class="contact_map">
              <img src="@/assets/img/postion.png" alt="" />
            </div>
          </div>
          <div class="contact_right">
            <div class='contact_title'>
              <p class='contact_h'>{{contact.Title}}</p>
              <p class='contact_p'>Contact us</p>
            </div>
             <div class='contact_doc'>
              {{contact.joinUs}}
            </div>
            <div class="form-content">
              <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
                <el-form-item prop="user_name" class="form-item-input input-name">
                  <label>{{contact.name}} | NAME</label>
                  <el-input type="text" maxlength="8" v-model="ruleForm.user_name"></el-input>
                </el-form-item>
                <el-form-item prop="user_phone" class="form-item-input input-phone">
                  <label>{{contact.phone}} | PHONE</label>
                  <el-input type="tel" maxlength="11" v-model="ruleForm.user_phone"></el-input>
                </el-form-item>
                <el-form-item prop="user_message" class="form-item-textarea">
                  <label>{{contact.message}} | MESSAGE</label>
                  <el-input
                    type="textarea"
                    maxlength="120"
                    v-model="ruleForm.user_message"
                    autocomplete="off"
                  ></el-input>
                </el-form-item>
              </el-form>
              <div class="form-btn-group">
                <div class="form-btn" @click="addMessage">{{contact.seedMessage}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Axios from 'axios';
export default {
  name: "contact",
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
      contact:this.$language[this.$store.state.language].contact
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
      this.contact=this.$language[this.languagetype].contact
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
.contact_template {
  .contact_content{
    display: flex;
    width:800px;
    margin:0 auto;
    padding:0 40px;
    .contact_left{
      padding-right:80px;
      border-right:2px solid #E6E6E6;
      .contact_type{
        margin-top:40px;
        p{
          color:#6C6C6C;
          line-height: 30px;
        }
      }
      .contact_map{
        width:240px;
        margin-top:50px;
        img{
          width:100%;
        }
      }
    }
    .contact_right{
      padding-left:80px;
      .contact_title{
        font-size:16px;
        color:#323232;
        margin-top:40px;
        p{
          font-weight: bold;
        }
      }
      .contact_doc{
        margin-top:20px;
        color:#737373
      }
      .form-content{
        width:400px;
        margin:40px auto 0;
        .form-item-input{
          display: inline-block;
          width:80%;
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
           
            box-shadow:0px 6px 11px 0px rgba(0, 0, 0, 0.2);
            border-radius:19px;
            text-align: center;
            line-height: 38px;
            text-align: center;
            font-size:16px;
            margin:0 auto;
            cursor: pointer;
            background: #fff;
            border-radius:15px;
            border:1px solid #000;
            &:hover{
              background:#1862E9;
              color:#fff;
              border:1px solid #1862E9;
            }
          }
        }
      }
    }
  }
}
</style>
