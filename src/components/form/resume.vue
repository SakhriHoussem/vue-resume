<template>
    <b-form-group>
        <label for="resume">
            <font-awesome-icon icon="pencil-alt" />
            {{ $t('labels.resume') }} :
        </label>
        <markdown-editor
                id="resume"
                :value="getResume"
                @input="updateResume"
                theme="info"
                :placeholder="$t('placeholders.resume')+'...'"
                height="200px"
                :toolbar="'redo undo | bold italic heading | link | numlist bullist quote | preview'"
        ></markdown-editor>
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