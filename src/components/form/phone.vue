<template>
    <ValidationObserver ref="phone" immediate  >
        <ValidationProvider name="phone" rules="required|numeric|min:9" v-slot="{ failedRules, invalid, valid }">
            <b-form-group
                    label="Phone Number :"
                    label-for="phone"
            >
                <b-form-input
                        :class="{ 'is-invalid' : invalid, 'is-valid': valid  }"
                        id="phone"
                        class="mb-2 mr-sm-2 mb-sm-0"
                        :value="form.phone"
                        @input="updatePhoneNum"
                        placeholder="your phone number"
                ></b-form-input>
                <small v-for="(failedRule, type) in failedRules" :key="type" class="text-danger">{{ failedRule }}</small>
            </b-form-group>
        </ValidationProvider>
    </ValidationObserver>
</template>
<script>
    import { mapState } from 'vuex'
    import { extend } from 'vee-validate';
    import {min, numeric, required} from 'vee-validate/dist/rules';
    extend('numeric', numeric);
    extend('required', required);
    extend('min', min);
    export default {
        name: 'phone',
        computed: {
            ...mapState([
                'form'
            ]),
        },
        methods: {
            updatePhoneNum (e) {
                // add validation
                this.$refs.phone.validate().then(success => {
                    if (!success) {
                        this.$refs.phone.setErrors([]);
                    }
                    this.$store.commit('updateStateField', {field: 'phone',value: e})
                });
            }
        }
    }
</script>