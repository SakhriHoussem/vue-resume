<template>
        <b-col  md="9" cols="12" class="bg-light ">
                <b-row>
                        <b-col class="bg-white" cols="12"  lg="8" offset-lg="2">
                                <b-row>
                                        <paper-side></paper-side>
                                        <paper-content></paper-content>
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