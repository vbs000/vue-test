import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default {
    //state相当于内存存储数据，但是不能操作state里面的数据
    //需要mutations来操作state里面存储的数据
    state: {
        //当前激活的选项卡
        editableTabsValue: 'desktop',
        //tabs选项卡数据
        tabs:[
            {
                title:'首页',
                name:'desktop'
            }
        ]
    },
    mutations: {
        //菜单点击时，调用
        selectMenu(state,val){
            console.log(val);
            //1.把当前点击的菜单对象，加到tabs里面
            let res = state.tabs.findIndex(item => item.name === val.name);
            //2.判断tabs是否存在，不存在才加入到tabs
            if(res === -1){
                let obj = {};
                obj.title = val.label;
                obj.name = val.name;
                state.tabs.push(obj);
            }
            //设置当前选中对象
            state.editableTabsValue = val.name;
            //设置当前打开选项卡
            sessionStorage.setItem('tabList',JSON.stringify(state.tabs));
        },
        //设置当前选中选项卡
        getTabs(state){
            let tabs = sessionStorage.getItem('tabList');
            if(tabs){
                state.tabs = JSON.parse(tabs);
            }
        },
        //设置当前激活的选项卡
        setActiveTabs(state,val){
            state.editableTabsValue = val;
        }
    },
    actions: {
    }
}
  