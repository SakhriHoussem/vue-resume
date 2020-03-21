import Vue from 'vue'
import Vuex from 'vuex'
import { BootstrapVue } from 'bootstrap-vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebook, faInstagram, faLinkedinIn} from '@fortawesome/free-brands-svg-icons'
import { faPhone, faAt, faGlobeAfrica, faPencilAlt, faBriefcase, faBoxOpen, faUniversity} from '@fortawesome/free-solid-svg-icons'

// Install FontAwsome
library.add(faPhone, faAt, faGlobeAfrica, faFacebook, faInstagram, faLinkedinIn, faPencilAlt, faBriefcase, faBoxOpen, faUniversity);
Vue.component('font-awesome-icon', FontAwesomeIcon);
// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(Vuex);

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import App from './App.vue';
import store from './store.js';

Vue.config.productionTip = false;



new Vue({
  store,
  render: h => h(App),
}).$mount('#app');
