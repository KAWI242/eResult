import {getters} from './getters'
import {actions} from './actions'
import {mutations} from './mutations'

const state = {
    tests: [],
    status: null,
};

const namespaced = true;

export const tests = {
    namespaced,
    state,
    getters,
    actions,
    mutations
};