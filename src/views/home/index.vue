<script setup lang="ts">
import router from '@/router'
const menus = [
  // 使用require会报未定义 new URL(url, import.meta.url)是vite静态资源处理的方法
  { name: '事前申请', id: 1, img: new URL('@/assets/img/home/shenqing.png', import.meta.url).href },
  { name: '费用报销', id: 2, img: new URL('@/assets/img/home/baoxiao.png', import.meta.url).href },
  { name: '预支借款', id: 3, img: new URL('@/assets/img/home/jiekuan.png', import.meta.url).href },
  { name: '发票管理', id: 4, img: new URL('@/assets/img/home/fapiao.png', import.meta.url).href }
]
function clickMenus(e:number) {
  router.push({
    path: e == 1 ? '/apply' : e == 2 ? '/reimbursement' : e == 3 ? '/loan' : '/invoice-list'
  })
}
</script>
<template>
  <div class="home-container">
    <van-cell :title="item.name" is-link v-for="item in menus" :key="item.id" @click="clickMenus(item.id)">
      <template #icon>
        <van-image width="28px" height="28px" fit="contain" :src="item.img" />
      </template>
    </van-cell>
  </div>
</template>
<style lang="scss">
.home-container {
  padding: 0 40px;
  .van-cell {
    padding: 40px 0;
    .van-cell__title {
      font-size: 30px;
      font-weight: 400;
      color: #333333;
    }
    .van-image{
      padding-right: 20px;
    }
  }
}
</style>
