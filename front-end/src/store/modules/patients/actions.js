import axios from 'axios'

export const actions = {
    getPatients(context) {
        context.rootState.app.loading = true;
        const baseURI = "http://localhost:5000/api/1.0/patient/all";
        axios.get(baseURI)
            .then((res) => {
                let patients = res.data;
                context.commit('setPatients', patients);
                context.rootState.app.loading = false;
            })
            .catch((err) => {
                console.log(err.response);
            })
    },
    
    addProduct(context, patient) {
        context.commit('addPatient', patient);
    }
};