<template>
  <div class="nav-list">
    <el-row>
      <el-col :span="24">
        <el-menu
          :uniqueOpened="true"
          default-active="/dashboard"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#304156"
          text-color="#bfcbd9"
          active-text-color="#409EFF"
          :router="true"
        >
          <el-menu-item index="/dashboard">
            <i class="el-icon-menu"></i>
            <template #title>首页</template>
          </el-menu-item>
          <el-sub-menu index="/manage">
            <template #title>
              <i class="el-icon-location"></i> 文章管理</template
            >
            <el-menu-item-group>
              <el-menu-item index="/manage">文章列表</el-menu-item>
              <el-menu-item index="/manage/create">创建文章</el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import { useRoute, useRouter } from "vue-router";
export default {
  setup() {
    const state = reactive({
      count: 0,
      menuList: [],
    });
    const handleOpen = (key, keyPath) => {
      console.log(key, keyPath);
    };
    const handleClose = (key, keyPath) => {
      console.log(key, keyPath);
    };
    const route = useRoute();
    const router = useRouter();
    return {
      ...toRefs(state),
      handleOpen,
      handleClose,
    };
  },
};
</script>

<style lang="scss" scoped>
.nav-list {
  height: 100%;
}
</style>
<style lang="scss">
.nav-list {
  .el-row,
  .el-menu {
    height: 100% !important;
  }
  .el-menu-item-group {
    .el-menu-item {
      min-width: 199px;
    }
  }
}
</style>
