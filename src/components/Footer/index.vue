<template>

<view class="_footer">
  {{info}}
</view>

</template>

<script>
import Taro from '@tarojs/taro';

export default {
  name: 'Footer',
  components: {
    
  },
  setup(){
    const info = '@2022年 中科智农科技有限公司'
    return {
      info
    };
  }
}
</script>

<style lang="scss">
@import '../../assets/styles/custom_theme.scss';

._footer {
  font-size: $font-size-0;
  text-align: center;
  color: $disable-color;
}
</style>
