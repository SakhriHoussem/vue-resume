<template>
    <b-col cols="12"  md="3">



        <b-tabs content-class="mt-3">
            <info/>

            <experience/>

            <project/>

            <education/>

            <more/>

        </b-tabs>

    </b-col>
</template>

<script>
    import info         from "./form/info.vue";
    import experience   from "./form/experience.vue";
    import project      from "./form/project.vue";
    import education    from "./form/education.vue";
    import more    from "./form/more.vue";


    export default {
        name: 'appSidebar',
        components: {
            experience,
            project,
            education,
            info,
            more,
        },
    }
</script>