<template>
    <b-form-group label="add your links:" label-for="links">
        <b-form-tags
                tag-variant="info"
                input-id="links"
                separator=" ,;"
                :value="form.links"
                @input="updateLinks"
                class="mb-2"
                remove-on-delete
                required
                :tag-validator="tagValidator"
        >
        </b-form-tags>
    </b-form-group>
</template>

<script>
    import {mapState}  from 'vuex'
    export default {
        name: 'links',
        computed: {
            ...mapState(['form'])
        },
        methods: {
            tagValidator(tag) {
                return new RegExp("^(?:http(s)?:\\/\\/)?[\\w.-]+(?:\\.[\\w\\.-]+)+[\\w\\-\\._~:/?#[\\]@!\\$&'\\(\\)\\*\\+,;=.]+$").test(tag)
                // return Validator.value(tag).url();
            },
            updateLinks(e) {
                this.$store.commit('updateStateField', {field: 'links',value: e})
            }
        },
    }
</script>
