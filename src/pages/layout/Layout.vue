<template>
  <div class="app-wrapper">
    <div class="sidebar-wrapper">
      <span class="title">VueAdmin</span>
      <sidebar></sidebar>
    </div>
    
    <div class="main-container">
      <div class="navbar-wrapper">
        <navbar></navbar>
      </div>  
      <div class="content-wrapper">
        <app-main></app-main>
      </div>
    </div>
    
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
  display: flex;
  flex-direction: row;
  .main-container {
    flex: 1;    
    position: relative;
    min-height: 800px;
    min-width: 960px;    
    transition: all 0.28s ease-out;
  }
  .sidebar-wrapper {
    width: 220px;
    min-width: 220px;
    min-height: 700px;
    overflow: hidden;
    transition: all 0.28s ease-out;
    background: #606266;
    .title {
      display: block;
      height: 68px;
      line-height: 68px;
      font-size: 28px;
      color: #fff;
      text-align: center;
    }
  }
  .content-wrapper {
    min-height: 700px;    
    border-left: 1px solid #e7e7eb;    
  }
}
</style>

