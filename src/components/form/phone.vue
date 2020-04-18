<template>
            <b-form-group>
                <label for="phone">
                    <font-awesome-icon icon="phone" />
                    {{ $t('labels.phone') }} :
                </label>
                <b-form-input
                        :class="{ 'is-invalid' : validation.hasError('phone')}"
                        id="phone"
                        class="mb-2 mr-sm-2 mb-sm-0"
                        v-model="phone"
                        @input="updatePhoneNum"
                        :placeholder="$t('placeholders.phone')"
                        required
                ></b-form-input>
                <small class="text-danger">{{ validation.firstError('phone')}}</small>
            </b-form-group>
</template>
<script>
    import SimpleVueValidation from "simple-vue-validator";
    const Validator = SimpleVueValidation.Validator;

    export default {
        name: 'phone',
        data () {
            return {
                phone: ''
            }
        },
        validators: {
            phone: function (value) {
                return Validator.value(value).required().regex('(([+][(]?[0-9]{1,3}[)]?)|([(]?[0-9]{4}[)]?))\\s*[)]?[-\\s\\.]?[(]?[0-9]{1,3}[)]?([-\\s\\.]?[0-9]{3})([-\\s\\.]?[0-9]{3,4})$', 'Must be a valid phone number.');
            }
        },
        methods: {
            updatePhoneNum (e) {
                // add validation
                this.$validate().then((success)=> {
                    if (success) {
                        this.$store.commit('updateStateField', {field: 'phone',value: e})
                    }
                });
            }
        }
    }
</script>