<template>
    <b-col id="paper-side" class="font-weight-bold" cols="4">
        <div class="text-center">
            <avatar :alt="getFullName" />

            <h3 class="text-capitalize">  {{ getFullName }} </h3>
            <h4 v-if="getJob" class="text-capitalize text-dark"> {{ getJob }} </h4>
            <h1 v-else class="text-capitalize text-dark"> CV </h1>
        </div>
        <hr>
        <custom-list :item="getPhone" icon="phone"></custom-list>
        <custom-list :item="getEmail" icon="at"></custom-list>
        <custom-list :items="getLinks" icon="globe-africa" state="links"></custom-list>
        <custom-list :items="getSocialNetworks" state="socialNetworks"></custom-list>
        <unstyled-list
                :items="getSkills"
                :title="$t('titles.skills')"
                icon="wrench"
                state="skills"
        ></unstyled-list>
        <unstyled-list
                :items="getLanguages"
                :title="$t('titles.languages')"
                icon="language"
                state="languages"
        ></unstyled-list>
        <unstyled-list
                :items="getInterests"
                :title="$t('titles.interests')"
                icon="plus"
                state="interests"
        ></unstyled-list>
        <hr>
    </b-col>
</template>

<script>
    import { mapGetters } from 'vuex'
    import avatar from './avatar'
    import unstyledList from '../lists/unstyledList'
    import customList from '../lists/customList'
    export default {
        name: 'paperSide',
        components: {
            avatar,
            unstyledList,
            customList,
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
    }
</script>