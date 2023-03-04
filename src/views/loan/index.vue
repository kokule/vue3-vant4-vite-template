<script setup lang="ts">
import topButton from '@/components/top-button/index.vue'
const tabList = [
  { name: '全部', id: '1' },
  { name: '未报销', id: '2' },
  { name: '报销中', id: '3' },
  { name: '已报销', id: '4' }
]
function clickEvent(tab: object) {
  console.log(tab, 'wwwwwwwwwwww')
}
</script>

<template>
  <topButton @click-tab="clickEvent" :tabList="tabList">
    <template #1>
      <van-cell-group>
        <van-cell title="单元格" value="内容" />
        <van-cell title="单元格" value="内容" label="描述信息" />
      </van-cell-group>
    </template>
    <template #2>222</template>
    <template #3>333</template>
    <template #4>444</template>
  </topButton>
</template>
