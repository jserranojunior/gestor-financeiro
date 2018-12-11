require('./bootstrap');

import Vue from 'vue';
import axios from 'axios'
import VueAxios from 'vue-axios'
import store from './vuex/store'
 
  
import users from './components/users';
import navBarMenu from './components/nav-bar-menu';
import financialIndex from './components/financial/financial-index';
import formCreateBills from './components/financial/form-create-bills.vue';
import gitHub from './components/github/index'

  
Vue.use(VueAxios, axios) 
 
new Vue({
    store,
    el:'#appvue',
    components:{
        gitHub,
        users,
        navBarMenu,
        formCreateBills,
        financialIndex,
    }
})