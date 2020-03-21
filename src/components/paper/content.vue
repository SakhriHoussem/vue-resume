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
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium delectus est laboriosam neque ratione? Beatae cumque, distinctio doloremque, fugit ipsam laboriosam nobis nostrum obcaecati optio porro quasi quibusdam quo totam.
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
                'getResume',
            ])
        }
    }
</script>