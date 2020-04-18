<template>
    <b-form-group>
        <label for="full-name">
            <font-awesome-icon icon="signature" />
            {{ $t('labels.fullName') }} :
        </label>
        <b-form-input
                :class="{ 'is-invalid' : validation.hasError('fullName')}"
                id="full-name"
                type="text"
                v-model="fullName"
                @input="updateFullName"
                required
                :placeholder="$t('placeholders.fullName')"
        ></b-form-input>
        <small class="text-danger">{{ validation.firstError('fullName')}}</small>
    </b-form-group>
</template>
<script>
    import SimpleVueValidation from "simple-vue-validator";
    const Validator = SimpleVueValidation.Validator;

    export default {
        name: 'fullName',
        data () {
          return {
              fullName: ''
          }
        },
        validators: {
            fullName: function (value) {
                return Validator.value(value).required().regex('^[A-Za-z ]*$', 'Must only contain alphabetic characters.');
            }
        },
        methods : {
            updateFullName(e) {
                // add validation
                this.$validate().then((success)=> {
                    if (success) {
                        this.$store.commit('updateStateField', {field: 'fullName',value: e})
                    }
                });
            }
        }
    }
</script>