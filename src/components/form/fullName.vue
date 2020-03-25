<template>
    <ValidationObserver ref="fullName" immediate  >
        <ValidationProvider name="fullName" rules="required|alpha_spaces|min:3" v-slot="{ failedRules, invalid, valid }">
            <b-form-group
                    label="Full Name:"
                    label-for="full-name"
            >
                <b-form-input
                        :class="{ 'is-invalid' : invalid, 'is-valid': valid  }"
                        :value="form.fullName"
                        @input="updateFullName"
                        id="full-name"
                        type="text"
                        required
                        placeholder="Enter your Full Name"
                ></b-form-input>
                <small v-for="(failedRule, type) in failedRules" :key="type" class="text-danger">{{ failedRule }}</small>
            </b-form-group>
        </ValidationProvider>
    </ValidationObserver>
</template>
<script>
    import { mapState } from 'vuex'
    import { extend } from 'vee-validate';
    import { min, alpha_spaces, required } from 'vee-validate/dist/rules';
    extend('alpha_spaces', {alpha_spaces, message: 'This {_field_} must be contain alphabets and spaces'});
    extend('required', {required, message: 'This {_field_} is required'});
    extend('min', {min, message: 'This {_field_} must be longer then 2'});

    export default {
        name: 'fullName',
        computed: {
            ...mapState([
                'form'
            ]),
        },

        methods : {
            updateFullName(e) {
                // add validation
                this.$refs.fullName.validate().then(success => {
                        if (!success) {
                            this.$refs.fullName.setErrors({});
                        }
                        this.$store.commit('updateStateField', {field: 'fullName',value: e})
                    });
                }
        }
    }
</script>