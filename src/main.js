// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import iView from 'iview';
import axios from 'axios';
import moment from 'moment';
import App from './App';
import router from './router';
import store from './store';
import 'iview/dist/styles/iview.css';


Vue.config.productionTip = false;
Vue.prototype.moment = moment;
axios.defaults.baseURL = 'http://api.fajarpatappari.tk:3005/api';
axios.defaults.headers.common.Authorization = localStorage.getItem('token');

Vue.use(iView);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  // template: '<App/>',
  // components: { App },
});
