import { defineAsyncComponent } from 'vue'
// 实现自动注册组件
// 这里根据实际情况设置路径
// @ts-ignore
const components = import.meta.glob('./components/*/*.vue')
export default function install (app:any) {
    for (const [key, value] of Object.entries(components)) {
        const name = key.split('/')[2]
        // @ts-ignore
        app.component(name, defineAsyncComponent(value))
    }
}
