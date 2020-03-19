<template>
    <b-col cols="3">
        <b-form @submit="onSubmit" @reset="onReset">

            <full-name :text="form.fullName"></full-name>

            <job :text="form.job"></job>

            <b-row>
                <b-col>
                    <phone :text="form.phone"></phone>
                </b-col>

                <b-col>
                    <email :text="form.email"></email>
                </b-col>
            </b-row>

            <links :text="form.links"></links>

            <social :text="form.sociaux" :options="options" :selected="form.selected"></social>

            <resume :text="form.resume"></resume>

            <b-tabs content-class="mt-3">

                <experience/>

                <project/>

                <education/>

                <skill :options="levels"/>

                <language :options="levels"/>

                <interest :array="form.intersts"/>

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
    import skill    from "./form/skill.vue";
    import language    from "./form/language.vue";
    import interest    from "./form/interest.vue";


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
                form: {
                    fullName: '',
                    job: '',
                    phone: '',
                    email: '',
                    links: [],
                    sociaux: "",
                    resume: '',
                    intersts: []
                },
                selected: null,
                options: [
                    { value: null, text: 'Please select an social media' },
                    { value: 'linkedin', text: 'linkedin' },
                    { value: 'fb', text: 'facebook' },
                    { value: 'instagram', text: 'instagram' },
                ],
                levels: [
                    { value: null, text: 'Please select the Level' },
                    { value: 'Beginner', text: 'Beginner' },
                    { value: 'Intermediate', text: 'Intermediate' },
                    { value: 'Expert', text: 'Expert' },
                ]
            }
        },
        methods: {
            onSubmit(evt) {
                evt.preventDefault();
                alert(JSON.stringify(this.form))
            },
            onReset(evt) {
                evt.preventDefault();
                // Reset our form values
                this.form.fullName = '';
                // Trick to reset/clear native browser form validation state
                this.show = false;
                this.$nextTick(() => {
                    this.show = true;
                })
            }
        }
    }
</script>