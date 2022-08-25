<template>
  <div class="admin-menu">
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      default-active="2"
      text-color="#fff"
    >
      <el-menu-item index="2">
        <el-icon><icon-menu /></el-icon>
        <span>商品列表</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup lang="ts"></script>

<style>
.el-menu {
  height: calc(100vh - 80px);
}
</style>
