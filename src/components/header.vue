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
            </b-navbar-nav>
        </b-collapse>

    </b-navbar>
</template>

<script>
    import localeChanger from './form/localeChanger'

    export default {
        name: 'appHeader',
        components: {localeChanger},
    }
</script>
