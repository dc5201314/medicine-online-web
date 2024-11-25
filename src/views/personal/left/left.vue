<template>
  <a-layout-sider
    theme="light"
    :collapsed="collapsed"
    @collapse="toggleCollapse"
  >
    <div class="avatar-container">
      <a-avatar size="large" src="https://via.placeholder.com/80" />
      <p v-if="!collapsed">用户名称</p>

      <!-- 添加按钮区域 -->
      <div class="button-container">
        <a-avatar
          size="small"
          @click="editProfile"
          style="cursor: pointer; margin-top: 10px"
        >
          编辑资料
        </a-avatar>
        <a-avatar
          size="small"
          @click="logout"
          style="cursor: pointer; margin-top: 10px"
        >
          退出登录
        </a-avatar>
      </div>
    </div>

    <a-menu
      mode="inline"
      :selected-keys="[currentKey]"
      @click="handleMenuClick"
    >
      <a-menu-item v-for="item in menuItems" :key="item.key">
        <a-icon :type="item.icon" />
        <span>{{ item.label }}</span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useRouter } from "vue-router";

// 导航栏状态
const collapsed = ref(false);
const currentKey = ref("collection"); // 默认选中菜单项
const router = useRouter();

// 菜单项数组
const menuItems = ref([
  { key: "collection", label: "我的收藏", icon: "user" },
  { key: "browsing", label: "浏览记录", icon: "setting" },
  { key: "answer", label: "我的问答", icon: "book" },
  { key: "quiz", label: "我的考核", icon: "book" },
  { key: "stact", label: "学习统计", icon: "book" },
]);

// 切换折叠状态
const toggleCollapse = (value: boolean) => {
  collapsed.value = value;
};

// 处理菜单项点击
const handleMenuClick = ({ key }: { key: string }) => {
  currentKey.value = key;
  router.push(`/personal/${key}`);
};

// 编辑资料的处理函数
const editProfile = () => {
  router.push("/personal/edit"); // 路由跳转到编辑资料页面
};

// 退出登录的处理函数
const logout = () => {
  // 这里可以添加你的退出登录逻辑，比如清除用户状态
  router.push("/login"); // 跳转到登录页面
};
</script>

<style scoped>
.avatar-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}
.avatar-container p {
  margin-top: 10px;
}
.button-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.button-container a-avatar {
  background-color: #f0f0f0; /* 按钮背景颜色 */
  width: 100%; /* 按钮宽度自适应 */
}
</style>
