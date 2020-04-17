export default {
    submitEditedState (context, payload) {
        context.commit('removeStateElmByID',payload);
        context.commit('editedState', payload);
        context.commit('ResetEditStateElm', payload);
        if (!context.getters.getCurrentJob ) {
            context.commit('hasCurrentJob', {
                has: false
            });
        }
    },
    restoreState (context, payload) {
        context.commit('removeStateElmByID',payload);
        context.commit('restoreStateBackup', payload);
        context.commit('resetStateBackup', payload);
    },
    removeStateElmByID (context, payload) {
        if (context.getters.getStateElmByID(payload.field, payload.id).isCurrentJob || !context.getters.getCurrentJob ) {
            context.commit('hasCurrentJob', {
                has: false
            });
        }
        context.commit('removeStateElmByID', payload);
        if (payload.id === context.getters.getExperienceBackup.id) {
            context.commit('ResetEditStateElm', payload);
            context.commit('resetStateBackup', payload);
        }
    }
}