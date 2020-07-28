<template>
  <div>
    <loginRegisterWrap>
      <template v-slot:head>
        <div class="login-header">
          <span class="login-select" @click="selectType('msglogin')">验证码登陆</span>

          <span class="login-select" @click="selectType">密码登陆</span>
          <div class="login-header-line">
            <div :class="{'msg-login': msgLogin}" class="login-line-red" />
          </div>
        </div>
      </template>
      <template v-slot:content>
        <div style="padding:85px 0">
          <div class="mb30">
            <label class="from-label">手机号</label>
            <input v-model.trim="mobile" class="from-input" type="text" placeholder="输入手机号">
          </div>
          <div v-if="msgLogin" style="margin-top:40px">
            <label class="from-label">验证码</label>
            <input v-model.trim="msgInfo.chkCode" class="from-input" type="text" placeholder="输入手机验证码" style="width:255px">
            <div class="msg-btn-wrap">
              <msg-btn ref="msgBtnRef" :mobile="mobile" @msgSend="setChkId" @downTime="setAuidoTip" />
            </div>
            <p class="msg-btn-tip">
              收不到短信验证码
              <span v-if="seconds" style="color:#ccc">{{ audioTip }}</span>
              <span v-else style="color:#FF5043" @click="audioCode">{{ audioTip }}</span>
            </p>
            <div>
              <label class="from-label">{{ imgurl }}</label>
              <input v-model.trim="msgInfo.chksCode" class="from-input" type="text" placeholder="请输入左侧验证码" style="width:255px">
            </div>
          </div>
          <div v-else style="margin-top:40px">
            <label class="from-label">登录密码</label>
            <input v-model.trim="password" class="from-input" type="password" placeholder="输入包含字母和数字的密码">
            <p class="login-forget">
              <nuxt-link to="/forget">
                忘记密码?
              </nuxt-link>
            </p>
          </div>
        </div>
        <div style="margin-top:50px;padding-left:50px;">
          <Button :loading="isLoading" @click="loginBtn">
            登录
          </Button>
        </div>
        <p class="login-btn-tip">
          没有账号?<nuxt-link to="/register">
            立即注册
          </nuxt-link>
        </p>
      </template>
    </loginRegisterWrap>
  </div>
</template>

<script>
import loginRegisterWrap from '@/components/login-register-wrap'

export default {
  components: { loginRegisterWrap },
  data() {
    return {
      imgurl: 'http://data.apishop.net/checkcode/tdka4newqhfbszyv.png',
      msgLogin: true,
      audioTip: '使用语音验证码',
      seconds: null,
      audioDisable: false,
      mobile: '',
      password: '',
      msgInfo: {
        chkCode: '',
        chkId: ''
      },
      isLoading: false
    }
  },
  computed: {
  },
  methods: {
    selectType(type) {
      this.msgLogin = (type === 'msglogin')
    },

    // 设置验证码id
    setChkId(chkId) {
      this.msgInfo.chkId = chkId
    },

    // 语音验证码倒计时
    setAuidoTip(seconds) {
      this.seconds = seconds
      if (seconds > 0) {
        this.audioTip = `${seconds}s后可重新发送`
      } else {
        this.audioTip = '重新发送'
        this.audioDisable = false
      }
    },

    // 登录请求
    loginBtn() {
      this.isLoading = true
      let actionName = 'loginByPwd'
      let data = {
        mobile: this.mobile,
        password: this.password
      }
      if (this.msgLogin) {
        actionName = 'loginByCode'
        data = {
          mobile: this.mobile,
          ...this.msgInfo
        }
      }
      this.$store.dispatch(actionName, data).then((res) => {
        this.isLoading = false
        if (res.success) {
          this.$message.success('登陆成功')
          const toPathString = this.$route.query.redirect
          const toPath = toPathString ? decodeURIComponent(toPathString) : '/'
          this.$router.push(toPath)
        } else {
          this.$message.error(res.message)
        }
      }).catch((err) => {
        this.isLoading = false
        this.$message.error(err && err.data)
      })
    }
  },
  head() {
    return {
      title: '产融平台 - 登陆',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'My custom description'
        }
      ]
    }
  }
}
</script>

<style scoped>
.login-header{
    padding-left: 140px;
}
.login-header-line {
  position: relative;
}
.login-line-red {
  position: absolute;
  left: 75px;
  top: 0;
  width: 40px;
  height: 2px;
  background-color: #ff5043;
  transition: all 0.2s ease-out;
}
.login-line-red.msg-login {
  left: 268px;
}
.login-select {
  margin: 0 50px;
}
.login-forget{
  text-align: right;
  margin-top: 10px;
}
.login-forget a{
  font-size: 14px;
  color: #666;
}
.msg-btn-wrap {
  display: inline-block;
  width: 158px;
  height: 48px;
  line-height: 48px;
  vertical-align: middle;
}
.msg-btn-tip {
  color: #666;
  font-size: 14px;
  margin-left: 116px;
  margin-top: 5px;
}
.login-btn-tip {
  text-align: center;
  margin-top: 40px;
  font-size: 16px;
}
.login-btn-tip a {
    font-size: 16px;
  color: #ff5043;
}
</style>
