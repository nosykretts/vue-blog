import Vue from 'vue';
import Vuex from 'vuex';
import post from './modules/post';
import notify from './modules/notify';
import auth from './modules/auth';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    post,
    auth,
    notify
  },
  strict: true,
});
