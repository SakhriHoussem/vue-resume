<template>
    <b-col cols="12"  md="3">
        <b-form @submit="onSubmit" @reset="onReset">

            <full-name/>

            <job/>

            <b-row>
                <b-col>
                    <phone/>
                </b-col>

                <b-col>
                    <email/>
                </b-col>
            </b-row>

            <links/>

            <social/>

            <resume/>

            <b-tabs content-class="mt-3">

                <experience/>

                <project/>

                <education/>

                <skill/>

                <language/>

                <interest/>

            </b-tabs>

        </b-form>
    </b-col>
</template>

<script>
    import fullName     from "./form/fullName";
    import job          from "./form/job";
    import phone        from "./form/phone";
    import email        from "./form/email";
    import links        from "./form/links";
    import social       from "./form/social.vue";
    import resume       from "./form/resume.vue";
    import experience   from "./form/experience.vue";
    import project      from "./form/project.vue";
    import education    from "./form/education.vue";
    import skill        from "./form/skill.vue";
    import language     from "./form/language.vue";
    import interest     from "./form/interest.vue";
    import {mapState}   from "vuex";


    export default {
        name: 'appSidebar',
        components: {
            fullName,
            job,
            phone,
            email,
            links,
            social,
            resume,
            experience,
            project,
            education,
            skill,
            language,
            interest,
        },
        data() {
            return {
            }
        },
        computed: {
            ...mapState([
                'form', 'levels'
            ]),
        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault();
                alert(JSON.stringify(this.form))
            },
            onReset(evt) {
                evt.preventDefault();
                // Reset our form values
                // this.form.fullName = '';
                // Trick to reset/clear native browser form validation state
                this.show = false;
                this.$nextTick(() => {
                    this.show = true;
                })
            }
        }
    }
</script>