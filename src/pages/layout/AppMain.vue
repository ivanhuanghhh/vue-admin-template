<template>
  <div class="app-main-container">
      <levelbar></levelbar>
      <div class="page-container">
        <router-view/>

      </div>
  </div>


</template>
<script>
import Levelbar from './Levelbar'
export default {
  components: {
    Levelbar
  }
  
}
</script>

<style lang="scss">
  .app-main-container {

    .page-container {
      padding: 20px;
    }
  }
  
</style>
