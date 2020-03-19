<template>
    <b-row class="text-center">
        <app-sidebar></app-sidebar>
        <app-content></app-content>
    </b-row>
</template>

<script>
    import appSidebar from './SideBar'
    import appContent from './Content.vue'

    export default {
        name: 'appContainer',
        components: {
            appSidebar,
            appContent
        }
    }
</script>