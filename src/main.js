// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import Vuetify from 'vuetify';
import router from './router';
import store from './store';
/* style */
import 'font-awesome/css/font-awesome.css';  
import './theme/default.styl';
import colors from 'vuetify/es5/util/colors';
/* global plugins */
import AxiosPlugins from './plugins/axios';
import VeeValidate from 'vee-validate';
import Truncate from 'lodash.truncate';
Vue.config.productionTip = false;
/* helper and filter global scope */
Vue.filter('truncate', Truncate);
Vue.use(AxiosPlugins);
Vue.use(VeeValidate, { fieldsBagName: 'formFields' });
Vue.use(Vuetify, {
  theme: {
    primary: colors.purple.base,
    secondary: colors.grey.darken1,
    accent: colors.shades.black,
    error: colors.red.accent3
  },
  options: {
    themeVariations: ['primary', 'secondary', 'accent'],
    extra: {
      mainToolbar: {
        color: 'primary',
      },
      sideToolbar: {
      },
      sideNav: 'primary',
      mainNav: 'primary lighten-1',
      bodyBg: '',
    }
  }
});
// Bootstrap application components



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
