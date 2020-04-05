<template>
    <b-tab title="Education" id="education">
        <b-form @submit.prevent="onSubmit">
            <b-form-group
                    :label="$t('labels.schoolDegree')+':'"
                    label-for="education-degree"
            >
                <b-form-input
                        :class="{ 'is-invalid' : validation.hasError('degree')}"
                        id="education-degree"
                        type="text"
                        v-model="degree"
                        required
                        :placeholder="$t('placeholders.schoolDegree')"
                ></b-form-input>
                <small class="text-danger">{{ validation.firstError('degree')}}</small>
            </b-form-group>

            <b-form-group
                    :label="$t('labels.schoolName')+':'"
                    label-for="education-school"
            >
                <b-form-input
                        :class="{ 'is-invalid' : validation.hasError('degree')}"
                        id="education-school"
                        type="text"
                        v-model="school"
                        required
                        :placeholder="$t('placeholders.schoolName')"
                ></b-form-input>
                <small class="text-danger">{{ validation.firstError('degree')}}</small>
            </b-form-group>
            <b-form-group
                    :label="$t('labels.fromTo')+':'"
                    label-for="education-from-to"
            >
                <date-picker :input-attr="{
                                            name: 'education-from-to',
                                            id: 'education-from-to',
                                            required: 'required'
                            }"
                             class="w-100"
                             valueType="MMMM-YYYY"
                             :class="{'is-invalid' : validation.hasError('fromTo')}"
                             v-model="fromTo" range
                            :placeholder="$t('placeholders.fromTo')"
                >
                </date-picker>
                <small class="text-danger">{{ validation.firstError('fromTo')}}:</small>
            </b-form-group>

            <b-form-group
                    :label="$t('labels.description')+':'"
                    label-for="education-description"
            >
                <b-form-textarea
                        id="education-description"
                        v-model="description"
                        :placeholder="$t('placeholders.description')"
                        rows="3"
                        max-rows="6"
                ></b-form-textarea>
            </b-form-group>
            <b-form-group :label="$t('labels.tags')+':'" label-for="education-tags">
                <b-form-tags
                        tag-variant="info"
                        input-id="education-tags"
                        separator=" ,;"
                        v-model="tags"
                        class="mb-2"
                        remove-on-delete
                        :placeholder="$t('placeholders.tags')"
                ></b-form-tags>
            </b-form-group>
            <div v-if="getEditedEducation">
                <b-button
                        v-b-tooltip.hover
                        :title="$t('toggles.edit')"
                        block type="button"
                        @click="EditState('educations', getEditedEducation.id)"
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
                    :title="$t('toggles.submit')"
                    block type="submit" variant="info">
                <font-awesome-icon icon="plus"></font-awesome-icon>
            </b-button>
        </b-form>
    </b-tab>
</template>

<script>
    import SimpleVueValidation from "simple-vue-validator";
    import {mapGetters} from "vuex";
    const Validator = SimpleVueValidation.Validator;

    export default {
        name: 'education',
        data() {
            return {
                education: {
                    id: 1,
                    degree: '',
                    school: '',
                    fromTo: '',
                    description: '',
                    tags: []
                }
            }
        },
        computed: {
            ...mapGetters(["getEditedEducation"]),
            id: {
                get: function () {
                    if (this.getEditedEducation) {
                        return this.$store.state.edit.educations.id
                    } else {
                        return this.$store.state.form.educations.length
                    }
                },
                set: function (value) {
                    if (this.getEditedEducation) {
                        this.$store.state.edit.educations.id = value
                    } else {
                        return this.education.id
                    }
                }
            },
            degree: {
                get: function () {
                    if (this.getEditedEducation) {
                        return this.$store.state.edit.educations.degree;
                    } else {
                        return this.education.degree
                    }
                },
                set: function (value) {
                    if (this.getEditedEducation) {
                        this.$store.state.edit.educations.degree = value
                    } else {
                        this.education.degree = value
                    }
                }
            },
            school: {
                get: function () {
                    if (this.getEditedEducation) {
                        return this.$store.state.edit.educations.school;
                    } else {
                        return this.education.school
                    }
                },
                set: function (value) {
                    if (this.getEditedEducation) {
                        this.$store.state.edit.educations.school = value
                    } else {
                        this.education.school = value
                    }
                }
            },
            fromTo: {
                get: function () {
                    if (this.getEditedEducation) {
                        return this.$store.state.edit.educations.fromTo;
                    } else {
                        return this.education.fromTo
                    }
                },
                set: function (value) {
                    if (this.getEditedEducation) {
                        this.$store.state.edit.educations.fromTo = value
                    } else {
                        this.education.fromTo = value
                    }
                }
            },
            description: {
                get: function () {
                    if (this.getEditedEducation) {
                        return this.$store.state.edit.educations.description;
                    } else {
                        return this.education.description
                    }
                },
                set: function (value) {
                    if (this.getEditedEducation) {
                        this.$store.state.edit.educations.description = value
                    } else {
                        this.education.description = value
                    }
                }
            },
            tags: {
                get: function () {
                    if (this.getEditedEducation) {
                        return this.$store.state.edit.educations.tags;
                    } else {
                        return this.education.tags
                    }
                },
                set: function (value) {
                    if (this.getEditedEducation) {
                        this.$store.state.edit.educations.tags = value
                    } else {
                        this.education.tags = value
                    }
                }
            },
        },
        validators: {
            degree: function (value) {
                return Validator.value(value).required().regex('^[A-Za-z ]*$', 'Must only contain alphabetic characters.');
            },
            school: function (value) {
                return Validator.value(value).required();
            },
            fromTo: function (value) {
                return Validator.value(value).required();
            }
        },
        methods: {
            //  add validation
            onSubmit() {
                this.$validate().then((success)=> {
                    if (success) {
                        this.$store.commit('appendStateField', {
                            field: 'educations',
                            value: {
                                id: this.education.id,
                                degree: this.education.degree,
                                school: this.education.school,
                                fromTo: this.education.fromTo,
                                description: this.education.description,
                                tags: this.education.tags,
                            }
                        });
                        this.onReset();
                    }
                })
            },
            onReset() {
                this.education.id += 1;
                this.education.degree = "";
                this.education.school = "";
                this.education.fromTo = "";
                this.education.description = "";
                this.education.tags = [];
                this.validation.reset();

                this.$store.dispatch('restoreState', {
                    field: 'educations',
                    id: this.$store.state.edit.educations.id
                });

                this.$store.state.edit.educations    = null;
                this.$store.state.backups.educations = {};
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
        }
    }
</script>