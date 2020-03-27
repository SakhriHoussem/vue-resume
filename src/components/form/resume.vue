<template>
    <b-form-group
            label="Resume :"
            label-for="resume"
    >
        <b-form-textarea
                id="resume"
                :value="getResume"
                @input="updateResume"
                placeholder="write your resume..."
                rows="3"
                max-rows="6"
        ></b-form-textarea>
    </b-form-group>
</template>
<script>
    import { mapGetters } from 'vuex'
    export default {
        name: 'resume',
        computed: {
            ...mapGetters([
                'getResume'
            ])
        },
        methods:{
            updateResume(e) {
                this.$store.commit('updateStateField', {field: 'resume', value: e})

            }
        }
    }
</script>