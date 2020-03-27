<template>
    <b-tab title="Language">
        <b-form @submit.prevent="onSubmit">
            <b-row>
                <b-col>
                    <b-input
                            id="Language"
                            type="text"
                            v-model="language.name"
                            required
                            placeholder="Enter your Language"
                    ></b-input>
                </b-col>
                <b-col>
                    <b-input-group>
                        <b-form-select v-model="language.level" :options="levels"></b-form-select>
                        <b-input-group-append>
                            <b-button block type="submit" variant="info">
                                <font-awesome-icon icon="plus"></font-awesome-icon>
                            </b-button>
                        </b-input-group-append>
                    </b-input-group>
                </b-col>
            </b-row>
        </b-form>
    </b-tab>
</template>

<script>
    import {mapState} from "vuex";

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
                'levels'
            ]),
        },
        methods: {
            //todo: add validation
            onSubmit() {
                this.$store.commit('appendStateField', {
                    field: 'languages',
                    value: {
                        name:  this.language.name,
                        level: this.language.level,
                    }
                })
            }
        }
    }
</script>