<template>
    <b-tab title="Project">
        <b-form @submit.prevent="onSubmit">
            <b-form-group
                    label="Project Name:"
                    label-for="project-name"
            >
                <b-form-input
                        id="project-name"
                        type="text"
                        required
                        v-model="project.name"
                        placeholder="Enter your project name"
                ></b-form-input>
            </b-form-group>

            <b-form-group
                    label="project link :"
                    label-for="project-link"
            >
                <b-form-input
                        id="project-link"
                        type="url"
                        required
                        v-model="project.link"
                        placeholder="Enter your project link"
                ></b-form-input>
            </b-form-group>

            <b-row>
                <b-col>
                    <b-form-group
                            label="from:"
                            label-for="project-from"
                    >
                        <b-form-datepicker
                                id="project-from"
                                v-model="project.from"
                                class="mb-2"
                                required
                        >
                        </b-form-datepicker>
                    </b-form-group>
                </b-col>

                <b-col>
                    <b-form-group
                            label="to:"
                            label-for="project-to"
                    >
                        <b-form-datepicker
                                id="project-to"
                                v-model="project.to"
                                class="mb-2"
                                required
                        >
                        </b-form-datepicker>
                    </b-form-group>
                </b-col>
            </b-row>

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
                ></b-form-tags>
            </b-form-group>
            <b-button type="submit">add</b-button>
        </b-form>
    </b-tab>
</template>

<script>
    export default {
        name: 'project',
        data() {
            return {
                project: {
                    name: '',
                    link: '',
                    from: '',
                    to: '',
                    description: '',
                    tags: []
                }
            }
        },
        methods: {
            //todo: add validation
            onSubmit() {
                this.$store.commit('appendStateField', {
                    field: 'projects',
                    value: this.project
                })
            }
        }
    }
</script>