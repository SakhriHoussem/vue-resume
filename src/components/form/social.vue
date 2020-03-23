<template>
    <b-row>
        <b-col cols="12">
            <label>add your Social media:</label>
        </b-col>
        <b-col cols="12" sm="6" md="12" lg="6" >
            <b-form-input
                    class="form-control"
                    id="pseudo"
                    type="text"
                    v-model="pseudo"
                    required
                    placeholder="Enter your Pseudo"
            ></b-form-input>
        </b-col>
        <b-col cols="12" sm="6" md="12" lg="6">
            <b-input-group class="mb-2">
                <b-form-select :options="getSocialNetworksList" v-model="socialMedia"></b-form-select>
                <b-input-group-append>
                    <b-button @click="addSocialNetwork" variant="info">
                        <font-awesome-icon icon="plus"></font-awesome-icon>
                    </b-button>
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
                socialMedia: null
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
                                pseudo: this.pseudo,
                                url:    this.getSocialNetworksList.find( item => item.value === this.socialMedia).url + this.pseudo
                        }
                    })
            }
        }
    }
</script>