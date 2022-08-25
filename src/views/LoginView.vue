<script setup lang="ts">
import { FormInstance } from "element-plus";
import { reactive, ref } from "vue";
interface LoginFormInt {
  username: string;
  password: string;
}
class LoginData {
  ruleForm: LoginFormInt = {
    username: "",
    password: "",
  };
}
const data = reactive(new LoginData());
const rules = {
  username: [
    {
      required: true, //是否必须字段
      message: "请输入用户名", // 触发的提示信息
      trigger: "blur", // 触发时机: 当失去焦点时（光标不显示的时候），触发此提示
    },
    {
      min: 3, // 最小字符书
      max: 5, // 最大字符数
      message: "用户名长度需要在3-5个字符之间", // 触发的提示信息
      trigger: "blur",
    },
  ],
  password: [
    {
      required: true, //是否必须字段
      message: "请输入密码", // 触发的提示信息
      trigger: "blur", // 触发时机: 当失去焦点时（光标不显示的时候），触发此提示
    },
    {
      min: 3, // 最小字符书
      max: 6, // 最大字符数
      message: "密码长度需要在3-5个字符之间", // 触发的提示信息
      trigger: "blur",
    },
  ],
};
//登录
const ruleFormRef = ref<FormInstance>();
const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      console.log("submit!");
    } else {
      console.log("error submit!");
      return false;
    }
  });
};
//重置
const resetForm = () => {
  data.ruleForm.username = "";
  data.ruleForm.password = "";
};
</script>

<template>
  <div>
    <h2 class="form-h2">后台管理系统登录</h2>
    <div class="form-container">
      <el-form
        ref="ruleFormRef"
        :model="data.ruleForm"
        status-icon
        :rules="rules"
        class="form"
      >
        <el-form-item label="账号：" prop="username">
          <el-input v-model="data.ruleForm.username" autocomplete="off" />
        </el-form-item>
        <el-form-item label="密码：" prop="password">
          <el-input
            v-model="data.ruleForm.password"
            type="password"
            autocomplete="off"
          />
        </el-form-item>
        <el-form-item label-width="70px">
          <el-button
            class="form-btn"
            type="primary"
            @click="submitForm(ruleFormRef)"
            >登录</el-button
          >
          <el-button class="form-btn" @click="resetForm()">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<style>
.form-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.form {
  width: 500px;
}
.form-h2 {
  text-align: center;
  padding: 50px;
}
.form-btn {
  width: 48%;
}
</style>
