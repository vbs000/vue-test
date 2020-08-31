import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//element引入
import ElementUI from 'element-ui';
//element样式
import 'element-ui/lib/theme-chalk/index.css';
//引入弹性盒子布局样式
import './assets/css/flex.css'
Vue.use(ElementUI)
Vue.config.productionTip = false
//引入fragment解决菜单收缩时文字不能隐藏的问题
import Fragment from 'vue-fragment'
Vue.use(Fragment.Plugin)
//进入路由之前执行
router.beforeEach((to,from,next) =>{
  //to 将要进入的路由
  //from 将要离开的路由
  //next 让路由继续执行
  //获取当前打开的选项卡
  store.commit('getTabs');
  //设置当前激活的选项卡
  store.commit('setActiveTabs',to.name);
  //解决刷新之后菜单数据不存在的问题

  let menuData = sessionStorage.getItem('menuList');
  if(to.path === '/login'){
    if(menuData){
      next({path:'/home'});
    }else{
      next();
    }
  }else{
    if(!menuData && to.name !== 'login'){
      next({path:'/login'});
    }else{
      if(store.state.MenuStore.menu_data.length == 0){
        store.commit('getMenuList',router);
        next({path:to.path});
      }else{
        next();
      }
    }
  }

  // if(store.state.MenuStore.menu_data.length == 0 ){
  //   store.commit('getMenuList',router);
  //   next({path:to.path});
  // }else{
  //   next();
  // }
  
  

})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
