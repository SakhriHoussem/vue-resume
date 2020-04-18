import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue';
import store from './store';
import i18n from "./i18n";
import { BootstrapVue } from 'bootstrap-vue'
import SimpleVueValidation from 'simple-vue-validator';
import Editor from 'v-markdown-editor'
import DatePicker from 'vue2-datepicker';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import 'vue-github-buttons/dist/vue-github-buttons.css'; // Stylesheet
import VueGitHubButtons from 'vue-github-buttons'; // Component plugin
import { faFacebook,
         faInstagram,
         faLinkedinIn,
         faGithub,
         faBehance,
         faDribbble,
         faTwitter,
         faVuejs,
} from '@fortawesome/free-brands-svg-icons'
import {  faPhone,
          faAt,
          faGlobeAfrica,
          faPencilAlt,
          faBriefcase,
          faBoxOpen,
          faUniversity,
          faWrench,
          faLanguage,
          faPlus,
          faInfo,
          faEdit,
          faCameraRetro,
          faTimes,
          faFilePdf,
          faBars,
          faLink,
          faSignature,
          faNetworkWired,
          faGraduationCap,
          faCalendarAlt,
          faTags,
          faUser,
          faBuilding,
          faStepForward,
          faStepBackward,
} from '@fortawesome/free-solid-svg-icons'

// Install FontAwesome
library.add(  faPhone,
              faAt,
              faGlobeAfrica,
              faFacebook,
              faInstagram,
              faLinkedinIn,
              faPencilAlt,
              faBriefcase,
              faBoxOpen,
              faUniversity,
              faWrench,
              faLanguage,
              faPlus,
              faInfo,
              faEdit,
              faCameraRetro,
              faTimes,
              faGithub,
              faBehance,
              faDribbble,
              faTwitter,
              faFilePdf,
              faBars,
              faLink,
              faSignature,
              faNetworkWired,
              faGraduationCap,
              faCalendarAlt,
              faTags,
              faUser,
              faBuilding,
              faVuejs,
              faStepForward,
              faStepBackward,
);
Vue.component('font-awesome-icon', FontAwesomeIcon);
// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(Vuex);
Vue.use(DatePicker);
Vue.use(SimpleVueValidation);
Vue.use(VueGitHubButtons, { useCache: true });
Vue.use(Editor);
//you need to import the CSS manually (in case you want to override it)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue2-datepicker/index.css';
import 'v-markdown-editor/dist/v-markdown-editor.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
Vue.config.productionTip = false;





new Vue({
  store, i18n,
  render: h => h(App),
}).$mount('#app');
