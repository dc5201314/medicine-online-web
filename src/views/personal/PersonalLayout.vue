<template>
  <a-layout style="min-height: 100vh">
    <Sidebar />
    <ContentView />
  </a-layout>
</template>

<script setup lang="ts">
import Sidebar from "./left/left.vue"; // 引入侧边栏组件
import ContentView from "./right/right.vue"; // 引入内容组件
</script>

<style scoped></style>
