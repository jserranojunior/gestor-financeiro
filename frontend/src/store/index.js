/* eslint-disable */
import Vue from "vue";
import Vuex from "vuex";

import Auth from "../modules/auth/vuex";
import Users from "../modules/users/vuex";
import Financeiro from "../modules/financeiro/vuex";
import Calendario from "../modules/financeiro/components/calendario/vuex";

export default function () {
  const Store = new Vuex.Store({
    modules: {
      Auth,
      Financeiro,
      Calendario,
      Users,
    },
    strict: process.env.DEV,
  });
  return Store;
}
Vue.use(Vuex);
