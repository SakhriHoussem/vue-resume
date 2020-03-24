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

            <b-form-group
                    label="From - To :"
                    label-for="project-from-to"
            >
                <date-picker :input-attr="{ name: 'project-from-to', id: 'project-from-to'}" class="w-100" v-model="project.fromTo" range  valueType="MMMM-YYYY" ></date-picker>
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
    export default {
        name: 'project',
        data() {
            return {
                project: {
                    name: '',
                    link: '',
                    fromTo: '',
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
                    value: {
                        name:        this.project.name,
                        link:        this.project.link,
                        fromTo:        this.project.fromTo,
                        description: this.project.description,
                        tags:        this.project.tags,
                    }
                })
            }
        }
    }
</script>