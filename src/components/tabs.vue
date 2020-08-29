<template>
    <el-tabs 
    style="height:41px;"
    v-model="editableTabsValue" 
    type="card" 
    closable
    @tab-click="tabClick"
    @tab-remove="removeTab">
    <el-tab-pane
        v-for="item in editableTabs"
        :key="item.name"
        :label="item.title"
        :name="item.name"
    >
        {{item.content}}
    </el-tab-pane>
    </el-tabs>
</template>

<script>
    // import {mapState} from 'vuex'
    export default {
        //需要用计算属性
        computed:{
            // ...mapState({
            //     //tabs选项卡数据
            //     //editableTabs: state => state.MenuStore.tabs,
            //     //当前激活的选项卡
            //     // editableTabsValue: state => state.MenuStore.editableTabsValue
            // }),
             //当前激活的选项卡
            editableTabsValue:({
                get(){
                    return this.$store.state.MenuStore.editableTabsValue;
                },
                set(val){
                    this.$store.state.MenuStore.editableTabsValue = val;
                }
            }),
            //tabs选项卡数据
            editableTabs:({
                get(){
                   return this.$store.state.MenuStore.tabs;
                },
                set(val){
                    this.$store.state.MenuStore.tabs = val;
                }
            }),
        },
        data(){
            return {
                // editableTabsValue: '2',
                // editableTabs: [{
                // title: 'Tab 1',
                // name: '1',
                // content: 'Tab 1 content'
                // }, {
                // title: 'Tab 2',
                // name: '2',
                // content: 'Tab 2 content'
                // }],
                // tabIndex: 2
            }
        },methods:{
            //删除选项卡
            removeTab(targetName) {
                if (targetName === "desktop") {
                    return;
                }
                let tabs = this.editableTabs;
                let activeName = this.editableTabsValue;
                if (activeName === targetName) {
                    tabs.forEach((tab, index) => {
                    if (tab.name === targetName) {
                        let nextTab = tabs[index + 1] || tabs[index - 1];
                        if (nextTab) {
                            activeName = nextTab.name;
                        }
                    }
                    });
                }
                this.editableTabsValue = activeName;
                this.editableTabs = tabs.filter(tab => tab.name !== targetName);
                //存储当前打开的选项卡
                sessionStorage.setItem('tabList',JSON.stringify(this.editableTabs));
                //存储当前激活的选项卡
                this.$store.commit('setActiveTabs',this.editableTabsValue);
                 //显示路由
                this.$router.push({name:this.editableTabsValue});
            },
            //点击选项卡
            tabClick(tab){
                console.log(tab);
                

                let obj = {};
                if(tab.name === 'desktop'){
                    obj.title = '首页';
                }else{
                    obj.title = tab.label;
                }

                obj.name = tab.name;
                //设置tabs数据
                this.$store.commit('selectMenu',obj);
                //显示路由
                this.$router.push({name:tab.name});
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>