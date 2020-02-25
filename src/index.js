import Vue from 'vue/dist/vue.min.js';
import { pdata, edata } from './data.js'

new Vue({
  el: '#projects',
  data: {
    list: pdata
  }
});

new Vue({
  el: '#education',
  data: {
    list: edata
  }
});