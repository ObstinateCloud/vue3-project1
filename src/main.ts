import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import * as Icons from "@ant-design/icons-vue";
import 'ant-design-vue/dist/reset.css';

const app = createApp(App)
const icons: any = Icons
for (const i in icons) {
  app.component(i, icons[i])
}
app.use(Antd).mount('#app')
