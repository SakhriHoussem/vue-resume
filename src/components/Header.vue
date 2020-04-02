<template>
    <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">Vue Resume</b-navbar-brand>
        <b-collapse id="nav-text-collapse" is-nav>
            <b-navbar-nav class="ml-auto">
                <b-nav-item
                            @click="print"
                            v-b-tooltip.hover
                            title="Print Me"
                    >
                        <font-awesome-icon icon="file-pdf" />
                </b-nav-item>
            </b-navbar-nav>
        </b-collapse>

    </b-navbar>
</template>

<script>
    import jsPDF from 'jspdf'
    import html2canvas from 'html2canvas'
    export default {
        name: 'appHeader',
        methods: {
            print () {
                const filename  = 'resume.pdf';
                html2canvas(document.querySelector('#paper')).then(canvas => {
                    let pdf = new jsPDF('p', 'mm', 'a4');
                    pdf.addImage(canvas.toDataURL('image/jpeg'), 'JPEG', -4, 0, 211, 298);
                    pdf.save(filename);
                });
            },
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
