import Vue from 'vue'
import router from '@/js/config/router'
import store from '@/js/store/store'

import '@/js/config/bootstrap'

import App from '@/js/view/App'

new Vue({
    store,
    router,
    render: h => h(App)
}).$mount('#app')