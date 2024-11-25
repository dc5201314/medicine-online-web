<template>
  <a-layout-header class="header">
    <div class="header-content">
      <div class="left">
        <BreadCrumb></BreadCrumb>
      </div>
      <div class="content">
        <a-menu
          v-model:selectedKeys="selectedKeys"
          mode="horizontal"
          class="menu"
          router
        >
          <a-menu-item
            v-for="route in menuList"
            :key="route.name"
            :to="route.path"
            @click="handleMenuClick(route.path)"
          >
            <div class="custom-menu-item">
              {{ route.meta.title }}
            </div>
          </a-menu-item>
        </a-menu>
      </div>
      <div class="right" @click="goToPersonalCenter">
        <avatar></avatar>
        <div class="name">邓聪</div>
      </div>
    </div>
  </a-layout-header>
</template>

<script setup lang="ts">
import { ref, reactive, watch } from "vue";
import {
  RouteLocationAsPathGeneric,
  RouteLocationAsRelativeGeneric,
  useRouter,
} from "vue-router";
import BreadCrumb from "./BreadCrumb.vue";
import avatar from "./avatar.vue";

const router = useRouter();
const selectedKeys = ref([router.currentRoute.value.name]);
const menuList = reactive([
  { path: "/", name: "Home", meta: { title: "首页" } },
  { path: "/information", name: "information", meta: { title: "资讯" } },
  { path: "/special", name: "Special", meta: { title: "专题" } },
  { path: "/video", name: "Video", meta: { title: "视频" } },
  { path: "/audio", name: "Audio", meta: { title: "音频" } },
  { path: "/book", name: "Books", meta: { title: "图书" } },
  { path: "/consult", name: "Consult", meta: { title: "咨询" } },
  { path: "/test", name: "Test", meta: { title: "练习题" } },
  { path: "/indep", name: "Indep", meta: { title: "考核" } },
]);

// 监听路由变化，更新选中的菜单项
watch(
  () => router.currentRoute.value.name,
  (newName) => {
    selectedKeys.value = [newName];
  },
  { immediate: true }
);

// 菜单项点击处理
const handleMenuClick = (
  path: string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric
) => {
  router.push(path);
};

// 跳转到个人中心
const goToPersonalCenter = () => {
  router.push("/personal/collection"); // 根据你的路由配置调整路径
};
</script>

<style scoped>
.header {
  background: #fff;
  padding: 0 50px;
}

.header-content {
  display: flex;
  flex: 1;
}

.left,
.content,
.right {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.menu {
  display: flex;
  justify-content: center;
  line-height: 82px;
}

.custom-menu-item {
  font-size: 20px !important;
  color: #070606 !important;
  padding: 0 5px;
  margin: 0;
}

.menu .ant-menu-item-selected .custom-menu-item {
  color: green !important;
  text-decoration: none !important;
}

:deep(
    :where(
        .css-dev-only-do-not-override-1p3hq3p
      ).ant-menu-light.ant-menu-horizontal
      > .ant-menu-item::after,
    :where(
        .css-dev-only-do-not-override-1p3hq3p
      ).ant-menu-light.ant-menu-horizontal
      > .ant-menu-submenu::after
  ) {
  position: absolute;
  inset-inline: 16px;
  bottom: 0;
  transition: border-color 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
  content: "";
  border-bottom: none !important;
  content: none !important;
}

.custom-menu-item:hover {
  text-decoration: none;
}

.ant-menu-title-content {
  text-decoration: none !important;
}

.name {
  margin-left: 15px;
  margin-top: 2px;
  font-size: 20px;
  cursor: pointer; /* 添加鼠标指针样式 */
}
</style>
