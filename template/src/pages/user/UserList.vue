<template>
<el-table class="user-table" :data="tableData" @row-click="handleRowClick" row-class-name="user-table-row">
  <el-table-column prop="date" label="日期" width="180">
  </el-table-column>
  <el-table-column prop="name" label="姓名" width="180">
  </el-table-column>
  <el-table-column prop="address" label="地址">
  </el-table-column>
</el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        {
          id: 1,
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          id: 1,          
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          id: 1,          
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          id: 1,          
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  methods: {
    handleRowClick(item) {
      this.$router.push({name: 'userDetail', params: { id: item.id }})
    }
  }
};
</script>


<style lang="scss">
.user-table {
  width: 100%;
}
.user-table-row {
  cursor: pointer;
}
</style>


