<template>
    <b-form-group
            label="Full Name:"
            label-for="full-name"
    >
        <ValidationProvider rules="alpha|min:4" v-slot="{ errors }">
            <b-form-input
                    :class="{ 'is-invalid' : errors[0] }"
                    :value="form.fullName"
                    @input="updateFullName"
                    id="full-name"
                    type="text"
                    required
                    placeholder="Enter your Full Name"
            ></b-form-input>
            <small class="text-danger">{{ errors[0] }}</small>
        </ValidationProvider>
    </b-form-group>
</template>
<script>
    import { mapState } from 'vuex'
    import { extend } from 'vee-validate';
    import { min, alpha_spaces } from 'vee-validate/dist/rules';
    extend('alpha', alpha_spaces);
    extend('min', min);

    export default {
        name: 'fullName',
        computed: {
            ...mapState([
                'form'
            ]),
        },

        methods : {
            updateFullName(e) {
                //todo: add validation
                this.$store.commit('updateStateField', {field: 'fullName',value: e})
            }
        }
    }
</script>