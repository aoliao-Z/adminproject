<script lang="ts" setup>
import Header from "./Header.vue";
import LeftMenu from "./LeftMenu.vue";
</script>
<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-container>
        <el-aside width="200px">
          <left-menu />
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style>
.el-header {
  height: 80px;
  background-color: #666;
}
</style>
