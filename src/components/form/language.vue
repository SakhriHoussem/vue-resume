<template>
    <b-tab title="Language">
        <b-row>
            <b-col>
                <b-input
                        id="Language"
                        type="text"
                        required
                        placeholder="Enter your Language"
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
        name: 'language',
        computed: {
            ...mapState([
                'levels'
            ]),
        }
    }
</script>