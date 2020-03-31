<template>
    <b-tab title="Experience">
        <b-form @submit.prevent="onSubmit" @reset="onReset">
            <div>
                <b-form-group
                        label="Role:"
                        label-for="role"
                >
                    <b-form-input
                            :class="{ 'is-invalid' : validation.hasError('role')}"
                            id="role"
                            type="text"
                            v-model="role"
                            required
                            placeholder="Enter your Role"
                    ></b-form-input>
                    <small class="text-danger">{{ validation.firstError('role')}}</small>
                </b-form-group>

                <b-form-group
                        label="Company:"
                        label-for="company"
                >
                    <b-form-input
                            id="company"
                            :class="{ 'is-invalid' : validation.hasError('company')}"
                            v-model="company"
                            type="text"
                            required
                            placeholder="Enter your Company Name"
                    ></b-form-input>
                    <small class="text-danger">{{ validation.firstError('company')}}</small>
                </b-form-group>
                <b-form-group
                        label="From - To :"
                        label-for="experience-from-to"
                >
                    <date-picker
                            :input-attr="{
                                        name: 'experience-from-to',
                                        id: 'experience-from-to',
                                         required: 'required'
                        }"
                            class="w-100"
                            :class="{'is-invalid' : validation.hasError('fromTo')}"
                            v-model="fromTo"
                            valueType="MMMM-YYYY" range>
                    </date-picker>
                    <small class="text-danger">{{ validation.firstError('fromTo')}}</small>
                </b-form-group>
                <b-form-group>
                    <label for="experience-description">Description :
                        <b-link class="text-muted small" target="_blank" href="https://miaolz123.github.io/vue-markdown/">
                            <font-awesome-icon  icon="info" />
                        </b-link>
                    </label>
                    <b-form-textarea
                            id="experience-description"
                            v-model="description"
                            placeholder="write your something about your experience..."
                            rows="3"
                            required
                            max-rows="6"
                    ></b-form-textarea>
                </b-form-group>
                <b-form-group label="add Relative Tags:" label-for="experience-tags">
                    <b-form-tags
                            tag-variant="info"
                            input-id="experience-tags"
                            separator=" ,;"
                            v-model="tags"
                            class="mb-2"
                            remove-on-delete
                    >
                    </b-form-tags>
                </b-form-group>


                <div v-if="getEditedExperience">
                    <b-button
                            v-b-tooltip.hover
                            title="Edit Me"
                            block type="button"
                            @click="EditState('experiences', getEditedExperience.id)"
                            variant="warning">
                        <font-awesome-icon icon="edit"></font-awesome-icon>
                    </b-button>

                    <b-button
                            v-b-tooltip.hover
                            title="Cancel"
                            block type="button"
                            @click="onReset"
                            variant="info">
                        <font-awesome-icon icon="times"></font-awesome-icon>
                    </b-button>
                </div>
                <b-button
                        v-else
                        v-b-tooltip.hover
                        title="Add Experience"
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
                }
            }
        },
        computed: {
            ...mapGetters(["getEditedExperience"]),
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
            }
        },
        methods: {
            onReset() {
                this.experience.id += 1 ;
                this.experience.role = "";
                this.experience.company = "";
                this.experience.fromTo = "";
                this.experience.description = "";
                this.experience.tags = [];
                this.validation.reset();
                this.$store.state.edit.experiences = null;
            },
            EditState(state, id) {
                this.$validate().then((success)=> {
                    if (success) {
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
                                id:          this.experience.id,
                                role:        this.experience.role,
                                company:     this.experience.company,
                                fromTo:      this.experience.fromTo,
                                description: this.experience.description,
                                tags:        this.experience.tags,
                            }
                        });
                        this.onReset()
                    }
                })
            },
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