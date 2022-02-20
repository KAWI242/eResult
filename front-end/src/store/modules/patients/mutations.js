import Vue from 'vue'

export const mutations = {
    setPatients(state, patients) {
        Vue.set(state, 'patients', patients);
    },
    addPatient(state, patient) {
        let patients = state.patients;
        patients.push(patient);
        Vue.set(state, 'patients', patients);
    },
};