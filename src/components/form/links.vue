<template>
    <ValidationObserver ref="links" immediate  >
        <ValidationProvider name="links" rules="required" v-slot="{failedRules, invalid, valid }">
            <b-form-group label="add your links:" label-for="links">
                <b-form-tags
                        tag-variant="info"
                        :class="{ 'is-invalid' : invalid, 'is-valid': valid  }"
                        input-id="links"
                        separator=" ,;"
                        :value="form.links"
                        @input="updateLinks"
                        class="mb-2"
                        remove-on-delete
                        required
                        :tag-validator="tagValidator"
                >
                    <small v-for="(failedRule, type) in failedRules" :key="type" class="text-danger">{{ failedRule }}</small>
                </b-form-tags>
            </b-form-group>
        </ValidationProvider>
    </ValidationObserver>
</template>

<script>
    import { mapState } from 'vuex'
    import { extend } from 'vee-validate';
    import { required } from 'vee-validate/dist/rules';
    extend('required', required);
    export default {
        name: 'links',
        computed: {
            ...mapState([
                'form'
            ])
        },
        methods: {
            tagValidator(tag) {
                return new RegExp("^(?:http(s)?:\\/\\/)?[\\w.-]+(?:\\.[\\w\\.-]+)+[\\w\\-\\._~:/?#[\\]@!\\$&'\\(\\)\\*\\+,;=.]+$").test(tag)
            },
            updateLinks(e) {
                // add validation
                this.$refs.links.validate().then(success => {
                    if (!success) {
                        this.$refs.links.setErrors([]);
                    }
                    this.$store.commit('updateStateField', {field: 'links',value: e})
                });
            }
        },
    }
</script>
