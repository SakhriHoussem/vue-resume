export default {
    updateStateField (state, payload) {
        // mutate state
        state.form[payload.field] = payload.value
    },
    appendStateField (state, payload) {
        // mutate state
        state.form[payload.field].push(payload.value)
    },
    removeStateElmByID (state, payload) {
        // mutate state
        this.state.form[payload.field] = state.form[payload.field].filter( el => { return el.id !== payload.id; });
    },
    removeStateElm (state, payload) {
        // delete an object form the state
        this.state.form[payload.field] = state.form[payload.field].filter( el => { return el !== payload.elm; });
    },
    editStateElm (state, payload) {
        // move experience from form to edit
        this.state.edit[payload.field] = payload.value;
    },
    ResetEditStateElm (state, payload) {
        // mutate state
        this.state.edit[payload.field] = null;
    },
    editedState (state, payload) {
        // mutate state
        this.state.form[payload.field].push(this.state.edit[payload.field]);
    },
    setTabIndex(state, payload){
        this.state.tabs.index = payload.index;
    },
    saveStateBackup (state, payload) {
        // move state from form to backups
        // state => backups
        Object.assign(this.state.backups[payload.field], payload.value)
    },
    restoreStateBackup (state, payload) {
        // restore state data form from backups
        // state <= backups
        this.state.form[payload.field].push(Object.assign({}, this.state.backups[payload.field]));
    },
    resetStateBackup (state, payload) {
        // reset state data of backups
        for (const key in this.state.backups[payload.field]) {
            delete this.state.backups[payload.field][key];
        }
    },
    hasCurrentJob (state, payload) {
        this.state.tabs.hasCurrentJob = payload.has;
    },
}