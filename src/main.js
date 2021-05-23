import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
// import VueSocketIO from 'vue-socket.io'
import '@/assets/styles/css/reset.css'
import '@/assets/styles/css/border.css'
import '@/assets/js/rem.js'
import '@/utils/permission.js'
import '@/assets/styles/css/common.scss'
import 'swiper/css/swiper.min.css'
import '@/assets/fonts/fonts.css'
import '@/assets/styles/css/iconfont.css'
import '@/assets/js/iconfont.js'
// import VConsole from 'vconsole'
// const vConsole = new VConsole()
// Vue.use(vConsole)
// import { mockXHR } from '../mock';
import {
	Button,
	Tab,
	Tabs,
	Tabbar,
	TabbarItem,
	Toast,
	Notify,
	Swipe,
	SwipeItem,
	Lazyload,
	Grid,
	GridItem,
	Icon,
	Sticky,
	Collapse,
	CollapseItem,
	Progress,
	NavBar,
	Uploader,
	ActionSheet,
	DatetimePicker,
	Popup,
	Field,
	Switch,
	CountDown,
	Dialog,
	Loading,
	ShareSheet,
	Overlay,
	SwipeCell,
	DropdownMenu,
	DropdownItem,
	Divider,
	Search,
	Empty,
	List,
	Form,
	PullRefresh,
	Picker,
} from 'vant'

Vue.use(Button)
	.use(Tab)
	.use(Tabs)
	.use(Tabbar)
	.use(TabbarItem)
	.use(Toast)
	.use(Notify)
	.use(Swipe)
	.use(SwipeItem)
	.use(Lazyload, {
		lazyComponent: true,
		loading: require('@/assets/images/loading.gif'),
	})
	.use(VueAwesomeSwiper)
	.use(Grid)
	.use(GridItem)
	.use(Icon)
	.use(Sticky)
	.use(Collapse)
	.use(CollapseItem)
	.use(Progress)
	.use(NavBar)
	.use(Uploader)
	.use(ActionSheet)
	.use(DatetimePicker)
	.use(Popup)
	.use(Field)
	.use(Switch)
	.use(CountDown)
	.use(Dialog)
	.use(Loading)
	.use(ShareSheet)
	.use(Overlay)
	.use(SwipeCell)
	.use(DropdownMenu)
	.use(DropdownItem)
	.use(Divider)
	.use(Search)
	.use(Empty)
	.use(List)
	.use(Form)
	.use(PullRefresh)
	.use(Picker)
console.log(process.env)
// if (process.env.NODE_ENV === "development") {
// mockXHR()
// }

// if (process.env.NODE_ENV === 'development') {
//     const VConsole = require('vconsole')
//         // eslint-disable-next-line
//     const my_console = new VConsole()
// }
// Vue.use(new VueSocketIO({
//     debug: true,
//     connection: 'https://www.holiday.shunbokj.cn',
//     vuex: {
//         store,
//         actionPrefix: 'SOCKET_',
//         mutationPrefix: 'SOCKET_'
//     },
//     options: { path: "/web/v1/user/getInfo" } //Optional options
// }))

Vue.config.productionTip = false

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app')
