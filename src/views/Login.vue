<template>
    <div>
        <!--rules验证规则 ref:用this.$refs.loginForm取-->
        <el-form ref="loginForm" :rules="rules" :model="loginForm" class="loginContainer">
            <h3 class="loginTitle">系统登陆</h3>
            <!--此处 prop绑定验证规则 rules里的对应属性-->
            <el-form-item prop="username">
                <el-input type="text" v-model="loginForm.username" placeholder="请输入用户名"/>
            </el-form-item>
            <el-form-item prop="password">
                <!--auto-complete="false" 不自动补全-->
                <el-input type="password" v-model="loginForm.password" placeholder="请输入密码" auto-complete="false"/>
            </el-form-item>
            <el-form-item prop="code">
                <el-input type="text" v-model="loginForm.code" placeholder="请输入验证码" auto-complete="false"
                          style="width:250px;margin-right: 5px"/>
                <img :src="captchaUrl" @click="updateCaptcha">
            </el-form-item>
            <el-checkbox v-model="checked" class="loginRememberMe">记住我</el-checkbox>
            <el-button type="primary" style="width: 100%" @click="submitLogin">登陆</el-button>
        </el-form>
    </div>
</template>

<script>
    export default {
        name: "Login",
        data() {
            return {
                captchaUrl: '/captcha?time=' + new Date(),
                loginForm: {
                    username: 'admin',
                    password: '123',
                    code: ''
                },
                checked: true,
                rules: {
                    username: {required: true, message: '请输入用户名', trigger: 'blur'},
                    password: {required: true, message: '请输入密码', trigger: 'blur'},
                    code: {required: true, message: '请输入验证码', trigger: 'blur'}
                }
            }
        },
        methods: {
            updateCaptcha() {
                this.captchaUrl = '/captcha?time=' + new Date();
            },
            submitLogin() {
                this.$refs.loginForm.validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        this.$message.error('请输入所有字段');
                        return false;
                    }
                });
            }
        }
    }
</script>

<style>
    .loginContainer {
        border-radius: 15px;
        background-clip: padding-box;
        margin: 100px auto;
        width: 350px;
        padding: 15px 35px 15px 35px;
        background: #f2f6fc;
        border: 1px solid lightslategray;
        box-shadow: 0 0 25px slategray;
    }

    .loginTitle {
        margin: 8px auto;
        text-align: center;
    }

    .loginRememberMe {
        text-align: left;
        margin: 0px 0px 15px 8px;
    }
    .el-form-item__content{
        display: flex;
        align-items: center;
    }
</style>
