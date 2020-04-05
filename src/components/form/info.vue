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
    import fullName     from "./fullName";
    import job          from "./job";
    import phone        from "./phone";
    import email        from "./email";
    import links        from "./links";
    import social       from "./social.vue";
    import resume       from "./resume.vue";

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