<template>
    <b-tab title="Education">
        <b-form @submit.prevent="onSubmit">
            <b-form-group
                    label="education Degree:"
                    label-for="education-degree"
            >
                <b-form-input
                        id="education-degree"
                        type="text"
                        v-model="education.degree"
                        required
                        placeholder="Enter your education degree"
                ></b-form-input>
            </b-form-group>

            <b-form-group
                    label="school Name :"
                    label-for="education-school"
            >
                <b-form-input
                        id="education-school"
                        type="text"
                        v-model="education.school"
                        required
                        placeholder="Enter your education school name"
                ></b-form-input>
            </b-form-group>
            <b-form-group
                    label="From - To :"
                    label-for="education-from-to"
            >
                <date-picker :input-attr="{ name: 'education-from-to', id: 'education-from-to'}" class="w-100" valueType="MMMM-YYYY" v-model="education.fromTo" range ></date-picker>
            </b-form-group>

            <b-form-group
                    label="Description :"
                    label-for="education-description"
            >
                <b-form-textarea
                        id="education-description"
                        v-model="education.description"
                        placeholder="write your something about your education..."
                        rows="3"
                        max-rows="6"
                ></b-form-textarea>
            </b-form-group>
            <b-form-group label="add Relative Tags:" label-for="education-tags">
                <b-form-tags
                        tag-variant="info"
                        input-id="education-tags"
                        separator=" ,;"
                        v-model="education.tags"
                        class="mb-2"
                        remove-on-delete
                ></b-form-tags>
                <b-button block type="submit" variant="info">
                    <font-awesome-icon icon="plus"></font-awesome-icon>
                </b-button>
            </b-form-group>
        </b-form>
    </b-tab>
</template>

<script>
    export default {
        name: 'education',
        data() {
            return {
                education: {
                    degree: '',
                    school: '',
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
                    field: 'educations',
                    value: {
                        degree:        this.education.degree,
                        school:        this.education.school,
                        fromTo:        this.education.fromTo,
                        description: this.education.description,
                        tags:        this.education.tags,
                    }
                })
            }
        }
    }
</script>