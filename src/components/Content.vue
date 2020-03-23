<template>
        <b-col  md="9" cols="12" class="bg-light p-4">
                <b-row>
                        <b-col class="bg-white" cols="12"  lg="8" offset-lg="2">
                                <b-row>
                                        <paper-side class="bg-info p-3 text-white"></paper-side>
                                        <paper-content class="pt-5 p-3"></paper-content>
                                </b-row>
                        </b-col>
                </b-row>
        </b-col>
</template>

<script>
        import paperSide from './paper/side'
        import paperContent from './paper/content'

        export default {
                name: 'appContent',
                components: {
                        paperSide,
                        paperContent
                }
        }
</script>