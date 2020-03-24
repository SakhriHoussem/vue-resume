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
                        v-model="experience.role"
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
                        v-model="experience.company"
                        type="text"
                        required
                        placeholder="Enter your Company Name"
                ></b-form-input>
            </b-form-group>
            <b-form-group
                    label="From - To :"
                    label-for="experience-from-to"
            >
                <date-picker :input-attr="{ name: 'experience-from-to', id: 'experience-from-to'}" class="w-100" v-model="experience.fromTo" valueType="MMMM-YYYY" range></date-picker>
            </b-form-group>
            <b-form-group
                    label="Description :"
                    label-for="experience-description"
            >
                <b-form-textarea
                        id="experience-description"
                        v-model="experience.description"
                        placeholder="write your something about your experience..."
                        rows="3"
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
            <b-button block type="submit" variant="info">
                <font-awesome-icon icon="plus"></font-awesome-icon>
            </b-button>
        </b-form>
    </b-tab>
</template>

<script>


    export default {
        name: 'experience',
        data() {
            return {
                experience: {
                    role: '',
                    company: '',
                    fromTo: '',
                    description: '',
                    tags: [],
                }
            }
        },
        methods: {
            //todo: add validation
            onSubmit() {
                this.$store.commit('appendStateField', {
                    field: 'experiences',
                    value: {
                        role:        this.experience.role,
                        company:     this.experience.company,
                        fromTo:        this.experience.fromTo,
                        description: this.experience.description,
                        tags:        this.experience.tags,
                    }
                })
            },
        }
    }
</script>