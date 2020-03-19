<template>
    <b-tab title="Project">
        <b-form-group
                label="Project Name:"
                label-for="project-name"
        >
            <b-form-input
                    id="project-name"
                    type="text"
                    required
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
                    placeholder="Enter your project link"
            ></b-form-input>
        </b-form-group>

        <b-row>
            <b-col>
                <b-form-group
                        label="from:"
                        label-for="project-from"
                >
                    <b-form-input
                            id="project-from"
                            type="date"
                            required
                    ></b-form-input>
                </b-form-group>
            </b-col>

            <b-col>
                <b-form-group
                        label="to:"
                        label-for="project-to"
                >
                    <b-form-input
                            id="project-to"
                            type="date"
                            required
                    ></b-form-input>
                </b-form-group>
            </b-col>
        </b-row>

        <b-form-group
                label="Description :"
                label-for="project-description"
        >
            <b-form-textarea
                    id="project-description"
                    placeholder="write your something about your project..."
                    rows="3"
                    max-rows="6"
            ></b-form-textarea>
        </b-form-group>

        <label for="project-tags">add some tags:</label>
        <b-form-tags
                input-id="project-tags"
                separator=" ,;"
                class="mb-2"
        ></b-form-tags>
    </b-tab>
</template>

<script>
    export default {
        name: 'project',
    }
</script>