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

            <b-row>
                <b-col>
                    <b-form-group
                            label="from:"
                            label-for="education-from"
                    >
                        <b-form-datepicker
                                id="education-from"
                                v-model="education.from"
                                class="mb-2"
                                required
                                variant="info"
                                selected-variant="info"
                        >
                        </b-form-datepicker>
                    </b-form-group>
                </b-col>

                <b-col>
                    <b-form-group
                            label="to:"
                            label-for="education-to"
                    >
                        <b-form-datepicker
                                tag-variant="info"
                                id="education-to"
                                v-model="education.to"
                                class="mb-2"
                                required
                                selected-variant="info"
                        >
                        </b-form-datepicker>
                    </b-form-group>
                </b-col>
            </b-row>

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
                    field: 'educations',
                    value: {
                        degree:        this.education.degree,
                        school:        this.education.school,
                        from:        this.education.from,
                        to:          this.education.to,
                        description: this.education.description,
                        tags:        this.education.tags,
                    }
                })
            }
        }
    }
</script>