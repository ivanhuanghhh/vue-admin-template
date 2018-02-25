<template>
<div class="sidebar-container">
  <el-menu 
    mode="vertical" 
    background-color="#606266"
    text-color="#ffffff"
    active-text-color="#FFD600"
    :router="true" 
    :default-active="$route.path"
    >
    <template v-for="item in routes" v-if="!item.meta.hidden">
      <el-menu-item 
      v-if="item.children.length === 1 || item.meta.single" 
      :key="item.children[0].meta.name" 
      :index="item.path">
        <span slot="title">{{ item.meta.name }}</span>
      </el-menu-item>

      <el-submenu v-else :key="item.meta.name" :index="item.path">
         <template slot="title">
          <span>{{ item.meta.name }}</span>
        </template>
        <el-menu-item 
        v-for="child in item.children" 
        v-if="!child.meta.hidden" 
        :key="child.meta.name" 
        :index="concatPath(item, child)">
          {{ child.meta.name }}
        </el-menu-item>
      </el-submenu>
    </template>

    
  </el-menu>
</div>

</template>

<script>
export default {
  computed: {
    routes() {
      return this.$router.options.routes;
    }
  },
  methods: {
    concatPath(parent, child) {
      return parent.path + "/" + child.path;
    }
  }
};
</script>

<style lang="scss">
.sidebar-container {
  .el-menu {
    border-right: none;
  }
}
</style>