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
            <font-awesome-icon icon="box-open" />
            Projects
        </h3>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium delectus est laboriosam neque ratione? Beatae cumque, distinctio doloremque, fugit ipsam laboriosam nobis nostrum obcaecati optio porro quasi quibusdam quo totam.
        <h3>
            <font-awesome-icon icon="university" />
            Educations
        </h3>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium delectus est laboriosam neque ratione? Beatae cumque, distinctio doloremque, fugit ipsam laboriosam nobis nostrum obcaecati optio porro quasi quibusdam quo totam.
    </b-col>
</template>

<script>
    import  { mapGetters } from 'vuex'
    export default {
        name: 'paperContent',
        computed: {
            ...mapGetters([
                'getResume', 'getExperiences'
            ])
        }
    }
</script>