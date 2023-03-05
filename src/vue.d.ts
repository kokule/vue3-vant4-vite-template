import request from './utils/request'
import * as utils from './utils/index'


declare module 'vue/types/vue' {
    interface Vue {
        $request: request
        $utils: utils
    }
}
