<template>
  <div>
    <div>
      <el-form :inline="true" :model="data.selectData" class="demo-form-inline">
        <el-form-item label="标题">
          <el-input
            v-model="data.selectData.title"
            placeholder="请输入关键字："
          />
        </el-form-item>
        <el-form-item label="详情">
          <el-input
            v-model="data.selectData.introduce"
            placeholder="请输入关键字："
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">搜索</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div>
      <el-table :data="datalist" border style="width: 100%">
        <el-table-column prop="id" label="Id" width="180" />
        <el-table-column prop="title" label="标题" width="180" />
        <el-table-column prop="introduce" label="详情" />
      </el-table>
      <el-pagination
        @current-change="currentChange"
        @size-change="sizeChange"
        layout="prev, pager, next"
        :total="data.selectData.count"
      />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { getGoodsList } from "@/api/api";
import { goodsInitData, goodsListInt } from "@/type/goods";

import { computed, onMounted, reactive, watch } from "vue";

const data = reactive(new goodsInitData());
const getGoods = () => {
  getGoodsList().then((val) => {
    data.list = val.data;
    data.selectData.count = val.data.length;
  });
};

onMounted(() => {
  getGoods(); // 获取全部商品数据
});

const datalist = computed(() => {
  return data.list.slice(
    (data.selectData.page - 1) * data.selectData.pagesize,
    data.selectData.page * data.selectData.pagesize
  );
});

const currentChange = (page: number) => {
  data.selectData.page = page;
};

const sizeChange = (pagesize: number) => {
  data.selectData.pagesize = pagesize;
};

const onSubmit = () => {
  // console.log(data.selectData.title);
  // console.log(data.selectData.introduce);
  let arr: goodsListInt[] = [];
  if (data.selectData.title || data.selectData.introduce) {
    if (data.selectData.title) {
      arr = data.list.filter((val) => {
        return val.title.indexOf(data.selectData.title) !== -1;
      });
    } else {
      if (data.selectData.introduce) {
        arr = data.list.filter((val) => {
          return val.introduce.indexOf(data.selectData.introduce) !== -1;
        });
      }
    }
  } else {
    arr = data.list; //若为空 等于原来数组
  }
  data.selectData.count = arr.length;
  data.list = arr; //arrs是过滤之后的数组
};
watch([() => data.selectData.title, () => data.selectData.introduce], () => {
  if (data.selectData.title === "" && data.selectData.introduce === "") {
    getGoods();
  }
});
</script>
<style></style>
