<template>
  <div class="ContactUs">
    <Area text="联系我们" />
    <div class="box">
      <p>联系我们</p>
      <p>Contact us</p>
      <el-form :model="ruleForm" :rules="rules" ref="ruleForm">
        <el-form-item prop="user_name" class="form-item-input input-name">
          <label>姓名 | NAME</label>
          <el-input type="text" maxlength="8" v-model="ruleForm.user_name"></el-input>
        </el-form-item>
        <el-form-item prop="user_phone" class="form-item-input input-phone">
          <label>电话 | PHONE</label>
          <el-input type="tel" maxlength="11" v-model="ruleForm.user_phone"></el-input>
        </el-form-item>
        <el-form-item prop="user_message" class="form-item-textarea">
          <label>留言 | MESSAGE</label>
          <el-input
            type="textarea"
            maxlength="120"
            v-model="ruleForm.user_message"
            autocomplete="off"
          ></el-input>
        </el-form-item>
      </el-form>
    </div>
   <div class="gwi-row-more" @click='addMessage'>发送留言</div>
    <div class="map">
      <div class="left">
        <div>
          <p>
            邮箱 | E-mail
          </p>
          <p>
            marketing_igwgame@hotmail.com
          </p>
        </div>
        <div>
          <p>
            电话 | phone
          </p>
          <p>
            +010-68686868
          </p>
        </div>
        <div>
          <p>
            地址 | address
          </p>
          <p>
            北京市朝阳区
          </p>
        </div>
      </div>
      <div class="right">
        <img src="@/assets/mobileImage/contact_03.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
import Axios from 'axios'
import Area from '../components/Area'
export default {
  name: 'ContactUs',
  created() {},
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
      }
    }
  },
  components: {
    Area,
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
  }
}
</script>
<style lang="scss">
.ContactUs {
  .el-form {
    margin-top: 0.533rem;
    .el-form-item__content {
      line-height: 2;
    }
    .form-item-input {
      display: inline-block;
    }
    .input-name {
      width: 2.867rem;
      margin-right: 1.067rem;
      input {
        width: 2.867rem;
        height: 30px;
      }
    }
    .input-phone {
      width: 4.067rem;
      input {
        width: 4.067rem;
        height: 30px;
      }
    }
    .form-item-textarea {
      textarea {
        width: 8rem;
        height: 80px;
        border-radius: 0.293rem;
        background: rgba(243, 243, 243, 1);
        box-shadow: 0rem 0.013rem 0rem 0rem rgba(255, 255, 255, 1);
      }
    }
    label {
      color: #737373;
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
.ContactUs {
  .box {
    padding-top: 20px;
    padding-left: 1.067rem;
    p {
      font-size: 12px;
      color: #323232;
      font-weight: bold;
    }
  }
  .map {
    width: 100%;
    padding:0 10px;
    box-sizing:border-box;
    margin: 0 auto;
    border-top: 0.013rem solid #e6e6e6;
    padding-top: 15px;
    display: flex;
    justify-content: space-between;
    .left {
      width: 3.867rem;
      div {
        margin-bottom: 0.633rem;
      }
      p {
        color: #6c6c6c;
        font-size: 10px;
        line-height: 18px;
      }
    }
    .right {
      width:150px;
      border-radius: 0.293rem;
      overflow: hidden;
      img {
        width: 100%;
        border-radius: 0.293rem;
      }
    }
  }
}
</style>
