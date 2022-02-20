import {getters} from './getters'
import {actions} from './actions'
import {mutations} from './mutations'

const state = {
    patients: [],
    status: null,
};

const namespaced = true;

export const patients = {
    namespaced,
    state,
    getters,
    actions,
    mutations
};