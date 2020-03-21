<template>
    <b-form-group
            label="Desired job :"
            label-for="desired-job"
    >
        <b-form-input
                id="desired-job"
                :value="form.job"
                @input="updatJob"
                type="text"
                required
                placeholder="Enter your Desired Job"
        ></b-form-input>
    </b-form-group>
</template>
<script>
    import { mapState } from 'vuex'

    export default {
        name: 'job',
        computed: {
            ...mapState([
                'form'
                    ]),
        },
        methods:{
            updatJob(e) {
                //todo: add validation
                this.$store.commit('updateStateField', {field: 'job',value: e})
            }
        }
    }
</script>