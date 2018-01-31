<template>
  <div class="app-wrapper">
    <div class="navbar-wrapper">
      <navbar></navbar>          
    </div>
    <el-row class="main-container">
      <el-col :span="4" class="sidebar-wrapper">
        <sidebar></sidebar>
      </el-col>
      <el-col :span="20" class="content-wrapper">
        <app-main></app-main>
      </el-col>
    </el-row>
    
  </div>
</template>

<script>
import Navbar from "./Navbar";
import AppMain from "./AppMain";
import Sidebar from "./Sidebar";

export default {
  name: "layout",
  components: {
    Navbar,
    Sidebar,
    AppMain
  }
};
</script>

<style lang="scss">
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
  .main-container {
    position: relative;
    height: 100%;
    transition: all 0.28s ease-out;
  }
  .sidebar-wrapper {
    transition: all 0.28s ease-out;
    height: 100%;
    background: rgb(45, 58, 75);
    max-width: 220px;
  }
  .content-wrapper {
    height: 100%;
  }
}
</style>

