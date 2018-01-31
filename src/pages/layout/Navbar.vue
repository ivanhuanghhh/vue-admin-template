<template>
<el-menu class="navbar" mode="horizontal">
  <span class="nav-title">云装惠尚后台管理</span>
  <el-dropdown class="avatar-container">
    <div class="avatar-wrapper">
      <img class="user-avatar" src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1121475478,2545730346&fm=27&gp=0.jpg">
      <span class="user-name">{{ user.name }}</span>
      <i class="el-icon-caret-bottom"></i>
    </div>
    <el-dropdown-menu class="user-dropdown" slot="dropdown">
       <router-link to="/">
        <el-dropdown-item>
            首页  
        </el-dropdown-item>
        </router-link>
      <el-dropdown-item divided>
        <span @click="handleLogout" style="display:block;">退出</span>
      </el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</el-menu>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  computed: {
    ...mapState({
      user: state => {
        return state.session.user
      }
    }),
  },
  methods: {
    ...mapActions(["logout"]),
    handleLogout() {
      this.logout().then(() => {
        this.$router.push({ path: "/login" });
      });
    }
  }
};
</script>

<style rel="stylesheet/scss" lang="scss">
.navbar {
  height: 50px;
  line-height: 50px;
  border-radius: 0px !important;
  .nav-title {
    margin-left: 30px;
    font-size: 20px;
  }
  .avatar-container {
    height: 50px;
    display: inline-block;
    position: absolute;
    right: 35px;
    .avatar-wrapper {
      cursor: pointer;
      margin-top: 5px;
      position: relative;
      .user-avatar {
        width: 40px;
        height: 40px;
        border-radius: 10px;
      }
      .user-name {
        font-size: 18px;
      }
      .el-icon-caret-bottom {
        position: absolute;
        right: -20px;
        top: 25px;
        font-size: 12px;
      }
    }
  }
}
.user-dropdown {
  a,
  a:visited,
  a:hover,
  a:active {
    color: inherit;
    text-decoration: none;
  }
}
</style>


