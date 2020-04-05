<template>
    <b-form-group
    >
        <label for="resume">
            {{$t('labels.resume')}}:
            <b-link class="text-muted small" target="_blank" href="https://miaolz123.github.io/vue-markdown/">
                <font-awesome-icon  icon="info" />
            </b-link>

        </label>
        <b-form-textarea
                id="resume"
                :value="getResume"
                @input="updateResume"
                :placeholder="$t('placeholders.resume')+'...'"
                rows="3"
                max-rows="6"
        ></b-form-textarea>
    </b-form-group>
</template>
<script>
    import { mapGetters } from 'vuex'
    export default {
        name: 'resume',
        computed: {
            ...mapGetters([
                'getResume'
            ])
        },
        methods:{
            updateResume(e) {
                this.$store.commit('updateStateField', {field: 'resume', value: e})
            }
        }
    }
</script>