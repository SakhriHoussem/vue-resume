<template>
  <b-container fluid>
    <app-header/>
    <app-container/>
  </b-container>
</template>

<script>
import appHeader from './components/Header.vue'
import appContainer from './components/Container.vue'

export default {
  name: 'App',
  components: {
    appHeader,
    appContainer,

  }
}
</script>
