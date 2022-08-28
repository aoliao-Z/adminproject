<template>
  <div></div>
</template>

<script setup lang="ts">
import { getRoleList, getUserList } from "@/api/api";
import { userInitData } from "@/type/user";

import { onMounted, reactive } from "vue";
const data = reactive(new userInitData());
onMounted(() => {
  getUser();
  getRole();
});
const getUser = () => {
  getUserList().then((val) => {
    console.log(val);
  });
};
const getRole = () => {
  getRoleList().then((val) => {
    console.log(val);
  });
};
</script>

<style scoped></style>
