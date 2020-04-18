<template>
        <div  class="mt-2 mb-3">
            <label for="intersts">
                <font-awesome-icon icon="plus" />
                {{$t('labels.interests')}}:
            </label>
            <b-form-tags
                    tag-variant="info"
                    input-id="intersts"
                    separator=" ,;"
                    :value="form.interests"
                    @input="updateInterests"
                    class="mb-2"
                    remove-on-delete
                    :placeholder="$t('placeholders.interests')"
            >
            </b-form-tags>
        </div>
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
                this.$store.commit('updateStateField', {field: 'interests',value: e})
            }
        }
    }
</script>