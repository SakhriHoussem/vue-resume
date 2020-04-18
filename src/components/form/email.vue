<template>
            <b-form-group>
                <label label-for="email">
                    <font-awesome-icon icon="at" />
                    {{ $t('labels.email') }} :
                </label>
                <b-form-input
                        :class="{ 'is-invalid' : validation.hasError('email')}"
                        :placeholder="$t('placeholders.email')"
                        id="email"
                        v-model="email"
                        @input="updateEmail"
                        required
                >
                </b-form-input>
                <small class="text-danger">{{ validation.firstError('email')}}</small>
            </b-form-group>
</template>
<script>
    import SimpleVueValidation from "simple-vue-validator";
    const Validator = SimpleVueValidation.Validator;

    export default {
        name: "email",
        data () {
            return {
                email: ''
            }
        },
        validators: {
            email: function (value) {
                return Validator.value(value).required().email();
            }
        },
        methods:{
            updateEmail(e) {
                // add validation
                this.$validate().then((success)=> {
                    if (success) {
                        this.$store.commit('updateStateField', {field: 'email',value: e})
                    }
                });
            }
        }
    }
</script>