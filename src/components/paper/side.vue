<template>
    <b-col cols="4">
        <div class="text-center">
            <b-img src="https://picsum.photos/1024/400/?image=41" fluid alt="Responsive image"></b-img>
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
                    {{getPhone}}
                </td>
            </tr>
            <tr>
                <td>
                    <font-awesome-icon icon="at" />
                </td>
                <td>
                    {{getEmail}}
                </td>
            </tr>
            <tr v-for="link in getLinks" :key="link">
                <td>
                    <font-awesome-icon icon="globe-africa" />
                </td>
                <td>
                    <b-link target="_blank" :href="link">{{ link }}</b-link>
                </td>
            </tr>
            <tr v-for="(social, index) in getSocialNetworks" :key="index">
                <td>
                    <font-awesome-icon :icon="['fab', social.icon]" />
                </td>
                <td>
                    <b-link target="_blank" :href="social.url">{{social.pseudo}}</b-link>
                </td>
            </tr>


        </table>

        <hr>
        <h5>Skills</h5>
        <b-row v-for="(skill, index) in getSkills" :key="index">
            <b-col cols="4">
                {{ skill.name }}
            </b-col>
            <b-col cols="8">
                <b-progress

                        :value="skill.level"
                        :max="100"
                        show-progress
                ></b-progress>
            </b-col>
        </b-row>

        <hr>
        <h5>Languages</h5>

        <b-row v-for="(language, index) in getLanguages" :key="index">
            <b-col cols="4">
                {{ language.name }}
            </b-col>
            <b-col cols="8">
                <b-progress

                        :value="language.level"
                        :max="100"
                        show-progress
                ></b-progress>
            </b-col>
        </b-row>

        <hr>
        <h5>Interests</h5>
        <p v-for="(interest, index) in getInterests" :key="index">
            {{ interest }}
        </p>

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