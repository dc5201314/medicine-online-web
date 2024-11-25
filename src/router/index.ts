import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

// 基础和功能组件导入
import Home from "../views/home/Home.vue";
import Layout from "../layout/index.vue";
import Books from "../views/book/books.vue";
import Consult from "../views/consult/consult.vue";
import Test from "../views/test/test.vue";
import Audio from "../views/audio/audio.vue";
import Indep from "../views/indep/indep.vue";
import Video from "../views/video/video.vue";
import Special from "../views/special/special.vue";
import Information from "../views/information/information.vue";

// 个人中心相关组件导入
import PersonalLayout from "../views/personal/PersonalLayout.vue";
import Collection from "../views/personal/right/collection.vue";
import Browsing from "../views/personal/right/browsing.vue";
import Answer from "../views/personal/right/answer.vue";
import Quiz from "../views/personal/right/quiz.vue";
import Stact from "../views/personal/right/stact.vue";

import Edit from "../views/personal/right/edit.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: Layout,
    children: [
      { path: "", component: Home, name: "Home", meta: { title: "首页" } },
    ],
  },
  {
    path: "/information",
    component: Layout,
    children: [
      {
        path: "",
        component: Information,
        name: "information",
        meta: { title: "资讯" },
      },
    ],
  },
  {
    path: "/book",
    component: Layout,
    children: [
      { path: "", component: Books, name: "Books", meta: { title: "图书" } },
    ],
  },
  {
    path: "/consult",
    component: Layout,
    children: [
      {
        path: "",
        component: Consult,
        name: "Consult",
        meta: { title: "咨询" },
      },
    ],
  },
  {
    path: "/test",
    component: Layout,
    children: [
      { path: "", component: Test, name: "Test", meta: { title: "练习题" } },
    ],
  },
  {
    path: "/audio",
    component: Layout,
    children: [
      { path: "", component: Audio, name: "Audio", meta: { title: "音频" } },
    ],
  },
  {
    path: "/indep",
    component: Layout,
    children: [
      { path: "", component: Indep, name: "Indep", meta: { title: "考核" } },
    ],
  },
  {
    path: "/video",
    component: Layout,
    children: [
      { path: "", component: Video, name: "Video", meta: { title: "视频" } },
    ],
  },
  {
    path: "/special",
    component: Layout,
    children: [
      {
        path: "",
        component: Special,
        name: "Special",
        meta: { title: "专题" },
      },
    ],
  },
  {
    path: "/personal",
    component: Layout,
    children: [
      {
        path: "", // 将 PersonalLayout 设置为默认的个人中心入口组件
        component: PersonalLayout,
        children: [
          {
            path: "collection",
            component: Collection,
            name: "Collection",
            meta: { title: "我的收藏" },
          },
          {
            path: "browsing",
            component: Browsing,
            name: "Browsing",
            meta: { title: "浏览记录" },
          },
          {
            path: "answer",
            component: Answer,
            name: "Answer",
            meta: { title: "我的问答" },
          },
          {
            path: "quiz",
            component: Quiz,
            name: "Quiz",
            meta: { title: "我的考核" },
          },
          {
            path: "stact",
            component: Stact,
            name: "Stact",
            meta: { title: "学习统计" },
          },
          {
            path: "edit",
            component: Edit,
            name: "Edit",
            meta: { title: "编辑个人资料" },
          },
        ],
      },
    ],
  },
];

// 创建并导出路由实例
const router = createRouter({ history: createWebHistory(), routes });
export default router;
