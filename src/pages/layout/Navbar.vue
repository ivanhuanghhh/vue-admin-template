<template>
<el-menu class="navbar" mode="horizontal">
  <div class="menu-container">
    <router-link class="noti-btn" to="/">
      <i class="el-icon-bell"></i>
      <span>通知</span>
    </router-link>
   
    <img class="user-avatar" src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1121475478,2545730346&fm=27&gp=0.jpg">
    <div class="user-info">
      <span class="user-name">{{ user.name }}</span>
      <span class="logout" @click.prevent="handleLogout">退出</span>
    </div>
  
  </div>
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
  height: 68px;
  border-radius: 0px !important;
  .nav-title {
    margin-left: 30px;
    font-size: 20px;
  }
  .menu-container {
    position: absolute;
    right: 45px;
    display: flex;
    flex-direction: row;
    height: 100%;
    font-size: 14px;    
    align-items: center;
    &:focus {
      outline: none;
    }
    .noti-btn {
      &:visited {
        color: inherit;
      }
      text-decoration: none;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-right: 30px;
    }
    
    .user-avatar {
        width: 40px;
        height: 40px;
        margin-right: 10px;
        border-radius: 50%;
      }
    .user-info {
      display: flex;
      flex-direction: column;
      .logout {
        cursor: pointer;
        color: #CCCCCC;
      }
    }
  }
  
  
}

</style>


