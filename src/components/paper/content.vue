<template>
    <b-col cols="8">
        <box
            :title="$t('titles.resume')"
            :item="getResume"
            icon="pencil-alt"
            state="resume"
        ></box>

        <box
            :title="$t('titles.experiences')"
            :items="getExperiences"
            icon="briefcase"
            state="experiences"
        ></box>

        <box
            :title="$t('titles.projects')"
            :items="getProjects"
            icon="box-open"
            state="projects"
            :tab-index=2
        ></box>

        <box
            :title="$t('titles.educations')"
            :items="getEducations"
            icon="university"
            state="educations"
            :tab-index=3
        ></box>

    </b-col>
</template>

<script>
    import  { mapGetters } from 'vuex'
    import box from './box'

    export default {
        name: 'paperContent',
        components: {
            box
        },
        computed: {
            ...mapGetters([
                'getResume', 'getExperiences', 'getProjects', 'getEducations'
            ]),
        },
    }
</script>