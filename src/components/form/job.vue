<template>
            <b-form-group>
                <label for="desired-job">
                    <font-awesome-icon icon="briefcase" />
                    {{ $t('labels.job') }} :
                </label>
                <b-form-input
                        :class="{ 'is-invalid' : validation.hasError('job')}"
                        id="desired-job"
                        v-model="job"
                        ref="job"
                        @input="updateJob"
                        type="text"
                        :placeholder="$t('placeholders.job')"
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