<template>
    <b-form-group
            label="Email :"
            label-for="email"
    >

        <b-form-input
                placeholder="Your Email"
                id="email"
                :value="form.email"
                @input="updateEmail"
        >
        </b-form-input>
    </b-form-group>
</template>
<script>
    import { mapState } from 'vuex'
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
                this.$store.commit('updateStateField', {field: 'email',value: e})
                // tagValidator(email) {
                //     //:tag-validator="tagValidator"
                //     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
                // }
                }
        }
    }
</script>