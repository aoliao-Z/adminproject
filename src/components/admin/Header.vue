<template>
  <el-row :gutter="20">
    <el-col :span="4"></el-col>
    <el-col :span="16"><h2 class="header-title">后台管理系统</h2></el-col>
    <el-col :span="4"><span class="header-title">退出登录</span></el-col>
  </el-row>
</template>

<script setup lang="ts"></script>

<style>
.header-title {
  text-align: center;
  height: 80px;
  line-height: 80px;
  color: #fff;
}
</style>
