<template>
    <b-form-group
            label="Full Name:"
            label-for="full-name"
    >
        <b-form-input
                id="full-name"
                :value="form.fullName"
                @input="updateFullName"
                type="text"
                required
                placeholder="Enter your Full Name"
        ></b-form-input>
    </b-form-group>
</template>
<script>
    import { mapState } from 'vuex'
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