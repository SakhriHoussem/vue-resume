<template>
        <b-form @submit.prevent="onSubmit" class="mt-2 mb-3">
            <label for="langauge">
                <font-awesome-icon icon="language" />
                {{$t('labels.languages')}} :
            </label>
            <b-row>
                <b-col>
                    <b-input
                            :class="{ 'is-invalid' : validation.hasError('language.name')}"
                            id="Language"
                            type="text"
                            v-model="language.name"
                            required
                            :placeholder="$t('placeholders.languages')"
                    ></b-input>
                    <small class="text-danger">{{ validation.firstError('language.name')}}</small>
                </b-col>
                <b-col>
                    <b-input-group>
                        <!-- todo: translate this select tag-->
                        <b-form-select
                                :class="{ 'is-invalid' : validation.hasError('language.level')}"
                                required
                                v-model="language.level"
                                :options="LangLevels"
                        ></b-form-select>
                        <b-input-group-append>
                            <b-button
                                    v-b-tooltip.hover
                                    :title="$t('buttons.add')"
                                    type="submit" variant="info">
                                <font-awesome-icon icon="plus"></font-awesome-icon>
                            </b-button>
                        </b-input-group-append>
                    </b-input-group>
                    <small class="text-danger">{{ validation.firstError('language.level')}}</small>
                </b-col>
            </b-row>
        </b-form>
</template>

<script>
    import {mapState} from "vuex";
    import SimpleVueValidation from "simple-vue-validator";
    const Validator = SimpleVueValidation.Validator;

    export default {
        name: 'language',
        data() {
            return {
                language: {
                    name: '',
                    level: null
                }
            }
        },
        computed: {
            ...mapState([
                'LangLevels'
            ]),
        },
        validators: {
            'language.name': function (value) {
                return Validator.value(value).required();
            },
            'language.level': function (value) {
                return  Validator.value(value).required()
            }
        },
        methods: {
            // add validation
            onSubmit() {
                this.$validate().then((success)=> {
                    if (success) {
                        this.$store.commit('appendStateField', {
                            field: 'languages',
                            value: {
                                name:  this.language.name,
                                level: this.language.level,
                            }
                        });
                        this.onReset()
                    }
                })
            },
            onReset(){
                this.language.name = '';
                this.language.level = null;
                this.validation.reset();
            }
        }
    }
</script>