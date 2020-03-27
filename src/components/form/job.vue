<template>
    <ValidationObserver ref="job" immediate  >
        <ValidationProvider name="Job" rules="alpha_spaces|min:2"  v-slot="{ failedRules, invalid, valid }">
            <b-form-group
                    label="Desired job :"
                    label-for="desired-job"
            >
                <b-form-input
                        :class="{ 'is-invalid' : invalid, 'is-valid': valid  }"
                        id="desired-job"
                        :value="form.job"
                        ref="job"
                        @input="updateJob"
                        type="text"
                        required
                        placeholder="Enter your Desired Job"
                ></b-form-input>
                <small v-for="(failedRule, type) in failedRules" :key="type" class="text-danger">{{ type }} : {{ failedRule }}</small>
            </b-form-group>
        </ValidationProvider>
    </ValidationObserver>
</template>
<script>
    import { mapState } from 'vuex'
    import { extend } from 'vee-validate';
    import { min, alpha_spaces } from 'vee-validate/dist/rules';
    extend('alpha_spaces', alpha_spaces);
    extend('min', min);
    export default {
        name: 'job',
        computed: {
            ...mapState([
                'form'
            ]),
        },
        methods:{
            updateJob(e) {
                // add validation
                this.$refs.job.validate().then(success => {
                    if (!success) {
                        this.$refs.job.setErrors([]);
                    }
                    this.$store.commit('updateStateField', {field: 'job',value: e})
                })
            }
        }
    }
</script>