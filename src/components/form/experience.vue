<template>
    <b-tab title="Experience" active>
        <b-form @submit.prevent="onSubmit">
            <b-form-group
                    label="Role:"
                    label-for="role"
            >
                <b-form-input
                        id="role"
                        type="text"
                        v-model="role"
                        required
                        placeholder="Enter your Role"
                ></b-form-input>
            </b-form-group>

            <b-form-group
                    label="Company:"
                    label-for="company"
            >
                <b-form-input
                        id="company"
                        v-model="company"
                        type="text"
                        required
                        placeholder="Enter your Company Name"
                ></b-form-input>
            </b-form-group>

            <b-row>
                <b-col>
                    <b-form-group
                            label="from:"
                            label-for="experience-from"
                    >
                        <b-form-datepicker
                                id="experience-from"
                                v-model="experienceFrom"
                                class="mb-2"
                                required
                        >
                        </b-form-datepicker>
                    </b-form-group>
                </b-col>

                <b-col>
                    <b-form-group
                            label="to:"
                            label-for="experience-to"
                    >
                        <b-form-datepicker
                                id="experience-to"
                                v-model="experienceTo"
                                class="mb-2"
                                required
                        >
                        </b-form-datepicker>
                    </b-form-group>
                </b-col>
            </b-row>

            <b-form-group
                    label="Description :"
                    label-for="experience-description"
            >
                <b-form-textarea
                        id="experience-description"
                        v-model="experienceDescription"
                        placeholder="write your something about your experience..."
                        rows="3"
                        max-rows="6"
                ></b-form-textarea>
            </b-form-group>
            <b-form-group label="add Relative Tags:" label-for="experience-tags">
                <b-form-tags
                        input-id="experience-tags"
                        separator=" ,;"
                        v-model="experienceTags"
                        class="mb-2"
                        remove-on-delete
                >
                </b-form-tags>
            </b-form-group>
            <b-button type="submit">add</b-button>
        </b-form>
    </b-tab>
</template>

<script>
    export default {
        name: 'experience',
        data() {
            return {
                role: '',
                company: '',
                experienceFrom: '',
                experienceTo: '',
                experienceDescription: '',
                experienceTags: [],
            }
        },
        methods: {
            //todo: add validation
            onSubmit() {
                this.$store.commit('appendStateField', {
                    field: 'experiences',
                    value: {
                        role:                  this.role,
                        company:               this.company,
                        from:        this.experienceFrom,
                        to:          this.experienceTo,
                        description: this.experienceDescription,
                        tags:        this.experienceTags,
                    }
                })
            }
        }
    }
</script>