import Vue from 'vue';
import Vuex from 'vuex';
/* import store modules */
import auth from './auth.module';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth
  }
});