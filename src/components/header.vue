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
                // change the default width of the paper
                document.getElementById('paper').setAttribute("style","width:1000px");
                
                const filename = this.$store.state.form.fullName + ' Resume.pdf';
                const a4Width  = 210.0015555555555;  // paper Standard Width
                const a4Height = 297.0000833333333; // paper Standard Height
                const divWidth = document.getElementById('paper').offsetWidth;
                const paperSideHeight = (a4Height / a4Width) * divWidth;

                // get paper side
                const paperSide = document.getElementById('paper-side');


                // change the default height of the paper
                paperSide.setAttribute("style","min-height:" + paperSideHeight + "px");

                const paper = document.getElementById('paper');
                const divHeight = paper.offsetHeight;

                html2canvas(paper, {
                    height: divHeight,
                    width: divWidth,
                    scale: 5,
                    allowTaint: true,
                    useCORS: true,
                    logging:	false
                }).then(canvas => {
                    let pdf = new jsPDF('p', 'mm', 'a4');
                    const width = pdf.internal.pageSize.getWidth();
                    const height = (divHeight / divWidth) * width; // ratio
                    pdf.addImage(canvas.toDataURL('image/jpeg'), 'JPEG', -2, 0, width, height);

                    // pdf.addImage(canvas.toDataURL('image/jpeg'), 'JPEG', -2, 0, 211, pdf.internal.pageSize.getHeight());
                    pdf.save(filename);

                    // restore the default height and width
                    paperSide.removeAttribute("style");
                    document.getElementById('paper').removeAttribute("style");
                });
            },
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
