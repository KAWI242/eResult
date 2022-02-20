import axios from 'axios'

export const actions = {
    getTests(context) {
        context.rootState.app.loading = true;
        const baseURI = "http://localhost:5000/api/1.0/test/all";
        axios.get(baseURI)
            .then((res) => {
                let tests = res.data;
                context.commit('setTests', tests);
                context.rootState.app.loading = false;
            })
            .catch((err) => {
                console.log(err.response);
            })
    },
    
    addTest(context, test) {
        context.commit('addTest', test);
    }
};