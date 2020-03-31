<template>
    <b-tab title="Experience">
        <b-form @submit.prevent="onSubmit" @reset="onReset" @testme="alert('teste emit')">
            <div v-if="!getEditedExperience">
                <b-form-group
                        label="Role:"
                        label-for="role"
                >
                    <b-form-input
                            :class="{ 'is-invalid' : validation.hasError('experience.role')}"
                            id="role"
                            type="text"
                            v-model="experience.role"
                            required
                            placeholder="Enter your Role"
                    ></b-form-input>
                    <small class="text-danger">{{ validation.firstError('experience.role')}}</small>
                </b-form-group>

                <b-form-group
                        label="Company:"
                        label-for="company"
                >
                    <b-form-input
                            id="company"
                            :class="{ 'is-invalid' : validation.hasError('experience.company')}"
                            v-model="experience.company"
                            type="text"
                            required
                            placeholder="Enter your Company Name"
                    ></b-form-input>
                    <small class="text-danger">{{ validation.firstError('experience.company')}}</small>
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
                            :class="{'is-invalid' : validation.hasError('experience.fromTo')}"
                            v-model="experience.fromTo"
                            valueType="MMMM-YYYY" range>

                    </date-picker>
                    <small class="text-danger">{{ validation.firstError('experience.fromTo')}}</small>
                </b-form-group>
                <b-form-group>
                    <label for="experience-description">Description :
                        <b-link class="text-muted small" target="_blank" href="https://miaolz123.github.io/vue-markdown/">
                            <font-awesome-icon  icon="info" />
                        </b-link>
                    </label>
                    <b-form-textarea
                            id="experience-description"
                            v-model="experience.description"
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
                            v-model="experience.tags"
                            class="mb-2"
                            remove-on-delete
                    >
                    </b-form-tags>
                </b-form-group>
                <b-button
                        block type="submit" variant="info">
                    <font-awesome-icon icon="plus"></font-awesome-icon>
                </b-button>
            </div>


            <!--            &#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;-->


            <div v-else >
                <b-form-group
                        label="Role:"
                        label-for="role"
                >
                    <b-form-input
                            :class="{ 'is-invalid' : validation.hasError('getEditedExperience.role')}"
                            id="role"
                            type="text"
                            v-model="getEditedExperience.role"
                            required
                            placeholder="Enter your Role"
                    ></b-form-input>
                    <small class="text-danger">{{ validation.firstError('getEditedExperience.role')}}</small>
                </b-form-group>

                <b-form-group
                        label="Company:"
                        label-for="company"
                >
                    <b-form-input
                            id="company"
                            :class="{ 'is-invalid' : validation.hasError('getEditedExperience.company')}"
                            v-model="getEditedExperience.company"
                            type="text"
                            required
                            placeholder="Enter your Company Name"
                    ></b-form-input>
                    <small class="text-danger">{{ validation.firstError('getEditedExperience.company')}}</small>
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
                            :class="{'is-invalid' : validation.hasError('getEditedExperience.fromTo')}"
                            v-model="getEditedExperience.fromTo"
                            valueType="MMMM-YYYY" range>

                    </date-picker>
                    <small class="text-danger">{{ validation.firstError('getEditedExperience.fromTo')}}</small>
                </b-form-group>
                <b-form-group>
                    <label for="experience-description">Description :
                        <b-link class="text-muted small" target="_blank" href="https://miaolz123.github.io/vue-markdown/">
                            <font-awesome-icon  icon="info" />
                        </b-link>
                    </label>
                    <b-form-textarea
                            id="experience-description"
                            v-model="getEditedExperience.description"
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
                            v-model="getEditedExperience.tags"
                            class="mb-2"
                            remove-on-delete
                    >
                    </b-form-tags>
                </b-form-group>
                <b-button
                        block type="button"
                        @click="ChangeExperience('experiences', getEditedExperience.id)"
                        variant="warning">
                    <font-awesome-icon icon="edit"></font-awesome-icon>
                </b-button>

                <b-button
                        block type="button"
                        @click="onReset()"
                        variant="info">
                    <font-awesome-icon icon="times"></font-awesome-icon>
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
        },
        validators: {
            'experience.role': function (value) {
                return Validator.value(value).required().regex('^[A-Za-z ]*$', 'Must only contain alphabetic characters.');
            },
            'experience.company': function (value) {
                return Validator.value(value).required().regex('^[A-Za-z ]*$', 'Must only contain alphabetic characters.');
            },
            'experience.fromTo': function (value) {
                return Validator.value(value).required();
            }
        },
        methods: {
            onReset() {
                this.experience.id += 1;
                this.experience.role = "";
                this.experience.company = "";
                this.experience.fromTo = "";
                this.experience.description = "";
                this.experience.tags = [];
                this.validation.reset();
                this.$store.state.edit.experiences=null;
            },
            ChangeExperience(state, id) {
                this.$store.dispatch('submitEditedState', {
                    field:  state,
                    id: id
                });
                this.onReset()
            },
            // add validation
            onSubmit() {
                this.$validate().then((success)=> {
                    if (success) {
                        this.$store.commit('appendStateField', {
                            field: 'experiences',
                            value: {
                                id: this.experience.id,
                                role: this.experience.role,
                                company: this.experience.company,
                                fromTo: this.experience.fromTo,
                                description: this.experience.description,
                                tags: this.experience.tags,
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