<template>
  <nut-tabbar :bottom="true" :safeAreaInsetBottom="true">
    <nut-tabbar-item tab-title="首页" href="" icon="home"></nut-tabbar-item>
    <nut-tabbar-item tab-title="分类" icon="category"></nut-tabbar-item>
    <nut-tabbar-item tab-title="购物车" @click="goto()" icon="cart"></nut-tabbar-item>
    <nut-tabbar-item tab-title="我的" href="######" icon="my"></nut-tabbar-item>
  </nut-tabbar>
</template>

<script>
import Taro from '@tarojs/taro';

export default {
  name: 'Footer',
  components: {
    
  },
  setup(){
    function tabSwitch(item, index) {
        console.log(item, index);
    }
    // 'pages/cart/index',
    // 'pages/me/index'
    const goto = () => {
      Taro.navigateTo({
        url:  'pages/cart/index',
      })
    }
    return {
      tabSwitch,
      goto,
    };
  }
}
</script>

<style lang="scss">
$primary-color: #4C926B;

.index {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
