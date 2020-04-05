<template>
    <b-tab :title="$t('tabs.more')" id="more">
        <skill/>

        <language/>

        <interest/>
    </b-tab>
</template>
<script>
    import skill        from "./skill.vue";
    import language     from "./language.vue";
    import interest     from "./interest.vue";

        export default {
            name: 'more',
            components:{
                skill,
                language,
                interest,
            }
        }
</script>