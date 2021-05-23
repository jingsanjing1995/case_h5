import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const files = require.context('./modules', false, /\.js$/)
const modules = {}

files.keys().forEach(key => {
    modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
})

export default new Vuex.Store({
    state: {
        direction: 'forward' // 页面切换方向
    },
    mutations: {
        // 更新页面切换方向
        updateDirection(state, direction) {
            state.direction = direction
        }
    },
    getters: {
        // userData(state, getters) {
        userData(state) {
            debugger
            return state.user.user
                // return getters['user/user']
        }
        // vuex 全局getters引入局部
        // token () {
        //   return store.getters['user/token']
        // }
    },
    actions: {},
    modules
})