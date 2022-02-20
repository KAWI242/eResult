import Vue from 'vue'

export const mutations = {
    showLoad(state, valeur) {
        Vue.set(state, 'loading', valeur);
    },
    hideLoad(state, valeur) {
        Vue.set(state, 'loading', valeur);
    },
};