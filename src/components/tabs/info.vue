<template>
    <b-tab :title="$t('tabs.infos')" id="info" active>
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
    </b-tab>
</template>
<script>
    import fullName     from "../form/fullName";
    import job          from "../form/job";
    import phone        from "../form/phone";
    import email        from "../form/email";
    import links        from "../form/links";
    import social       from "../form/social.vue";
    import resume       from "../form/resume.vue";

    export default {
        name: 'info',
        components: {
            fullName,
            job,
            phone,
            email,
            links,
            social,
            resume,
        }
    }
</script>