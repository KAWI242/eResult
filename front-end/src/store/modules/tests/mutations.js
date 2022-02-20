import Vue from 'vue'

export const mutations = {
    setTests(state, tests) {
        Vue.set(state, 'tests', tests);
    },
    addTests(state, test) {
        let tests = state.tests;
        tests.push(test);
        Vue.set(state, 'tests', tests);
    },
};