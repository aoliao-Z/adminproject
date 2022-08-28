<template>
  <div class="admin-menu">
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      default-active="2"
      text-color="#fff"
      router
    >
      <el-menu-item :index="item.path" v-for="item in list" :key="item.path">
        <span>{{ item.meta.title }}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();
console.log(router.getRoutes());
const list = router.getRoutes().filter((val) => val.meta.isShow);
</script>

<style>
.el-menu {
  height: calc(100vh - 80px);
}
</style>
