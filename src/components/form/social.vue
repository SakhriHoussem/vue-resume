<template>
    <b-row>
        <b-col cols="12">
            <label>add your Social media:</label>
        </b-col>
        <b-col cols="12" sm="5" md="12" lg="5" >
            <b-form-select
                    :class="{ 'is-invalid' : validation.hasError('socialMedia')}"
                    :options="getSocialNetworksList"
                    v-model="socialMedia"
                    required
                    name="socialMedia"
            ></b-form-select>
            <small class="text-danger">{{ validation.firstError('socialMedia')}}</small>
        </b-col>
        <b-col cols="12" sm="7" md="12" lg="7">
            <b-input-group class="mb-2">
                <b-form-input
                        :class="{ 'is-invalid' : validation.hasError('pseudo')}"
                        class="form-control"
                        id="pseudo"
                        type="text"
                        v-model="pseudo"
                        name="pseudo"
                        required
                        placeholder="Enter your Pseudo"
                ></b-form-input>
                <b-input-group-append>
                    <b-button
                            v-b-tooltip.hover
                            title="Add Social Media"
                            @click="addSocialNetwork" variant="info"
                    >
                        <font-awesome-icon icon="plus"></font-awesome-icon>
                    </b-button>
                </b-input-group-append>
            </b-input-group>
            <small class="text-danger">{{ validation.firstError('pseudo')}}</small>
        </b-col>
    </b-row>
</template>

<script>
    import {mapGetters} from "vuex";
    import SimpleVueValidation from "simple-vue-validator";
    const Validator = SimpleVueValidation.Validator;

    export default {
        name:'social',
        data () {
            return {
                pseudo: '',
                socialMedia: null,
            }
        },
        computed: {
            ...mapGetters([
                'getSocialNetworksList',
            ])
        },
        validators: {
            socialMedia: function (value) {
                return Validator.value(value).required();
            },
            pseudo: function (value) {
                    return  Validator.value(value).required().regex('^[a-zA-Z0-9-_]+$', 'Must be a valid pseudo.')
            }
        },
        methods: {
            addSocialNetwork () {
                // add validation
                this.$validate().then((success)=> {
                    if (success) {
                        this.$store.commit('appendStateField',
                            { field: 'socialNetworks',
                                value: {icon:   this.socialMedia,
                                    pseudo: this.pseudo,
                                    url:    this.getSocialNetworksList.find( item => item.value === this.socialMedia).url + this.pseudo
                                }
                            });
                        this.onReset()
                    }
                });
            },
            onReset(){
                this.pseudo = '';
                this.socialMedia = null;
                this.validation.reset();
            }
        }
    }
</script>