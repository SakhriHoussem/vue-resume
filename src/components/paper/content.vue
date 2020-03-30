<template>
    <b-col cols="8">
        <div v-if="getResume">
            <h3 class="text-info">
                <font-awesome-icon icon="pencil-alt" />
                Resume
            </h3>
            <div
                    class="box"
                    @mouseover="showByIndex = getResume"
                    @mouseout="showByIndex = null"
            >
                <b-button v-show="showByIndex === getResume"
                        class="close mr-2 ml-2 small"
                        aria-label="close" type="button"
                        @click="removeResume"
                        v-b-tooltip.hover
                        title="Delete Me"
                >x</b-button>
                <vue-markdown :source="getResume"></vue-markdown>
            </div>
        </div>
        <div v-if="getExperiences.length">
            <h3 class="text-info">
                <font-awesome-icon icon="briefcase" />
                Experiences
            </h3>
            <div
                    @mouseover="showByIndex = experience"
                    @mouseout="showByIndex = null"
                    :data-identifier="experience.id"
                    class="box"
                    v-for="(experience, index) in getExperiences"
                    :key="index"
            >
                <h4 class="m-0 text-capitalize">
                    {{ experience.role }}
                    <b-button
                            v-show="showByIndex === experience"
                            class="close mr-2 ml-2 small"
                            aria-label="close" type="button"
                            @click="removeStateElmByID('experiences', experience.id)"
                            v-b-tooltip.hover
                            title="Delete Me"
                    >x</b-button>
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
                    @mouseover="showByIndex = project"
                    @mouseout="showByIndex = null"
                    :data-identifier="project.id"
                    class="box"
                    v-for="(project, index) in getProjects"
                    :key="index">
                <h4 class="m-0 text-capitalize">
                    {{ project.name }}
                    <b-button
                            v-show="showByIndex === project"
                            class="close mr-2 ml-2 small"
                            aria-label="close"
                            type="button"
                            @click="removeStateElmByID('projects', project.id)"
                            v-b-tooltip.hover
                            title="Delete Me"
                    >x</b-button>
                    <small class="float-right text-muted mt-2 ">
                        {{ fromTo(project.fromTo) }}
                    </small>
                </h4>
                <b-link v-if="project.link" class="text-muted small" target="_blank" :href="project.link">more info ...</b-link>
                <vue-markdown :source="project.description"></vue-markdown>
                <b-badge variant="info" class="mr-2" v-for="tag in project.tags" :key="tag">{{ tag }}</b-badge>
            </div>
        </div>
        <div v-if="getEducations.length">
            <h3 class="text-info">
                <font-awesome-icon icon="university" />
                Educations
            </h3>
            <div
                    @mouseover="showByIndex = education"
                    @mouseout="showByIndex = null"
                    :data-identifier="education.id"
                    class="box"
                    v-for="(education, index) in getEducations"
                    :key="index"
            >
                <h4 class="m-0 text-capitalize">
                    {{ education.degree }}
                    <b-button
                            v-show="showByIndex === education"
                            class="close mr-2 ml-2 small"
                            aria-label="close"
                            type="button"
                            @click="removeStateElmByID('educations', education.id)"
                            v-b-tooltip.hover
                            title="Delete Me"
                    >x</b-button>
                    <small class="float-right text-muted mt-2 ">
                        {{ fromTo(education.fromTo) }}
                    </small>
                </h4>
                <span class="text-muted text-capitalize">{{ education.school }}</span>
                <vue-markdown :source="education.description"></vue-markdown>
                <b-badge variant="info" class="mr-2" v-for="tag in education.tags" :key="tag">{{ tag }}</b-badge>
            </div>
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
        data () {
            return {
                showByIndex: null
            }
        },
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
            removeStateElmByID(state, id ) {
                this.$store.commit('removeStateElmByID', {
                    field: state,
                    id: id
                });
            },
            removeStateElm(state, elm ) {
                this.$store.commit('removeStateElm', {
                    field: state,
                    elm: elm
                });
            },
            removeResume() {
                this.$store.commit('updateStateField', {field: 'resume', value: null})
            }
        }
    }
</script>
<style>
    .box{
        margin: 5px;
        background-color: rgba(0, 0, 0, 0.02);
        padding: 5px;
        border-radius: 5px;
    }
    .box small {
        font-size: .90rem;
    }
    .box p,.box ul{
        margin: 0;
    }
    .close {
        font-size: 1rem !important;
    }
</style>