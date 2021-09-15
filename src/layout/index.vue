<template>
  <div class="main-content">
    <el-container style="height: 100%">
      <el-aside width="200px" height="100%">
        <LeftNav></LeftNav>
      </el-aside>
      <el-main>
        <Breadcrumb />
        <router-view v-slot="{ Component }">
          <transition name="fade-transform" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import LeftNav from "../components/LeftNav.vue";
import Breadcrumb from "../components/Breadcrumb.vue";
export default {
  components: {
    LeftNav,
    Breadcrumb,
  },
  setup() {
    const state = reactive({
      count: 0,
      breadcrumbList: [],
    });
    return {
      ...toRefs(state),
    };
  },
};
</script>

<style lang="scss" scoped>
.main-content {
  height: 100%;
}
</style>
