<template>
    <b-tab :title="$t('tabs.more')" id="more">
        <skill/>

        <language/>

        <interest/>
    </b-tab>
</template>
<script>
    import skill        from "../form/skill.vue";
    import language     from "../form/language.vue";
    import interest     from "../form/interest.vue";

        export default {
            name: 'more',
            components:{
                skill,
                language,
                interest,
            }
        }
</script>