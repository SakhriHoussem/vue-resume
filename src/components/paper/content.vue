<template>
    <b-col cols="8">
        <h3>
            <font-awesome-icon icon="pencil-alt" />
            Resume
        </h3>
        <p>{{ getResume }}</p>
        <h3>
            <font-awesome-icon icon="briefcase" />
            Experiences
        </h3>
        <div v-for="(experience, index) in getExperiences" :key="index">
            <b-row>
                <b-col>{{ experience.role }}</b-col>
                <b-col>{{ experience.from }} - {{ experience.to }}</b-col>
            </b-row>
            <div> {{ experience.company }}</div>
            <p>{{ experience.description }}</p>
            <b-badge v-for="tag in experience.tags" :key="tag">{{ tag }}</b-badge>
        </div>
        <h3>
            <font-awesome-icon icon="box-open"/>
            Projects
        </h3>
        <div v-for="(project, index) in getProjects" :key="index">
            <b-row>
                <b-col>
                    <b-link target="_blank" :href="project.link">{{ project.name }}</b-link>
                </b-col>
                <b-col>{{ project.from }} - {{ project.to }}</b-col>
            </b-row>
            <p>{{ project.description }}</p>
            <b-badge v-for="tag in project.tags" :key="tag">{{ tag }}</b-badge>
        </div>
        <h3>
            <font-awesome-icon icon="university" />
            Educations
        </h3>
        <div v-for="(education, index) in getEducations" :key="index">
            <b-row>
                <b-col>
                    {{ education.degree }} - {{ education.school }}
                </b-col>
                <b-col>{{ education.from }} - {{ education.to }}</b-col>
            </b-row>
            <p>{{ education.description }}</p>
            <b-badge v-for="tag in education.tags" :key="tag">{{ tag }}</b-badge>
        </div>
    </b-col>
</template>

<script>
    import  { mapGetters } from 'vuex'
    export default {
        name: 'paperContent',
        computed: {
            ...mapGetters([
                'getResume', 'getExperiences', 'getProjects', 'getEducations'
            ])
        }
    }
</script>