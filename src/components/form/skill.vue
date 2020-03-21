<template>
    <b-tab title="Skill">
        <b-row>
            <b-col>
                <b-input
                        id="full-name"
                        type="text"
                        required
                        placeholder="Enter your Skill Name"
                ></b-input>
            </b-col>
            <b-col>
                <b-form-select :options="levels"></b-form-select>
            </b-col>
        </b-row>
    </b-tab>
</template>

<script>
    import {mapState} from "vuex";

    export default {
        name: 'skill',
        computed: {
            ...mapState([
                'levels'
            ]),
        }
    }
</script>