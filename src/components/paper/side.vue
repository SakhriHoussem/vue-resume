<template>
    <b-col cols="4">
        <div class="text-center">
            <b-avatar size="6rem" variant="light"></b-avatar>
            <!-- todo: add modal to import profile picture -->
            <h3>  {{ getFullName }} </h3>
            <h4> {{ getJob }} </h4>
        </div>
        <hr>
        <table style="width:100%">
            <tr>
                <td>
                    <font-awesome-icon icon="phone" />
                </td>
                <td>
                    <b-link target="_blank" class="text-white" :href="'tel:' + getPhone">{{getPhone}}</b-link>
                </td>
            </tr>
            <tr>
                <td>
                    <font-awesome-icon icon="at" />
                </td>
                <td>
                    <b-link target="_blank" class="text-white" :href="'mailto:' + getEmail">{{getEmail}}</b-link>
                </td>
            </tr>
            <tr v-for="link in getLinks" :key="link">
                <td>
                    <font-awesome-icon icon="globe-africa" />
                </td>
                <td>
                    <b-link target="_blank" class="text-white" :href="link">{{ link }}</b-link>
                </td>
            </tr>
            <tr v-for="(social, index) in getSocialNetworks" :key="index">
                <td>
                    <font-awesome-icon :icon="['fab', social.icon]" />
                </td>
                <td>
                    <b-link target="_blank" class="text-white" :href="social.url">{{social.pseudo}}</b-link>
                </td>
            </tr>

        </table>

        <hr>
        <h5>
            <font-awesome-icon icon="wrench"></font-awesome-icon>
            Skills
        </h5>
        <b-row v-for="(skill, index) in getSkills" :key="index">
            <b-col cols="4">
                {{ skill.name }}
            </b-col>
            <b-col cols="8" class="pt-1">
                <b-progress
                        variant="dark"
                        :value="skill.level"
                        :max="100"
                        show-progress
                ></b-progress>
            </b-col>
        </b-row>

        <hr>
        <h5>
            <font-awesome-icon icon="language"></font-awesome-icon>
            Languages
        </h5>
        <b-row v-for="(language, index) in getLanguages" :key="index">
            <b-col cols="4">
                {{ language.name }}
            </b-col>
            <b-col cols="8" class="pt-1">
                <b-progress
                        variant="dark"
                        :value="language.level"
                        :max="100"
                        show-progress
                ></b-progress>
            </b-col>
        </b-row>
        <hr>
        <h5>
            <font-awesome-icon icon="plus"></font-awesome-icon>
            Interests
        </h5>
        <ul class="list-unstyled">
            <li class="ml-4 text-capitalize" v-for="(interest, index) in getInterests" :key="index">
                {{ interest }}
            </li>
        </ul>
    </b-col>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        name: 'paperSide',
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

        }
    }
</script>