<template>
<!--    <b-nav-item-dropdown text="Lang" right size="sm" v-model="$i18n.locale">-->
<!--        <b-dropdown-item v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</b-dropdown-item>-->
<!--    </b-nav-item-dropdown>-->

    <b-select class="bg-dark text-white border-dark" size="sm" v-model="$i18n.locale">
        <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
    </b-select>


</template>

<script>
    export default {
        name: 'locale-changer',
        data () {
            return { langs: ['en', 'fr'] }
        }
    }
</script>