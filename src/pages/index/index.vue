<template>
  <view class="index">
    <view class="h3">Make You day With <p class="greenword">Green tea.</p></view>
    <view class="input block">
      <nut-input 
        style="border-radius: 0.6rem;"
        v-model="state.buttonVal" 
        placeholder="Seach Your favorite Tea"
        clearable 
        center
        >
      <template #button>
        <nut-button size="small" type="success">搜索</nut-button>
      </template>
      </nut-input>
    </view>
    <view class="line"></view>
    <view class="h3">Special for you</view>

    <view class="flex2">
        <view class="special">
          <nut-image src="//img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg" height="180" fit="fill" radius="6"></nut-image>
          <view class="title">绿青绯 普洱 滇红龙珠</view>
          <view class="text">绿青绯 普洱 滇红龙珠绿青绯 普洱 滇红龙珠绿青绯 普洱 滇红龙珠绿青绯 普洱 滇红龙珠</view>
          <nut-price :price="0" size="normal" :need-symbol="true" :thousands="true" />
        </view>
        <view class="special">
          <nut-image src="//img10.360buyimg.com/ling/jfs/t1/181258/24/10385/53029/60d04978Ef21f2d42/92baeb21f907cd24.jpg" height="180" fit="fill" radius="6"></nut-image>
          <view class="title">绿青绯 普洱 滇红龙珠</view>
          <view class="text">绿青绯 普洱 滇红龙珠绿青绯 普洱 滇红龙珠绿青绯 普洱 滇红龙珠绿青绯 普洱 滇红龙珠</view>
          <nut-price :price="0" size="normal" :need-symbol="true" :thousands="true" />
        </view>
    </view>
    <view class="line"></view>
    <view class="h3">More Products</view>
    <view class="card block" v-for="ee in state.products" :key="ee">
      <nut-card 
        :img-url="ee.imgUrl"
        :title="ee.title"
        :price="ee.price"
        :vipPrice="ee.vipPrice"
        :shopDesc="ee.shopDesc"
        :delivery="ee.delivery"
        :shopName="ee.shopName"
        >
      </nut-card>
    </view>
    <view class="footer"></view>


    <Footer></Footer>
  </view>
</template>

<script>
import Footer from "../../components/Footer"
import { reactive, onMounted } from 'vue';

export default {
  name: 'Index',
  components: {
    Footer
  },
  setup(){
    const state = reactive({
      buttonVal: '',
      page: 2,
      list: [],
      products: [{
        imgUrl:
        '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
        title: '「活蟹」湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
        price: '388',
        vipPrice: '378',
        shopDesc: '自营',
        delivery: '厂商配送',
        shopName: '阳澄湖大闸蟹自营店>'
      }, {
        imgUrl:
        '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
        title: '「活蟹」湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
        price: '388',
        vipPrice: '378',
        shopDesc: '自营',
        delivery: '厂商配送',
        shopName: '阳澄湖大闸蟹自营店>'
      }, {
        imgUrl:
        '//img10.360buyimg.com/n2/s240x240_jfs/t1/210890/22/4728/163829/6163a590Eb7c6f4b5/6390526d49791cb9.jpg!q70.jpg',
        title: '「活蟹」湖塘煙雨 阳澄湖大闸蟹公4.5两 母3.5两 4对8只 鲜活生鲜螃蟹现货水产礼盒海鲜水',
        price: '388',
        vipPrice: '378',
        shopDesc: '自营',
        delivery: '厂商配送',
        shopName: '阳澄湖大闸蟹自营店>'
      }]
    });
    onMounted(() => {
      setTimeout(() => {
        state.list = [
          'https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg',
          'https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg',
          'https://storage.360buyimg.com/jdc-article/welcomenutui.jpg',
          'https://storage.360buyimg.com/jdc-article/fristfabu.jpg'
        ];
      }, 3000);
    })

    return {
      state,
    }
  }
}
</script>
<style lang="scss" scoped>
  #nut-swiper-item {
    line-height: 150px;
    img {
      width: 100%;
      height: 100%;
    }
  }
</style>
<style lang="scss">
$primary-color: #4C926B;

.index {
  background-color: #f7f8fa;
  min-height: 50rem;
  text-align: left;
  padding: 1rem;
}
.block {
  border: 1px solid #3db66f;
  border-radius: 0.6rem;
  box-shadow: 0 0.1rem 0.3rem 0 rgba(145, 209, 146, 0.2);
}
.h3 {
  font-weight: bold;
  padding: 0.5rem 0;
  color: #292d32;
  font-size: 1rem;
}
.greenword {
  color: #208a4c;
}
.card {
  background-color: #ffffff;
  padding: 0.3rem;
  padding-bottom: 0.2rem;
  margin-bottom: 1rem;
}
.input {
}

.flex2 {
  display: flex;
  justify-content: space-around;
}
.special {
  height: 17.5rem;
  width: 47%;
  background-color: #ffffff;
  border: 1px solid #3db66f;
  border-radius: 0.6rem;
  box-shadow: 0 0.1rem 0.3rem 0 rgba(145, 209, 146, 0.2);
  margin: 0.5rem;
  padding: 0.5rem;
}
.title {
  color: #208a4c;
  font-size: 0.875rem;
  font-weight: bold;
  line-height: 1.5rem;
  margin: 0.3rem 0;
}
.text {
  font-size: 0.75rem;
  line-height: 1rem;
  margin-top: 0.3rem;
}
.imgs {
}
.footer {
  height: 3rem;
}
.line {
  height: 0.5rem;
}
</style>
