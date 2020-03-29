<template>
    <b-col cols="4">
        <div class="text-center">
            <b-avatar  button @click="$refs.file.click()" size="10rem" variant="dark">
                <img v-if="image" :src="image" :alt="getFullName">
                <font-awesome-icon v-else  icon="camera-retro" />
            </b-avatar>

            <input type="file" ref="file" id="input-image" v-show="false" @change="onFileChange">

            <h3 class="text-capitalize">  {{ getFullName }} </h3>
            <h4 class="text-capitalize text-dark"> {{ getJob }} </h4>
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
                <span class="text-capitalize">
                    {{ skill.name }}
                </span>
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
        <div v-for="(language, index) in getLanguages" :key="index">
                <span class="text-capitalize">
                    {{ language.name }} <small>({{language.level}})</small>
                </span>
        </div>
        <hr>
        <h5>
            <font-awesome-icon icon="plus"></font-awesome-icon>
            Interests
        </h5>
        <ul class="list-unstyled">
            <li class="text-capitalize" v-for="(interest, index) in getInterests" :key="index">
                {{ interest }}
            </li>
        </ul>
    </b-col>
</template>

<script>
    import { mapGetters } from 'vuex'
    export default {
        name: 'paperSide',
        data() {
            return {
                image: ""
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
        }
    }
</script>
<style>
    button[class*="b-avatar"] {
        padding: 0 !important;
    }
</style>