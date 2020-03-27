<template>
    <ValidationObserver ref="email" immediate  >
        <ValidationProvider name="email" rules="email|required" v-slot="{ failedRules, invalid, valid }">
            <b-form-group
                    label="Email :"
                    label-for="email"
            >
                <b-form-input
                        :class="{ 'is-invalid' : invalid, 'is-valid': valid  }"
                        placeholder="Your Email"
                        id="email"
                        :value="form.email"
                        @input="updateEmail"
                        required
                >
                </b-form-input>
                <small v-for="(failedRule, type) in failedRules" :key="type" class="text-danger">{{ failedRule }}</small>
            </b-form-group>
        </ValidationProvider>
    </ValidationObserver>
</template>
<script>
    import { mapState } from 'vuex'
    import { extend } from 'vee-validate';
    import { email, required } from 'vee-validate/dist/rules';
    extend('email', email);
    extend('required', required);
    export default {
        name: "email",
        computed: {
            ...mapState([
                'form'
            ])
        },
        methods:{
            updateEmail(e) {
                //todo: add validation
                // tagValidator(email) {
                //     //:tag-validator="tagValidator"
                //     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
                // }
                // add validation
                this.$refs.email.validate().then(success => {
                    if (!success) {
                        this.$refs.email.setErrors([]);
                    }
                    this.$store.commit('updateStateField', {field: 'email',value: e})
                });
            }
        }
    }
</script>