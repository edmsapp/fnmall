import { createApp } from 'vue'
import { createPinia } from 'pinia';
import { 
  Button,
  Toast, 
  Tabbar,
  TabbarItem, 
  Icon,
  Card,
  Tag, 
  Price,
  Input, 
  Swiper,
  SwiperItem,
  Grid,
  GridItem,
 } from '@nutui/nutui-taro';
 import { Image } from '@nutui/nutui';

import '@nutui/nutui-taro/dist/style.css'
import './app.scss'

const App = createApp({
  onShow (options) {},
  // 入口组件不需要实现 render 方法，即使实现了也会被 taro 所覆盖
})

App.use(createPinia)
.use(Button)
.use(Toast)
.use(Tabbar)
.use(TabbarItem)
.use(Icon)
.use(Card)
.use(Tag)
.use(Price)
.use(Input)
.use(Swiper)
.use(SwiperItem)
.use(Grid)
.use(GridItem)
.use(Image)

export default App
