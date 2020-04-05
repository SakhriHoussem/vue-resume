<template>
  <div>
    <app-header/>
    <app-container/>
  </div>
</template>

<script>
import appHeader from './components/header.vue'
import appContainer from './components/container.vue'

export default {
  name: 'App',
  components: {
    appHeader,
    appContainer,
  }
}
</script>