<template>
    <b-tab title="Interests">
        <div>
            <label for="intersts">add your Interests:</label>
            <b-form-tags
                    tag-variant="info"
                    input-id="intersts"
                    separator=" ,;"
                    :value="form.interests"
                    @input="updateInterests"
                    class="mb-2"
                    remove-on-delete
            >
            </b-form-tags>
        </div>
    </b-tab>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: 'interest',
        computed: {
            ...mapState([
                'form'
            ])
        },
        methods: {
            updateInterests(e) {
                //todo: add validation
                this.$store.commit('updateStateField', {field: 'interests',value: e})
            }
        }
    }
</script>