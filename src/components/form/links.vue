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
                >
        </b-form-tags>
    </b-form-group>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: 'links',
        computed: {
            ...mapState([
                'form'
            ])
        },
        methods: {
            updateLinks(e) {
                //todo: add validation
                this.$store.commit('updateStateField', {field: 'links',value: e})
            },
        }
    }
</script>
