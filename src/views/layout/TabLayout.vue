<template>
  <a-tabs v-model:activeKey="activeKey">
    <a-tab-pane key="1" tab="ref-reactive-toRefs用法">
      <re-f-demo></re-f-demo>
    </a-tab-pane>
    <a-tab-pane key="2" tab="watch用法" force-render>
      <watch-demo></watch-demo>
    </a-tab-pane>
    <a-tab-pane key="3" tab="Tab 3">Content of Tab Pane 3</a-tab-pane>
  </a-tabs>
</template>
<script lang="ts" setup>
import { ref } from 'vue';
import ReFDemo from '../refreactive/RefDemo.vue'
import WatchDemo from '../watch/WatchDemo.vue'
const activeKey = ref('1');
</script>

