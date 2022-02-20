export const actions = {
    showLoad(context) {
        context.commit('showLoad',true);
    },
    hideLoad(context) {
        context.commit('hideLoad',false);
    }
};