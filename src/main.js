// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import logging from './logging'
import BootstrapVue from 'bootstrap-vue'
import VueMoment from 'vue-moment/vue-moment'
import Web3 from 'web3'
import VueChartkick from 'vue-chartkick'
import Chart from 'chart.js'
import SocialSharing from 'vue-social-sharing'

Vue.use(VueChartkick, {adapter: Chart});

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(VueMoment);
Vue.use(SocialSharing);

Vue.filter('toEth', function (value) {
  if (!value) return '';
  return Web3.utils.fromWei(value.toString(10), 'ether').valueOf();
});

Vue.filter('capitalize', function (value) {
  if (!value) return '';
  value = value.toString();
  return value.charAt(0).toUpperCase() + value.slice(1);
});

Vue.filter('uppercase', function (value) {
  if (!value) return '';
  value = value.toString();
  return value.toUpperCase();
});

(async () => {
  try {
    // pre-Vue JS bootstrap
  } catch (e) {
    // eslint-disable-next-line
    console.log(e)
  } finally {
    /* eslint-disable no-new */
    new Vue({
      el: '#app',
      store,
      router,
      logging,
      components: {App},
      template: '<App/>'
    })
  }
})();
