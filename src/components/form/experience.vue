<template>
    <b-tab title="Experience" active>
        <b-form-group
                label="Role:"
                label-for="role"
        >
            <b-form-input
                    id="role"
                    type="text"
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
                    <b-form-input
                            id="experience-from"
                            type="date"
                            required
                    ></b-form-input>
                </b-form-group>
            </b-col>

            <b-col>
                <b-form-group
                        label="to:"
                        label-for="experience-to"
                >
                    <b-form-input
                            id="experience-to"
                            type="date"
                            required
                    ></b-form-input>
                </b-form-group>
            </b-col>
        </b-row>

        <b-form-group
                label="Description :"
                label-for="experience-description"
        >
            <b-form-textarea
                    id="experience-description"
                    placeholder="write your something about your experience..."
                    rows="3"
                    max-rows="6"
            ></b-form-textarea>
        </b-form-group>
    </b-tab>
</template>

<script>
    export default {
        name: 'experience'
    }
</script>