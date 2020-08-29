<template>
    <div class="login-container ub main-center cross-center">
        <!--
            size:用于控制该表单内组件的尺寸
            rules:表单验证规则
            ref:类似div的id
            model:绑定数据
            el-row:相当于css3的弹性盒子布局，只是一行分为24等份
        -->
        <el-form
        size="medium"
        @submit.native.prevent="submit"
        :rules="rules"
        ref="loginForm"
        :model="loginForm"
        label-width="80px"
        class="loginForm"
        >
            <el-form-item label="">
                <div class="login-title ub main-center cross-center">系统登录</div>
            </el-form-item>
            <el-form-item prop="username" label="">
                <el-input type="text" v-model="loginForm.username" placeholder="请输入用户名"></el-input>
            </el-form-item>
            <el-form-item prop="password" label="">
                <el-input type="password" v-model="loginForm.password" placeholder="请输入密码"></el-input>
            </el-form-item>
            <el-form-item prop="code" label="">
                <el-row gutter="20">
                  <el-col :span="16">
                      <el-input v-model="loginForm.code" placeholder="请输入验证码"></el-input>
                  </el-col>
                  <el-col :span="8">
                      <el-input v-model="loginForm.code" readonly placeholder="点击刷新"></el-input>
                  </el-col>
                </el-row>
            </el-form-item>
             <el-form-item label="">
                 <el-row gutter="20">
                   <el-col :span="12">
                       <el-button class="my-button" @click="submit" type="primary">登录</el-button>
                   </el-col>
                   <el-col :span="12">
                       <el-button class="my-button">取消</el-button>
                   </el-col>
                 </el-row>
             </el-form-item>
        </el-form>
        
    </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {
          username:'',
          password:'',
          code:''//验证码
      },
      rules: {
          username:[{
              required:true,
              trigger:'change',
              message:'请输入用户名'
          }],
          password:[{
              required:true,
              trigger:'change',
              message:'请输入密码'
          }],
          code:[{
              required:true,
              trigger:'change',
              message:'请输入验证码'
          }],
      },
    }
  },
  methods: {
    submit() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          console.log(valid)
        }
      })
    },
  },
}
</script>

<style lang="scss" scoped>
    .login-container{
        height:100%;
    }
    .login-title{
        font-size: 24px;
        font-weight: 600;
    }
    .loginForm{
        height: 300px;
        width: 350px;
        border-radius: 10px;
        box-shadow: 0 0 25px #cac6c6;
        padding: 20px 35px;
    }
    .login-container /deep/ .el-form-item__content{
        margin-left: 0 !important;
    }
    .my-button{
        width: 100%;
    }
</style>