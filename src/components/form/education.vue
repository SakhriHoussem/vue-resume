<template>
    <b-tab title="Education">
        <b-form-group
                label="education Degree:"
                label-for="education-degree"
        >
            <b-form-input
                    id="education-degree"
                    type="text"
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
                    <b-form-input
                            id="education-from"
                            type="date"
                            required
                    ></b-form-input>
                </b-form-group>
            </b-col>

            <b-col>
                <b-form-group
                        label="to:"
                        label-for="education-to"
                >
                    <b-form-input
                            id="education-to"
                            type="date"
                            required
                    ></b-form-input>
                </b-form-group>
            </b-col>
        </b-row>

        <b-form-group
                label="Description :"
                label-for="education-description"
        >
            <b-form-textarea
                    id="education-description"
                    placeholder="write your something about your education..."
                    rows="3"
                    max-rows="6"
            ></b-form-textarea>
        </b-form-group>

    </b-tab>
</template>

<script>
    export default {
        name: 'education',
    }
</script>