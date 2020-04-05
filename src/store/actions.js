export default {
    submitEditedState (context, payload) {
        context.commit('removeStateElmByID',payload);
        context.commit('editedState', payload);
        context.commit('ResetEditStateElm', payload);
    },
    restoreState (context, payload) {
        context.commit('removeStateElmByID',payload);
        context.commit('restoreStateBackup', payload);
    }
}