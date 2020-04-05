<template>
    <b-col id="paper-side" cols="4">
        <div class="text-center">
            <avatar/>

            <h3 class="text-capitalize">  {{ getFullName }} </h3>
            <h4 v-if="getJob" class="text-capitalize text-dark"> {{ getJob }} </h4>
            <h1 v-else class="text-capitalize text-dark"> CV </h1>
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
                            :title="$t('toggles.delete')"
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
                            :title="$t('toggles.delete')"
                    >x</b-button>
                </td>
            </tr>

        </table>

        <hr v-if="getSkills.length">
        <h5 v-if="getSkills.length">
            <font-awesome-icon icon="wrench"></font-awesome-icon>
            {{$t('titles.skills')}}
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
                        :title="$t('toggles.delete')"
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
            {{$t('titles.languages')}}
        </h5>
        <ul  class="list-unstyled">
            <li @mouseover="showByIndex = language" @mouseout="showByIndex = null" v-for="(language, index) in getLanguages" :key="index" class="text-capitalize hover pl-1 pr-1">
                <button
                        v-show="showByIndex === language"
                        class="close mr-2 ml-2 small" aria-label="close"
                        type="button"
                        @click="removeStateElm('languages', language)"
                        v-b-tooltip.hover
                        :title="$t('toggles.delete')"
                >x</button>
                {{ language.name }} <small>({{language.level}})</small>
            </li>
        </ul>
        <hr v-if="getInterests.length">
        <h5 v-if="getInterests.length">
            <font-awesome-icon icon="plus"></font-awesome-icon>
            {{$t('titles.interests')}}
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
                        :title="$t('toggles.delete')"
                >x
                </b-button>
            </li>
        </ul>
        <hr>
    </b-col>
</template>

<script>
    import { mapGetters } from 'vuex'
    import avatar from './avatar'
    export default {
        name: 'paperSide',
        components: {
            avatar
        },
        data() {
            return {
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
            removeStateElm(state, elm ) {
                this.$store.commit('removeStateElm', {
                    field: state,
                    elm: elm
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