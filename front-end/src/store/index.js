import Vue from 'vue';
import Vuex from 'vuex';
import {patients} from './modules/patients';
import {tests} from './modules/tests';
import {app} from './modules/app';
Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        patients,
        app,
        tests
    }
});