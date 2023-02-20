<script setup lang='ts' name='About'>
import { onMounted, reactive } from 'vue'

const name: string = '覃凯'
onMounted(() => {
    console.log(name)
})
</script>
<template>
    <div>
        <van-button>按钮</van-button>
    </div>
</template>
