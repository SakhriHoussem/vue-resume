<template>
    <b-container fluid>
        <b-row>
            <app-sidebar class="p-2"></app-sidebar>
            <b-col  md="8" cols="12" class="bg-light p-4">
                <b-row>
                    <b-col class="bg-white" cols="12"  lg="9" offset-lg="1">
                        <paper/>
                    </b-col>
                </b-row>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import appSidebar from './SideBar'
    import paper from './Paper.vue'

    export default {
        name: 'appContainer',
        components: {
            appSidebar,
            paper
        }
    }
</script>