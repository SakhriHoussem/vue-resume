<template>
    <b-col cols="8">
        <div v-if="getResume">
            <h3 class="text-info">
                <font-awesome-icon icon="pencil-alt" />
                Resume
            </h3>
            <div class="box">
                <vue-markdown :source="getResume"></vue-markdown>
            </div>
        </div>
        <div v-if="getExperiences.length">
            <h3 class="text-info">
                <font-awesome-icon icon="briefcase" />
                Experiences
            </h3>
            <div
                    :data-identifier="experience.id"
                    class="box"
                    v-for="(experience, index) in getExperiences"
                    :key="index"
            >
                <h4 class="m-0 text-capitalize">
                    {{ experience.role }}
                    <small class="float-right text-muted mt-2 ">
                        {{ fromTo(experience.fromTo) }}
                    </small>
                </h4>
                <span class="text-muted text-capitalize"> {{ experience.company }}</span>
                <vue-markdown :source="experience.description"></vue-markdown>
                <b-badge variant="info" class="mr-2" v-for="tag in experience.tags" :key="tag">{{ tag }}</b-badge>
            </div>
        </div>

        <div v-if="getProjects.length">
            <h3 class="text-info">
                <font-awesome-icon icon="box-open"/>
                Projects
            </h3>
            <div
                    :data-identifier="project.id"
                    class="box"
                    v-for="(project, index) in getProjects"
                    :key="index">
                <h4 class="m-0 text-capitalize">
                    {{ project.name }}
                    <small class="float-right text-muted mt-2 ">
                        {{ fromTo(project.fromTo) }}
                    </small>
                </h4>
                <vue-markdown :source="project.description"></vue-markdown>
                <b-link class="text-muted small" target="_blank" :href="project.link">more info ...</b-link>
                <b-badge variant="info" class="mr-2" v-for="tag in project.tags" :key="tag">{{ tag }}</b-badge>
            </div>
        </div>
        <h3 class="text-info">
            <font-awesome-icon icon="university" />
            Educations
        </h3>
        <div
                class="box"
                v-for="(education, index) in getEducations"
                :key="index"
        >
            <h4 class="m-0 text-capitalize">
                {{ education.degree }}
                <small class="float-right text-muted mt-2 ">
                    {{ fromTo(education.fromTo) }}
                </small>
            </h4>
            <span class="text-muted text-capitalize">{{ education.school }}</span>
            <p class="m-0">{{ education.description }}</p>
            <b-badge variant="info" class="mr-2" v-for="tag in education.tags" :key="tag">{{ tag }}</b-badge>
        </div>
    </b-col>
</template>

<script>
    // todo: add delete btn
    // todo: add update btn
    import  { mapGetters } from 'vuex'
    import VueMarkdown from 'vue-markdown'

    export default {
        name: 'paperContent',
        components: {
            VueMarkdown
        },
        computed: {
            ...mapGetters([
                'getResume', 'getExperiences', 'getProjects', 'getEducations'
            ]),
        },
        methods: {
            fromTo( array ) {
                if (array [0] === array [1]) {
                    return array[0].split('-').join(' ') + " - " + 'Current'
                }
                return array[0].split('-').join(' ') + " - " + array[1].split('-').join(' ')
            },
        }
    }
</script>
<style scoped>
    .box{
        margin: 5px;
        background-color: rgba(0, 0, 0, 0.02);
        padding: 5px;
        border-radius: 5px;
    }
    .box small {
        font-size: .90rem;
    }
</style>