<template>
  <el-container class="home">
    <!-- 头部 -->
  <el-header class="ub main-justify cross-center header header-left-text">
  
    <div>Spring Boot开发</div>
    <div class="ub main-center cross-center">
      
      <el-dropdown placement="bottom-start">
        <img class="user-img" src="../assets/images/avatar.jpg" alt="" />
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <div class="user-role">
        <div class="welcome">欢迎您，管理员</div>
        <div class="header-time">2020.08.16 21:28 星期日</div>
      </div>
    </div>

  </el-header>
  
  <el-container>
    <!-- 菜单栏 -->
     <el-aside width="auto">
        <menu-bar></menu-bar>
      </el-aside>
    <!-- 右边内容 -->
    <el-container>
      <el-main style="padding:0;">
         <!-- 菜单收缩按钮-->
          <i
            class="arrowIcon"
            :class="[isCollapse ? 'el-icon-s-unfold' : ' el-icon-s-fold']"
            @click="iconClick"
          ></i>
        <tabs></tabs>
        <router-view></router-view>
      </el-main>
      <!-- <el-footer style="background-color: coral;">Footer</el-footer> -->
    </el-container>
  </el-container>
</el-container>
</template>

<script>
// @ is an alias to /src
import MenuBar from "../components/MenuBar.vue";
import tabs from '../components/tabs.vue'
import {mapState} from 'vuex'

export default {
  name: 'Home',
  components: {
    MenuBar,
    tabs
  },computed:{
    ...mapState({
      isCollapse: state => state.MenuStore.isCollapse
    })
  },methods:{
    iconClick(){
      console.log('click');
      this.$store.commit('setOpenOrClose');
    }
  }
}
</script>
<style>
  body,html{
    font-family: Microsoft YaHei;
  }
  .home{
    height:100%;
  }
  .header{
    background-color: #167bd8;
    color: #FFFFFF;
  }
  .header-left-text{
    font-size:20px;
  }
  .user-img{
    width: 45px;
    height: 45px;
    border-radius: 50%;
    cursor: pointer;
  }
  .user-role{
    margin-left:10px;
  }
  .welcome{
    font-size: 15px;
    font-weight: bold;
  }
  .header-time{
    font-size: 15px;
  }
  .el-aside{
    border-right:1px solid #e6e6e6;
  }
  .arrowIcon {
  font-size: 24px;
  border: 1px solid transparent;
  float: left;
  height: 39px;
  width: 50px;
  background: #eaedf1;
  text-align: center;
  line-height: 39px !important;
  }
  .el-tabs__header {
  position: static !important;
  }
</style>
