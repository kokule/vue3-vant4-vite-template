<script setup lang="ts">
import Tabbar from "@/components/Tabbar/index.vue";
import { useCachedViewStoreHook } from "@/store/modules/cachedView";
import { computed, onMounted } from "vue";

const cachedViews = computed(() => {
  return useCachedViewStoreHook().cachedViewList;
});
onMounted(() => {
  const name: string = "ddd";
});
</script>

<template>
  <div class="app-wrapper">
    <div class="app-wrapper__content">
      <router-view v-slot="{ Component }">
        <keep-alive :include="cachedViews">
          <component :is="Component" />
        </keep-alive>
      </router-view>
    </div>
    <div class="app-wrapper__footer">
      <tabbar />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "@/styles/mixin.scss";

.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}
</style>
