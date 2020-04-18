<template>
        <b-form @submit.prevent="onSubmit" @reset="onReset" class="mt-2 mb-3">
            <label for="skills">
                <font-awesome-icon icon="wrench" />
                {{ $t('labels.skills') }} :
            </label>
            <b-row>
                <b-col cols="12" sm="6" md="12" lg="6">
                    <b-input
                            :class="{ 'is-invalid' : validation.hasError('skill.name')}"
                            id="skill"
                            type="text"
                            v-model="skill.name"
                            required
                            :placeholder="$t('placeholders.skills')"
                    ></b-input>
                    <small class="text-danger">{{ validation.firstError('skill.name')}}</small>
                </b-col>
                <b-col cols="12" sm="6" md="12" lg="6">
                    <b-input-group>
                        <b-form-select
                                required
                                v-model="skill.level"
                                :options="levels"
                                :class="{ 'is-invalid' : validation.hasError('skill.level')}"
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
                    <small class="text-danger">{{ validation.firstError('skill.level')}}</small>
                </b-col>
            </b-row>
        </b-form>
</template>

<script>
    import {mapState} from "vuex";
    import SimpleVueValidation from "simple-vue-validator";
    const Validator = SimpleVueValidation.Validator;

    export default {
        name: 'skill',
        data() {
            return {
                skill: {
                    name: '',
                    level: null
                }
            }
        },
        computed: {
            ...mapState([
                'levels'
            ]),
        },
        validators: {
            'skill.name': function (value) {
                return Validator.value(value).required();
            },
            'skill.level': function (value) {
                return  Validator.value(value).required()
            }
        },
        methods: {
            // add validation
            onSubmit() {
                this.$validate().then((success)=> {
                    if (success) {
                        this.$store.commit('appendStateField', {
                            field: 'skills',
                            value: {
                                name: this.skill.name,
                                level: this.skill.level,
                            }
                        });
                        this.onReset()
                    }
                })
            },
            onReset(){
                this.skill.name = '';
                this.skill.level = null;
                this.validation.reset();
            }
        }
    }
</script>