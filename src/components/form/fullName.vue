<template>
    <b-form-group
            label="Full Name:"
            label-for="full-name"
    >
        <b-form-input
                :class="{ 'is-invalid' : $v.fullName.$error}"
                v-model.trim="$v.fullName.$model"
                @input="updateFullName"
                id="full-name"
                type="text"
                required
                placeholder="Enter your Full Name"
        ></b-form-input>
        <small class="text-danger" v-if="!$v.fullName.required">Full Name is required</small>
        <small class="text-danger" v-if="!$v.fullName.minLength">Full Name must have at least {{$v.fullName.$params.minLength.min}} letters.</small>
    </b-form-group>
</template>
<script>
    import { mapState } from 'vuex'
    import { required, minLength, alpha } from 'vuelidate/lib/validators'

    export default {
        name: 'fullName',
        data() {
            return {
                fullName: ""
            }
        },
        computed: {
            ...mapState([
                'form'
            ]),
        },
        validations: {
            fullName: {
                    alpha,
                    required,
                    minLength: minLength(4)
            }
        },
        methods : {
            updateFullName(e) {
                //todo: add validation
                this.$store.commit('updateStateField', {field: 'fullName',value: e})
            }
        }
    }
</script>