<template>
    <b-form-group
            label="Desired job :"
            label-for="desired-job"
    >
        <ValidationProvider rules="alpha|min:4" v-slot="{ errors }">
            <b-form-input
                    :class="{ 'is-invalid' : errors[0] }"
                    id="desired-job"
                    :value="form.job"
                    @input="updatJob"
                    type="text"
                    required
                    placeholder="Enter your Desired Job"
            ></b-form-input>
            <small class="text-danger">{{ errors[0] }}</small>
        </ValidationProvider>
    </b-form-group>
</template>
<script>
    import { mapState } from 'vuex'
    import { extend } from 'vee-validate';
    import { min, alpha } from 'vee-validate/dist/rules';
    extend('alpha', alpha);
    extend('min', min);

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