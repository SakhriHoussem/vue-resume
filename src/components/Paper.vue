<template>
        <b-row id="paper" ref="paper">
                <paper-side class="bg-info p-3 text-white"></paper-side>
                <paper-content class="pt-5 p-3"></paper-content>
        </b-row>
</template>

<script>
        import paperSide from './paper/side'
        import paperContent from './paper/content'

        export default {
                name: 'paper',
                components: {
                        paperSide,
                        paperContent
                }
        }
</script>