<template>
    <b-tab :title="$t('tabs.experience')" id="experiences" >
        <b-form @submit.prevent="onSubmit" @reset="onReset">
            <div>
                <b-form-group
                        :label="$t('labels.role')+':'"
                        label-for="role"
                >
                    <b-form-input
                            :class="{ 'is-invalid' : validation.hasError('role')}"
                            id="role"
                            type="text"
                            v-model="role"
                            required
                            :placeholder="$t('placeholders.role')"
                    ></b-form-input>
                    <small class="text-danger">{{ validation.firstError('role')}}</small>
                </b-form-group>

                <b-form-group
                        :label="$t('labels.company')+':'"
                        label-for="company"
                >
                    <b-form-input
                            id="company"
                            :class="{ 'is-invalid' : validation.hasError('company')}"
                            v-model="company"
                            type="text"
                            required
                            :placeholder="$t('placeholders.company')"
                    ></b-form-input>
                    <small class="text-danger">{{ validation.firstError('company')}}</small>
                </b-form-group>
                <b-form-group>
                    <label v-if="experience.isCurrentJob" for="experience-from-to">
                        {{ $t('labels.fromTo') | current }} :
                    </label>
                    <label v-else for="experience-from-to">
                        {{ $t('labels.fromTo') }} :
                    </label>
                    <date-picker
                            :input-attr="{
                                        name: 'experience-from-to',
                                        id: 'experience-from-to',
                                         required: 'required'
                        }"
                            class="w-100"
                            :class="{'is-invalid' : validation.hasError('fromTo')}"
                            v-model="fromTo"
                            :placeholder="$t('placeholders.fromTo')  | current"
                            valueType="MMM-YYYY" :range="!isCurrentJob">
                    </date-picker>
                    <b-form-checkbox
                            v-if="!hasCurrentJob || !getCurrentJob || ( getExperienceBackup && getExperienceBackup.isCurrentJob )"
                            v-model="isCurrentJob"
                            name=" current"
                            inline
                    >
                        {{ $t('labels.current') }}
                    </b-form-checkbox>
                    <small class="text-danger">{{ validation.firstError('fromTo')}}</small>
                </b-form-group>
                <b-form-group>
                    <label for="experience-description">{{$t('labels.description')}}:
                        <b-link class="text-muted small" target="_blank" href="https://miaolz123.github.io/vue-markdown/">
                            <font-awesome-icon  icon="info" />
                        </b-link>
                    </label>
                    <b-form-textarea
                            id="experience-description"
                            v-model="description"
                            :placeholder="$t('placeholders.description')+'...'"
                            rows="3"
                            required
                            max-rows="6"
                    ></b-form-textarea>
                </b-form-group>
                <b-form-group :label="$t('labels.tags')+':'" label-for="experience-tags">
                    <b-form-tags
                            tag-variant="info"
                            input-id="experience-tags"
                            separator=" ,;"
                            v-model="tags"
                            class="mb-2"
                            remove-on-delete
                            :placeholder="$t('placeholders.tags')"
                    >
                    </b-form-tags>
                </b-form-group>


                <div v-if="getEditedExperience">
                    <b-button
                            v-b-tooltip.hover
                            :title="$t('toggles.edit')"
                            block type="button"
                            @click="EditState('experiences', getEditedExperience.id)"
                            variant="warning">
                        <font-awesome-icon icon="edit"></font-awesome-icon>
                    </b-button>

                    <b-button
                            v-b-tooltip.hover
                            :title="$t('toggles.cancel')"
                            block type="button"
                            @click="onReset"
                            variant="info">
                        <font-awesome-icon icon="times"></font-awesome-icon>
                    </b-button>
                </div>
                <b-button
                        v-else
                        v-b-tooltip.hover
                        :title="$t('buttons.add')+ ' ' +$t('tabs.experience')"
                        block type="submit" variant="info">
                    <font-awesome-icon icon="plus"></font-awesome-icon>
                </b-button>
            </div>


        </b-form>
    </b-tab>
</template>

<script>
    import { mapGetters } from "vuex";
    import SimpleVueValidation from "simple-vue-validator";
    const Validator = SimpleVueValidation.Validator;

    export default {
        name: 'experience',
        data() {
            return {
                experience: {
                    id: 1,
                    role: '',
                    company: '',
                    fromTo: '',
                    description: '',
                    tags: [],
                    isCurrentJob: false
                },
            }
        },
        computed: {
            ...mapGetters(["getEditedExperience","hasCurrentJob", "getExperienceBackup", "getCurrentJob"]),
            id: {
                get: function () {
                    if (this.getEditedExperience) {
                        return this.$store.state.edit.experiences.id
                    } else {
                        return this.$store.state.form.experiences.length
                    }
                },
                set: function (value) {
                    if (this.getEditedExperience) {
                        this.$store.state.edit.experiences.id = value
                    } else {
                        return this.experience.id
                    }
                }
            },
            role: {
                get: function () {
                    if (this.getEditedExperience) {
                        return this.$store.state.edit.experiences.role;
                    } else {
                        return this.experience.role
                    }
                },
                set: function (value) {
                    if (this.getEditedExperience) {
                        this.$store.state.edit.experiences.role = value
                    } else {
                        this.experience.role = value
                    }
                }
            },
            company: {
                get: function () {
                    if (this.getEditedExperience) {
                        return this.$store.state.edit.experiences.company;
                    } else {
                        return this.experience.company
                    }
                },
                set: function (value) {
                    if (this.getEditedExperience) {
                        this.$store.state.edit.experiences.company = value
                    } else {
                        this.experience.company = value
                    }
                }
            },
            fromTo: {
                get: function () {
                    if (this.getEditedExperience) {
                        return this.$store.state.edit.experiences.fromTo;
                    } else {
                        return this.experience.fromTo
                    }
                },
                set: function (value) {
                    if (this.getEditedExperience) {
                        this.$store.state.edit.experiences.fromTo = value
                    } else {
                        this.experience.fromTo = value
                    }
                }
            },
            description: {
                get: function () {
                    if (this.getEditedExperience) {
                        return this.$store.state.edit.experiences.description;
                    } else {
                        return this.experience.description
                    }
                },
                set: function (value) {
                    if (this.getEditedExperience) {
                        this.$store.state.edit.experiences.description = value
                    } else {
                        this.experience.description = value
                    }
                }
            },
            tags: {
                get: function () {
                    if (this.getEditedExperience) {
                        return this.$store.state.edit.experiences.tags;
                    } else {
                        return this.experience.tags
                    }
                },
                set: function (value) {
                    if (this.getEditedExperience) {
                        this.$store.state.edit.experiences.tags = value
                    } else {
                        this.experience.tags = value
                    }
                }
            },
            isCurrentJob: {
                get: function () {
                    if (this.getEditedExperience) {
                        return this.$store.state.edit.experiences.isCurrentJob;
                    } else {
                        return this.experience.isCurrentJob
                    }
                },
                set: function (value) {
                    if (this.getEditedExperience) {
                        return this.$store.state.edit.experiences.isCurrentJob = value;
                    } else {
                        this.experience.isCurrentJob = value
                    }
                }
            },
        },
        validators: {
            role: function (value) {
                return Validator.value(value).required().regex('^[A-Za-z ]*$', 'Must only contain alphabetic characters.');
            },
            company: function (value) {
                return Validator.value(value).required().regex('^[A-Za-z ]*$', 'Must only contain alphabetic characters.');
            },
            fromTo: function (value) {
                return Validator.value(value).required();
            },
        },
        methods: {
            onReset() {
                this.experience.id += 1 ;
                this.experience.role = "";
                this.experience.company = "";
                this.experience.fromTo = "";
                this.experience.description = "";
                this.experience.tags = [];
                this.experience.isCurrentJob = false;
                this.validation.reset();

                this.$store.dispatch('restoreState', {
                    field: 'experiences',
                    id: this.$store.state.edit.experiences.id
                });

                this.$store.commit('resetStateBackup', {
                    field: 'experiences',
                });
                this.$store.state.edit.experiences    = null;
            },
            EditState(state, id) {
                this.$validate().then((success)=> {
                    if (success) {
                        if (this.isCurrentJob) {
                            this.$store.commit('hasCurrentJob', {
                                has: true,
                            });
                        }
                        this.$store.dispatch('submitEditedState', {
                            field: state,
                            id: id
                        });
                        this.onReset()
                    }
                });
            },
            // add validation
            onSubmit() {
                this.$validate().then((success)=> {
                    if (success) {
                        this.$store.commit('appendStateField', {
                            field: 'experiences',
                            value: {
                                id:           this.experience.id,
                                role:         this.experience.role,
                                company:      this.experience.company,
                                fromTo:       this.experience.fromTo,
                                isCurrentJob: this.experience.isCurrentJob,
                                description:  this.experience.description,
                                tags:         this.experience.tags,
                            }
                        });
                        if (this.isCurrentJob) {
                            this.$store.commit('hasCurrentJob', {
                                has: true,
                            });
                        }
                        this.onReset()
                    }
                })
            },
        },
        filters: {
            current: function (value) {
                return value.split('-')[0]
            }
        }
    }
</script>

<style>
    .is-invalid .mx-input{
        border-color: #dc3545 !important;
    }

    .is-invalid .mx-icon-calendar{
        color: #dc3545 !important;
    }

</style>