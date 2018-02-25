<template>
<div class="levelbar-container">
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item v-for="item in levelList" :key="item.meta.name" :to="item.path">
      \{{ item.meta.name }}
    </el-breadcrumb-item>
    
  </el-breadcrumb>
</div>
</template>

<script>

export default {
  name: 'levelbar',
  data() {
    return {
      levelList: []
    }
  },
  created() {
    this.getLevelList()
  },
  methods: {
    getLevelList() {
      let matched = this.$route.matched.filter(item => item.meta && item.meta.name && item.path != '')
      this.levelList = matched
    }
  },
  watch: {
    $route: function() {
      this.getLevelList()

    }
  }
};
</script>

<style lang="scss">
  .levelbar-container {
    padding: 20px;
    background: #f9f9f9;
  }
</style>


