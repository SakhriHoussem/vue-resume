<template>
    <b-tab title="Project">
        <b-form @submit.prevent="onSubmit" @reset="onReset">
            <b-form-group
                    label="Project Name:"
                    label-for="project-name"
            >
                <b-form-input
                        :class="{ 'is-invalid' : validation.hasError('project.name')}"
                        id="project-name"
                        type="text"
                        required
                        v-model="project.name"
                        placeholder="Enter your project name"
                ></b-form-input>
                <small class="text-danger">{{ validation.firstError('project.name')}}</small>
            </b-form-group>

            <b-form-group
                    label="project link :"
                    label-for="project-link"
            >
                <b-form-input
                        :class="{ 'is-invalid' : validation.hasError('project.link')}"
                        id="project-link"
                        type="url"
                        v-model="project.link"
                        placeholder="Enter your project link"
                ></b-form-input>
                <small class="text-danger">{{ validation.firstError('project.link')}}</small>
            </b-form-group>

            <b-form-group
                    label="From - To :"
                    label-for="project-from-to"
            >
                <date-picker :input-attr="{
                                            name: 'project-from-to',
                                            id: 'project-from-to'
                            }"
                             class="w-100"
                             :class="{'is-invalid' : validation.hasError('project.fromTo')}"
                             v-model="project.fromTo"
                             valueType="MMMM-YYYY" range>
                </date-picker>
            </b-form-group>

            <b-form-group
                    label="Description :"
                    label-for="project-description"
            >
                <b-form-textarea
                        id="project-description"
                        v-model="project.description"
                        placeholder="write your something about your project..."
                        rows="3"
                        max-rows="6"
                ></b-form-textarea>
            </b-form-group>

            <b-form-group
                    label="add some tags:"
                    label-for="project-tags"
            >
                <b-form-tags
                        input-id="project-tags"
                        separator=" ,;"
                        class="mb-2"
                        v-model="project.tags"
                        tag-variant="info"
                ></b-form-tags>
            </b-form-group>
            <b-button block type="submit" variant="info">
                <font-awesome-icon icon="plus"></font-awesome-icon>
            </b-button>
        </b-form>
    </b-tab>
</template>

<script>
    import SimpleVueValidation from "simple-vue-validator";
    const Validator = SimpleVueValidation.Validator;

    export default {
        name: 'project',
        data() {
            return {
                project: {
                    id: 1,
                    name: '',
                    link: '',
                    fromTo: '',
                    description: '',
                    tags: []
                }
            }
        },
        validators: {
            'project.name': function (value) {
                return Validator.value(value).required();
            },
            'project.link': function (value) {
                return Validator.value(value).url();
            },
            'project.fromTo': function (value) {
                return Validator.value(value).required();
            }
        },
        methods: {
            // add validation
            onSubmit() {
                this.$validate().then((success)=> {
                    if (success) {
                        this.$store.commit('appendStateField', {
                            field: 'projects',
                            value: {
                                id:        this.project.id,
                                name:        this.project.name,
                                link:        this.project.link,
                                fromTo:        this.project.fromTo,
                                description: this.project.description,
                                tags:        this.project.tags,
                            }
                        });
                        this.onReset()
                    }
                })
            },
            onReset() {
                this.project.id += 1;
                this.project.name = "";
                this.project.link = "";
                this.project.fromTo = "";
                this.project.description = "";
                this.project.tags = [];
            },
        }
    }
</script>