export default defineAppConfig({
  pages: [
    'pages/index/index',
    'pages/category/index',
    'pages/cart/index',
    'pages/me/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#000000',
    selectedColor: '#DC143C',
    backgroundColor: '#ffffff',
    borderStyle: 'white',
    list: [
      {
        pagePath: 'pages/index/index',
        iconPath: 'assets/icons/user_default.png',
        selectedIconPath: 'assets/icons/user_default.png',
        text: '首页'
      },
      {
        pagePath: 'pages/category/index',
        iconPath: 'assets/icons/user_default.png',
        selectedIconPath: 'assets/icons/user_default.png',
        text: '分类'
      },
      {
        pagePath: 'pages/cart/index',
        iconPath: 'assets/icons/user_default.png',
        selectedIconPath: 'assets/icons/user_default.png',
        text: '购物车'
      },
      {
        pagePath: 'pages/me/index',
        iconPath: 'assets/icons/user_default.png',
        selectedIconPath: 'assets/icons/user_default.png',
        text: '我的'
      }
    ]
  }
})
