<template>
            <b-form-group
                    label="Desired job :"
                    label-for="desired-job"
            >
                <b-form-input
                        :class="{ 'is-invalid' : validation.hasError('job')}"
                        id="desired-job"
                        v-model="job"
                        ref="job"
                        @input="updateJob"
                        type="text"
                        placeholder="Enter your Desired Job"
                ></b-form-input>
                <small class="text-danger">{{ validation.firstError('job')}}</small>
            </b-form-group>
</template>
<script>
    import SimpleVueValidation from "simple-vue-validator";
    const Validator = SimpleVueValidation.Validator;

    export default {
        name: 'job',
        data () {
            return {
                job: ''
            }
        },
        validators: {
            job: function (value) {
                return Validator.value(value).regex('^[A-Za-z ]*$', 'Must only contain alphabetic characters.');
            }
        },
        methods:{
            updateJob(e) {
                // add validation
                this.$validate().then((success)=> {
                    if (success) {
                        this.$store.commit('updateStateField', {field: 'job',value: e})
                    }
                });
            }
        }
    }
</script>