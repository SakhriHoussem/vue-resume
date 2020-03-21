<template>
    <b-row>
        <b-col cols="12">
            <label>add your Social media:</label>
        </b-col>
        <b-col>
            <b-form-select :options="getSocialNetworksList" v-model="socialMedia"></b-form-select>
        </b-col>
        <b-col>
            <b-input-group class="mb-2">
                <b-form-input
                        class="form-control"
                        id="full-name"
                        type="text"
                        v-model="pseudo"
                        required
                        placeholder="Enter your Pseudo"
                ></b-form-input>
                <b-input-group-append>
                    <b-button @click="addSocialNetwork" variant="primary">Add</b-button>
                </b-input-group-append>
            </b-input-group>
        </b-col>
    </b-row>
</template>

<script>
    import {mapGetters, mapState} from "vuex";

    export default {
        name:'social',
        data () {
            return {
                pseudo: '',
                socialMedia: ''
            }
        },
        computed: {
            ...mapState([
                'sociaux'
            ]),
            ...mapGetters([
                'getSocialNetworksList',
            ])
        },
        methods: {
            addSocialNetwork () {
                //todo: add validation
                this.$store.commit('appendStateField',
                                 { field: 'socialNetworks',
                                            value: {icon:   this.socialMedia,
                                                    pseudo: this.pseudo
                                                    }
                                         })
            }
        }
    }
</script>