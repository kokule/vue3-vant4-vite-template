<template>
  <van-tabs v-model:active="active" sticky @click-tab="$emit('clickTab')">
    <van-tab v-for="tab in tabList" :key="tab.id" :title="tab.name">
      <template #default>
        <slot :name="tab.id"></slot>
      </template>
    </van-tab>
    <template #nav-right>
      <van-button type="primary" plain size="mini">
        <template #icon>
          <i class="iconfont icon-sousuo" />
        </template>
        搜索
      </van-button>
    </template>
  </van-tabs>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import type { PropType } from 'vue'
import type { TabItem } from '@/types'
const props = defineProps({
  tabList: Array as unknown as PropType<[TabItem]>
  // tabList: Array<{id: string, name: string}>
  // tabList: Array as unknown as any
})
console.log(props.tabList, 'tabList')
const active = ref(0)
</script>
<style lang="scss">
.van-tabs {
  .van-tabs__wrap {
    .van-tab {
      padding: 0 !important;

      .van-tab__text {
        width: 100%;
        text-align: center;
        color: #999999;
      }
    }

    .van-tab--active {
      .van-tab__text {
        color: #496fe5;
        font-size: 14px;
      }
    }

    .van-tabs__line {
      width: 76px;
      height: 1px;
      background: #496fe5;
    }
  }

  .van-tabs__content {
    padding: 15px;
    background: #f8f8f8;
  }
}

.van-button {
  border: none;
  height: 100%;

  .van-button__content {
    .van-button__text {
      color: #496fe5;
      font-size: 14px;
      font-weight: 400;
      line-height: 12px;
    }
  }
}</style>
