<template>
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item
        v-for="item in breadcrumbList"
        :key="item.title"
        :to="item.path ? { path: '/' } : null"
        @click="handleChangeRoute(item)"
      >
        {{ item.title }}
      </el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
import { reactive, toRefs, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
export default {
  setup() {
    const state = reactive({
      count: 0,
      breadcrumbList: [],
    });
    const route = useRoute();
    const router = useRouter();
    state.breadcrumbList = route.meta && route.meta.breadcrumb;
    watch(
      () => route.path,
      () => {
        state.breadcrumbList = route.meta && route.meta.breadcrumb;
      }
    );
    const handleChangeRoute = (item) => {
      console.log(item, "item");
      if (item.path) {
        router.push(item.path);
      }
    };
    return {
      ...toRefs(state),
      handleChangeRoute,
    };
  },
};
</script>

<style lang="scss" scoped></style>
