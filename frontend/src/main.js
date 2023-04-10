import Vue from 'vue'
import App from './App.vue'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-awesome/icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTelegram, faWhatsapp, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import Icon from 'vue-awesome/components/Icon'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import axios from 'axios'
import VueScrollTo from 'vue-scrollto'
import { Themes } from './services/themes'

library.add(faTelegram)
library.add(faWhatsapp)
library.add(faGithub)
library.add(faLinkedin)


Vue.component('v-icon', Icon)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(require('vue-moment'));
Vue.use(VueScrollTo)
Vue.prototype.$Themes = new Themes();

axios.defaults.baseURL = 'https://50b2-2804-14d-5c73-4958-10d3-ef8e-82c9-3b24.sa.ngrok.io'

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
