<template>
    <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">Vue Resume</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav class="m-auto">
                <b-nav-form >
                    <gh-btns-watch
                            slug="SakhriHoussem/vue-resume"
                            show-count
                    />
                    <gh-btns-star
                            slug="SakhriHoussem/vue-resume"
                            show-count
                    />
                    <gh-btns-fork
                            slug="SakhriHoussem/vue-resume"
                            show-count
                    />
                    <gh-btns-follow
                            user="SakhriHoussem"
                            show-count
                    />
                </b-nav-form>
            </b-navbar-nav>

            <b-navbar-nav class="ml-auto">
                <b-nav-item >
                    <locale-changer/>
                </b-nav-item>
                <b-nav-item>
                <b-button
                            @click="print"
                            v-b-tooltip.hover
                            :title="$t('toggles.print')"
                            variant="dark"
                            size="sm"
                            block
                    >
                        <font-awesome-icon icon="file-pdf" />
                    </b-button>
                </b-nav-item>
            </b-navbar-nav>
        </b-collapse>

    </b-navbar>
</template>

<script>
    import jsPDF from 'jspdf'
    import html2canvas from 'html2canvas'
    import localeChanger from './form/localeChanger'

    export default {
        name: 'appHeader',
        components: {localeChanger},
        methods: {
            print () {
                const filename  = this.$store.state.form.fullName+' Resume.pdf';
                html2canvas(document.querySelector('#paper'), {
                    scale: 5,
                }).then(canvas => {
                    let pdf = new jsPDF('p', 'mm', 'a4');
                    pdf.addImage(canvas.toDataURL('image/jpeg'), 'JPEG', -2, 0, 211, 298);
                    pdf.save(filename);
                });
            },
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
