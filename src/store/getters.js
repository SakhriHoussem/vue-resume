export default {
    getSocialNetworksList: state => { return  state.socialNetworksList },
    getFullName: state => { return  state.form.fullName },
    getJob: state => { return  state.form.job },
    getPhone: state => { return  state.form.phone },
    getEmail: state => { return  state.form.email },
    getLinks: state => { return  state.form.links },
    getSocialNetworks: state => { return  state.form.socialNetworks },
    getResume: state => { return  state.form.resume },
    getExperiences: state => { return  state.form.experiences },
    getProjects: state => { return  state.form.projects },
    getEducations: state => { return  state.form.educations },
    getSkills: state => { return  state.form.skills },
    getLanguages: state => { return  state.form.languages },
    getInterests: state => { return  state.form.interests },
    getEditedExperience: state => { return  state.edit.experiences },
    getExperienceBackup: state => { return  state.backups.experiences },
    getEditedProject: state => { return  state.edit.projects },
    getEditedEducation: state => { return  state.edit.educations },
    hasCurrentJob: state => { return  state.tabs.hasCurrentJob },
    getStateElmByID: (state) => (field, id) => {
        // get state by id
        return state.form[field].find( el =>  el.id === id);
    },
    getCurrentJob: (state) => {
        // get state by id
        return state.form.experiences.find( el =>  el.isCurrentJob);
    },
}