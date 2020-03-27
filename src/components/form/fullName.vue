<template>
    <b-form-group
            label="Full Name:"
            label-for="full-name"
    >
        <b-form-input
                :class="{ 'is-invalid' : validation.hasError('fullName')}"
                id="full-name"
                type="text"
                v-model="fullName"
                @input="updateFullName"
                required
                placeholder="Enter your Full Name"
        ></b-form-input>
        <small class="text-danger">{{ validation.firstError('fullName')}}</small>
    </b-form-group>
</template>
<script>
    import { mapState } from 'vuex'
    import SimpleVueValidation from "simple-vue-validator";
    const Validator = SimpleVueValidation.Validator;

    export default {
        name: 'fullName',
        data () {
          return {
              fullName: ''
          }
        },
        computed: {
            ...mapState([
                'form'
            ]),
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