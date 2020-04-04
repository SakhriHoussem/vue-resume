<template>
    <b-col id="paper-side" cols="4">
        <div class="text-center">
            <div v-if="image"
                 id="img-avatar"
                 @mouseover="showByIndex = image"
                 @mouseout="showByIndex = null"
            >
                <div class="bg-white">
                    <b-button
                            class="close"
                            aria-label="close" type="button"
                            v-b-tooltip.hover
                            title="Delete Me" variant="none"
                            @click="image = null"
                            v-show="showByIndex === image"
                    >
                        <font-awesome-icon icon="times" />
                    </b-button>
                    <b-button v-show="showByIndex === image"
                              class="close"
                              aria-label="edit" type="button"
                              v-b-tooltip.hover
                              title="Edit Me" variant="none"
                              @click="$refs.file.click()"
                    >
                        <font-awesome-icon icon="edit" />
                    </b-button>
                </div>
                <b-img
                        :src="image"
                        :alt="getFullName"
                        thumbnail center
                >
                </b-img>
            </div>
            <b-avatar  v-else
                       button @click="$refs.file.click()"
                       size="10rem" variant="dark"
                       v-b-tooltip.hover
                       title="Change Me">
                <font-awesome-icon icon="camera-retro" />
            </b-avatar>

            <input type="file"
                   ref="file"
                   id="input-image"
                   v-show="false"
                   @change="onFileChange"
                   accept="image/*"
            >

            <h3 class="text-capitalize">  {{ getFullName }} </h3>
            <h4 class="text-capitalize text-dark"> {{ getJob }} </h4>
        </div>
        <hr>
        <table style="width:100%">
            <tr class="hover">
                <td>
                    <font-awesome-icon icon="phone" />
                </td>
                <td>
                    <b-link target="_blank" class="text-white" :href="'tel:' + getPhone">{{getPhone}}</b-link>
                </td>
            </tr>
            <tr class="hover">
                <td>
                    <font-awesome-icon icon="at" />
                </td>
                <td>
                    <b-link target="_blank" class="text-white" :href="'mailto:' + getEmail">{{getEmail}}</b-link>
                </td>
            </tr>
            <tr @mouseover="showByIndex = link" @mouseout="showByIndex = null" v-for="link in getLinks" :key="link" class="hover">
                <td>
                    <font-awesome-icon icon="globe-africa" />
                </td>
                <td>
                    <b-link target="_blank" class="text-white" :href="link">{{ link }}</b-link>
                    <b-button v-show="showByIndex === link"
                            class="close mr-2 ml-2 small"
                            aria-label="close" type="button"
                            @click="removeStateElm('links', link)"
                            v-b-tooltip.hover
                            title="Delete Me"
                    >x</b-button>
                </td>
            </tr>
            <tr @mouseover="showByIndex = social" @mouseout="showByIndex = null" v-for="(social, index) in getSocialNetworks" :key="index" class="hover">
                <td>
                    <font-awesome-icon :icon="['fab', social.icon]" />
                </td>
                <td>
                    <b-link target="_blank" class="text-white" :href="social.url">{{social.pseudo}}</b-link>
                    <b-button v-show="showByIndex === social"
                            class="close mr-2 ml-2 small"
                            aria-label="close" type="button"
                            @click="removeStateElm('socialNetworks', social)"
                            v-b-tooltip.hover
                            title="Delete Me"
                    >x</b-button>
                </td>
            </tr>

        </table>

        <hr v-if="getSkills.length">
        <h5 v-if="getSkills.length">
            <font-awesome-icon icon="wrench"></font-awesome-icon>
            Skills
        </h5>
        <b-row v-for="(skill, index) in getSkills"
               :key="index" class="hover"
               @mouseover="showByIndex = skill"
               @mouseout="showByIndex = null"
        >
            <b-col cols="4">
                <span class="text-capitalize">
                    {{ skill.name }}
                </span>
            </b-col>
            <b-col cols="8" class="pt-1">
                <b-button
                        v-show="showByIndex === skill"
                        class="close mr-2 ml-2 small"
                        aria-label="close" type="button"
                        @click="removeStateElm('skills', skill)"
                        v-b-tooltip.hover
                        title="Delete Me"
                >x</b-button>
                <b-progress
                        variant="dark"
                        :value="skill.level"
                        :max="100"
                        show-progress
                >
                </b-progress>
            </b-col>
        </b-row>

        <hr v-if="getLanguages.length">
        <h5 v-if="getLanguages.length">
            <font-awesome-icon icon="language"></font-awesome-icon>
            Languages
        </h5>
        <ul  class="list-unstyled">
            <li @mouseover="showByIndex = language" @mouseout="showByIndex = null" v-for="(language, index) in getLanguages" :key="index" class="text-capitalize hover pl-1 pr-1">
                <button
                        v-show="showByIndex === language"
                        class="close mr-2 ml-2 small" aria-label="close"
                        type="button"
                        @click="removeStateElm('languages', language)"
                        v-b-tooltip.hover
                        title="Delete Me"
                >x</button>
                {{ language.name }} <small>({{language.level}})</small>
            </li>
        </ul>
        <hr v-if="getInterests.length">
        <h5 v-if="getInterests.length">
            <font-awesome-icon icon="plus"></font-awesome-icon>
            Interests
        </h5>
        <ul class="list-unstyled">
            <li class="text-capitalize hover pl-1 pr-1" @mouseover="showByIndex = interest" @mouseout="showByIndex = null" v-for="(interest, index) in getInterests" :key="index">
                {{ interest }}
                <b-button
                        id="1"
                        v-show="showByIndex === interest"
                        class="close mr-2 ml-2 small"
                        aria-label="close" type="button"
                        @click="removeStateElm('interests', interest)"
                        v-b-tooltip.hover
                        title="Delete Me"
                >x
                </b-button>
            </li>
        </ul>
        <hr>
    </b-col>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        name: 'paperSide',
        data() {
            return {
                image: "",
                showByIndex: null,
            }
        },
        computed: {
            ...mapGetters([
                'getFullName',
                'getJob',
                'getPhone',
                'getEmail',
                'getLinks',
                'getSocialNetworks',
                'getSkills',
                'getLanguages',
                'getInterests',
            ]),

        },
        methods: {
            createImage(file) {
                let reader = new FileReader();
                reader.onload = (e) => this.image = e.target.result ;
                reader.readAsDataURL(file);
            },
            onFileChange(e) {
                let files = e.target.files || e.dataTransfer.files;
                if (!files.length) this.image ="";
                this.createImage(files[0]);
            },
            removeStateElm(state, elm ) {
                this.$store.commit('removeStateElm', {
                    field: state,
                    elm: elm
                });
            },
            removeStateById(state, id ) {
                this.$store.commit('removeStateElmByID', {
                    field: state,
                    id: id
                });
            },
        }
    }
</script>
<style>
    button[class*="b-avatar"] {
        padding: 0 !important;
    }
    #paper-side .hover:hover{
        background-color: #14798d;
        border-radius: 3px;
    }
    #img-avatar div {
        padding: 3px;
        position: absolute;
        right: 30px;
        top: 30px;
        border-radius: 5px;
    }

    #img-avatar div button{
        padding: 3px;
    }
</style>