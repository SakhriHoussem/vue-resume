<template>
    <b-tab title="Skill">
        <b-form @submit.prevent="onSubmit">
            <b-row>
                <b-col cols="12" sm="6" md="12" lg="6">
                    <b-input
                            id="skill"
                            type="text"
                            v-model="skill.name"
                            required
                            placeholder="Enter your Skill Name"
                    ></b-input>
                </b-col>
                <b-col cols="12" sm="6" md="12" lg="6">
                    <b-input-group>
                        <b-form-select v-model="skill.level" :options="levels"></b-form-select>
                        <b-input-group-append>
                            <b-button type="submit" variant="info">
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
        methods: {
            //todo: add validation
            onSubmit() {
                this.$store.commit('appendStateField', {
                    field: 'skills',
                    value: {
                        name:  this.skill.name,
                        level: this.skill.level,
                    }
                })
            }
        }
    }
</script>