<template>
    <b-container fluid>
        <b-row>
            <b-col order-md="2" md="8" cols="12" class="bg-light p-4">
                <b-row>
                    <b-col class="bg-white" cols="12" lg="10" offset-lg="1">
                        <paper/>
                    </b-col>
                </b-row>
            </b-col>
            <b-col cols="12" order-md="1" md="4">
                <app-sidebar class="p-2"></app-sidebar>
            </b-col>
        </b-row>
        <b-button
                @click="print"
                v-b-tooltip.hover
                :title="$t('toggles.print')"
                variant="dark"
                size="lg"
                id="print-me"
        >
            <font-awesome-icon icon="file-pdf" />
        </b-button>    </b-container>
</template>

<script>
    import appSidebar from './sideBar'
    import paper from './paper.vue'
    import jsPDF from 'jspdf'
    import html2canvas from 'html2canvas'

    export default {
        name: 'appContainer',
        components: {
            appSidebar,
            paper
        },
        methods: {
            print () {
                // change the default width of the paper
                document.getElementById('paper').setAttribute("style","width:1000px");

                const filename = this.$store.state.form.fullName + ' Resume.pdf';
                const a4Width  = 210.0015555555555;  // paper Standard Width
                const a4Height = 297.0000833333333; // paper Standard Height
                const divWidth = document.getElementById('paper').offsetWidth;

                // get paper color side
                const paperSide = document.getElementById('paper-side');

                // calculate the color side  height
                const paperSideHeight = (a4Height / a4Width) * divWidth;

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

<style>
    #print-me {
        position: fixed;
        bottom: 50px;
        right: 50px;
    }
</style>