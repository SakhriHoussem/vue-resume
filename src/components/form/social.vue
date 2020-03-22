<template>
    <b-row>
        <b-col cols="12">
            <label>add your Social media:</label>
        </b-col>
        <b-col cols="12" sm="6" md="12" lg="6" >
            <b-form-input
                    class="form-control"
                    id="full-name"
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
            findUrl(social, pseudo) {
                return social.value === pseudo;
            },
            addSocialNetwork () {
                //todo: add validation
                this.$store.commit('appendStateField',
                    { field: 'socialNetworks',
                        value: {icon:   this.socialMedia,
                                pseudo: this.pseudo,
                                url:    this.getSocialNetworksList.find( value => value.value === this.socialMedia).url + this.pseudo
                        }
                    })
            }
        }
    }
</script>