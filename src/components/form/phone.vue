<template>
    <b-form-group
            label="Phone Number :"
            label-for="phone"
    >
        <b-form-input
                id="phone"
                class="mb-2 mr-sm-2 mb-sm-0"
                :value="form.phone"
                @input="updatePhoneNum"
                placeholder="your phone number"
        ></b-form-input>
    </b-form-group>
</template>
<script>
    import { mapState } from 'vuex'
    export default {
        name: 'phone',
        computed: {
            ...mapState([
                'form'
            ]),
        },
        methods: {
            updatePhoneNum (e) {
                //todo: add validation
                this.$store.commit('updateStateField', {field: 'phone', value: e})
            }
        }
    }
</script>