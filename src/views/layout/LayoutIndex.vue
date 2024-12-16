<template>
  <div class="layout-main">
  <a-layout style="min-height: 100vh">
    <a-layout-sider v-model:collapsed="collapsed" collapsible>
      <div class="logo" />
      <a-menu v-model:selectedKeys="selectedKeys" theme="dark" mode="inline">
        <a-menu-item key="1">
          <pie-chart-outlined />
          <span>统计分析</span>
        </a-menu-item>
        <a-menu-item key="2">
          <desktop-outlined />
          <span>系统监控</span>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <template #title>
            <span>
              <user-outlined />
              <span>用户管理</span>
            </span>
          </template>
          <a-menu-item key="3">新增用户</a-menu-item>
          <a-menu-item key="4">修改用户</a-menu-item>
          <a-menu-item key="5">删除用户</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub2">
          <template #title>
            <span>
              <team-outlined />
              <span>组织机构</span>
            </span>
          </template>
          <a-menu-item key="6">组织列表</a-menu-item>
          <a-menu-item key="8">组织新增</a-menu-item>
        </a-sub-menu>
        <a-menu-item key="9">
          <file-outlined />
          <span>文件管理</span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #ff7; padding: 0;height: 64;padding-inline: 50;line-height: 64" />
      <a-layout-content style="margin: 0 16px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>用户管理</a-breadcrumb-item>
          <a-breadcrumb-item>用户新增</a-breadcrumb-item>
        </a-breadcrumb>
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }">
          <re-f-demo></re-f-demo>
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
  </div>
</template>
<script lang="ts">
  export default {
    name: 'LayoutIndex'
  }
</script>

<script lang="ts" setup >
import { ref } from 'vue';
import ReFDemo from '../refreactive/ReFDemo.vue'
const collapsed = ref<boolean>(false);
const selectedKeys = ref<string[]>(['1']);

</script>
<style scoped>

.layout-main{
  background-color: #1f4885;
  min-height: 100vh;
  width: 100%;
}

#components-layout-demo-side .logo {
  height: 32px;
  margin: 16px;
  background: rgba(255, 255, 255, 0.3);
}

.site-layout .site-layout-background {
  background: #fff;
}
[data-theme='dark'] .site-layout .site-layout-background {
  background: #141414;
}
</style>
