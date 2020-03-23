<template>
    <b-container fluid>
        <b-row>
            <app-sidebar class="p-2"></app-sidebar>
            <app-content></app-content>
        </b-row>
    </b-container>
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